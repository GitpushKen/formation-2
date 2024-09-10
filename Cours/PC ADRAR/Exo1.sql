DROP DATABASE IF EXISTS Exo1;

CREATE DATABASE Exo1;
USE Exo1;

CREATE TABLE REPRESENTATIONS (
	id_rep INT NOT NULL AUTO_INCREMENT,
    titre_rep VARCHAR(20) NOT NULL,
	lieu_rep VARCHAR(20) NOT NULL,
    PRIMARY KEY(id_rep)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE MUSICIENS (
	id_musicien INT NOT NULL UNIQUE,
    nom_musicien VARCHAR(20) NOT NULL, 
    rep_id INT REFERENCES REPRESENTATIONS(id_rep),
    PRIMARY KEY(id_musicien),
    FOREIGN KEY(rep_id) REFERENCES REPRESENTATIONS(id_rep)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE PROGRAMMATION (
	rep_id INT NOT NULL REFERENCES REPRESENTATIONS(id_rep),
    date_prog DATETIME NOT NULL, 
    tarif_prog DECIMAL(5, 2),
	PRIMARY KEY(rep_id, date_prog),
    FOREIGN KEY(rep_id) REFERENCES REPRESENTATIONS(id_rep)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO REPRESENTATIONS (id_rep, titre_rep, lieu_rep) 
VALUES
(1, 'Concert Symphonique', 'Théâtre des Champs-Élysées'),
(2, 'Jazz Night', 'Blue Note Paris'),
(3, 'Festival de Musique Baroque', 'Opéra Garnier');

INSERT INTO MUSICIENS (id_musicien, nom_musicien, rep_id) 
VALUES
(1, 'Alice Durand', 1),
(2, 'Bob Martin', 1),
(3, 'Clara Joubert', 2),
(4, 'David Lefebvre', 2),
(5, 'Emma Moreau', 3);

INSERT INTO PROGRAMMATION (rep_id, date_prog, tarif_prog) 
VALUES
(1, '2024-09-15', 50),
(2, '2024-09-20', 40),
(3, '2024-09-25', 60);

SELECT titre_rep
FROM REPRESENTATIONS;

SELECT titre_rep
FROM REPRESENTATIONS
WHERE lieu_rep LIKE "T%";

SELECT nom_musicien, titre_rep
FROM MUSICIENS AS M
INNER JOIN REPRESENTATIONS AS R
ON M.id_musicien = R.id_rep;

SELECT titre_rep, lieu_rep, tarif_prog
FROM REPRESENTATIONS AS R
INNER JOIN PROGRAMMATION AS P
ON P.rep_id = R.id_rep
WHERE P.date_prog = '2024-09-25';

SELECT COUNT(*)
FROM MUSICIENS AS M 
WHERE M.rep_id = 2;

SELECT titre_rep, date_prog
FROM REPRESENTATIONS AS R
INNER JOIN PROGRAMMATION AS P
ON P.rep_id = R.id_rep
WHERE P.tarif_prog <= 50;