DROP DATABASE IF EXISTS TPBedflix;

CREATE DATABASE TPBedflix;
USE TPBedflix;

CREATE TABLE ROLES (
	id_role INT NOT NULL AUTO_INCREMENT,
    libelle_role VARCHAR(50) NOT NULL UNIQUE,
    PRIMARY KEY(id_role)
) ENGINE InnoDB DEFAULT CHARSET = utf8mb4;

CREATE TABLE UTILISATEURS (
	id_utilisateur INT NOT NULL AUTO_INCREMENT,
    nom_utilisateur VARCHAR(50) NOT NULL,
    prenom_utilisateur VARCHAR(50) NOT NULL,
    email_utilisateur VARCHAR(50) NOT NULL UNIQUE,
    pseudo_utilisateur VARCHAR(50) NOT NULL UNIQUE,
    mot_de_passe_utilisateur VARCHAR(60) NOT NULL,
    photo_profil_utilisateur VARCHAR(255) NOT NULL,
    role_id INT REFERENCES ROLES(id_role),
    PRIMARY KEY (id_utilisateur)
) ENGINE InnoDB DEFAULT CHARSET = utf8mb4;

CREATE TABLE FILMS (
	id_film INT NOT NULL AUTO_INCREMENT,
    titre_film VARCHAR(255) NOT NULL, 
    description_film TEXT NOT NULL,
    affiche_film VARCHAR(255) NOT NULL,
    lien_film VARCHAR(255) NOT NULL UNIQUE,
    duree_film DECIMAL(5,2) NOT NULL,
	PRIMARY KEY (id_film)
) ENGINE InnoDB DEFAULT CHARSET = utf8mb4;

CREATE TABLE SERIES (
	id_serie INT NOT NULL AUTO_INCREMENT,
    titre_serie VARCHAR(255) NOT NULL, 
    description_serie TEXT NOT NULL,
    affiche_serie VARCHAR(255) NOT NULL,
    lien_serie VARCHAR(255) NOT NULL UNIQUE,
	PRIMARY KEY (id_serie)
) ENGINE InnoDB DEFAULT CHARSET = utf8mb4;


CREATE TABLE UTILISATEURS_FILMS (
	utilisateur_id INT,
	film_id INT,
	FOREIGN KEY (utilisateur_id) REFERENCES UTILISATEURS (id_utilisateur),
    FOREIGN KEY (film_id) REFERENCES FILMS (id_film),
    date_utilisateur_visionnage DATETIME
) ENGINE InnoDB DEFAULT CHARSET = utf8mb4;

CREATE TABLE UTILISATEURS_SERIES (
	utilisateur_id INT,
	serie_id INT,
	FOREIGN KEY (utilisateur_id) REFERENCES UTILISATEURS (id_utilisateur),
    FOREIGN KEY (serie_id) REFERENCES SERIES (id_serie),
    date_utilisateur_visionnage DATETIME
) ENGINE InnoDB DEFAULT CHARSET = utf8mb4;


CREATE TABLE FILMS_CATEGORIES (
	film_id INT,
    FOREIGN KEY (film_id) REFERENCES FILMS (id_film),
    id_categorie INT NOT NULL AUTO_INCREMENT,
    libelle_categorie VARCHAR(50) NOT NULL UNIQUE,
    PRIMARY KEY (id_categorie)
) ENGINE InnoDB DEFAULT CHARSET = utf8mb4;

CREATE TABLE SERIES_CATEGORIES (
	serie_id INT,
    FOREIGN KEY (serie_id) REFERENCES SERIES (id_serie),
    id_categorie INT NOT NULL AUTO_INCREMENT,
    libelle_categorie VARCHAR(50) NOT NULL UNIQUE,
    PRIMARY KEY (id_categorie)
) ENGINE InnoDB DEFAULT CHARSET = utf8mb4;


CREATE TABLE SAISONS (
	id_saison INT NOT NULL AUTO_INCREMENT,
    numero_saison INT NOT NULL, 
    titre_saison VARCHAR(50) NOT NULL,
    PRIMARY KEY (id_saison)
) ENGINE InnoDB DEFAULT CHARSET = utf8mb4;

CREATE TABLE EPISODES (
	id_episode INT NOT NULL AUTO_INCREMENT,
    numero_episode INT NOT NULL, 
    titre_episode VARCHAR(50) NOT NULL,
    PRIMARY KEY (id_episode)
) ENGINE InnoDB DEFAULT CHARSET = utf8mb4;

/* ALTER TABLE EPISODES
MODIFY numero_episode VARCHAR(20); */

ALTER TABLE SAISONS 
ADD serie_id INT REFERENCES SERIES(id_serie);

ALTER TABLE EPISODES
ADD saison_id INT REFERENCES SAISONS(id_saison);

ALTER TABLE EPISODES
ADD duree_episode DECIMAL(5,2) NOT NULL;

INSERT INTO ROLES (id_role, libelle_role) VALUES
(1, 'Administrateur'),
(2, 'Utilisateur');

