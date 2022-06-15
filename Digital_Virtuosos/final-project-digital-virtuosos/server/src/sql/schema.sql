-- NOTE: I figured we'd want this for the section on SQL
PRAGMA foreign_keys;

-- NOTE: For the SQL assignment, we could have them normalize
-- this database farther. Perhaps they can learn about SERIAL and
-- then go implement a way to change a room_name without losing
-- references by using a FOREIGN KEY into a rooms table with an 
-- int primary key.
-- CREATE TABLE albums (
-- 	id int NOT NULL PRIMARY KEY,
-- 	album_title text NOT NULL
-- );

CREATE TABLE songs (
	id int NOT NULL PRIMARY KEY,
	song_title text NOT NULL,
	notes varchar NOT NULL,
	artist varchar,
	album varchar
);

INSERT INTO songs (id, song_title, artist, notes) 
VALUES (1, 'Ode to Joy (Dubstep Remix)', "Beethoven", 'E4 E4 F4 G4 G4 F4 E4 D4 C4 C4 D4 E4 E4 D4 D4');

INSERT INTO songs (id, song_title, artist, album, notes)
VALUES (2, "Clocks", "Coldplay", "A Rush of Blood to the Head", "E5 B4 G4 E5 B4 G4 E5 B4 D5 B4 F4 D5 B4 F4 D5 B4 D5 B4 F4 D5 B4 F4 D5 B4 C5 A4 F4 C5 A4 F4 C5 A4");

INSERT INTO songs (id, song_title, artist, notes)
VALUES (3, 'You', "Petit Biscuit", "E5 C5 A4 G4 A4 C5 E5 C5 E5 C5 E5 A5 G5 C5 E5 C5 E5 C5 A4 G4 A4 C5 E5 C5 E5 C5 A4 F5");

INSERT INTO songs(id, song_title, artist, notes)
VALUES(4, 'We Wish You a Merry Christmas',"Arthur Warrell", "C4 F4 F4 G4 F4 E4 D4 D4 D4 G4 G4 A4 G4 F4 E4 C4 C4 A4 A4 B4 A4 G4 F4 D4 C4 C4 D4 G4 E4 F4");

INSERT INTO songs(id, song_title, artist, notes)
VALUES(5, 'Hey There Delilah', "Tom Higgenson", "G4 G4 G4 G4 F4 E4 F4 G4 G4 G4 A4 G4 F4 E4 F4 G4 G4 G4 G4 G4 F4 E4 F4 G4 G4 G4 A4 G4 F4 E4 D4" );

INSERT INTO songs(id, song_title, artist, notes)
VALUES(6, 'Frosty the Snow Man', "Steve Nelson", "G4 E4 F4 G4 C5 B4 C5 D5 C5 B4 A4 G4 B4 C5 D5 C5 B4 A4 A4 G4 C5 E4 G4 A4 G4 F4 E4 F4 G4");

INSERT INTO songs(id, song_title, artist, notes)
VALUES(7, 'Just the Way You Are', "Bruno Mars", "C5 C5 C5 A4 C5 C5 A4 C5 C5 C5 C5 A4 C5 D5 C5 A4 C5 C5 A4 C5 C5 A4 C5 C5 A4 C5 A4 C5 D5 C5 A4");

INSERT INTO songs(id, song_title, artist, notes)
VALUES(8, 'Someone Like You', "Adele","A3 C4 E4 C4 A3 C4 E4 C4 A3 C4 E4 C4 A3 C4 E4 C4 G3 C4 E4 C4 G3 C4 E4 C4 G3 C4 E4 C4 G3 C4 E4 C4 F3 C4 F4 C4 F3 C4 F4 C4 F3 C4 F4 C4 F3 C4 F4 C4 A3 D4 F4 D4 A3 D4 F4 D4 A3 D4 F4 D4 A3 D4 F4 D4");

INSERT INTO songs(id, song_title, artist, notes)
VALUES(9, 'A Thousand Miles', "Vanessa Carlton", "C5 C5 C5 B4 C5 B4 G4 C4 G4 C4 E4 D4 C4 C5 C5 C5 B4 C5 B4 G4 C4 G4 C4 E4 F4 E4 C4");

INSERT INTO songs(id, song_title, artist, notes)
VALUES(10, '7 Years', "Lukas F.", "E5 D5 D5 B4 D5 A4 G4 E4 B4 D5 A4 G4 E4 B4 A4 A4 A4 A4 A4 A4 G4 B4 A4 G4 E5 D5 D5 B4 D5 A4 G4");

