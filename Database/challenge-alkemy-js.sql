-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 04-10-2021 a las 04:19:34
-- Versión del servidor: 10.4.14-MariaDB
-- Versión de PHP: 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `challenge-alkemy-js`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `operations`
--

CREATE TABLE `operations` (
  `id` int(10) NOT NULL,
  `concept` tinytext NOT NULL,
  `amount` decimal(10,2) NOT NULL,
  `date` date NOT NULL,
  `type` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `operations`
--

INSERT INTO `operations` (`id`, `concept`, `amount`, `date`, `type`) VALUES
(1, 'monthly salary', '70000.00', '2021-09-01', 'entry'),
(2, 'meat purchase', '750.00', '2021-09-01', 'egress'),
(3, 'house rental', '18250.00', '2021-09-07', 'egress'),
(4, 'meat and chicken', '6500.00', '2021-09-08', 'egress'),
(5, 'sales commissions', '27500.00', '2021-09-10', 'entry'),
(7, 'dinner purchase', '2100.00', '2021-09-08', 'egress'),
(8, 'lunch purchase', '700.00', '2021-09-12', 'egress'),
(9, 'buy clothes', '8750.00', '2021-09-13', 'egress'),
(10, 'shoe purchase', '1900.00', '2021-09-13', 'egress'),
(11, 'desktop purchase', '3000.00', '2021-09-14', 'egress'),
(12, 'mirror purchase', '2500.00', '2021-09-14', 'egress'),
(13, 'makeup shopping', '9500.00', '2021-09-14', 'egress'),
(40, 'drinks coca', '1500.00', '2021-10-01', 'egress'),
(44, 'lunch purchase', '550.00', '2021-10-02', 'egress'),
(58, 'dinner purchase', '2000.00', '2021-10-03', 'egress'),
(62, 'sales commissions', '15000.00', '2021-10-03', 'entry'),
(63, 'buy clothes', '4520.00', '2021-10-03', 'egress');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `operations`
--
ALTER TABLE `operations`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `operations`
--
ALTER TABLE `operations`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=64;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
