-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         10.9.8-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win64
-- HeidiSQL Versión:             12.3.0.6589
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para proyecto1
CREATE DATABASE IF NOT EXISTS `proyecto1` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci */;
USE `proyecto1`;

-- Volcando estructura para tabla proyecto1.tiempos
CREATE TABLE IF NOT EXISTS `tiempos` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `id_placas` varchar(150) NOT NULL DEFAULT '0',
  `entrada` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `salida` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `horas` int(11) NOT NULL DEFAULT 0,
  `importe` int(30) NOT NULL DEFAULT 0,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  KEY `Índice 1` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

-- Volcando datos para la tabla proyecto1.tiempos: ~5 rows (aproximadamente)
INSERT IGNORE INTO `tiempos` (`id`, `id_placas`, `entrada`, `salida`, `horas`, `importe`, `createdAt`, `updatedAt`) VALUES
	(1, 'aaaa1', '2024-01-20 16:40:12', '2024-01-20 18:40:13', 0, 0, '2024-01-20 17:18:10', '0000-00-00 00:00:00'),
	(2, 'aaaa2', '2024-01-20 17:28:20', '2024-01-20 17:18:44', 0, 0, '2024-01-20 17:28:20', '0000-00-00 00:00:00'),
	(3, 'A3NBD3', '2024-01-20 17:28:23', '2024-01-20 17:23:18', 0, 0, '2024-01-20 17:28:23', '0000-00-00 00:00:00'),
	(4, 'aaaa', '2024-01-20 17:28:37', '0000-00-00 00:00:00', 0, 0, '2024-01-20 17:28:38', '0000-00-00 00:00:00'),
	(5, 'SE3FSF', '2024-01-22 15:48:29', '0000-00-00 00:00:00', 1, 0, '2024-01-22 15:48:29', '2024-01-22 15:48:29');

-- Volcando estructura para tabla proyecto1.tipos
CREATE TABLE IF NOT EXISTS `tipos` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(150) NOT NULL DEFAULT 'Tipodevehiculo',
  `rate` bigint(50) NOT NULL DEFAULT 0,
  `pagan` tinyint(20) NOT NULL DEFAULT 0,
  `activo` tinyint(20) NOT NULL DEFAULT 0,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  KEY `Índice 1` (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

-- Volcando datos para la tabla proyecto1.tipos: ~2 rows (aproximadamente)
INSERT IGNORE INTO `tipos` (`id`, `nombre`, `rate`, `pagan`, `activo`, `createdAt`, `updatedAt`) VALUES
	(1, 'Vehiculo Oficial', 0, 0, 1, '2024-01-20 06:08:19', '0000-00-00 00:00:00'),
	(2, 'internos', 1, 1, 1, '2024-01-20 06:26:18', '2024-01-20 06:26:18');

-- Volcando estructura para tabla proyecto1.vehiculos
CREATE TABLE IF NOT EXISTS `vehiculos` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `placas_id` varchar(150) NOT NULL DEFAULT '',
  `esta_estacionado` tinyint(8) NOT NULL DEFAULT 0,
  `tipo` tinyint(8) NOT NULL DEFAULT 0,
  `activo` tinyint(8) NOT NULL DEFAULT 1,
  `nombre` varchar(250) NOT NULL DEFAULT 'solovino',
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`),
  UNIQUE KEY `placas_id` (`placas_id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

-- Volcando datos para la tabla proyecto1.vehiculos: ~5 rows (aproximadamente)
INSERT IGNORE INTO `vehiculos` (`id`, `placas_id`, `esta_estacionado`, `tipo`, `activo`, `nombre`, `createdAt`, `updatedAt`) VALUES
	(1, 'aaaa1', 1, 1, 1, '2003 Mazda blanco', '2024-01-20 18:35:46', '2024-01-20 18:35:46'),
	(2, 'A3NBD3', 1, 2, 1, 'Toyota Camry', '2024-01-22 15:43:57', '2024-01-22 15:43:57'),
	(4, '10349AS', 0, 2, 1, 'Auto Nuevo', '2024-01-20 20:25:27', '2024-01-20 20:25:27'),
	(5, 'xxxxxx', 1, 1, 1, 'Tesla Model 3', '2024-01-22 15:08:10', '2024-01-22 15:08:10'),
	(29, 'DKJ3D3', 0, 2, 1, 'Nissan Sentra', '2024-01-20 20:25:56', '2024-01-20 20:25:56');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
