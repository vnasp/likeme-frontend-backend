CREATE DATABASE likeme;

CREATE TABLE posts (
  id SERIAL, 
  title VARCHAR(25), 
  imgURL VARCHAR(1000), 
  about VARCHAR(255), 
  likes INT
  );


  /* Data example
  https://i.ibb.co/nBgBdYJ/sketch1.png
https://i.ibb.co/zQpj2Jv/sketch2.png
https://i.ibb.co/DYYnDcR/sketch3.png
https://i.ibb.co/VDYYwb8/sketch4.png
https://i.ibb.co/hsGy09L/sketch5.png */ 