DROP DATABASE IF EXISTS base_practica;
CREATE DATABASE IF NOT EXISTS base_practica;
USE base_practica;

CREATE TABLE aspirante (
    id INT AUTO_INCREMENT PRIMARY KEY,
    dni INT UNIQUE NOT NULL,
    nombre VARCHAR(30) NOT NULL,
    apellido VARCHAR(30) NOT NULL,
    genero ENUM('masculino', 'femenino', 'otro') NOT NULL,
    fechaNacimiento DATE,
    email VARCHAR(100) NOT NULL UNIQUE,
    telefono VARCHAR(20) NOT NULL,
    urlLinkedin VARCHAR(200) NOT NULL,
    imagen VARCHAR(200) NOT NULL,
    createdAt DATE,
    updatedAt DATE,
    deletedAt DATE
);

CREATE TABLE profesion (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    createdAt DATE,
    updatedAt DATE,
    deletedAt DATE
);

CREATE TABLE aspirante_profesion (
    id INT AUTO_INCREMENT PRIMARY KEY,
    aspirante_id INT,
    profesion_id INT,
    createdAt DATE,
    updatedAt DATE,
    deletedAt DATE,
    FOREIGN KEY (aspirante_id) REFERENCES aspirante(id) ON DELETE CASCADE,
    FOREIGN KEY (profesion_id) REFERENCES profesion(id) ON DELETE CASCADE
);
