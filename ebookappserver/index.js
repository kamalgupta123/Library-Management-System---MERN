const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const app = express();
const mysql = require("mysql");
const multer  = require('multer');
const md5 = require('md5');
const mongoose = require("mongoose");
const ebookFileModel = require("./models/Ebook_files");
const carouselImagesModel = require("./models/Carousel_images");
const userModel = require("./models/User");
const adminModel = require("./models/Admin_user");
const pageModel = require("./models/Pages");
const categoryModel = require("./models/Cateogary");
const viewModel = require("./models/View_counts");
const recentSearchModel = require("./models/Recent_searched_books");
mongoose.connect('mongodb+srv://root:k@m@l1997@samba.fi56m.mongodb.net/ebook?retryWrites=true&w=majority',{
  useNewUrlParser:true,
})

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' +file.originalname )
  }
})

var upload = multer({ storage: storage }).any();

app.use(cors());
app.use(express.json());
// app.use(express.urlencoded());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/submit', async (req, res) => {
  upload(req, res,async function (err) {
    console.log(req.body);
    const user = new userModel(
      {
        password: req.body.password,
        department: req.body.department,
        email: req.body.email,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        major: req.body.major,
        number: req.body.number,
        school: req.body.school,
        study_level: req.body.studylevel
      }
    );
  
    try {
      await user.save();
      // console.log(user);
    } catch (err) {
      res.status(500).send(err);
    }
  
    return res.status(200).send(req.body);
  });
});


