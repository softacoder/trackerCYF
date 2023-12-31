DROP TABLE IF EXISTS task;


DROP TABLE IF EXISTS users;


DROP TABLE IF EXISTS to_do;


CREATE TABLE task (id SERIAL PRIMARY KEY,
                                          module VARCHAR(50) NOT NULL,
                                                           name VARCHAR(100),
                                                                   due_date DATE);
                                                                        


CREATE TABLE users (id SERIAL PRIMARY KEY,
                                          name VARCHAR(100) NOT NULL );
                                                                    

                                                                    
                                                                                            
CREATE TABLE to_do (id SERIAL PRIMARY KEY, 
                                          task_id INT NOT NULL REFERENCES task(id), 
                                          user_id INT NOT NULL REFERENCES users(id), 
                                          done BOOLEAN not NULL,
                                          feedback TEXT, FOREIGN KEY 
                                          (task_id,
                                          user_id) REFERENCES 
                                          task (id) 
                                          REFERENCES 
                                          users (id));
                                                                                            

