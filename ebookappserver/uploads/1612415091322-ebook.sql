-- phpMyAdmin SQL Dump
-- version 4.6.6deb5ubuntu0.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jan 25, 2021 at 07:56 PM
-- Server version: 5.7.32-0ubuntu0.18.04.1
-- PHP Version: 7.2.24-0ubuntu0.18.04.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ebook`
--

-- --------------------------------------------------------

--
-- Table structure for table `about_us`
--

CREATE TABLE `about_us` (
  `id` int(11) NOT NULL,
  `about_us_text` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `about_us`
--

INSERT INTO `about_us` (`id`, `about_us_text`) VALUES
(1, 'We provide online service of library you can view all the ebooks online');

-- --------------------------------------------------------

--
-- Table structure for table `carousel_images`
--

CREATE TABLE `carousel_images` (
  `id` int(11) NOT NULL,
  `image_path` varchar(255) DEFAULT NULL,
  `image_name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `carousel_images`
--

INSERT INTO `carousel_images` (`id`, `image_path`, `image_name`) VALUES
(1, 'http://localhost/EbookSystem/ebookapp/public/assets/img/carousel1.jpeg', 'carousel1.jpeg'),
(2, 'http://localhost/EbookSystem/ebookapp/public/assets/img/carousel2.jpeg', 'carousel2.jpeg'),
(3, 'http://localhost/EbookSystem/ebookapp/public/assets/img/carousel4.jpeg', 'carousel4.jpeg');

-- --------------------------------------------------------

--
-- Table structure for table `ebook_files`
--

CREATE TABLE `ebook_files` (
  `id` int(11) NOT NULL,
  `ebook_file_name` varchar(255) DEFAULT NULL,
  `ebook_file_description` varchar(255) DEFAULT NULL,
  `ebook_file_image_path` varchar(255) DEFAULT NULL,
  `ebook_file_path` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ebook_files`
--

INSERT INTO `ebook_files` (`id`, `ebook_file_name`, `ebook_file_description`, `ebook_file_image_path`, `ebook_file_path`) VALUES
(5, 'Watching superman', 'This book contains information about science. it is writtern by teresa driscoll', 'http://localhost/EbookSystem/ebookappserver/uploads/book1.jpg', 'http://localhost/lms/server/uploads/1611301239092-True Tech Professional_Offer_Letter .pdf'),
(6, ' Harry Potter', 'This book contains information about harry potter wizard. it is writtern by jk rowlling', 'http://localhost/EbookSystem/ebookappserver/uploads/book2.jpg', 'http://localhost/lms/server/uploads/1611301239092-True Tech Professional_Offer_Letter .pdf'),
(7, ' Mocking Bird', 'This book contains information about birders. it is writtern by harper lee', 'http://localhost/EbookSystem/ebookappserver/uploads/book3.jpg', 'http://localhost/lms/server/uploads/1611301239092-True Tech Professional_Offer_Letter .pdf'),
(8, ' James Patterson', 'This book contains information about james patterson. it is writtern by james', 'http://localhost/EbookSystem/ebookappserver/uploads/book4.jpg', 'http://localhost/lms/server/uploads/1611301239092-True Tech Professional_Offer_Letter .pdf');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `password`) VALUES
(1, 'kamal123', 'f0b24911725a92cc8a7e0e643f7acfef');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `about_us`
--
ALTER TABLE `about_us`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `carousel_images`
--
ALTER TABLE `carousel_images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ebook_files`
--
ALTER TABLE `ebook_files`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `about_us`
--
ALTER TABLE `about_us`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `carousel_images`
--
ALTER TABLE `carousel_images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `ebook_files`
--
ALTER TABLE `ebook_files`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
