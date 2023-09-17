INSERT INTO task (module, name, due_date)
VALUES ('Node JS',
        'Make a Node API',
        '3023-07-07');

INSERT INTO task (module, name, due_date)
VALUES ('React',
        'Rendering with React',
        '3023-06-06');

INSERT INTO task (module, name, due_date)
VALUES ('sql',
        'Communicating with the database using SQL',
        '3023-08-01');


INSERT INTO users (name)
VALUES ('Hope Crosby');


INSERT INTO users (name)
VALUES ('John Crosby');

INSERT INTO users (name)
VALUES ('Bobby');

INSERT INTO to_do (task_id, user_id, done, feedback)
VALUES ('1',
        '1',
        'true',
        'That is interesting.');

INSERT INTO to_do (task_id, user_id, done, feedback)
VALUES ('1',
        '2',
        'true',
        'All done.');

INSERT INTO to_do (task_id, user_id, done, feedback)
VALUES ('1',
        '3',
        'true',
        'Like to do db.');

