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
  `transaction` int(11) NOT NULL,
  PRIMARY KEY (`pk`),
  KEY `FK_assets_user` (`userid`),
  CONSTRAINT `FK_assets_user` FOREIGN KEY (`userid`) REFERENCES `user` (`userid`),
  CONSTRAINT `FK_assets_transaction` FOREIGN KEY (`transaction`) REFERENCES `transaction` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*!40000 ALTER TABLE `assets` DISABLE KEYS */;
/*!40000 ALTER TABLE `assets` ENABLE KEYS */;

CREATE TABLE IF NOT EXISTS `coin_orderbook` (
  `pk` int(11) NOT NULL AUTO_INCREMENT,
  `userid` varchar(50) NOT NULL,
  `price` int(20) NOT NULL,
  `qty` float NOT NULL,
  `ordertype` int(1) NOT NULL,
  `rest` float NOT NULL,
  `time` int(11) NOT NULL DEFAULT unix_timestamp(),
  `coin_id` int(11) NOT NULL,
  `state` int(1) NOT NULL,
  PRIMARY KEY (`pk`),
  KEY `FK_order_user` (`userid`),
  KEY `FK_coin_orderbook_coin` (`coin_id`),
  CONSTRAINT `FK_coin_orderbook_coin` FOREIGN KEY (`coin_id`) REFERENCES `coin` (`coin_id`),
  CONSTRAINT `FK_order_user` FOREIGN KEY (`userid`) REFERENCES `user` (`userid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*!40000 ALTER TABLE `coin_orderbook` DISABLE KEYS */;
/*!40000 ALTER TABLE `coin_orderbook` ENABLE KEYS */;

CREATE TABLE IF NOT EXISTS `coin` (
  `coin_id` int(11) NOT NULL AUTO_INCREMENT,
  `coinname` varchar(10) DEFAULT NULL,
  `commission` float DEFAULT NULL,
  `coinunit` varchar(4) NOT NULL,
  PRIMARY KEY (`coin_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*!40000 ALTER TABLE `coin` DISABLE KEYS */;
/*!40000 ALTER TABLE `coin` ENABLE KEYS */;

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
  `txid` varchar(100) NULL,
  `regdate` int(11) NOT NULL DEFAULT unix_timestamp(),
  `coin_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_transaction_order` (`a_orderid`),
  KEY `FK_transaction_order_2` (`b_orderid`),
  CONSTRAINT `FK_transaction_order` FOREIGN KEY (`a_orderid`) REFERENCES `coin_orderbook` (`pk`),
  CONSTRAINT `FK_transaction_order_2` FOREIGN KEY (`b_orderid`) REFERENCES `coin_orderbook` (`pk`),
  CONSTRAINT `FK_transaction_coin` FOREIGN KEY (`coin_id`) REFERENCES `coin` (`coin_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*!40000 ALTER TABLE `transaction` DISABLE KEYS */;
/*!40000 ALTER TABLE `transaction` ENABLE KEYS */;

CREATE TABLE IF NOT EXISTS `user` (
  `userid` varchar(50) NOT NULL,
  `username` varchar(30) NOT NULL,
  `userpw` varchar(200) NOT NULL,
  `account` varchar(200) NOT NULL,
  `wallet` varchar(100) NOT NULL,
  PRIMARY KEY (`userid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` (`userid`, `username`, `userpw`, `account`, `wallet`) VALUES
	('da', 'do', 'do', 5, 'do'),
	('do', 'do', 'do', 5, 'do');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;

INSERT INTO `coin` (`coin_id`,`coinname`,`commission`,`coinunit`)
VALUES ('1','groot','0.001','GRT'),
('2','acu','0.0013','AGT'),
('3','choco','0.0013','CCI');

/* 가짜 데이터*/

insert into coin_orderbook (userid,price,qty,ordertype,rest,coin_id,state) values("da","100","100","0","100","1","0");
insert into coin_orderbook (userid,price,qty,ordertype,rest,coin_id,state) values("da","101","101","0","101","1","0");
insert into coin_orderbook (userid,price,qty,ordertype,rest,coin_id,state) values("da","102","102","0","102","1","0");
insert into coin_orderbook (userid,price,qty,ordertype,rest,coin_id,state) values("da","103","103","0","103","1","0");
insert into coin_orderbook (userid,price,qty,ordertype,rest,coin_id,state) values("da","104","104","0","104","1","0");
insert into coin_orderbook (userid,price,qty,ordertype,rest,coin_id,state) values("da","105","105","0","105","1","0");
insert into coin_orderbook (userid,price,qty,ordertype,rest,coin_id,state) values("da","106","106","0","106","1","0");
insert into coin_orderbook (userid,price,qty,ordertype,rest,coin_id,state) values("da","107","107","0","107","1","0");
insert into coin_orderbook (userid,price,qty,ordertype,rest,coin_id,state) values("da","108","108","0","108","1","0");
insert into coin_orderbook (userid,price,qty,ordertype,rest,coin_id,state) values("da","109","109","0","109","1","0");
insert into coin_orderbook (userid,price,qty,ordertype,rest,coin_id,state) values("da","110","110","0","110","1","0");
insert into coin_orderbook (userid,price,qty,ordertype,rest,coin_id,state) values("da","111","111","0","111","1","0");
insert into coin_orderbook (userid,price,qty,ordertype,rest,coin_id,state) values("da","112","112","0","112","1","0");
insert into coin_orderbook (userid,price,qty,ordertype,rest,coin_id,state) values("da","113","113","0","113","1","0");
insert into coin_orderbook (userid,price,qty,ordertype,rest,coin_id,state) values("da","114","114","0","114","1","0");
insert into coin_orderbook (userid,price,qty,ordertype,rest,coin_id,state) values("da","115","115","0","115","1","0");
insert into coin_orderbook (userid,price,qty,ordertype,rest,coin_id,state) values("da","116","116","0","116","1","0");
insert into coin_orderbook (userid,price,qty,ordertype,rest,coin_id,state) values("da","117","117","0","117","1","0");
insert into coin_orderbook (userid,price,qty,ordertype,rest,coin_id,state) values("da","118","118","0","118","1","0");
insert into coin_orderbook (userid,price,qty,ordertype,rest,coin_id,state) values("da","119","119","0","119","1","0");
insert into coin_orderbook (userid,price,qty,ordertype,rest,coin_id,state) values("da","120","120","0","120","1","0");
insert into coin_orderbook (userid,price,qty,ordertype,rest,coin_id,state) values("da","121","121","0","121","1","0");
insert into coin_orderbook (userid,price,qty,ordertype,rest,coin_id,state) values("da","122","122","0","122","1","0");
insert into coin_orderbook (userid,price,qty,ordertype,rest,coin_id,state) values("da","123","123","0","123","1","0");
insert into coin_orderbook (userid,price,qty,ordertype,rest,coin_id,state) values("da","124","124","0","124","1","0");
insert into coin_orderbook (userid,price,qty,ordertype,rest,coin_id,state) values("da","125","125","0","125","1","0");
insert into coin_orderbook (userid,price,qty,ordertype,rest,coin_id,state) values("da","126","126","0","126","1","0");
insert into coin_orderbook (userid,price,qty,ordertype,rest,coin_id,state) values("da","127","127","0","127","1","0");
insert into coin_orderbook (userid,price,qty,ordertype,rest,coin_id,state) values("da","128","128","0","128","1","0");
insert into coin_orderbook (userid,price,qty,ordertype,rest,coin_id,state) values("da","129","129","0","129","1","0");
insert into coin_orderbook (userid,price,qty,ordertype,rest,coin_id,state) values("da","130","130","0","130","1","0");

insert into coin_orderbook (userid,price,qty,ordertype,rest,coin_id,state) values("do","100","100","0","100","1","0");
insert into coin_orderbook (userid,price,qty,ordertype,rest,coin_id,state) values("do","101","101","0","101","1","0");
insert into coin_orderbook (userid,price,qty,ordertype,rest,coin_id,state) values("do","102","102","0","102","1","0");
insert into coin_orderbook (userid,price,qty,ordertype,rest,coin_id,state) values("do","103","103","0","103","1","0");
insert into coin_orderbook (userid,price,qty,ordertype,rest,coin_id,state) values("do","104","104","0","104","1","0");
insert into coin_orderbook (userid,price,qty,ordertype,rest,coin_id,state) values("do","105","105","0","105","1","0");
insert into coin_orderbook (userid,price,qty,ordertype,rest,coin_id,state) values("do","106","106","0","106","1","0");
insert into coin_orderbook (userid,price,qty,ordertype,rest,coin_id,state) values("do","107","107","0","107","1","0");
insert into coin_orderbook (userid,price,qty,ordertype,rest,coin_id,state) values("do","108","108","0","108","1","0");
insert into coin_orderbook (userid,price,qty,ordertype,rest,coin_id,state) values("do","109","109","0","109","1","0");
insert into coin_orderbook (userid,price,qty,ordertype,rest,coin_id,state) values("do","110","110","0","110","1","0");
insert into coin_orderbook (userid,price,qty,ordertype,rest,coin_id,state) values("do","111","111","0","111","1","0");
insert into coin_orderbook (userid,price,qty,ordertype,rest,coin_id,state) values("do","112","112","0","112","1","0");
insert into coin_orderbook (userid,price,qty,ordertype,rest,coin_id,state) values("do","113","113","0","113","1","0");
insert into coin_orderbook (userid,price,qty,ordertype,rest,coin_id,state) values("do","114","114","0","114","1","0");
insert into coin_orderbook (userid,price,qty,ordertype,rest,coin_id,state) values("do","115","115","0","115","1","0");
insert into coin_orderbook (userid,price,qty,ordertype,rest,coin_id,state) values("do","116","116","0","116","1","0");
insert into coin_orderbook (userid,price,qty,ordertype,rest,coin_id,state) values("do","117","117","0","117","1","0");
insert into coin_orderbook (userid,price,qty,ordertype,rest,coin_id,state) values("do","118","118","0","118","1","0");
insert into coin_orderbook (userid,price,qty,ordertype,rest,coin_id,state) values("do","119","119","0","119","1","0");
insert into coin_orderbook (userid,price,qty,ordertype,rest,coin_id,state) values("do","120","120","0","120","1","0");
insert into coin_orderbook (userid,price,qty,ordertype,rest,coin_id,state) values("do","121","121","0","121","1","0");
insert into coin_orderbook (userid,price,qty,ordertype,rest,coin_id,state) values("do","122","122","0","122","1","0");
insert into coin_orderbook (userid,price,qty,ordertype,rest,coin_id,state) values("do","123","123","0","123","1","0");
insert into coin_orderbook (userid,price,qty,ordertype,rest,coin_id,state) values("do","124","124","0","124","1","0");
insert into coin_orderbook (userid,price,qty,ordertype,rest,coin_id,state) values("do","125","125","0","125","1","0");
insert into coin_orderbook (userid,price,qty,ordertype,rest,coin_id,state) values("do","126","126","0","126","1","0");
insert into coin_orderbook (userid,price,qty,ordertype,rest,coin_id,state) values("do","127","127","0","127","1","0");
insert into coin_orderbook (userid,price,qty,ordertype,rest,coin_id,state) values("do","128","128","0","128","1","0");
insert into coin_orderbook (userid,price,qty,ordertype,rest,coin_id,state) values("do","129","129","0","129","1","0");
insert into coin_orderbook (userid,price,qty,ordertype,rest,coin_id,state) values("do","130","130","0","130","1","0");

insert into transaction (a_orderid,a_amount,a_commission,b_orderid,b_amount,b_commission,coin_id,payment) values("1","100","1","2","100","1","1","101");
insert into transaction (a_orderid,a_amount,a_commission,b_orderid,b_amount,b_commission,coin_id,payment) values("2","200","2","3","200","2","1","102");
insert into transaction (a_orderid,a_amount,a_commission,b_orderid,b_amount,b_commission,coin_id,payment) values("3","300","3","4","300","3","1","103");
insert into transaction (a_orderid,a_amount,a_commission,b_orderid,b_amount,b_commission,coin_id,payment) values("4","400","4","5","400","4","1","104");
insert into transaction (a_orderid,a_amount,a_commission,b_orderid,b_amount,b_commission,coin_id,payment) values("5","500","5","6","500","5","1","105");
insert into transaction (a_orderid,a_amount,a_commission,b_orderid,b_amount,b_commission,coin_id,payment) values("6","600","6","7","600","6","1","106");
insert into transaction (a_orderid,a_amount,a_commission,b_orderid,b_amount,b_commission,coin_id,payment) values("7","700","7","8","700","7","1","107");
insert into transaction (a_orderid,a_amount,a_commission,b_orderid,b_amount,b_commission,coin_id,payment) values("8","800","8","9","800","8","1","108");
insert into transaction (a_orderid,a_amount,a_commission,b_orderid,b_amount,b_commission,coin_id,payment) values("9","900","9","10","900","9","1","109");
insert into transaction (a_orderid,a_amount,a_commission,b_orderid,b_amount,b_commission,coin_id,payment) values("10","1000","10","11","1000","10","1","110");
insert into transaction (a_orderid,a_amount,a_commission,b_orderid,b_amount,b_commission,coin_id,payment) values("11","1100","11","12","1100","11","1","111");
insert into transaction (a_orderid,a_amount,a_commission,b_orderid,b_amount,b_commission,coin_id,payment) values("12","1200","12","13","1200","12","1","112");
insert into transaction (a_orderid,a_amount,a_commission,b_orderid,b_amount,b_commission,coin_id,payment) values("13","1300","13","14","1300","13","1","113");
insert into transaction (a_orderid,a_amount,a_commission,b_orderid,b_amount,b_commission,coin_id,payment) values("14","1400","14","15","1400","14","1","114");
insert into transaction (a_orderid,a_amount,a_commission,b_orderid,b_amount,b_commission,coin_id,payment) values("15","1500","15","16","1500","15","1","115");
insert into transaction (a_orderid,a_amount,a_commission,b_orderid,b_amount,b_commission,coin_id,payment) values("16","1600","16","17","1600","16","1","116");
insert into transaction (a_orderid,a_amount,a_commission,b_orderid,b_amount,b_commission,coin_id,payment) values("17","1700","17","18","1700","17","1","117");
insert into transaction (a_orderid,a_amount,a_commission,b_orderid,b_amount,b_commission,coin_id,payment) values("18","1800","18","19","1800","18","1","118");
insert into transaction (a_orderid,a_amount,a_commission,b_orderid,b_amount,b_commission,coin_id,payment) values("19","1900","19","20","1900","19","1","119");
insert into transaction (a_orderid,a_amount,a_commission,b_orderid,b_amount,b_commission,coin_id,payment) values("20","2000","20","21","2000","20","1","120");
insert into transaction (a_orderid,a_amount,a_commission,b_orderid,b_amount,b_commission,coin_id,payment) values("21","2100","21","22","2100","21","1","121");
insert into transaction (a_orderid,a_amount,a_commission,b_orderid,b_amount,b_commission,coin_id,payment) values("22","2200","22","23","2200","22","1","122");
insert into transaction (a_orderid,a_amount,a_commission,b_orderid,b_amount,b_commission,coin_id,payment) values("23","2300","23","24","2300","23","1","123");
insert into transaction (a_orderid,a_amount,a_commission,b_orderid,b_amount,b_commission,coin_id,payment) values("24","2400","24","25","2400","24","1","124");
insert into transaction (a_orderid,a_amount,a_commission,b_orderid,b_amount,b_commission,coin_id,payment) values("25","2500","25","26","2500","25","1","125");
insert into transaction (a_orderid,a_amount,a_commission,b_orderid,b_amount,b_commission,coin_id,payment) values("26","2600","26","27","2600","26","1","126");
insert into transaction (a_orderid,a_amount,a_commission,b_orderid,b_amount,b_commission,coin_id,payment) values("27","2700","27","28","2700","27","1","127");
insert into transaction (a_orderid,a_amount,a_commission,b_orderid,b_amount,b_commission,coin_id,payment) values("28","2800","28","29","2800","28","1","128");
insert into transaction (a_orderid,a_amount,a_commission,b_orderid,b_amount,b_commission,coin_id,payment) values("29","2900","29","30","2900","29","1","129");
insert into transaction (a_orderid,a_amount,a_commission,b_orderid,b_amount,b_commission,coin_id,payment) values("30","3000","30","31","3000","30","1","130");


insert into assets (userid,input,output,regdate,transaction values("ki@naver.com",50,0,n,"130","1","0");

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;