CREATE TABLE bucaramanga (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  photo VARCHAR(255),
  address VARCHAR(255) NOT NULL,
  number INT,
  instagram VARCHAR(255)
);

CREATE TABLE `florida` (
  `id` uuid PRIMARY KEY,
  `name` VARCHAR(255) NOT NULL,
  `photo` VARCHAR(255),
  `address` VARCHAR(255) NOT NULL,
  `number` INT,
  `instagram` VARCHAR(255)
);

CREATE TABLE `giron` (
  `id` uuid PRIMARY KEY,
  `name` VARCHAR(255) NOT NULL,
  `photo` VARCHAR(255),
  `address` VARCHAR(255) NOT NULL,
  `number` INT,
  `instagram` VARCHAR(255)
);

CREATE TABLE `users` (
  `id` uuid PRIMARY KEY,
  `name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) UNIQUE NOT NULL,
  `password` VARCHAR(255) NOT NULL
);