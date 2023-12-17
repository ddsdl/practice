-- Active: 1699575809112@@127.0.0.1@3306@skeleton
-- MySQL Workbench Forwanord Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema skeleton
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema skeleton
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `skeleton` DEFAULT CHARACTER SET utf8 ;
USE `skeleton` ;

-- -----------------------------------------------------
-- Table `skeleton`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `skeleton`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  `password` VARCHAR(50) NOT NULL,
  `createdAt` DATETIME NULL DEFAULT now(),
  `updateAt` DATETIME NULL DEFAULT now(),
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `skeleton`.`board`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `skeleton`.`board` (
  `id` INT NOT NULL,
  `title` VARCHAR(100) NOT NULL,
  `content` VARCHAR(1024) NOT NULL,
  `cnt` INT NULL,
  `createAt` DATETIME NULL DEFAULT now(),
  `updateAt` DATETIME NULL DEFAULT now(),
  `creatorId` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_board_user_idx` (`creatorId` ASC) VISIBLE,
  CONSTRAINT `fk_board_user`
    FOREIGN KEY (`creatorId`)
    REFERENCES `skeleton`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

DROP TABLE user, board;

CREATE TABLE user(
  id         INT          NOT NULL    AUTO_INCREMENT,
  name       VARCHAR(50)  NOT NULL,
  email      VARCHAR(50)  NOT NULL,
  password   VARCHAR(200)  NOT NULL,
  createAt   DATETIME                 DEFAULT NOW(),
  updateAt   DATETIME                 DEFAULT NOW(),
  CONSTRAINT user_id_pk PRIMARY KEY(id),
  CONSTRAINT user_email_uk UNIQUE(email)
);

CREATE TABLE board(
  id         INT          NOT NULL    AUTO_INCREMENT,
  title      VARCHAR(100)  NOT NULL,
  content    VARCHAR(1024)  NOT NULL,
  cnt    INT                      DEFAULT 0,
  createAt   DATETIME                 DEFAULT NOW(),
  updateAt   DATETIME                 DEFAULT NOW(),
  creatorId  INT,
  CONSTRAINT board_id_pk PRIMARY KEY(id),
  CONSTRAINT board_creatorId_fk FOREIGN KEY(creatorId) REFERENCES user(id)
    ON UPDATE CASCADE
    ON DELETE SET NULL
);
-- NO ACTION (에러 발생)
-- CASCADE (같이 변경)
-- SET NULL (null로 변경)



-- 칼럼명 변경
ALTER TABLE board CHANGE COMMENT cnt INT;
ALTER TABLE board CHANGE createAt createdAt DATETIME DEFAULT now();
ALTER TABLE board CHANGE updateAt updatedAt DATETIME DEFAULT now();

ALTER TABLE board ALTER COLUMN creatorId INT NOT NULL;


-- user table에 insert, update, delete, select
INSERT INTO user(name, email, password) VALUES('놀부', 'nolbu@company.com', 'abc123');
INSERT INTO user(name, email, password) VALUES('흥부', 'hungbu@company.com', 'abc123');
INSERT INTO user(name, email, password) VALUES('방자', 'bangja@company.com', 'abc123');


UPDATE user SET name="향단", password='a123' WHERE id =3;

DELETE FROM user WHERE name='향단';

SELECT * FROM user;

-- id CHECK
SELECT * FROM user WHERE email = 'test@test.com'

-- updatePassword: '',
UPDATE user SET updateAt = NOW() WHERE email = 'nolbu@company.com'

--update: '',
UPDATE user SET password = '123abc' WHERE email = 'nolbu@company.com'

--delete: '',
DELETE FROM user WHERE email = 'test@test.com'

--  userList: '',
SELECT * FROM user ORDER BY createAt DESC
LIMIT 0, 10;

-- total
SELECT COUNT(*) as cnt FROM user;

SELECT * FROM user;



-- board table에 insert, update, delete, select
-- board 목록에는 항상 입력한 사용자 이름이 출력되도록....

INSERT INTO board(title, content, creatorId) VALUES('첫번째 게시물', '첫번째 게시물 내용', 4);
INSERT INTO board(title, content, creatorId) VALUES('두번째 게시물', '두번째 게시물 내용', 4);
INSERT INTO board(title, content, creatorId) VALUES('세번째 게시물', '세번째 게시물 내용', 2);

UPDATE board SET title ='변경됨', content='변경됨', updateAt = NOW() WHERE id=3;

DELETE FROM board WHERE id=4;

-- 전체 조회
SELECT b.id, u.name, title, DATE_FORMAT(b.createAt, '%Y-%m-%d') as createAt, cnt
FROM user u
  INNER JOIN board b ON u.id = b.creatorId
  ORDER BY b.id DESC
  LIMIT 0, 10;

  
-- 1개 게시물 조회
SELECT b.id, u.name, title, email, DATE_FORMAT(b.createAt, '%Y-%m-%d') as createAt, content,  cnt
FROM user u INNER JOIN board b ON u.id = b.creatorId
WHERE b.id = 6;

SELECT * FROM board;

-- 조회 하면 카운트를 1개 증가
UPDATE board SET cnt = cnt + 1 WHERE id = 6;

