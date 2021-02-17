-- phpMyAdmin SQL Dump
-- version 4.9.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Feb 17, 2021 at 08:35 PM
-- Server version: 5.7.26
-- PHP Version: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `music_app`
--

-- --------------------------------------------------------

--
-- Table structure for table `songs`
--

CREATE TABLE `songs` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `singer` varchar(255) NOT NULL,
  `img` text NOT NULL,
  `type` varchar(255) NOT NULL,
  `mp3` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `songs`
--

INSERT INTO `songs` (`id`, `name`, `singer`, `img`, `type`, `mp3`) VALUES
(1, 'Hello', 'Adele', 'adele.png', 'Pop', 'Adele.mp3'),
(2, 'de una vez', 'Selena gomez', 'selena.png', 'Pop', 'Selena.mp3'),
(3, 'Bayda', 'Navid', 'navid.png', 'Pop', 'Navid.mp3'),
(4, 'Takin\' Back My Love ', 'Enrique Iglesias', 'enrique.png', 'Pop', 'Enrique.mp3');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `songs`
--
ALTER TABLE `songs`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `songs`
--
ALTER TABLE `songs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
