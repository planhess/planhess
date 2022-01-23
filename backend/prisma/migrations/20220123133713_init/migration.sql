-- CreateTable
CREATE TABLE `shop` (
    `idshop` INTEGER NOT NULL,
    `name` VARCHAR(45) NOT NULL,
    `description` LONGTEXT NULL,
    `location` VARCHAR(45) NULL,
    `idcategory` INTEGER NULL,

    PRIMARY KEY (`idshop`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
