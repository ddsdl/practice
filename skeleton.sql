-- MySQL Workbench Forward Engineering

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
  `updateAt` DATETIME NULL,
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
