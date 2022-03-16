-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 16-Mar-2022 às 21:09
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
-- Banco de dados: `biblioteca`
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
  `localizacao` varchar(50) DEFAULT NULL,
  `livro_categoria` varchar(50) DEFAULT NULL,
  `livro_edicao` varchar(50) DEFAULT NULL,
  `livro_volume` varchar(50) DEFAULT NULL,
  `qtd_disponivel` varchar(50) DEFAULT NULL,
  `site_imagem` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `cadastro_livros`
--

INSERT INTO `cadastro_livros` (`nome`, `autor`, `isbn`, `ano_public`, `editora`, `referencias`, `localizacao`, `livro_categoria`, `livro_edicao`, `livro_volume`, `qtd_disponivel`, `site_imagem`) VALUES
('Memórias Póstumas de Brás Cubas', 'Machado de Assis', '9780850515022', '1881', 'Editoria Moderna ', 'ASSIS, Machado de. Memórias Póstumas de Brás Cubas', 'Fileira 3 - Seção 2', 'Literatura', '2º Edição', 'Volume 1', '10', 'BrasCubas.png'),
('O Cortiço', 'Aluísio Azevedo', '9780850515015 ', '1890', 'Editora SESI-SP ', 'AZEVEDO, Aluísio. O cortiço. 30. ed. São Paulo: Át', 'Fileira 40 - Seção 6', 'Literatura', '3º Edição', 'Volume 3', '15', 'oCortico.png');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
