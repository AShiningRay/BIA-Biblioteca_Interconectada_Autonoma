-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 07-Mar-2022 às 22:12
-- Versão do servidor: 10.4.22-MariaDB
-- versão do PHP: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `test`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `cadastro_livros`
--

CREATE TABLE `cadastro_livros` (
  `nome` varchar(50) DEFAULT NULL,
  `autor` varchar(50) DEFAULT NULL,
  `isbn` varchar(50) DEFAULT NULL,
  `ano_public` varchar(50) DEFAULT NULL,
  `editora` varchar(50) DEFAULT NULL,
  `referencias` varchar(50) DEFAULT NULL,
  `localizacao` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `cadastro_livros`
--

INSERT INTO `cadastro_livros` (`nome`, `autor`, `isbn`, `ano_public`, `editora`, `referencias`, `localizacao`) VALUES
('memorias de bras cus ', '', '', '', ' ', '', ''),
('memorias de bras cus ', 'memorias de bras cus ', 'memorias de bras cus ', 'memorias de bras cus ', 'memorias de bras cus  ', 'memorias de bras cus ', 'memorias de bras cus '),
('memorias de bras cuas', 'machado de machado', '56448648546', '1881', 'moderna ', 'assis machado', 'fileira 3 '),
('asdsadsaqdsa', '', '', '', ' ', '', ''),
('dsada', 'dsadsad', 'sadasdas', 'dasd', 'asdasd ', '', '');

-- --------------------------------------------------------

--
-- Estrutura da tabela `pesquisa`
--

CREATE TABLE `pesquisa` (
  `nome` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `pesquisa`
--

INSERT INTO `pesquisa` (`nome`) VALUES
('memorias de bras cus'),
('memorias de bras coca colas de 2l'),
('memorias de bras coca colas de 3l'),
('http://localhost/BIA-Git/BIA-Biblioteca_Interconec');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
