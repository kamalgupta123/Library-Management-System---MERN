-- phpMyAdmin SQL Dump
-- version 4.6.6deb5ubuntu0.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jan 14, 2021 at 07:25 PM
-- Server version: 5.7.32-0ubuntu0.18.04.1
-- PHP Version: 7.2.24-0ubuntu0.18.04.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `invi`
--

-- --------------------------------------------------------

--
-- Table structure for table `template_selected`
--

CREATE TABLE `template_selected` (
  `id` int(11) NOT NULL,
  `selected_template_preview_id` varchar(255) DEFAULT NULL,
  `template_path` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `template_selected`
--

INSERT INTO `template_selected` (`id`, `selected_template_preview_id`, `template_path`) VALUES
(3, '3', 'http://localhost/invi/assets/templates/Invoice03.dot');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `template_selected`
--
ALTER TABLE `template_selected`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `template_selected`
--
ALTER TABLE `template_selected`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
