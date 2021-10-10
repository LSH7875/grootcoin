/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

CREATE DATABASE IF NOT EXISTS `grootcoin` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `grootcoin`;

CREATE TABLE IF NOT EXISTS `assets` (
  `pk` int(11) NOT NULL AUTO_INCREMENT,
  `userid` varchar(50) NOT NULL,
  `input` int(20) DEFAULT NULL,
  `output` int(20) DEFAULT NULL,
  `regdate` int(11) NOT NULL DEFAULT unix_timestamp(),
  `transaction` int(1) NOT NULL DEFAULT 1,
  PRIMARY KEY (`pk`),
  KEY `FK_assets_user` (`userid`),
  CONSTRAINT `FK_assets_user` FOREIGN KEY (`userid`) REFERENCES `user` (`userid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*!40000 ALTER TABLE `assets` DISABLE KEYS */;
/*!40000 ALTER TABLE `assets` ENABLE KEYS */;

CREATE TABLE IF NOT EXISTS `coin` (
  `coin_id` int(11) NOT NULL AUTO_INCREMENT,
  `coinname` varchar(10) DEFAULT NULL,
  `commission` float DEFAULT NULL,
  `coinunit` varchar(4) NOT NULL,
  PRIMARY KEY (`coin_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

/*!40000 ALTER TABLE `coin` DISABLE KEYS */;
INSERT INTO `coin` (`coin_id`, `coinname`, `commission`, `coinunit`) VALUES
	(1, 'groot', 0.001, 'GRT'),
	(2, 'acu', 0.0013, 'AGT'),
	(3, 'choco', 0.0013, 'CCI');
/*!40000 ALTER TABLE `coin` ENABLE KEYS */;

CREATE TABLE IF NOT EXISTS `coin_orderbook` (
  `pk` int(11) NOT NULL AUTO_INCREMENT,
  `userid` varchar(50) NOT NULL,
  `price` int(20) NOT NULL,
  `qty` float NOT NULL,
  `ordertype` int(1) NOT NULL,
  `rest` float NOT NULL,
  `time` int(11) NOT NULL DEFAULT unix_timestamp(),
  `coin_id` int(11) NOT NULL,
  `cash_id` int(11) DEFAULT NULL,
  `state` int(11) DEFAULT NULL,
  PRIMARY KEY (`pk`),
  KEY `FK_order_user` (`userid`),
  KEY `FK_coin_orderbook_coin` (`coin_id`),
  KEY `FK_coin_orderbook_assets` (`cash_id`),
  CONSTRAINT `FK_coin_orderbook_assets` FOREIGN KEY (`cash_id`) REFERENCES `assets` (`pk`),
  CONSTRAINT `FK_coin_orderbook_coin` FOREIGN KEY (`coin_id`) REFERENCES `coin` (`coin_id`),
  CONSTRAINT `FK_order_user` FOREIGN KEY (`userid`) REFERENCES `user` (`userid`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;

/*!40000 ALTER TABLE `coin_orderbook` DISABLE KEYS */;
INSERT INTO `coin_orderbook` (`pk`, `userid`, `price`, `qty`, `ordertype`, `rest`, `time`, `coin_id`, `cash_id`, `state`) VALUES
	(1, 'da', 1000, 1000, 1, 1000, 1633414622, 1, NULL, 0),
	(2, 'da', 1000, 1000, 1, 1000, 1633414670, 1, NULL, 0),
	(3, 'do', 1000, 1000, 1, 1000, 1633414670, 1, NULL, 0),
	(4, 'da', 1000, 1000, 0, 1000, 1633414670, 1, NULL, 0),
	(5, 'do', 1000, 1000, 0, 1000, 1633414670, 1, NULL, 0),
	(6, 'do', 1000, 1000, 0, 1000, 1633414670, 1, NULL, NULL);
/*!40000 ALTER TABLE `coin_orderbook` ENABLE KEYS */;

CREATE TABLE IF NOT EXISTS `exchange` (
  `coin_id` int(11) NOT NULL,
  `coin_amount` float DEFAULT NULL,
  `own_exchange` float DEFAULT NULL,
  `coin_in_market` float DEFAULT NULL,
  KEY `FK_exchange_coin` (`coin_id`),
  CONSTRAINT `FK_exchange_coin` FOREIGN KEY (`coin_id`) REFERENCES `coin` (`coin_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*!40000 ALTER TABLE `exchange` DISABLE KEYS */;
/*!40000 ALTER TABLE `exchange` ENABLE KEYS */;

CREATE TABLE IF NOT EXISTS `transaction` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `a_orderid` int(11) NOT NULL,
  `a_amount` float NOT NULL,
  `a_commission` float NOT NULL,
  `b_orderid` int(11) NOT NULL,
  `b_amount` float NOT NULL,
  `b_commission` float NOT NULL,
  `payment` int(20) NOT NULL,
  `txid` varchar(100) DEFAULT NULL,
  `regdate` int(11) NOT NULL DEFAULT unix_timestamp(),
  `coin_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_transaction_order` (`a_orderid`),
  KEY `FK_transaction_order_2` (`b_orderid`),
  KEY `FK_transaction_coin` (`coin_id`),
  CONSTRAINT `FK_transaction_coin` FOREIGN KEY (`coin_id`) REFERENCES `coin` (`coin_id`),
  CONSTRAINT `FK_transaction_order` FOREIGN KEY (`a_orderid`) REFERENCES `coin_orderbook` (`pk`),
  CONSTRAINT `FK_transaction_order_2` FOREIGN KEY (`b_orderid`) REFERENCES `coin_orderbook` (`pk`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

/*!40000 ALTER TABLE `transaction` DISABLE KEYS */;
INSERT INTO `transaction` (`id`, `a_orderid`, `a_amount`, `a_commission`, `b_orderid`, `b_amount`, `b_commission`, `payment`, `txid`, `regdate`, `coin_id`) VALUES
	(1, 4, 100, 20, 1, 100, 20, 1000, NULL, 1633418100, 1),
	(2, 2, 100, 20, 3, 100, 20, 1200, NULL, 1633418125, 1);
/*!40000 ALTER TABLE `transaction` ENABLE KEYS */;

CREATE TABLE IF NOT EXISTS `user` (
  `userid` varchar(50) NOT NULL,
  `username` varchar(30) NOT NULL,
  `userpw` varchar(50) NOT NULL,
  `account` int(11) NOT NULL,
  `wallet` varchar(100) NOT NULL,
  PRIMARY KEY (`userid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` (`userid`, `username`, `userpw`, `account`, `wallet`) VALUES
	('da', 'do', 'do', 5, 'do'),
	('do', 'do', 'do', 5, 'do');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
