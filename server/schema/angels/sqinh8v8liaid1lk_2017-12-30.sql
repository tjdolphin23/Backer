# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: tk3mehkfmmrhjg0b.cbetxkdyhwsb.us-east-1.rds.amazonaws.com (MySQL 5.7.19-log)
# Database: sqinh8v8liaid1lk
# Generation Time: 2017-12-30 15:54:53 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table angels
# ------------------------------------------------------------

DROP TABLE IF EXISTS `angels`;

CREATE TABLE `angels` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `country` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `company_name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `amount_investing` int(11) DEFAULT NULL,
  `business_background` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `investing_experience` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `silent_investor` tinyint(1) DEFAULT NULL,
  `industry_interest` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `net_worth` int(11) DEFAULT NULL,
  `accredited_investor` tinyint(1) DEFAULT NULL,
  `qualities_of_company` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `other` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

LOCK TABLES `angels` WRITE;
/*!40000 ALTER TABLE `angels` DISABLE KEYS */;

INSERT INTO `angels` (`id`, `username`, `country`, `company_name`, `amount_investing`, `business_background`, `investing_experience`, `silent_investor`, `industry_interest`, `net_worth`, `accredited_investor`, `qualities_of_company`, `other`, `createdAt`, `updatedAt`)
VALUES
	(1,'tomdolphin','USA','Dolphin Inc',25000,'manufacturing, insurance','3 years',1,'manufacturing',100000,0,'solid foundation','n/a','2017-12-30 15:41:43','2017-12-30 15:41:43');

/*!40000 ALTER TABLE `angels` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
