CREATE TABLE IF NOT EXISTS projects(
    ID integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    NOMBRE text NOT NULL CHECK (NOMBRE <> ''),
    PRIORIDAD integer NOT NULL,
    DESCRIPCION text,
    FECHA_ENTREGA date NOT NULL
);

CREATE TABLE IF NOT EXISTS tasks(
    ID integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    NOMBRE text NOT NULL CHECK (NOMBRE <> ''),
    FINALIZADA boolean,
    PROJECT_ID integer REFERENCES projects(id)
);

INSERT INTO projects(NOMBRE, PRIORIDAD, DESCRIPCION, FECHA_ENTREGA)
    VALUES('Hacer una app web', 1, 'Usando Angular', '2021-08-16');

INSERT INTO projects(NOMBRE, PRIORIDAD, DESCRIPCION, FECHA_ENTREGA)
    VALUES('Hacer una app', 1, 'Usando React', '2021-08-16');

INSERT INTO projects(NOMBRE, PRIORIDAD, DESCRIPCION, FECHA_ENTREGA)
    VALUES('Hacer una app de escritorio', 1, 'Usando C++', '2021-08-16');

-- INSERTS TASKS DATA
INSERT INTO tasks(NOMBRE, FINALIZADA, PROJECT_ID)
    VALUES('Descargar AngularJS', false, 1);

INSERT INTO tasks(NOMBRE, FINALIZADA, PROJECT_ID)
    VALUES('Crear UI web', false, 1);

INSERT INTO tasks(NOMBRE, FINALIZADA, PROJECT_ID)
    VALUES('Descargar flutter', false, 2);

INSERT INTO tasks(NOMBRE, FINALIZADA, PROJECT_ID)
    VALUES('Diseñar UI', false, 2);