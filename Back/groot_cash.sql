/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

CREATE DATABASE IF NOT EXISTS `grootcoin` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `grootcoin`;

CREATE TABLE IF NOT EXISTS `assert` (
  `pk` int(11) NOT NULL AUTO_INCREMENT,
  `userid` varchar(50) NOT NULL,
  `input` int(30) DEFAULT NULL,
  `output` int(30) DEFAULT NULL,
  `regdate` datetime NOT NULL,
  `sum` int(50) NOT NULL,
  PRIMARY KEY (`pk`),
  KEY `FK_assert_user` (`userid`),
  CONSTRAINT `FK_assert_user` FOREIGN KEY (`userid`) REFERENCES `user` (`userid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*!40000 ALTER TABLE `assert` DISABLE KEYS */;
/*!40000 ALTER TABLE `assert` ENABLE KEYS */;

CREATE TABLE IF NOT EXISTS `cash_transaction` (
  `pk` int(11) NOT NULL AUTO_INCREMENT,
  `userid` varchar(50) NOT NULL,
  `price` int(50) NOT NULL,
  `qty` float NOT NULL,
  `ordertype` int(1) NOT NULL,
  `rest` float NOT NULL,
  `regdate` datetime NOT NULL,
  PRIMARY KEY (`pk`),
  KEY `FK_order_user` (`userid`),
  CONSTRAINT `FK_order_user` FOREIGN KEY (`userid`) REFERENCES `user` (`userid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*!40000 ALTER TABLE `cash_transaction` DISABLE KEYS */;
/*!40000 ALTER TABLE `cash_transaction` ENABLE KEYS */;

CREATE TABLE IF NOT EXISTS `transaction` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `a_orderid` int(11) NOT NULL,
  `a_amount` float NOT NULL,
  `a_commission` float NOT NULL,
  `b_orderid` int(11) NOT NULL,
  `b_amount` float NOT NULL,
  `b_commission` float NOT NULL,
  `txid` varchar(100) NOT NULL,
  `regdate` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_transaction_order` (`a_orderid`),
  KEY `FK_transaction_order_2` (`b_orderid`),
  CONSTRAINT `FK_transaction_order` FOREIGN KEY (`a_orderid`) REFERENCES `cash_transaction` (`pk`),
  CONSTRAINT `FK_transaction_order_2` FOREIGN KEY (`b_orderid`) REFERENCES `cash_transaction` (`pk`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*!40000 ALTER TABLE `transaction` DISABLE KEYS */;
/*!40000 ALTER TABLE `transaction` ENABLE KEYS */;

CREATE TABLE IF NOT EXISTS `user` (
  `userid` varchar(50) NOT NULL,
  `username` varchar(30) NOT NULL,
  `userpw` varchar(50) NOT NULL,
  `account` int(11) NOT NULL,
  `wallet` varchar(100) NOT NULL,
  PRIMARY KEY (`userid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


CREATE TABLE IF NOT EXISTS `` (
  
)
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` (`userid`, `username`, `userpw`, `account`, `wallet`) VALUES
	('da', 'do', 'do', 5, 'do'),
	('do', 'do', 'do', 5, 'do');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
