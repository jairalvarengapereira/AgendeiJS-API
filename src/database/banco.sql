--
-- Arquivo gerado com SQLiteStudio v3.4.4 em qui dez 19 10:08:44 2024
--
-- Codificação de texto usada: System
--
PRAGMA foreign_keys = off;
BEGIN TRANSACTION;

-- Tabela: admins
CREATE TABLE IF NOT EXISTS admins (id_admin INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR (50), email VARCHAR (100), password VARCHAR (100));

-- Tabela: appointments
CREATE TABLE IF NOT EXISTS appointments (id_appointment INTEGER PRIMARY KEY AUTOINCREMENT, id_doctor INTEGER REFERENCES doctors (id_doctor), id_service INTEGER REFERENCES services (id_service), id_user INTEGER REFERENCES user (id_user), booking_date DATE, booking_hour VARCHAR (5));

-- Tabela: doctors
CREATE TABLE IF NOT EXISTS doctors (id_doctor INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR (50), specialty VARCHAR (50), icon VARCHAR (10));

-- Tabela: doctors_services
CREATE TABLE IF NOT EXISTS doctors_services (id_doctor_service INTEGER PRIMARY KEY, id_doctor INTEGER REFERENCES doctors (id_doctor), id_service INTEGER REFERENCES services (id_service), price DECIMAL (9, 2));

-- Tabela: services
CREATE TABLE IF NOT EXISTS services (id_service INTEGER PRIMARY KEY AUTOINCREMENT, description VARCHAR (50));

-- Tabela: user
CREATE TABLE IF NOT EXISTS user (id_user INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR (50), email VARCHAR (100), password VARCHAR (100));

COMMIT TRANSACTION;
PRAGMA foreign_keys = on;
