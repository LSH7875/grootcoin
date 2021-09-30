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
  `regdate` datetime NOT NULL,
  `sum` int(50) NOT NULL,
  PRIMARY KEY (`pk`,`userid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `order` (
  `pk` int(11) NOT NULL AUTO_INCREMENT,
  `userid` varchar(50) NOT NULL,
  `price` int(50) NOT NULL,
  `qty` float NOT NULL,
  `ordertype` int(1) NOT NULL,
  `active` int(1) NOT NULL,
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

insert into user (userid, username, userpw, account, wallet) values ('do', 'do', 'do', 5, 'do');
insert into user (userid, username, userpw, account, wallet) values ('da', 'do', 'do', 5, 'do');