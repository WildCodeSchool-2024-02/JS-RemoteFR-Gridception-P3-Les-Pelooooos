CREATE TABLE brands (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE plugs_types (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE models (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    brand_id INT NOT NULL,
    plug_type_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (brand_id) REFERENCES brands (id),
    FOREIGN KEY (plug_type_id) REFERENCES plugs_types (id)
);

CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    gender ENUM("male", "female", "other") DEFAULT "other",
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    birthdate DATE,
    role ENUM('admin', 'user') DEFAULT 'user',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE cars (
    id INT PRIMARY KEY AUTO_INCREMENT,
    maker_id INT NOT NULL,
    model_id INT NOT NULL,
    user_id INT NOT NULL,
    year INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (maker_id) REFERENCES brands (id),
    FOREIGN KEY (model_id) REFERENCES models (id),
    FOREIGN KEY (user_id) REFERENCES users (id)
);

CREATE TABLE plugs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    plug_type_id INT NOT NULL,
    volt_power INT NOT NULL,
    FOREIGN KEY (plug_type_id) REFERENCES plugs_types (id)
);

CREATE TABLE terminals (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    longitude FLOAT NOT NULL,
    latitude FLOAT NOT NULL,
    starting_time TIME,
    ending_time TIME,
    disabled_accesses BOOLEAN
);

CREATE TABLE terminal_plugs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    terminal_id INT NOT NULL,
    plug_id INT NOT NULL,
    FOREIGN KEY (terminal_id) REFERENCES terminals (id),
    FOREIGN KEY (plug_id) REFERENCES plugs (id)
);

CREATE TABLE reservations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    terminal_id INT NOT NULL,
    car_id INT NOT NULL,
    starting_date DATETIME NOT NULL,
    ending_date DATETIME NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (terminal_id) REFERENCES terminals (id),
    FOREIGN KEY (car_id) REFERENCES cars (id)
);

-- INSERTION DE FAKE DATA

INSERT INTO
    brands (name)
VALUES ('Audi'),
    ('BMW'),
    ('Chevrolet'),
    ('Hyundai'),
    ('Jaguar'),
    ('Kia'),
    ('Nissan'),
    ('Porsche'),
    ('Tesla'),
    ('Volkswagen');

INSERT INTO
    plugs_types (name)
VALUES ('Type 1'),
    ('Type 2'),
    ('CCS'),
    ('CHAdeMO'),
    ('Tesla Supercharger');

INSERT INTO
    models (name, brand_id, plug_type_id)
VALUES ('Audi e-tron', 1, 1),
    ('Audi e-tron Sportback', 1, 1),
    ('Audi e-tron GT', 1, 2),
    ('Audi Q4 e-tron', 1, 2),
    ('BMW i3', 2, 2),
    ('BMW i4', 2, 2),
    ('BMW iX3', 2, 3),
    ('BMW iX', 2, 3),
    ('BMW i7', 2, 3),
    ('Chevrolet Bolt EV', 3, 2),
    ('Chevrolet Bolt EUV', 3, 2),
    ('Hyundai Kona Electric', 4, 3),
    (
        'Hyundai Ioniq Electric',
        4,
        3
    ),
    ('Hyundai Ioniq 5', 4, 3),
    ('Jaguar I-PACE', 5, 3),
    ('Kia Soul EV', 6, 3),
    ('Kia Niro EV', 6, 3),
    ('Kia EV6', 6, 3),
    ('Nissan Leaf', 7, 4),
    ('Nissan Ariya', 7, 4),
    ('Porsche Taycan', 8, 3),
    (
        'Porsche Taycan Cross Turismo',
        8,
        3
    ),
    ('Tesla Model S', 9, 5),
    ('Tesla Model 3', 9, 5),
    ('Tesla Model X', 9, 5),
    ('Tesla Model Y', 9, 5),
    ('Tesla Cybertruck', 9, 5),
    ('Tesla Roadster', 9, 5),
    ('Tesla Semi', 9, 5),
    ('Volkswagen ID.3', 10, 2),
    ('Volkswagen ID.4', 10, 2),
    ('Volkswagen ID. Buzz', 10, 2),
    ('Volkswagen ID.6', 10, 2);

INSERT INTO
    users (
        email,
        password,
        gender,
        first_name,
        last_name,
        birthdate,
        role
    )
VALUES (
        "toto@toto.com",
        "$argon2id$v=19$m=65536,t=5,p=1$FkjcCc0+F15P0N5TLh3ndQ$FkttWmV6YpXwaqtjrKfALtaYkwyHv2ongXDP/C6bvY4",
        "male",
        "Toto",
        "Toto",
        "1990-01-01",
        "admin"
    ),
    (
        "tata@toto.com",
        "$argon2id$v=19$m=65536,t=5,p=1$FkjcCc0+F15P0N5TLh3ndQ$FkttWmV6YpXwaqtjrKfALtaYkwyHv2ongXDP/C6bvY4",
        "female",
        "Tata",
        "Tata",
        "1990-09-01",
        "user"
    ),
    (
        "titi@toto.com",
        "$argon2id$v=19$m=65536,t=5,p=1$FkjcCc0+F15P0N5TLh3ndQ$FkttWmV6YpXwaqtjrKfALtaYkwyHv2ongXDP/C6bvY4",
        "other",
        "Titi",
        "Titi",
        "1990-10-01",
        "user"
    );

INSERT INTO
    cars (
        maker_id,
        model_id,
        user_id,
        year
    )
VALUES (1, 1, 1, 2021),
    (2, 5, 2, 2021),
    (3, 10, 3, 2021),
    (4, 13, 3, 2021),
    (5, 15, 3, 2021);

INSERT INTO
    plugs (plug_type_id, volt_power)
VALUES (1, 120),
    (2, 240),
    (3, 400),
    (4, 500),
    (5, 1000);

INSERT INTO
    terminals (
        name,
        longitude,
        latitude,
        starting_time,
        ending_time,
        disabled_accesses
    )
VALUES (
        'Terminal 1',
        2.3522,
        48.8566,
        '08:00:00',
        '20:00:00',
        true
    ),
    (
        'Terminal 2',
        2.295,
        48.8738,
        '08:00:00',
        '20:00:00',
        false
    ),
    (
        'Terminal 3',
        2.3333,
        48.8600,
        '08:00:00',
        '20:00:00',
        true
    );

INSERT INTO
    terminal_plugs (terminal_id, plug_id)
VALUES (1, 1),
    (1, 2),
    (2, 3),
    (3, 4),
    (3, 5);

INSERT INTO
    reservations (
        terminal_id,
        car_id,
        starting_date,
        ending_date
    )
VALUES (
        1,
        1,
        '2024-07-10 08:00:00',
        '2024-07-10 10:00:00'
    ),
    (
        2,
        2,
        '2024-07-10 09:00:00',
        '2024-07-10 11:00:00'
    ),
    (
        3,
        3,
        '2024-07-10 12:00:00',
        '2024-07-10 14:00:00'
    );