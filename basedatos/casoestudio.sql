create database casoestudio;
use casoestudio;
CREATE TABLE usuario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    contraseña VARCHAR(255) NOT NULL
);

INSERT INTO usuario (nombre, contraseña) VALUES
('carla', '1234'),
('diego', '1235'),
('ana', '1236'),
('fernando', '1237');

select * from usuario;