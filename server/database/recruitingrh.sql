-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 26-02-2024 a las 00:48:36
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `recruitingrh`
--
CREATE DATABASE IF NOT EXISTS `recruitingrh` DEFAULT CHARACTER SET utf8 COLLATE utf8_spanish_ci;
USE `recruitingrh`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `applicants`
--

CREATE TABLE `applicants` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `dni` varchar(8) NOT NULL,
  `name` varchar(64) NOT NULL,
  `last_name` varchar(64) NOT NULL,
  `email` varchar(128) NOT NULL,
  `phone` varchar(16) NOT NULL,
  `url_linkedin` varchar(128) NOT NULL,
  `birth_date` date NOT NULL,
  `image` varchar(128) NOT NULL,
  `gender_id` bigint(20) UNSIGNED NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deleteAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `applicants`
--

INSERT INTO `applicants` (`id`, `dni`, `name`, `last_name`, `email`, `phone`, `url_linkedin`, `birth_date`, `image`, `gender_id`, `createdAt`, `updatedAt`, `deleteAt`) VALUES
(1, '12345678', 'Romeo', 'Santos', 'juan@example.com', '1234567890', 'https://www.linkedin.com/in/romeosantos', '1990-05-15', 'foto2.jpg', 1, '2024-02-25 15:04:33', '2024-02-25 15:04:33', NULL),
(2, '87654321', 'María', 'Marimar', 'maria@example.com', '9876543210', 'https://www.linkedin.com/in/mariamartinez', '1988-10-25', 'foto1.jpg', 2, '2024-02-25 15:04:33', '2024-02-25 15:04:33', NULL),
(3, '23456789', 'Carlos', 'López', 'carlos@example.com', '4567890123', 'https://www.linkedin.com/in/carloslopez', '1995-02-28', 'foto5.jpg', 1, '2024-02-25 15:04:33', '2024-02-25 15:04:33', NULL),
(4, '34567890', 'Ana', 'Rodríguez', 'ana@example.com', '7890123456', 'https://www.linkedin.com/in/anarodriguez', '1992-08-12', 'foto4.jpg', 2, '2024-02-25 15:04:33', '2024-02-25 15:04:33', NULL),
(5, '11122233', 'Romina', 'Antonieta', 'Romina@example.com', '1234567890', 'https://www.linkedin.com/in/rominaAntonieta', '1993-05-15', 'foto3.jpg', 1, '2024-02-25 18:13:04', '2024-02-25 18:13:04', NULL),
(6, '22233344', 'Ramon', 'Pereira', 'Ramon@example.com', '9876543210', 'https://www.linkedin.com/in/Ramon', '1988-10-25', 'foto6.jpg', 2, '2024-02-25 18:13:04', '2024-02-25 18:13:04', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `applicants_professions`
--

CREATE TABLE `applicants_professions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `applicants_id` bigint(20) UNSIGNED NOT NULL,
  `professions_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `applicants_professions`
--

INSERT INTO `applicants_professions` (`id`, `applicants_id`, `professions_id`) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 2, 1),
(4, 2, 3),
(5, 3, 4),
(6, 4, 1),
(9, 5, 3),
(10, 6, 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `genders`
--

CREATE TABLE `genders` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `genders`
--

INSERT INTO `genders` (`id`, `name`) VALUES
(1, 'Masculino'),
(2, 'Femenino'),
(3, 'Otros');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `professions`
--

CREATE TABLE `professions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `professions`
--

INSERT INTO `professions` (`id`, `name`) VALUES
(1, 'Analista de datos'),
(2, 'Desarrollador full stack'),
(3, 'Especialista en ciberseguridad'),
(4, 'DevOps');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `applicants`
--
ALTER TABLE `applicants`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `dni` (`dni`),
  ADD KEY `gender_id` (`gender_id`);

--
-- Indices de la tabla `applicants_professions`
--
ALTER TABLE `applicants_professions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `applicants_id` (`applicants_id`),
  ADD KEY `professions_id` (`professions_id`);

--
-- Indices de la tabla `genders`
--
ALTER TABLE `genders`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `professions`
--
ALTER TABLE `professions`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `applicants`
--
ALTER TABLE `applicants`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `applicants_professions`
--
ALTER TABLE `applicants_professions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `genders`
--
ALTER TABLE `genders`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `professions`
--
ALTER TABLE `professions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `applicants`
--
ALTER TABLE `applicants`
  ADD CONSTRAINT `applicants_ibfk_1` FOREIGN KEY (`gender_id`) REFERENCES `genders` (`id`);

--
-- Filtros para la tabla `applicants_professions`
--
ALTER TABLE `applicants_professions`
  ADD CONSTRAINT `applicants_professions_ibfk_1` FOREIGN KEY (`applicants_id`) REFERENCES `applicants` (`id`),
  ADD CONSTRAINT `applicants_professions_ibfk_2` FOREIGN KEY (`professions_id`) REFERENCES `professions` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
