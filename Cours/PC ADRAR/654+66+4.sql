DROP DATABASE IF EXISTS Exo2;

CREATE DATABASE Exo2;
USE Exo2;

CREATE TABLE DEPARTEMENTS (
	id_dep INT NOT NULL AUTO_INCREMENT,
    nom_dep VARCHAR(50) NOT NULL, 
    directeur_dep VARCHAR(20) NOT NULL, 
    ville_dep VARCHAR(50) NOT NULL,
    PRIMARY KEY(id_dep)
) ENGINE InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE EMPLOYES (
	id_emp INT NOT NULL AUTO_INCREMENT,
    nom_emp VARCHAR(20) NOT NULL, 
    prof_emp VARCHAR(80) NOT NULL,
    date_embauche_emp DATE NOT NULL,
    salaire_emp DECIMAL(7,2) NOT NULL, 
    commission_emp DECIMAL(7,2), 
	dep_id INT REFERENCES REPRESENTATIONS(id_dep),
    PRIMARY KEY(id_emp),
    FOREIGN KEY(dep_id) REFERENCES DEPARTEMENTS(id_dep)
) ENGINE InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO DEPARTEMENTS (id_dep, nom_dep, directeur_dep, ville_dep) VALUES 
(1, 'Ressources Humaines', 'Jean Dupont', 'Paris'),
(2, 'Informatique', 'Marie Curie', 'Lyon'),
(3, 'Marketing', 'Paul Martin', 'Marseille'),
(4, 'Finance', 'Sophie Durand', 'Bordeaux');

INSERT INTO EMPLOYES (id_emp, nom_emp, prof_emp, date_embauche_emp, salaire_emp, commission_emp, dep_id) VALUES 
(101, 'Alice Martin', 'Développeur', '2020-03-15', 45000, 5000, 2),
(102, 'Lise Merle', 'Développeur', '2010-05-05', 65000, 8000, 2),
(103, 'Eric Cali', 'Développeur', '2018-12-20', 50000, 6000, 2),
(104, 'Bruno Leclerc', 'Analyste', '2019-06-01', 52000, 3000, 4),
(105, 'Carla Dubois', 'Chef de Projet', '2018-09-10', 60000, 7000, 2),
(106, 'David Lambert', 'Recruteur', '2021-01-20', 40000, 0, 1),
(107, 'Emma Petit', 'Directrice Marketing', '2017-11-05', 75000, 10000, 3),
(108, 'Belinda Lafont', 'Analyste', '2023-08-11', 48000, 4000, 4),
(109, 'Franck Sinatra', 'Recruteur', '2017-06-21', 57000, 5000, 4),
(110, 'David Lambert', 'Recruteur2', '2021-01-20', 40000, 0, 1),
(111, 'Franck Sinatra', 'Recruteur2', '2017-06-21', 57000, 5000, 4);


SELECT nom_emp
FROM EMPLOYES 
WHERE commission_emp > 0;

SELECT nom_emp, prof_emp, salaire_emp
FROM EMPLOYES 
ORDER BY prof_emp ASC, salaire_emp DESC;

SELECT AVG(salaire_emp)
FROM EMPLOYES;

SELECT AVG(salaire_emp)
FROM EMPLOYES AS E
WHERE E.dep_id = 2 ;

SELECT dep_id AS "Département" , MAX(salaire_emp) AS "salaire max"
FROM EMPLOYES
GROUP BY dep_id;

SELECT prof_emp AS "Professions", AVG(salaire_emp) AS "Salaire moyen"
FROM EMPLOYES
GROUP BY prof_emp;

SELECT MIN(salaire_emp) AS "Salaire le plus bas", prof_emp AS "Professions"
FROM EMPLOYES
GROUP BY prof_emp;

/*SELECT Profession, MIN(salaire_moy) AS salaire_min
FROM (
	SELECT prof_emp AS Profession, AVG(salaire_emp) AS salaire_moy
    FROM EMPLOYES
	GROUP BY prof_emp
	ORDER BY salaire_moy ASC
) AS T*/

  SELECT prof_emp
  FROM EMPLOYES 
  GROUP BY prof_emp
  HAVING AVG(salaire_emp)=(
    SELECT AVG(salaire_emp) AS moy 
    FROM EMPLOYES 
    GROUP BY prof_emp
    ORDER BY moy ASC 
    LIMIT 1
  ); 



