CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    status VARCHAR(50) NOT NULL
);
INSERT INTO tasks (title, description, status)
VALUES ('Example task', 'This is a description', 'OPEN');
SELECT *
FROM tasks;