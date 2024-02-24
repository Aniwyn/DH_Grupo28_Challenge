DROP DATABASE IF EXISTS recruitingDH;
CREATE DATABASE IF NOT EXISTS recruitingDH;
USE recruitingDH;

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

-- Insertar registros para la tabla 'aspirante'
INSERT INTO aspirante (dni, nombre, apellido, genero, fechaNacimiento, email, telefono, urlLinkedin, imagen, createdAt, updatedAt, deletedAt) 
VALUES 
    (123456789, 'Juan', 'Perez', 'masculino', '1990-05-15', 'juan@example.com', '1234567890', 'https://www.linkedin.com/in/juanperez', 'juan.jpg', NOW(), NOW(), NULL),
    (987654321, 'Maria', 'Gonzalez', 'femenino', '1992-08-20', 'maria@example.com', '9876543210', 'https://www.linkedin.com/in/mariagonzalez', 'maria.jpg', NOW(), NOW(), NULL),
    (111222333, 'Carlos', 'Lopez', 'masculino', '1988-12-10', 'carlos@example.com', '1112223330', 'https://www.linkedin.com/in/carloslopez', 'carlos.jpg', NOW(), NOW(), NULL),
    (444555666, 'Laura', 'Martinez', 'femenino', '1995-03-25', 'laura@example.com', '4445556660', 'https://www.linkedin.com/in/lauramartinez', 'laura.jpg', NOW(), NOW(), NULL),
    (777888999, 'Andres', 'Rodriguez', 'masculino', '1993-07-05', 'andres@example.com', '7778889990', 'https://www.linkedin.com/in/andresrodriguez', 'andres.jpg', NOW(), NOW(), NULL),
    (999888777, 'Ana', 'Sanchez', 'femenino', '1997-09-18', 'ana@example.com', '9998887770', 'https://www.linkedin.com/in/anasanchez', 'ana.jpg', NOW(), NOW(), NULL),
    (666777888, 'Pedro', 'Gomez', 'masculino', '1991-02-28', 'pedro@example.com', '6667778880', 'https://www.linkedin.com/in/pedrogomez', 'pedro.jpg', NOW(), NOW(), NULL),
    (333222111, 'Sofia', 'Hernandez', 'femenino', '1989-11-07', 'sofia@example.com', '3332221110', 'https://www.linkedin.com/in/sofiahernandez', 'sofia.jpg', NOW(), NOW(), NULL),
    (222333444, 'Luis', 'Diaz', 'masculino', '1994-06-30', 'luis@example.com', '2223334440', 'https://www.linkedin.com/in/luisdiaz', 'luis.jpg', NOW(), NOW(), NULL),
    (555444333, 'Elena', 'Torres', 'femenino', '1996-04-12', 'elena@example.com', '5554443330', 'https://www.linkedin.com/in/elenatorres', 'elena.jpg', NOW(), NOW(), NULL);

-- Insertar registros para la tabla 'profesion'
INSERT INTO profesion (nombre, createdAt, updatedAt, deletedAt)
VALUES 
    ('Ingeniero de Software', NOW(), NOW(), NULL),
    ('Diseñador Gráfico', NOW(), NOW(), NULL),
    ('Médico', NOW(), NOW(), NULL),
    ('Abogado', NOW(), NOW(), NULL),
    ('Contador', NOW(), NOW(), NULL),
    ('Chef', NOW(), NOW(), NULL),
    ('Arquitecto', NOW(), NOW(), NULL),
    ('Enfermero', NOW(), NOW(), NULL),
    ('Maestro', NOW(), NOW(), NULL),
    ('Electricista', NOW(), NOW(), NULL);

-- Insertar registros para la tabla 'aspirante_profesion'
INSERT INTO aspirante_profesion (aspirante_id, profesion_id, createdAt, updatedAt, deletedAt)
VALUES 
    (1, 1, NOW(), NOW(), NULL),
    (2, 2, NOW(), NOW(), NULL),
    (3, 3, NOW(), NOW(), NULL),
    (4, 4, NOW(), NOW(), NULL),
    (5, 5, NOW(), NOW(), NULL),
    (6, 6, NOW(), NOW(), NULL),
    (7, 7, NOW(), NOW(), NULL),
    (8, 8, NOW(), NOW(), NULL),
    (9, 9, NOW(), NOW(), NULL),
    (10, 10, NOW(), NOW(), NULL);

