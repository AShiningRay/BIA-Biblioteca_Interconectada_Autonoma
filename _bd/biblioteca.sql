-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 19-Mar-2022 às 17:47
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
('Memórias Póstumas de Brás Cubas', 'Machado de Assis', '9780850515022', '1881', 'Editora Moderna', 'ASSIS, Machado de. Memórias Póstumas de Brás Cubas', 'Fileira 3 - Seção 2', 'Literatura', '2º Edição', 'Volume 1', '10', 'BrasCubas.png'),
('O Cortiço', 'Aluísio Azevedo', '9780850515015 ', '1890', 'Editora SESI-SP ', 'AZEVEDO, Aluísio. O cortiço. 30. ed. São Paulo: Át', 'Fileira 40 - Seção 6', 'Literatura', '3º Edição', 'Volume 3', '15', 'oCortico.png'),
('Sistemas Operacionais Modernos', 'Andrew S. Tanenbaum', '9788543005676', '2016', 'Editora Pearson ', 'Tanenbaum, Andrew S. Sistemas Operacionais Moderno', 'Fileira 17 - Seção 15', 'Computação', '4ª Edição', 'Volume 2', '12', 'SOsModernosTanembaum.png'),
('Dom Casmurro', 'Machado de Assis', '9788567097688', '1899', 'Editora Moderna ', 'ASSIS, Machado de. Dom Casmurro. Rio de Janeiro: M', 'Fileira 6 - Seção 23', 'Literatura', '2º Edição', 'Volume 3', '16', 'DomCasmurro.png'),
('Redes de Computadores', 'Andrew S. Tanenbaum', '9783827370464', '1988', 'Editora Pearson ', 'Tanenbaum, Andrew S. Redes de Computadores 4ª Ed. ', 'Fileira 41 - Seção 32', 'Computação', '4º Edição', 'Volume 3', '23', 'RedesdeComputadoresTanembaum.png'),
('Netter - Atlas de Anatomia Humana', ' Frank H.', '9780914168188', '2002', 'Editora Elsevier ', 'NETTER, Frank H.. Atlas de anatomia humana. 7ª ed.', 'Fileira 4 - Seção 2', 'Biologia', '7ª Edição', 'Volume 1', '20', 'NetterAtlasdeAnatomiaHumana.png'),
('Biologia celular e molecular', 'Eduardo de Robertis e José Hib', '9789500203845', '1987', 'Guanabara Koogan ', 'DE ROBERTIS, E. M. F.; HIB, Jose. Biologia celular', 'Fileira 1 - Seção 23', 'Biologia', '16º Edição', 'Volume 1', '26', 'BiologiaCelularEMolecular.png'),
('A Elite do Atraso: Da Escravidão à Lava Jato', 'Jessé Souza', '9788556080431', '2017', 'Editora Leya ', 'Souza, Jessé de. A elite do atraso: da escravidão ', 'Fileira 23 - Seção 2', 'Sociologia', '1º Edição', 'Volume 2', '16', 'AElitedoAtraso.png'),
('Vigiar e Punir', 'Michel Foucault', '9780140137224', '1975', 'Gallimard ', 'FOUCAULT, M. . Vigiar e Punir: história da violênc', 'Fileira 15 - Seção 32', 'Sociologia', '1º Edição', 'Volume 3', '23', 'VigiarEPunir.png'),
('Sociedade do Cansaço', 'Byung-Chul Han', '9780804797504', '2010', 'Editora Vozes ', 'Han, Byung-Chul. Sociedade do cansaço . Editora Vo', 'Fileira 53 - Seção 12', 'Filosofia', '1º Edição', 'Volume 1', '12', 'SociedadeDoCansaco.png'),
('História da Filosofia Ocidental', 'Bertrand Russell', '9780041000450', '1945', 'Editora Moderna ', 'Russel, Bertrand. História da Filosofia Ocidental.', 'Fileira 8 - Seção 23', 'Filosofia', '3º Edição', 'Volume 4', '52', 'HistoriaFilosofiaOcidental.png'),
('Uma Breve História do Tempo', 'Stephen Hawking', '9780593015186', '1988', 'Editora Intrínseca ', 'Hawking, Stephen. Uma Breve História do Tempo. Edi', 'Fileira 22 - Seção 44', 'Física', '7º Edição', 'Volume 1', '23', 'UmaBreveHistoriaDoTempo.png');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
