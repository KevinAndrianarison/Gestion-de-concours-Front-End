-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : jeu. 28 mars 2024 à 15:10
-- Version du serveur : 10.4.27-MariaDB
-- Version de PHP : 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `concours`
--

-- --------------------------------------------------------

--
-- Structure de la table `admin`
--

CREATE TABLE `admin` (
  `id_admin` int(11) NOT NULL,
  `identifiant_admin` varchar(50) NOT NULL,
  `mdp_admin` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Déchargement des données de la table `admin`
--

INSERT INTO `admin` (`id_admin`, `identifiant_admin`, `mdp_admin`) VALUES
(1, 'admin', 'admin');

-- --------------------------------------------------------

--
-- Structure de la table `au`
--

CREATE TABLE `au` (
  `idAU` int(11) NOT NULL,
  `AU` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Déchargement des données de la table `au`
--

INSERT INTO `au` (`idAU`, `AU`) VALUES
(1, 2010),
(2, 2013),
(7, 2024),
(11, 2025),
(13, 2026),
(26, 2027),
(27, 2028),
(29, 2011);

-- --------------------------------------------------------

--
-- Structure de la table `candidats`
--

CREATE TABLE `candidats` (
  `id_candidat` int(11) NOT NULL,
  `nom_candidat` varchar(45) DEFAULT NULL,
  `telephone_candidat` int(10) DEFAULT NULL,
  `email_candidat` varchar(20) DEFAULT NULL,
  `AU_idAU` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Déchargement des données de la table `candidats`
--

INSERT INTO `candidats` (`id_candidat`, `nom_candidat`, `telephone_candidat`, `email_candidat`, `AU_idAU`) VALUES
(1, 'Steeve', NULL, 'kevinandrianarison25', 1),
(2, 'Kevin', NULL, NULL, 2),
(3, 'ANDRIANARISON', NULL, NULL, 1),
(4, 'Landred', NULL, NULL, 2),
(16, 'Snel', 325696321, '', 7),
(17, 'Mario', 321523696, '', 7),
(19, 'Girousse', 385689632, '', 7),
(20, 'Kevin', 336369563, '', 7);

-- --------------------------------------------------------

--
-- Structure de la table `information_concours`
--

CREATE TABLE `information_concours` (
  `id_information` int(11) NOT NULL,
  `formations` varchar(255) DEFAULT NULL,
  `conditions` varchar(255) DEFAULT NULL,
  `epreuves` varchar(255) DEFAULT NULL,
  `centres` varchar(255) DEFAULT NULL,
  `droits` varchar(255) DEFAULT NULL,
  `date_debut` varchar(10) DEFAULT NULL,
  `date_fin` varchar(10) DEFAULT NULL,
  `AU` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Déchargement des données de la table `information_concours`
--

INSERT INTO `information_concours` (`id_information`, `formations`, `conditions`, `epreuves`, `centres`, `droits`, `date_debut`, `date_fin`, `AU`) VALUES
(1, 'Génie Mécanique, Hydraulique et Energétique, Génie Electrique, Sciences et Technologies de l\'Information et de la Communication, Génie Civil', 'Baccalauréat série C, D, S, OSE, Technique Industrielle, Genie Civil ou équivalent. (Agés de moins de 25 ans)', 'Mathématiques, Physiques (Electrostatique - Mécanique - (RDM ou Chimie)), Francais, Test Psychotechnique', 'Antananarivo, Fianarantsoa, Toamasina, Mahajanga, Antsohihy, Antsiranana, Nosy-Be, Sambava', 'Nationaux (Ar. 50 000), Etrangers (Ar. 100 000)', '2024-03-11', '2024-03-12', 2024);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id_admin`);

--
-- Index pour la table `au`
--
ALTER TABLE `au`
  ADD PRIMARY KEY (`idAU`);

--
-- Index pour la table `candidats`
--
ALTER TABLE `candidats`
  ADD PRIMARY KEY (`id_candidat`),
  ADD KEY `fk_CANDIDATS_AU` (`AU_idAU`);

--
-- Index pour la table `information_concours`
--
ALTER TABLE `information_concours`
  ADD PRIMARY KEY (`id_information`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `admin`
--
ALTER TABLE `admin`
  MODIFY `id_admin` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `au`
--
ALTER TABLE `au`
  MODIFY `idAU` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT pour la table `candidats`
--
ALTER TABLE `candidats`
  MODIFY `id_candidat` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT pour la table `information_concours`
--
ALTER TABLE `information_concours`
  MODIFY `id_information` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `candidats`
--
ALTER TABLE `candidats`
  ADD CONSTRAINT `fk_CANDIDATS_AU` FOREIGN KEY (`AU_idAU`) REFERENCES `au` (`idAU`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
