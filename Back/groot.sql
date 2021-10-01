create database grootcoin;
use grootcoin;
CREATE TABLE `user` (
  `userid` varchar(50) NOT NULL,
  `username` varchar(30) NOT NULL,
  `userpw` varchar(50) NOT NULL,
  `account` int(11) NOT NULL,
  `wallet` varchar(100) NOT NULL,
  PRIMARY KEY (`userid`),
  UNIQUE KEY `userid_UNIQUE` (`userid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `assert` (
  `pk` int(11) NOT NULL AUTO_INCREMENT,
  `userid` varchar(30) NOT NULL,
  `input` int(30) DEFAULT NULL,
  `output` int(30) DEFAULT NULL,
  `regdate` int(50) NOT NULL,
  `sum` int(50) NOT NULL,
  PRIMARY KEY (`pk`,`userid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `order_table` (
  `pk` int(11) NOT NULL AUTO_INCREMENT,
  `userid` varchar(50) NOT NULL,
  `sell` int(50) NOT NULL,
  `sell_unit` varchar(10) NOT NULL,
  `buy` float NOT NULL,
  `buy_unit` varchar(10) NOT NULL,
  `ordertype` int(50) NOT NULL,
  `active` int(150) NOT NULL,
  PRIMARY KEY (`pk`,`userid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `transaction` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `a_orderid` varchar(50) NOT NULL,
  `a_amount` float NOT NULL,
  `a_commission` float NOT NULL,
  `b_orderid` varchar(45) NOT NULL,
  `b_amount` float NOT NULL,
  `b_commission` float NOT NULL,
  `txid` varchar(100) NOT NULL,
  `regdate` datetime NOT NULL,
  PRIMARY KEY (`id`,`a_orderid`,`a_amount`,`b_orderid`,`b_amount`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