INSERT INTO songs(id, song_title, artist, notes)
VALUES(11, 'Good 4 U', "Olivia Rodrigo", "G4 G4 A4 B4 A4 G4 A4 B4 A4 G4 A4 B4 D5 B4 G4 G4 A4 B4 A4 G4 A4 B4 A4 G4 A4 B4 D5 B4 G4 G4 A4 B4 A4 G4 A4 B4 A4 G4 A4 B4 B4 B4 B4");

INSERT INTO songs(id, song_title, artist, notes)
VALUES(12, "Star Wars", 'John Williams', "D4 D4 D4 G4 D5 C5 B4 A4 G5 D5 C5 B4 A4 G5 D5 C5 B4 C5 A4 D4 D4 G4 D5 C5 B4 A4 G5 D5 C5 B4 A4 G5 D5 C5 B4 C5 A4");

INSERT INTO songs(id, song_title, artist, notes)
VALUES(13, 'Before He Cheats', "Carrie Underwood", "A4 E4 C4 D4 C4 D4 D4 E4 D4 C4 E4 D4 D4 D4 C4 D4 E4 D4 C4 D4 C4 A4 E4 C4 D4 C4 D4 C4 E4 A3 D4 E4 D4 C4 E4 D4 C4 E4 D4 C4 D4 C4");

INSERT INTO songs(id, song_title, artist, notes)
VALUES(14, 'Fly Me to the Moon', "Bart Howard", "C5 B4 A4 G4 F4 G4 A4 C5 B4 A4 G4 F4 E4 A4 G4 F4 E4 D4 E4 F4 A4 G4 F4 E4 D4 C4");

INSERT INTO songs(id, song_title, artist, notes)
VALUES(15, 'Deck the Hall', "John Hughes", "G4 F4 E4 D4 C4 D4 E4 C4 D4 E4 F4 D4 E4 D4 C4 B3 C4 G4 F4 E4 D4 C4 D4 E4 C4 D4 E4 F4 D4 E4 D4 C4 B3 C4");

INSERT INTO songs(id, song_title, artist, notes)
VALUES(16,'Wildest Dreams', "Taylor Swift", "G4 G4 G4 G4 A4 G4 A4 B4 A4 B4 B4 G4 E4 D4 G4 A4 B4 B4 E4 E4 D4 G4 G4 G4 G4 G4 A4 G4 B4 A4 B4 B4 E4 E4 D4 D4 G4 A4 A4 G4 B4 G4 G4");

INSERT INTO songs(id, song_title, artist, notes)
VALUES(17, 'See You Again', "Cameron Thomaz", "F4 A4 C5 D5 C4 F4 G4 G4 F4 A4 A4 C5 D5 E5 D5 C5 A4 G4 G4 F4 G4 G4 A4 F4 F4 A4 C5 D5 C5 F4 G4 G4 F4 A4 A4 C5 D5 F5 G5 A5 G5 F5 D5 F5 G5 G5 F5 F5");

INSERT INTO songs(id, song_title, artist, notes)
VALUES(18, 'Old Town Road', "Lil Nas X Billy Ray Cyrus", "E5 E5 E5 E5 D5 C5 A4 A4 E5 D5 D5 A4 A4 G4 D5 D5 E5 C5 B4 B4 A4 A4 A4 E5 D5 C5 A4 A4 E5 D5 D5 A4 A4 G4 D5 D5 E5 C5 A4 A4");

INSERT INTO songs(id, song_title, artist, notes)
VALUES(19, 'Be Our Guest', "Alan Menken", "B4 D5 G5 B4 D5 F5 B4 D5 E5 D5 B4 G4 D4 C5 D5 E5 D5 C5 D5 E5 D5 C5 D5 E5 D5 C5 A4 F4 C4 E4 A5 C5 E5 G5 C5 E5 G5 F5 E5 C5");

INSERT INTO songs(id, song_title, artist, notes)
VALUES(20, 'Do You Want To Build A Snowman', "Kristen Lopez", "F4 F4 F4 C4 F4 A4 G4 A4 F4 F4 C4 F4 A4 G4 F4 F4 C4 F4 A4 B4 A4 F4 C4 B4 A4 F4 F4 F4 C4 F4 A4 C5 C5 C5 B4 A4 B4 C5 F4 F4 F4 G4 A4 F4 F4 G4 A4 G4 F4 G4 A4 D5");
