-- SQLBook: Code
CREATE TABLE brands (
    id INT AUTO_INCREMENT PRIMARY KEY,
    brand_name VARCHAR(80) NOT NULL
);

CREATE TABLE plugs_types (
    id INT AUTO_INCREMENT PRIMARY KEY,
    plug_type BOOLEAN NOT NULL
);

CREATE TABLE terminals (
    id INT AUTO_INCREMENT PRIMARY KEY,
    longitude FLOAT NOT NULL,
    latitude FLOAT NOT NULL,
    name_station VARCHAR(50),
    adress_station TEXT NOT NULL,
    number_plugs INT NOT NULL,
    free VARCHAR(10),
    opening_hours VARCHAR(50),
    pmr_accessibility VARCHAR(50)
);

CREATE TABLE plugs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    power INT NOT NULL,
    terminals_id INT,
    plugs_types_id INT,
    FOREIGN KEY(terminals_id)
    REFERENCES terminals(id),
    FOREIGN KEY(plugs_types_id)
    REFERENCES plugs_types(id)
);

CREATE TABLE reservations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    date DATE NOT NULL,
    hour TIME NOT NULL,
    terminals_id INT,
    plugs_id INT,
    FOREIGN KEY (terminals_id)
    REFERENCES terminals(id),
    FOREIGN KEY (plugs_id)
    REFERENCES plugs(id)
);

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    gender VARCHAR(50) NOT NULL,
    lastname VARCHAR(50) NOT NULL,
    firstname VARCHAR(50) NOT NULL,
    date_of_birth DATE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    city VARCHAR(50) NOT NULL,
    postal_code VARCHAR(100) NOT NULL,
    password VARCHAR(15) NOT NULL,
    confirm_password VARCHAR(15) NOT NULL,
    cars_owned INT NOT NULL,
    is_admin BOOLEAN NOT NULL,
    reservations_id INT,
    FOREIGN KEY (reservations_id)
    REFERENCES reservations(id)
    ON DELETE CASCADE    
);

CREATE TABLE cars (
    id INT AUTO_INCREMENT PRIMARY KEY,
    brands_id INT,
    model VARCHAR(80) NOT NULL,
    plugs_id INT,
    users_id INT,
    FOREIGN KEY (brands_id)
    REFERENCES brands(id),
    FOREIGN KEY (plugs_id)
    REFERENCES plugs(id),
    FOREIGN KEY (users_id)
    REFERENCES users(id)
    ON DELETE CASCADE
);

CREATE TABLE images (
    id INT AUTO_INCREMENT PRIMARY KEY,
    url TEXT,
    users_id INT,
    cars_id INT,
    FOREIGN KEY(users_id)
    REFERENCES users(id)
    ON DELETE CASCADE,
    FOREIGN KEY(cars_id)
    REFERENCES cars(id)
    ON DELETE CASCADE
);

-- SQLBook: Code
