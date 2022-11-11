CREATE DATABASE IF NOT EXISTS `backend_node`
/*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */
/*!80016 DEFAULT ENCRYPTION='N' */
;
USE `backend_node`;
-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: backend_node
-- ------------------------------------------------------
-- Server version	8.0.28
/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */
;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */
;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */
;
/*!50503 SET NAMES utf8 */
;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */
;
/*!40103 SET TIME_ZONE='+00:00' */
;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */
;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */
;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */
;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */
;
--
-- Table structure for table `companies`
--
DROP TABLE IF EXISTS `companies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */
;
/*!50503 SET character_set_client = utf8mb4 */
;
CREATE TABLE `companies` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `catchPhrase` text NOT NULL,
  `bs` text NOT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name_UNIQUE` (`name`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */
;
--
-- Dumping data for table `companies`
--
LOCK TABLES `companies` WRITE;
/*!40000 ALTER TABLE `companies` DISABLE KEYS */
;
INSERT INTO `companies`
VALUES (
    '00c2ec83-e705-426d-84ac-7d93adb99873',
    'Considine-Lockman',
    'Synchronised bottom-line interface',
    'e-enable innovative applications',
    '2022-11-10 22:23:15',
    '2022-11-10 22:23:15'
  ),
  (
    '32cf9c84-35f3-4c85-8838-e2da515f11da',
    'Keebler LLC',
    'User-centric fault-tolerant solution',
    'revolutionize end-to-end systems',
    '2022-11-10 22:22:23',
    '2022-11-10 22:22:23'
  ),
  (
    '5beb6004-a471-43de-9dac-cb2c21b69c24',
    'Yost and Sons',
    'Switchable contextually-based project',
    'aggregate real-time technologies',
    '2022-11-10 22:25:01',
    '2022-11-10 22:25:01'
  ),
  (
    '6a67f4b2-624c-4f72-b9bc-5c782eb448fd',
    'Robel-Corkery',
    'Multi-tiered zero tolerance productivity',
    'transition cutting-edge web services',
    '2022-11-10 22:18:37',
    '2022-11-10 22:18:37'
  ),
  (
    '74134ca3-4966-42b4-8789-2e193a41d405',
    'Hoeger LLC',
    'Centralized empowering task-force',
    'target end-to-end models',
    '2022-11-10 22:25:38',
    '2022-11-10 22:25:38'
  ),
  (
    'd553d800-b943-4faf-b289-8177031219d8',
    'Romaguera-Crona',
    'Multi-layered client-server neural-net',
    'harness real-time e-markets',
    '2022-11-09 00:54:10',
    '2022-11-09 00:54:10'
  ),
  (
    'e43f10b7-514f-44fd-b987-d70374803bd7',
    'Abernathy Group',
    'Implemented secondary concept',
    'e-enable extensible e-tailers',
    '2022-11-10 22:24:23',
    '2022-11-10 22:24:23'
  ),
  (
    'f70e55e3-e762-4a74-8990-71911ee4b10d',
    'Deckow-Crist',
    'Proactive didactic contingency',
    'synergize scalable supply-chains',
    '2022-11-09 00:22:00',
    '2022-11-09 00:23:09'
  ),
  (
    'fbd737d9-e917-4066-9a4e-a1151de59e94',
    'Johns Group',
    'Configurable multimedia task-force',
    'generate enterprise e-tailers',
    '2022-11-10 22:23:51',
    '2022-11-10 22:23:51'
  );
/*!40000 ALTER TABLE `companies` ENABLE KEYS */
;
UNLOCK TABLES;
--
-- Table structure for table `users`
--
DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */
;
/*!50503 SET character_set_client = utf8mb4 */
;
CREATE TABLE `users` (
  `id` varchar(255) NOT NULL,
  `name` text NOT NULL,
  `username` varchar(120) NOT NULL,
  `email` varchar(250) NOT NULL,
  `address` json NOT NULL,
  `phone` text NOT NULL,
  `id_company` varchar(255) NOT NULL,
  `website` text,
  `img` text,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `username_UNIQUE` (`username`),
  KEY `fk_company_idx` (`id_company`),
  CONSTRAINT `fk_id_company` FOREIGN KEY (`id_company`) REFERENCES `companies` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */
;
--
-- Dumping data for table `users`
--
LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */
;
INSERT INTO `users`
VALUES (
    '3842f351-9a13-48b8-ab74-31a986643549',
    'Clementine Bauch',
    'Samantha',
    'Nathan@yesenia.net',
    '{\"geo\": {\"lat\": \"-68.6102\", \"lng\": \"-47.0653\"}, \"city\": \"McKenziehaven\", \"suite\": \"Suite 847\", \"street\": \"Douglas Extension\", \"zipcode\": \"59590-4157\"}',
    '1-463-123-4447',
    'd553d800-b943-4faf-b289-8177031219d8',
    'ramiro.info',
    'https://s.gravatar.com/avatar/210fa42254c6f220b05833ad8a9bafe1?s=1024&d=',
    '2022-11-10 22:27:57',
    '2022-11-10 22:27:57'
  ),
  (
    '51bd97d6-7130-4b88-bc22-b3a5c3fda3e2',
    'Leanne Graham',
    'Bret',
    'Sincere@april.biz',
    '{\"geo\": {\"lat\": \"-37.3159\", \"lng\": \"81.1496\"}, \"city\": \"Gwenborough\", \"suite\": \"Apt. 556\", \"street\": \"Kulas Light\", \"zipcode\": \"92998-3874\"}',
    '1-770-736-8031 x56442',
    'd553d800-b943-4faf-b289-8177031219d8',
    'hildegard.org',
    'https://s.gravatar.com/avatar/168f849db55819bfdfac6f4e23d0a5eb?s=1024&d=',
    '2022-11-10 22:16:00',
    '2022-11-10 22:16:00'
  ),
  (
    '663a4de7-7d50-47f7-b24b-49481f93e755',
    'Clementina DuBuque',
    'Moriah.Stanton',
    'Rey.Padberg@karina.biz',
    '{\"geo\": {\"lat\": \"-38.2386\", \"lng\": \"57.2232\"}, \"city\": \"Lebsackbury\", \"suite\": \"Suite 198\", \"street\": \"Kattie Turnpike\", \"zipcode\": \"31428-2261\"}',
    '024-648-3804',
    '74134ca3-4966-42b4-8789-2e193a41d405',
    'ambrose.net',
    'https://s.gravatar.com/avatar/c8c416ba39516a19f3235c50ed5d650a?s=1024&d=',
    '2022-11-10 22:38:09',
    '2022-11-10 22:38:09'
  ),
  (
    'a19b67e0-5673-4634-bd1e-2b43725e9ac7',
    'Patricia Lebsack',
    'Karianne',
    'Julianne.OConner@kory.org',
    '{\"geo\": {\"lat\": \"29.4572\", \"lng\": \"-164.2990\"}, \"city\": \"South Elvis\", \"suite\": \"Apt. 692\", \"street\": \"Hoeger Mall\", \"zipcode\": \"53919-4257\"}',
    '493-170-9623 x156',
    '6a67f4b2-624c-4f72-b9bc-5c782eb448fd',
    'kale.biz',
    'https://s.gravatar.com/avatar/2a87ce475f33b3a881cae3ebae31be58?s=1024&d=',
    '2022-11-10 22:30:38',
    '2022-11-10 22:30:38'
  ),
  (
    'b307fdc1-6663-481d-b693-4470582d7b43',
    'Kurtis Weissnat',
    'Elwyn.Skiles',
    'Telly.Hoeger@billy.biz',
    '{\"geo\": {\"lat\": \"24.8918\", \"lng\": \"21.8984\"}, \"city\": \"Howemouth\", \"suite\": \"Suite 280\", \"street\": \"Rex Trail\", \"zipcode\": \"58804-1099\"}',
    '210.067.6132',
    'fbd737d9-e917-4066-9a4e-a1151de59e94',
    'elvis.io',
    'https://s.gravatar.com/avatar/0a5f9bcd52ce60b546ac039cb544192c?s=1024&d=',
    '2022-11-10 22:34:35',
    '2022-11-10 22:34:35'
  ),
  (
    'de3583b9-e309-48ef-9995-c102a1272e9f',
    'Mrs. Dennis Schulist',
    'Leopoldo_Corkery',
    'Karley_Dach@jasper.info',
    '{\"geo\": {\"lat\": \"-71.4197\", \"lng\": \"71.7478\"}, \"city\": \"South Christy\", \"suite\": \"Apt. 950\", \"street\": \"Norberto Crossing\", \"zipcode\": \"23505-1337\"}',
    '1-477-935-8478 x6430',
    '00c2ec83-e705-426d-84ac-7d93adb99873',
    'ola.org',
    'https://s.gravatar.com/avatar/35498fea61a2fe96e40c56949526a56a?s=1024&d=',
    '2022-11-10 22:33:29',
    '2022-11-10 22:33:29'
  ),
  (
    'e10c4ce2-7db4-4fb8-b01f-c7d6c02b30a5',
    'Chelsey Dietrich',
    'Kamren',
    'Lucio_Hettinger@annie.ca',
    '{\"geo\": {\"lat\": \"-31.8129\", \"lng\": \"62.5342\"}, \"city\": \"Roscoeview\", \"suite\": \"Suite 351\", \"street\": \"Skiles Walks\", \"zipcode\": \"33263\"}',
    '(254)954-1289',
    '32cf9c84-35f3-4c85-8838-e2da515f11da',
    'demarco.info',
    'https://s.gravatar.com/avatar/ff22da3abc19066ecc7df748a723ce59?s=1024&d=',
    '2022-11-10 22:31:58',
    '2022-11-10 22:31:58'
  ),
  (
    'ecbf4a3d-17c0-4201-827d-b0d4f1d51248',
    'Ervin Howell',
    'Antonette',
    'Shanna@melissa.tv',
    '{\"geo\": {\"lat\": \"-43.9509\", \"lng\": \"-34.4618\"}, \"city\": \"Wisokyburgh\", \"suite\": \"Suite 879\", \"street\": \"Victor Plains\", \"zipcode\": \"90566-7771\"}',
    '010-692-6593 x09125',
    'f70e55e3-e762-4a74-8990-71911ee4b10d',
    'anastasia.net',
    'https://s.gravatar.com/avatar/241af7d19a0a7438794aef21e4e19b79?s=1024&d=',
    '2022-11-10 22:17:23',
    '2022-11-10 22:17:23'
  ),
  (
    'f5650ee6-1f02-466c-b7c4-37652a3546dd',
    'Nicholas Runolfsdottir V',
    'Maxime_Nienow',
    'Sherwood@rosamond.me',
    '{\"geo\": {\"lat\": \"-14.3990\", \"lng\": \"-120.7677\"}, \"city\": \"Aliyaview\", \"suite\": \"Suite 729\", \"street\": \"Ellsworth Summit\", \"zipcode\": \"45169\"}',
    '586.493.6943 x140',
    'e43f10b7-514f-44fd-b987-d70374803bd7',
    'jacynthe.com',
    'https://s.gravatar.com/avatar/7aaf438faf2738f5c83249c3bfe94f55?s=1024&d=',
    '2022-11-10 22:35:38',
    '2022-11-10 22:35:38'
  ),
  (
    'f882fb07-bf1f-4539-bfba-e7917c9cfa9d',
    'Glenna Reichert',
    'Delphine',
    'Chaim_McDermott@dana.io',
    '{\"geo\": {\"lat\": \"24.6463\", \"lng\": \"-168.8889\"}, \"city\": \"Bartholomebury\", \"suite\": \"Suite 449\", \"street\": \"Dayna Park\", \"zipcode\": \"76495-3109\"}',
    '(775)976-6794 x41206',
    '5beb6004-a471-43de-9dac-cb2c21b69c24',
    'conrad.com',
    'https://s.gravatar.com/avatar/10ca2fbeb0eeab558b5d3c38c9a7a069?s=1024&d=',
    '2022-11-10 22:37:07',
    '2022-11-10 22:37:07'
  );
/*!40000 ALTER TABLE `users` ENABLE KEYS */
;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */
;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */
;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */
;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */
;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */
;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */
;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */
;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */
;
-- Dump completed on 2022-11-10 18:33:51