INSERT INTO UTILISATEURS (id_utilisateur, nom_utilisateur, prenom_utilisateur, email_utilisateur, pseudo_utilisateur, mot_de_passe_utilisateur, photo_profil_utilisateur, role_id) VALUES
(1, 'Dupont', 'Jean', 'jean.dupont@example.com', 'jdupont', 'password123', 'photo1.jpg', 2),
(2, 'Martin', 'Sophie', 'sophie.martin@example.com', 'smartin', 'password456', 'photo2.jpg', 2),
(3, 'Durand', 'Luc', 'luc.durand@example.com', 'ldurand', 'password789', 'photo3.jpg', 1),
(4, 'Leroy', 'Alice', 'alice.leroy@example.com', 'aleroy', 'passwordabc', 'photo4.jpg', 2),
(5, 'Bernard', 'Claire', 'claire.bernard@example.com', 'cbernard', 'passworddef', 'photo5.jpg', 2),
(6, 'Rousseau', 'Pierre', 'pierre.rousseau@example.com', 'prousseau', 'passwordghi', 'photo6.jpg', 1);

INSERT INTO FILMS (id_film, titre_film, description_film, affiche_film, lien_film, duree_film) VALUES
(1, 'Inception', 'A mind-bending thriller by Christopher Nolan.', 'inception.jpg', 'http://example.com/inception', 148),
(2, 'The Matrix', 'A computer hacker learns about the true nature of his reality.', 'matrix.jpg', 'http://example.com/matrix', 136),
(3, 'Interstellar', 'A journey beyond the stars to save humanity.', 'interstellar.jpg', 'http://example.com/interstellar', 169);

INSERT INTO FILMS_CATEGORIES (film_id, id_categorie, libelle_categorie) VALUES
(1, 1, 'Science Fiction'),
(2, 2, 'Adventure');

INSERT INTO SERIES (id_serie, titre_serie, description_serie, affiche_serie, lien_serie) VALUES
(1, 'Breaking Bad', 'A chemistry teacher turned methamphetamine producer.', 'breaking_bad.jpg', 'http://example.com/breakingbad'),
(2, 'Stranger Things', 'A group of kids uncover a series of supernatural events.', 'stranger_things.jpg', 'http://example.com/strangerthings'),
(3, 'Game of Thrones', 'Noble families vie for control of the Iron Throne.', 'got.jpg', 'http://example.com/got'),
(4, 'The Witcher', 'A mutated monster-hunter for hire, journeys through a turbulent world.', 'witcher.jpg', 'http://example.com/witcher');

INSERT INTO SERIES_CATEGORIES (serie_id, id_categorie, libelle_categorie) VALUES
(1, 1, 'Drama'),
(2, 2, 'Science Fiction'),
(3, 3, 'Fantasy');

INSERT INTO SAISONS (id_saison, numero_saison, titre_saison) VALUES
(1, 1, 'Breaking Bad Season 1'),
(2, 2, 'Breaking Bad Season 2'),
(3, 1, 'Stranger Things Season 1'),
(4, 2, 'Stranger Things Season 2'),
(5, 1, 'Game of Thrones Season 1'),
(6, 2, 'Game of Thrones Season 2'),
(7, 1, 'The Witcher Season 1'),
(8, 2, 'The Witcher Season 2');

INSERT INTO EPISODES (id_episode, numero_episode, titre_episode, saison_id, duree_episode) VALUES
(1, 1, 'Breaking Bad S01E01: Pilot', 1, 50.00),
(2, 2, 'Breaking Bad S01E02: Cat\'s in the Bag', 1, 50.00),
(3, 3, 'Breaking Bad S01E03: ...And the Bag\'s in the River', 1, 50.00),

(4, 1, 'Stranger Things S01E01: Chapter One: The Vanishing of Will Byers', 1, 50.00),
(5, 2, 'Stranger Things S01E02: Chapter Two: The Weirdo on Maple Street', 1, 50.00),
(6, 3, 'Stranger Things S01E03: Chapter Three: Holly, Jolly', 1, 50.00),

(7, 1, 'Game of Thrones S01E01: Winter Is Coming', 1, 50.00),
(8, 2, 'Game of Thrones S01E02: The Kingsroad', 1, 50.00),
(9, 3, 'Game of Thrones S01E03: Lord Snow', 1, 50.00),

(10, 1, 'The Witcher S01E01: The End\'s Beginning', 1, 50.00),
(11, 2, 'The Witcher S01E02: Four Marks', 1, 50.00),
(12, 3, 'The Witcher S01E03: Betrayer Moon', 1, 50.00);

SELECT nom_utilisateur
FROM UTILISATEURS;

SELECT nom_utilisateur, libelle_role
FROM UTILISATEURS AS U
INNER JOIN ROLES AS R
ON U.role_id = R.id_role;

SELECT titre_film AS Film, titre_serie AS Séries
FROM FILMS AS F
RIGHT JOIN SERIES AS S
ON F.id_film = S.id_serie;

INSERT INTO UTILISATEURS_FILMS (utilisateur_id, film_id, date_utilisateur_visionnage) VALUES
(1, 1, '10/12/2021'),
(2, 2, '10/12/2021'),
(3, 3, '10/12/2021'),
(4, 1, '10/12/2021'),
(5, 2, '10/12/2021'),
(6, 3, '10/12/2021');

UPDATE UTILISATEURS_FILMS
SET date_utilisateur_visionnage = NOW();


SELECT titre_film AS Film, date_utilisateur_visionnage AS Visionné
FROM FILMS AS F 
INNER JOIN UTILISATEURS_FILMS AS UF
INNER JOIN UTILISATEURS AS U
ON F.id_film = U.id_utilisateur
GROUP BY titre_film;

SELECT Saison, EP
FROM (
	SELECT id_saison AS Saison, COUNT(ALL titre_episode) FROM EPISODES AS EP
    INNER JOIN SAISONS
	GROUP BY id_saison
) AS T



