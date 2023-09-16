DROP TABLE IF EXISTS task;


DROP TABLE IF EXISTS user;


DROP TABLE IF EXISTS toDo;


CREATE TABLE task (id SERIAL PRIMARY KEY,
                                          module VARCHAR(50) NOT NULL,
                                                           name VARCHAR(120),
                                                                   due_date DATE);
                                                                        


CREATE TABLE user (id SERIAL PRIMARY KEY,
                                          name VARCHAR(100) NOT NULL );
                                                                    


CREATE TABLE to_do (id SERIAL PRIMARY KEY,
                                          FOREIGN KEY (task_id) REFERENCES task(id),
                                          FOREIGN KEY (user_id) REFERENCES user(id),
                                          done BOOLEAN,
                                          feedback TEXT);
                                                                                            