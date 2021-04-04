-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 04, 2021 at 12:23 AM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `finaldaw`
--
CREATE DATABASE IF NOT EXISTS `finaldaw` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `finaldaw`;

-- --------------------------------------------------------

--
-- Table structure for table `aqueous_standard_solution`
--

DROP TABLE IF EXISTS `aqueous_standard_solution`;
CREATE TABLE `aqueous_standard_solution` (
  `id` bigint(20) NOT NULL,
  `concentration` int(11) NOT NULL,
  `entry_date` date DEFAULT NULL,
  `internal_reference` varchar(255) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `location_id` bigint(20) DEFAULT NULL,
  `expiry_date` date DEFAULT NULL,
  `molecular_weight` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `commentary`
--

DROP TABLE IF EXISTS `commentary`;
CREATE TABLE `commentary` (
  `id` bigint(20) NOT NULL,
  `commentary` varchar(255) NOT NULL,
  `creation_date` datetime NOT NULL,
  `updated_date` datetime DEFAULT NULL,
  `reagent_id` bigint(20) NOT NULL,
  `user_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `element`
--

DROP TABLE IF EXISTS `element`;
CREATE TABLE `element` (
  `atomic_number` int(11) NOT NULL,
  `electronegativity` float NOT NULL,
  `element` varchar(255) NOT NULL,
  `english_name` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `period` int(11) NOT NULL,
  `table_group` int(11) NOT NULL,
  `mass` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `elements_reagents`
--

DROP TABLE IF EXISTS `elements_reagents`;
CREATE TABLE `elements_reagents` (
  `element_id` int(11) NOT NULL,
  `reagent_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `element_standard_sol`
--

DROP TABLE IF EXISTS `element_standard_sol`;
CREATE TABLE `element_standard_sol` (
  `element_id` int(11) NOT NULL,
  `standard_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `hibernate_sequence`
--

DROP TABLE IF EXISTS `hibernate_sequence`;
CREATE TABLE `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `location`
--

DROP TABLE IF EXISTS `location`;
CREATE TABLE `location` (
  `id` bigint(20) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `organic_standard_solution`
--

DROP TABLE IF EXISTS `organic_standard_solution`;
CREATE TABLE `organic_standard_solution` (
  `id` bigint(20) NOT NULL,
  `concentration` int(11) NOT NULL,
  `entry_date` date DEFAULT NULL,
  `internal_reference` varchar(255) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `location_id` bigint(20) DEFAULT NULL,
  `medium` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `reagent`
--

DROP TABLE IF EXISTS `reagent`;
CREATE TABLE `reagent` (
  `reagent_type` varchar(31) NOT NULL,
  `id` bigint(20) NOT NULL,
  `cas` varchar(255) DEFAULT NULL,
  `english_name` varchar(255) DEFAULT NULL,
  `entry_date` date DEFAULT current_timestamp(),
  `formula` varchar(255) DEFAULT NULL,
  `internal_reference` varchar(255) NOT NULL,
  `molecular_weight` float NOT NULL,
  `quantity` int(11) NOT NULL DEFAULT 1,
  `spanish_name` varchar(255) NOT NULL,
  `supplier_code` varchar(255) DEFAULT NULL,
  `user_buyer` tinyblob DEFAULT NULL,
  `utilization` varchar(255) DEFAULT NULL,
  `image` longblob DEFAULT NULL,
  `secondary_int_reference` varchar(255) DEFAULT NULL,
  `location_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `reagent_supplier`
--

DROP TABLE IF EXISTS `reagent_supplier`;
CREATE TABLE `reagent_supplier` (
  `supplier_id` bigint(20) NOT NULL,
  `reagent_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
CREATE TABLE `role` (
  `id` bigint(20) NOT NULL,
  `description` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `role_user`
--

DROP TABLE IF EXISTS `role_user`;
CREATE TABLE `role_user` (
  `user_id` bigint(20) NOT NULL,
  `role_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `seller`
--

DROP TABLE IF EXISTS `seller`;
CREATE TABLE `seller` (
  `id` bigint(20) NOT NULL,
  `name` varchar(255) NOT NULL,
  `view_order` bigint(20) NOT NULL,
  `web_url` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `spring_session`
--

DROP TABLE IF EXISTS `spring_session`;
CREATE TABLE `spring_session` (
  `PRIMARY_ID` char(36) NOT NULL,
  `SESSION_ID` char(36) NOT NULL,
  `CREATION_TIME` bigint(20) NOT NULL,
  `LAST_ACCESS_TIME` bigint(20) NOT NULL,
  `MAX_INACTIVE_INTERVAL` int(11) NOT NULL,
  `EXPIRY_TIME` bigint(20) NOT NULL,
  `PRINCIPAL_NAME` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;

-- --------------------------------------------------------

--
-- Table structure for table `spring_session_attributes`
--

DROP TABLE IF EXISTS `spring_session_attributes`;
CREATE TABLE `spring_session_attributes` (
  `SESSION_PRIMARY_ID` char(36) NOT NULL,
  `ATTRIBUTE_NAME` varchar(200) NOT NULL,
  `ATTRIBUTE_BYTES` blob NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;

-- --------------------------------------------------------

--
-- Table structure for table `standard_sol_supplier`
--

DROP TABLE IF EXISTS `standard_sol_supplier`;
CREATE TABLE `standard_sol_supplier` (
  `supplier_id` bigint(20) NOT NULL,
  `standard_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `supplier`
--

DROP TABLE IF EXISTS `supplier`;
CREATE TABLE `supplier` (
  `id` bigint(20) NOT NULL,
  `name` varchar(255) NOT NULL,
  `seller_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` bigint(20) NOT NULL,
  `creation_date` datetime DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `pass` varchar(255) NOT NULL,
  `surname` varchar(255) DEFAULT NULL,
  `username` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `aqueous_standard_solution`
--
ALTER TABLE `aqueous_standard_solution`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_9of1lx9yf3bawiiom1o1r782a` (`location_id`);

--
-- Indexes for table `commentary`
--
ALTER TABLE `commentary`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKcfwbqjgjqww04va3nwyhcsbi2` (`reagent_id`),
  ADD KEY `FKmt8mfvt56l7jnhuhadgau7fpx` (`user_id`);

--
-- Indexes for table `element`
--
ALTER TABLE `element`
  ADD PRIMARY KEY (`atomic_number`);

--
-- Indexes for table `elements_reagents`
--
ALTER TABLE `elements_reagents`
  ADD KEY `FK15584iafc96djrbq6y1gq43q7` (`reagent_id`),
  ADD KEY `FK4964lst3arhl3i6jjrb16es7d` (`element_id`);

--
-- Indexes for table `element_standard_sol`
--
ALTER TABLE `element_standard_sol`
  ADD KEY `FKh7o6chshfmygc7ya3s8pdp1ie` (`element_id`);

--
-- Indexes for table `location`
--
ALTER TABLE `location`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UK_sahixf1v7f7xns19cbg12d946` (`name`);

--
-- Indexes for table `organic_standard_solution`
--
ALTER TABLE `organic_standard_solution`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_l4l6qaqj3wx9r43r9f0uijemc` (`location_id`);

--
-- Indexes for table `reagent`
--
ALTER TABLE `reagent`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UK_4c46sfpvdmp0jqikjfhgph28t` (`internal_reference`),
  ADD UNIQUE KEY `UK_25yukixnsensynd10e4o2h10y` (`spanish_name`),
  ADD KEY `FKijc96lgguowve25atcb69f6up` (`location_id`);

--
-- Indexes for table `reagent_supplier`
--
ALTER TABLE `reagent_supplier`
  ADD KEY `FKtayyhwhx5qbq1j3rfiheih1hi` (`reagent_id`),
  ADD KEY `FKtbnxsvff9tj6v9trhbyq8lyay` (`supplier_id`);

--
-- Indexes for table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UK_2tysw6t5feqb631yj4kdk99i5` (`description`);

--
-- Indexes for table `role_user`
--
ALTER TABLE `role_user`
  ADD KEY `FKiqpmjd2qb4rdkej916ymonic6` (`role_id`),
  ADD KEY `FK4320p8bgvumlxjkohtbj214qi` (`user_id`);

--
-- Indexes for table `seller`
--
ALTER TABLE `seller`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UK_srk6ay5q4jt1ugbhk8l5pjikd` (`name`),
  ADD UNIQUE KEY `UK_70gw1ky97swcgfameg8aclipx` (`view_order`);

--
-- Indexes for table `spring_session`
--
ALTER TABLE `spring_session`
  ADD PRIMARY KEY (`PRIMARY_ID`),
  ADD UNIQUE KEY `SPRING_SESSION_IX1` (`SESSION_ID`),
  ADD KEY `SPRING_SESSION_IX2` (`EXPIRY_TIME`),
  ADD KEY `SPRING_SESSION_IX3` (`PRINCIPAL_NAME`);

--
-- Indexes for table `spring_session_attributes`
--
ALTER TABLE `spring_session_attributes`
  ADD PRIMARY KEY (`SESSION_PRIMARY_ID`,`ATTRIBUTE_NAME`);

--
-- Indexes for table `standard_sol_supplier`
--
ALTER TABLE `standard_sol_supplier`
  ADD KEY `FKl0ykpayqtfogvk2bi7ea3gn8u` (`supplier_id`);

--
-- Indexes for table `supplier`
--
ALTER TABLE `supplier`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UK_c3fclhmodftxk4d0judiafwi3` (`name`),
  ADD KEY `FKxl1s8dtvlkpin14xkr4yhvj2` (`seller_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UK_sb8bbouer5wak8vyiiy4pf2bx` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `commentary`
--
ALTER TABLE `commentary`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `element`
--
ALTER TABLE `element`
  MODIFY `atomic_number` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `location`
--
ALTER TABLE `location`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `reagent`
--
ALTER TABLE `reagent`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `role`
--
ALTER TABLE `role`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `seller`
--
ALTER TABLE `seller`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `supplier`
--
ALTER TABLE `supplier`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `aqueous_standard_solution`
--
ALTER TABLE `aqueous_standard_solution`
  ADD CONSTRAINT `FK_9of1lx9yf3bawiiom1o1r782a` FOREIGN KEY (`location_id`) REFERENCES `location` (`id`);

--
-- Constraints for table `commentary`
--
ALTER TABLE `commentary`
  ADD CONSTRAINT `FKcfwbqjgjqww04va3nwyhcsbi2` FOREIGN KEY (`reagent_id`) REFERENCES `reagent` (`id`),
  ADD CONSTRAINT `FKmt8mfvt56l7jnhuhadgau7fpx` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

--
-- Constraints for table `elements_reagents`
--
ALTER TABLE `elements_reagents`
  ADD CONSTRAINT `FK15584iafc96djrbq6y1gq43q7` FOREIGN KEY (`reagent_id`) REFERENCES `reagent` (`id`),
  ADD CONSTRAINT `FK4964lst3arhl3i6jjrb16es7d` FOREIGN KEY (`element_id`) REFERENCES `element` (`atomic_number`);

--
-- Constraints for table `element_standard_sol`
--
ALTER TABLE `element_standard_sol`
  ADD CONSTRAINT `FKh7o6chshfmygc7ya3s8pdp1ie` FOREIGN KEY (`element_id`) REFERENCES `element` (`atomic_number`);

--
-- Constraints for table `organic_standard_solution`
--
ALTER TABLE `organic_standard_solution`
  ADD CONSTRAINT `FK_l4l6qaqj3wx9r43r9f0uijemc` FOREIGN KEY (`location_id`) REFERENCES `location` (`id`);

--
-- Constraints for table `reagent`
--
ALTER TABLE `reagent`
  ADD CONSTRAINT `FKijc96lgguowve25atcb69f6up` FOREIGN KEY (`location_id`) REFERENCES `location` (`id`);

--
-- Constraints for table `reagent_supplier`
--
ALTER TABLE `reagent_supplier`
  ADD CONSTRAINT `FKtayyhwhx5qbq1j3rfiheih1hi` FOREIGN KEY (`reagent_id`) REFERENCES `reagent` (`id`),
  ADD CONSTRAINT `FKtbnxsvff9tj6v9trhbyq8lyay` FOREIGN KEY (`supplier_id`) REFERENCES `supplier` (`id`);

--
-- Constraints for table `role_user`
--
ALTER TABLE `role_user`
  ADD CONSTRAINT `FK4320p8bgvumlxjkohtbj214qi` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `FKiqpmjd2qb4rdkej916ymonic6` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`);

--
-- Constraints for table `spring_session_attributes`
--
ALTER TABLE `spring_session_attributes`
  ADD CONSTRAINT `SPRING_SESSION_ATTRIBUTES_FK` FOREIGN KEY (`SESSION_PRIMARY_ID`) REFERENCES `spring_session` (`PRIMARY_ID`) ON DELETE CASCADE;

--
-- Constraints for table `standard_sol_supplier`
--
ALTER TABLE `standard_sol_supplier`
  ADD CONSTRAINT `FKl0ykpayqtfogvk2bi7ea3gn8u` FOREIGN KEY (`supplier_id`) REFERENCES `supplier` (`id`);

--
-- Constraints for table `supplier`
--
ALTER TABLE `supplier`
  ADD CONSTRAINT `FKxl1s8dtvlkpin14xkr4yhvj2` FOREIGN KEY (`seller_id`) REFERENCES `seller` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
