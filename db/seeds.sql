INSERT INTO burger (burger_name, devoured) VALUES ("Cheese Burger", false);   
INSERT INTO burger (burger_name, devoured) VALUES ("Bacon Cheese Burger", false);  
INSERT INTO burger (burger_name, devoured) VALUES ("Bacon Onion Burger", false);  
INSERT INTO burger (burger_name, devoured) VALUES ("Chicken Burger", false);  
INSERT INTO burger (burger_name, devoured) VALUES ("Turkey Burger", false);    
INSERT INTO burger (burger_name) VALUES ("Vegan Burger");

SELECT * FROM burger;
UPDATE burger SET devoured = 1 WHERE id = 1;