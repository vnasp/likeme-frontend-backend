CREATE DATABASE likeme;

CREATE TABLE posts (
  id SERIAL, 
  title VARCHAR(25), 
  imgURL VARCHAR(1000), 
  about VARCHAR(255), 
  likes INT
  );