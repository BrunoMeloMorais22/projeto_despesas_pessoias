-- CreateTable
CREATE TABLE `Despesas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `descricao` VARCHAR(191) NOT NULL,
    `valor` DOUBLE NOT NULL,
    `categoria` VARCHAR(191) NOT NULL,
    `data` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
