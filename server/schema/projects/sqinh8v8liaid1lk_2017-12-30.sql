# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: tk3mehkfmmrhjg0b.cbetxkdyhwsb.us-east-1.rds.amazonaws.com (MySQL 5.7.19-log)
# Database: sqinh8v8liaid1lk
# Generation Time: 2017-12-30 15:56:23 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table projects
# ------------------------------------------------------------

DROP TABLE IF EXISTS `projects`;

CREATE TABLE `projects` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `country` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `company_name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `investment_needed` int(11) DEFAULT NULL,
  `percent_giving` int(11) DEFAULT NULL,
  `product` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `product_summary` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `problem_solution` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `industry` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `competition` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `market_size` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `market_trends` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `differentiators` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `gross_sales` int(11) DEFAULT NULL,
  `gross_costs` int(11) DEFAULT NULL,
  `net_profits` int(11) DEFAULT NULL,
  `other_investors` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `number_of_employees` int(11) DEFAULT NULL,
  `target_market` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `sale_price` int(11) DEFAULT NULL,
  `cost_price` int(11) DEFAULT NULL,
  `features` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `product_patent` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

LOCK TABLES `projects` WRITE;
/*!40000 ALTER TABLE `projects` DISABLE KEYS */;

INSERT INTO `projects` (`id`, `username`, `country`, `company_name`, `investment_needed`, `percent_giving`, `product`, `product_summary`, `problem_solution`, `industry`, `competition`, `market_size`, `market_trends`, `differentiators`, `gross_sales`, `gross_costs`, `net_profits`, `other_investors`, `number_of_employees`, `target_market`, `sale_price`, `cost_price`, `features`, `product_patent`, `createdAt`, `updatedAt`)
VALUES
	(1,'powpowpow','USA','The FackBack',50000,10,'The FaceBack','Allows to identify people from back of their head','can\'t tell who people are, id people','tech','facebook','1,000,000','unique product','no other product like this',35000,15000,15000,'none',0,'younger people',10,3,'innovative technology',1,'2017-12-30 15:51:58','2017-12-30 15:51:58');

/*!40000 ALTER TABLE `projects` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
