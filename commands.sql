CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50),
  price INTEGER
)

INSERT INTO products (name, price) VALUES ("Playstation 5", 1100000)