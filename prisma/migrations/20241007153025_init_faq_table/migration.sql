-- CreateTable
CREATE TABLE `Faq` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `faq_question` VARCHAR(191) NOT NULL,
    `faq_description` VARCHAR(191) NOT NULL,
    `faq_role` ENUM('admin', 'team_leader', 'member') NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
