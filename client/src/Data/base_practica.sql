DROP DATABASE IF EXISTS base_practica;
CREATE DATABASE IF NOT EXISTS base_practica;
use base_practica;

CREATE TABLE profesiones(
id INT AUTO_INCREMENT PRIMARY KEY,
nombre VARCHAR(50) NOT NULL,
createdAt DATE,
upadatedAt DATE,
deletedAt DATE
);

CREATE TABLE aspirante (
id INT AUTO_INCREMENT PRIMARY KEY,
dni INT UNIQUE NOT NULL,
nombre VARCHAR(30) NOT NULL,
apellido VARCHAR (30) NOT NULL,
genero  ENUM('masculino', 'femenino', 'otro') NOT NULL,
fechaNacimiento DATE,
email VARCHAR (100) NOT NULL UNIQUE,
telefono VARCHAR(20) NOT NULL,
urlLinkedin VARCHAR(200) NOT NULL,
imagen VARCHAR (200) NOT NULL,
profesionId INT NOT NULL,
createdAt DATE,
upadatedAt DATE,
deletedAt DATE,
FOREIGN KEY (profesionId) REFERENCES profesion(id)
);
