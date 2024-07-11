-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 12-07-2024 a las 01:30:41
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
-- Base de datos: `basededatosdeprueba`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `consultas`
--

CREATE TABLE `consultas` (
  `id` int(11) NOT NULL,
  `nombre` varchar(20) NOT NULL,
  `telefono` varchar(20) NOT NULL,
  `email` varchar(30) NOT NULL,
  `mensaje` text NOT NULL,
  `opcion_de_contacto` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `consultas`
--

INSERT INTO `consultas` (`id`, `nombre`, `telefono`, `email`, `mensaje`, `opcion_de_contacto`) VALUES
(13, 'Mariana', '1536352810', 'marianacarlacasanova@gmail.com', 'Hola, necesito que se contacten conmigo por un problema que tuve con uno de sus tecnicos en una visita que solicite.', 'whatsapp'),
(14, 'Jonatan', '1558836236', 'jonipala@gmail.com', 'Hola buenas tardes necesito que se contacten por mail', 'mail'),
(15, 'pablo', '1111111111', 'marianacarlacasanova@gmail.com', 'afasfasf', 'whatsapp');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `turnos`
--

CREATE TABLE `turnos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(15) NOT NULL,
  `apellido` varchar(20) NOT NULL,
  `usuario_id` int(11) NOT NULL,
  `telefono` varchar(15) NOT NULL,
  `direccion` varchar(40) NOT NULL,
  `tipo_de_servicio` varchar(30) NOT NULL,
  `fecha` text NOT NULL,
  `rango_horario` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `turnos`
--

INSERT INTO `turnos` (`id`, `nombre`, `apellido`, `usuario_id`, `telefono`, `direccion`, `tipo_de_servicio`, `fecha`, `rango_horario`) VALUES
(1, 'Nahuel', 'Rivas', 1, '1540989090', 'Alberti 234', 'Reparacion rapida', '2024-07-31', 'de 14 a 18hs'),
(2, 'Mariana', 'Casanova', 13, '1536352810', 'Rivadavia 6074', 'Reparacion rapida', '2024-07-03', 'de 14 a 18hs'),
(3, 'Jonatan', 'Palavecino', 1, '01158836236', 'Los Patos2657', 'Mantenimiento preventivo', '2024-07-10', 'de 14 a 18hs'),
(6, 'Nahuel', 'Rivas', 1, '1558836236', 'Alberti 234', 'Reparacion rapida', '2024-08-30', 'de 14 a 18hs');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` text NOT NULL,
  `email` text NOT NULL,
  `password` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `email`, `password`) VALUES
(1, 'Jonatan', 'jonipala@gmail.com', '$2b$10$Di6jO4Vf0zvLL64na8UsAOiJPVjxFppTcmYjxLCMdyviXvCkaQMDy'),
(13, 'Mariana', 'marianacasanova@gmail.com', '$2b$10$5knAL4kyzZqACujcgXm4T.bIlK7ngCnD1Ok/SOP2HcdtbqbzbhS3y'),
(14, 'Anselmo', 'anselmo@gmail.com', '$2b$10$pQED4R60cHovqheGijDhT.aaW0TLE245m7behT9KwbrOYqizbbAEK'),
(15, 'Damian', 'damianiriarte@gmail.com', '$2b$10$Q9cCaFT1sJCFH/2PNVP7m.p5gUls8/Z7yAw245DOnEEAiY0WXH9IC');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `consultas`
--
ALTER TABLE `consultas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `turnos`
--
ALTER TABLE `turnos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usuario_id` (`usuario_id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `consultas`
--
ALTER TABLE `consultas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `turnos`
--
ALTER TABLE `turnos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `turnos`
--
ALTER TABLE `turnos`
  ADD CONSTRAINT `turnos_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
