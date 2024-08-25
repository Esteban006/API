CREATE DATABASE Login;

USE Login;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);
INSERT INTO users (username, password) VALUES ('usuario1', '$2a$10$2b22tpMdzbb/KYH58BcDKOUbOl04f0P0PMBvfl3NTSf6n.HOb1sY2');
INSERT INTO users (username, password) VALUES ('usuario2', '$2a$10$2b22tpMdzbb/KYH58BcDKOUbOl04f0P0PMBvfl3NTSf6n.HOb1sY2');
INSERT INTO users (username, password) VALUES ('usuario3', '$2a$10$2b22tpMdzbb/KYH58BcDKOUbOl04f0P0PMBvfl3NTSf6n.HOb1sY2');
