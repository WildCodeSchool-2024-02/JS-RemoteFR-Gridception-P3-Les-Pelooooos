-- SQLBook: Code
CREATE TABLE brands (
    id INT PRIMARY KEY AUTO_INCREMENT,
    brand_name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE plugs_types (
    id INT AUTO_INCREMENT PRIMARY KEY,
    plug_type VARCHAR(255) NOT NULL
);

CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255),
    password VARCHAR(255) NOT NULL,
    gender ENUM("Masculin", "Féminin", "Non communiqué") DEFAULT "Non communiqué",
    firstname VARCHAR(255),
    lastname VARCHAR(255),
    birthdate DATE,
    city VARCHAR(50),
    postal_code VARCHAR(100),
    cars_owned INT,
    image TEXT,
    role ENUM('admin', 'user') DEFAULT 'user',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE terminals (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name_station VARCHAR(50),
    longitude FLOAT NOT NULL,
    latitude FLOAT NOT NULL,
    adress_station TEXT,
    number_plugs INT,
    free VARCHAR(10)
);

CREATE TABLE plugs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    plug_type_id INT NOT NULL,
    volt_power INT NOT NULL,
    FOREIGN KEY (plug_type_id) REFERENCES plugs_types (id)
);

CREATE TABLE models (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    brand_id INT NOT NULL,
    plug_type_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (brand_id) REFERENCES brands(id),
    FOREIGN KEY (plug_type_id) REFERENCES plugs_types(id)
);


CREATE TABLE terminal_plugs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    terminal_id INT NOT NULL,
    plug_id INT NOT NULL,
    FOREIGN KEY (terminal_id) REFERENCES terminals (id),
    FOREIGN KEY (plug_id) REFERENCES plugs (id)
);

CREATE TABLE cars (
    id INT PRIMARY KEY AUTO_INCREMENT,
    brand_id INT NOT NULL,
    model_id INT NOT NULL,
    user_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (brand_id) REFERENCES brands (id),
    FOREIGN KEY (model_id) REFERENCES models (id),
    FOREIGN KEY (user_id) REFERENCES users (id)
);

CREATE TABLE reservations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    terminal_id INT NOT NULL,
    car_id INT NOT NULL,
    date DATETIME NOT NULL,
    hour TIME NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (terminal_id) REFERENCES terminals (id),
    FOREIGN KEY (car_id) REFERENCES cars (id)
);

SELECT cars.id, brands.brand_name, models.name, users.lastname
FROM cars
JOIN brands ON cars.brand_id = brands.id
JOIN models ON cars.model_id = models.id
JOIN users ON cars.user_id = users.id;
 