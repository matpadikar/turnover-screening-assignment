CREATE TABLE category(id SERIAL PRIMARY KEY, name TEXT NOT NULL);
INSERT INTO category(id, name) VALUES(1, 'Electronics');
INSERT INTO category(id, name) VALUES(2, 'Home Decor');
INSERT INTO category(id, name) VALUES(3, 'Fashion Accessories');
INSERT INTO category(id, name) VALUES(4, 'Kitchenware');
INSERT INTO category(id, name) VALUES(5, 'Outdoor Gear');
INSERT INTO category(id, name) VALUES(6, 'Beauty Products');
INSERT INTO category(id, name) VALUES(7, 'Books');
INSERT INTO category(id, name) VALUES(8, 'Toys');
INSERT INTO category(id, name) VALUES(9, 'Sports Equipment');
INSERT INTO category(id, name) VALUES(10, 'Jewelry');
INSERT INTO category(id, name) VALUES(11, 'Pet Supplies');
INSERT INTO category(id, name) VALUES(12, 'Art Supplies');
INSERT INTO category(id, name) VALUES(13, 'Stationery');
INSERT INTO category(id, name) VALUES(14, 'Baby Products');
INSERT INTO category(id, name) VALUES(15, 'Healthcare');
INSERT INTO category(id, name) VALUES(16, 'Furniture');
INSERT INTO category(id, name) VALUES(17, 'Automotive');
INSERT INTO category(id, name) VALUES(18, 'Gardening');
INSERT INTO category(id, name) VALUES(19, 'Music');
INSERT INTO category(id, name) VALUES(20, 'Party Supplies');
INSERT INTO category(id, name) VALUES(21, 'Fitness Equipment');
INSERT INTO category(id, name) VALUES(22, 'Electrical Supplies');
INSERT INTO category(id, name) VALUES(23, 'Office Supplies');
INSERT INTO category(id, name) VALUES(24, 'Travel Accessories');
INSERT INTO category(id, name) VALUES(25, 'Cookware');
INSERT INTO category(id, name) VALUES(26, 'DIY Tools');
INSERT INTO category(id, name) VALUES(27, 'Craft Supplies');
INSERT INTO category(id, name) VALUES(28, 'Gifts');
INSERT INTO category(id, name) VALUES(29, 'Camping Gear');
INSERT INTO category(id, name) VALUES(30, 'Party Decorations');
INSERT INTO category(id, name) VALUES(31, 'Bath Products');
INSERT INTO category(id, name) VALUES(32, 'Educational Toys');
INSERT INTO category(id, name) VALUES(33, 'Cooking Appliances');
INSERT INTO category(id, name) VALUES(34, 'Cosmetics');
INSERT INTO category(id, name) VALUES(35, 'Fitness Apparel');
INSERT INTO category(id, name) VALUES(36, 'Computer Accessories');
INSERT INTO category(id, name) VALUES(37, 'Audio Equipment');
INSERT INTO category(id, name) VALUES(38, 'Gaming Accessories');
INSERT INTO category(id, name) VALUES(39, 'Smart Home Devices');
INSERT INTO category(id, name) VALUES(40, 'Photography Equipment');
INSERT INTO category(id, name) VALUES(41, 'DIY Kits');
INSERT INTO category(id, name) VALUES(42, 'Hiking Gear');
INSERT INTO category(id, name) VALUES(43, 'Yoga Accessories');
INSERT INTO category(id, name) VALUES(44, 'Painting Supplies');
INSERT INTO category(id, name) VALUES(45, 'Fashion Apparel');
INSERT INTO category(id, name) VALUES(46, 'Dog Accessories');
INSERT INTO category(id, name) VALUES(47, 'Cat Supplies');
INSERT INTO category(id, name) VALUES(48, 'Bird Toys');
INSERT INTO category(id, name) VALUES(49, 'Aquarium Supplies');
INSERT INTO category(id, name) VALUES(50, 'Bike Accessories');
INSERT INTO category(id, name) VALUES(51, 'Skateboarding Gear');
INSERT INTO category(id, name) VALUES(52, 'Surfing Equipment');
INSERT INTO category(id, name) VALUES(53, 'Snowboarding Gear');
INSERT INTO category(id, name) VALUES(54, 'Climbing Gear');
INSERT INTO category(id, name) VALUES(55, 'Ski Equipment');
INSERT INTO category(id, name) VALUES(56, 'Basketball Gear');
INSERT INTO category(id, name) VALUES(57, 'Soccer Gear');
INSERT INTO category(id, name) VALUES(58, 'Golf Equipment');
INSERT INTO category(id, name) VALUES(59, 'Tennis Gear');
INSERT INTO category(id, name) VALUES(60, 'Baseball Gear');
INSERT INTO category(id, name) VALUES(61, 'Hockey Equipment');
INSERT INTO category(id, name) VALUES(62, 'Volleyball Gear');
INSERT INTO category(id, name) VALUES(63, 'Boxing Equipment');
INSERT INTO category(id, name) VALUES(64, 'Martial Arts Gear');
INSERT INTO category(id, name) VALUES(65, 'Archery Equipment');
INSERT INTO category(id, name) VALUES(66, 'Dance Accessories');
INSERT INTO category(id, name) VALUES(67, 'Weightlifting Equipment');
INSERT INTO category(id, name) VALUES(68, 'Running Gear');
INSERT INTO category(id, name) VALUES(69, 'Walking Shoes');
INSERT INTO category(id, name) VALUES(70, 'Cycling Gear');
INSERT INTO category(id, name) VALUES(71, 'Water Sports Equipment');
INSERT INTO category(id, name) VALUES(72, 'Roller Skating Gear');
INSERT INTO category(id, name) VALUES(73, 'Ice Skating Gear');
INSERT INTO category(id, name) VALUES(74, 'Fishing Gear');
INSERT INTO category(id, name) VALUES(75, 'Camping Furniture');
INSERT INTO category(id, name) VALUES(76, 'Outdoor Cooking Equipment');
INSERT INTO category(id, name) VALUES(77, 'Hammocks');
INSERT INTO category(id, name) VALUES(78, 'Tents');
INSERT INTO category(id, name) VALUES(79, 'Sleeping Bags');
INSERT INTO category(id, name) VALUES(80, 'Backpacks');
INSERT INTO category(id, name) VALUES(81, 'GPS Devices');
INSERT INTO category(id, name) VALUES(82, 'Binoculars');
INSERT INTO category(id, name) VALUES(83, 'Compasses');
INSERT INTO category(id, name) VALUES(84, 'Water Bottles');
INSERT INTO category(id, name) VALUES(85, 'First Aid Kits');
INSERT INTO category(id, name) VALUES(86, 'Flashlights');
INSERT INTO category(id, name) VALUES(87, 'Pocket Knives');
INSERT INTO category(id, name) VALUES(88, 'Multitools');
INSERT INTO category(id, name) VALUES(89, 'Sunscreen');
INSERT INTO category(id, name) VALUES(90, 'Insect Repellent');
INSERT INTO category(id, name) VALUES(91, 'Portable Chargers');
INSERT INTO category(id, name) VALUES(92, 'Solar Panels');
INSERT INTO category(id, name) VALUES(93, 'Camp Showers');
INSERT INTO category(id, name) VALUES(94, 'Camp Chairs');
INSERT INTO category(id, name) VALUES(95, 'Coolers');
INSERT INTO category(id, name) VALUES(96, 'Outdoor Clothing');
INSERT INTO category(id, name) VALUES(97, 'Rain Gear');
INSERT INTO category(id, name) VALUES(98, 'Trekking Poles');
INSERT INTO category(id, name) VALUES(99, 'Climbing Shoes');
INSERT INTO category(id, name) VALUES(100, 'Swimming Gear');
  -- SELECT LEFT(md5(i::TEXT), 10), random() FROM generate_series(1, 10) s(i);
SELECT * FROM category;


CREATE TABLE "user"(id SERIAL PRIMARY KEY, email TEXT NOT NULL UNIQUE, password_hash TEXT NOT NULL, name TEXT, selected_categories TEXT);

-- CREATE TABLE auth(id SERIAL PRIMARY KEY, user_id integer REFERENCES "user"(id), password_hash TEXT NOT NULL);