app.get('/ebooks', async (req, res) => {
  const ebooks = await ebookFileModel.find({});
  try {
    res.send(ebooks);
    console.log(ebooks);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get('/users/:id', async (req, res) => {
  const id = req.params.id;
  const ebooks = await userModel.find({email:id});
  try {
    res.send(ebooks);
    console.log(ebooks);
  } catch (err) {
    res.status(500).send(err);
  }
});

// cateorie by name search
app.get('/get_categorie_id/:name', async (req, res) => {
  const name = req.params.name;
  console.log(name);
  const category_id = await categoryModel.find({CateogaryName:{ $regex:'.*'+name+'.*'}});
  try {
    res.send(category_id);
    console.log(category_id);
  } catch (err) {
    res.status(500).send(err);
  }
});
//

app.get('/recentebooks', async (req, res) => {
  const views = await viewModel.find({}).select('id').sort({count: 'desc'}).limit(2);
  // console.log(views[0].id);
  let recentCountArray = [];
  views.forEach(function(v) {
    recentCountArray.push(v.id);
  });
  const ebooks = await ebookFileModel.find({id : { $in: recentCountArray }});
  try {
    res.send(ebooks);
    console.log(ebooks);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get('/pages', async (req, res) => {
  const pages = await pageModel.find({});
  try {
    res.send(pages);
    console.log(pages);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get('/carouselimages', async (req, res) => {
  const carousel_images = await carouselImagesModel.find({});

  try {
    res.send(carousel_images);
    console.log(carousel_images);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get("/ebookedit/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    console.log(typeof parseInt(id));
    const ebook = await ebookFileModel.find({"id":id});
    try {
      res.send(ebook);
      console.log(ebook);
    } catch (err) {
      res.status(500).send(err);
    }
});

app.get("/pageedit/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    console.log(typeof parseInt(id));
    const page = await pageModel.find({"id":id});
    try {
      res.send(page);
      console.log(page);
    } catch (err) {
      res.status(500).send(err);
    }
});

app.post('/updateebook', async (req, res) => {
  upload(req, res,async function (err) {
    if (err instanceof multer.MulterError) {
        return res.status(500).json(err)
    } else if (err) {
        return res.status(500).json(err)
  }
  try {
    await ebookFileModel.update({ id: parseInt(req.body.id) },
    {
      $set: {
        ebookFileName: req.body.ebookname,
        ebookFileDescription: req.body.ebookdesc,
        ebookFileImagePath: 'http://localhost/EbookSystem/ebookappserver/uploads/'+req.files[0].filename,
        ebookFilePath:'http://localhost/EbookSystem/ebookappserver/uploads/'+req.files[1].filename
      }
    });
    await ebookFileModel.save()
    res.status(200).send(req.files)
  } catch (err) {
    res.status(500).send(err)
  }
  });
});

app.post('/updatepage', async (req, res) => {
  upload(req, res,async function (err) {
    if (err instanceof multer.MulterError) {
        return res.status(500).json(err)
    } else if (err) {
        return res.status(500).json(err)
  }
  try {
    await pageModel.update({ id: parseInt(req.body.id) },
    {
      $set: {
        name: req.body.name,
        description: req.body.description,
        banner: 'http://localhost/EbookSystem/ebookappserver/uploads/'+req.files[0].filename
      }
    });
    await pageModel.save()
    res.status(200).send(req.files)
  } catch (err) {
    res.status(500).send(err)
  }
  });
});

app.post('/submitebook', async function(req, res) {
    const eb = await ebookFileModel.findOne().sort({ _id: -1 }).limit(1);
    upload(req, res, async function (err) {
           if (err instanceof multer.MulterError) {
               return res.status(500).json(err)
           } else if (err) {
               return res.status(500).json(err)
           }

           const ebook = new ebookFileModel(
            {
            id:eb.id+1,
            catName : req.body.catname,
            ebookFileName: req.body.ebookname,
            ebookFileDescription: req.body.ebookdesc,
            ebookFileImagePath: 'http://localhost/EbookSystem/ebookappserver/uploads/'+req.files[0].filename,
            ebookFilePath:'http://localhost/EbookSystem/ebookappserver/uploads/'+req.files[1].filename
            }
          );

          try {
            await ebook.save();
          } catch (err) {
            res.status(500).send(err);
          }
          return res.status(200).send(req.files);
    });
});

// new Thing
app.post('/addPage', async function(req, res) {
    const p = await pageModel.findOne().sort({ _id: -1 }).limit(1);
    upload(req, res, async function (err) {
            if (err instanceof multer.MulterError) {
                return res.status(500).json(err)
            } else if (err) {
                return res.status(500).json(err)
            }

            const page = new pageModel(
            {
              id:p.id+1,
              name: req.body.pagename,
              description: req.body.pagedesc,
              banner: 'http://localhost/EbookSystem/ebookappserver/uploads/'+req.files[0].filename
            }
          );

          try {
            await page.save();
          } catch (err) {
            res.status(500).send(err);
          }
          return res.status(200).send(req.files);
    });
});

//View count
app.post('/updateViewCount/:id', async function(req, res) {
  const id = parseInt(req.params.id);
  const p = await viewModel.find({ id: id }).limit(1);
  // console.log(p);
  let count = '';
  upload(req, res, async function (err) {
          if (err instanceof multer.MulterError) {
              return res.status(500).json(err)
          } else if (err) {
              return res.status(500).json(err)
          }
          // console.log(typeof(p[0].count));
          if(p!=null && p!=undefined && p!=''){
            await viewModel.update({ id: id },
            {
              $set: {
                count:parseInt(p[0].count)+1
              }
            });
            try {
              await viewModel.save()
              return res.status(200).send(req.body);
            } catch (err) {
              res.status(500).send(err)
            }
          }
          else{
              count = new viewModel(
              {
                id:id,
                count:1
              });
              try {
                await count.save();
                return res.status(200).send(req.body);
              } catch (err) {
                res.status(500).send(err);
              }
          }
  });
});
//View count

// CATEOGARY
app.post('/addCategory', async function(req, res) {
    const p = await categoryModel.findOne().sort({ _id: -1 }).limit(1);
    upload(req, res, async function (err) {
            if (err instanceof multer.MulterError) {
                return res.status(500).json(err)
            } else if (err) {
                return res.status(500).json(err)
            }
            const category = new categoryModel(
            {
              CateogaryId:p.CateogaryId
              +1,
              CateogaryName: req.body.categoryname,
              CateogaryImage: 'http://localhost/EbookSystem/ebookappserver/uploads/'+req.files[0].filename
            }
          );

          try {
            await category.save();
          } catch (err) {
            res.status(500).send(err);
          }
          return res.status(200).send(req.files);
    });
});

app.get('/categories', async (req, res) => {
  const categories = await categoryModel.find({});
  try {
    res.send(categories);
    console.log(categories);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get("/categoryedit/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  console.log(typeof parseInt(id));
  const category = await categoryModel.find({"CateogaryId":id});
  try {
    res.send(category);
    console.log(category);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post('/updatecategory', async (req, res) => {
  upload(req, res,async function (err) {
    if (err instanceof multer.MulterError) {
        return res.status(500).json(err)
    } else if (err) {
        return res.status(500).json(err)
  }
  try {
    await categoryModel.update({ CateogaryId: parseInt(req.body.id) },
    {
      $set: {
        CateogaryName: req.body.categoryname,
        CateogaryImage: 'http://localhost/EbookSystem/ebookappserver/uploads/'+req.files[0].filename
      }
    });
    await categoryModel.save()
    res.status(200).send(req.files)
  } catch (err) {
    res.status(500).send(err)
  }
  });
});

app.delete("/deleteCategory/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id);
  try {
    const category = await categoryModel.deleteOne({CateogaryId
      :id});
    if (!category) res.status(404).send("No item found")
    res.status(200).send()
  } catch (err) {
    res.status(500).send(err)
  }
});

//End category

app.get('/ebooks', async (req, res) => {
  const ebooks = await ebookFileModel.find({});
  try {
    res.send(ebooks);
    console.log(ebooks);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id);
  try {
    const ebook = await ebookFileModel.deleteOne({id:id});
    if (!ebook) res.status(404).send("No item found")
    res.status(200).send()
  } catch (err) {
    res.status(500).send(err)
  }
});

app.delete("/deletePage/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id);
  try {
    const page = await pageModel.deleteOne({id:id});
    if (!page) res.status(404).send("No item found")
    res.status(200).send()
  } catch (err) {
    res.status(500).send(err)
  }
});

app.get('/', (req, res) => {
    res.status(200).send('Hello world');
});

app.use('/login',async (req, res) => {
  const currentUser = await adminModel.find();
  try {
    if(currentUser[0].password==md5(req.body.password)){
      res.send({
        token: 'test123'
      });
    }
    console.log(currentUser);
  } catch (err) {
    res.status(500).send(err);
    console.log(err);
  }
});

// recent search

app.get('/recent_search', async (req, res) => {
  const ebooks = await recentSearchModel.find({}).sort({_id: 'desc'}).limit(2);
  try {
    res.send(ebooks);
    console.log(ebooks);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.use('/addRecentSearch',async (req, res) => {
  const ebook = new recentSearchModel(
  {
    catName : req.body.recentCatName,
    ebookFileName: req.body.recentName,
    ebookFileDescription: req.body.recentDesc,
    ebookFileImagePath: req.body.recentimgPath,
    ebookFilePath: req.body.recentFile
  });
  try {
    await ebook.save();
    return res.status(200).send(req.files);
  } catch (err) {
    res.status(500).send(err);
    console.log(err);
  }
});

app.use('/UserLogin',async (req, res) => {
  const currentUser = await userModel.find({email:req.body.userID});
  try {
    if(currentUser[0].password==req.body.password){
      res.send({
        token: currentUser[0].firstname
      });
    }
    console.log(currentUser);
  } catch (err) {
    res.status(500).send(err);
    console.log(err);
  }
});

app.listen(3001,()=>{
    console.log('port 3001');
});