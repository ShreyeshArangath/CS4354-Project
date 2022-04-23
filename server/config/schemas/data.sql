USE unter;

SHOW TABLES;


-- Drivers 
INSERT INTO DRIVER VALUES ("Elon", "Musk", '2000-01-01', "elon.musk@twitter.com");
INSERT INTO DRIVER VALUES ("Jeff", "Bezos", '1789-03-01', "jeff.bezos@alibaba.com");
INSERT INTO DRIVER VALUES ("Satya", "Nadella", '1978-01-01', "satya.nadella@microsoft.com");

-- Passengers 
INSERT INTO PASSENGER VALUES ("Jack", "Dorsey", '2000-01-21', "jack.dorsey@tesla.com");
INSERT INTO PASSENGER VALUES ("Timothy", "Cook", '1964-01-21', "tcook@apple.com");
INSERT INTO PASSENGER VALUES ("Mark", "Zuckerberg", '1992-01-21', "zucky@meta.com");

SELECT * FROM DRIVER;

ALTER TABLE TRIP AUTO_INCREMENT=1;
ALTER TABLE PAYMENT AUTO_INCREMENT=1;

-- Trips 
-- IN QUEUE - Dorsey 
INSERT INTO TRIP(PRICE, STATE, toAddress, fromAddress, tripRequestedTime, numPassengers) 
VALUES(50, "IN_QUEUE", "2210 Main St, Lubbock TX", "2212 Main St, Lubbock TX", CURTIME(), 1);

-- In Progesss - Zuck & Elon 
INSERT INTO TRIP(PRICE, STATE, toAddress, fromAddress, tripRequestedTime, numPassengers) 
VALUES(150, "IN_PROGRESS", " 1 Hacker Way, Menlo Park, CA", "Giga Factory, Austin, TX", CURTIME(), 1);

-- completed satya, tim
INSERT INTO TRIP(PRICE, STATE, toAddress, fromAddress, tripRequestedTime, numPassengers) 
VALUES(20.95, "COMPLETED", " One Microsoft Way Redmond, WA", "1 Apple Park Way, Cupertino, CA", CURTIME(), 2);

-- in queue - tim 
INSERT INTO TRIP(PRICE, STATE, toAddress, fromAddress, tripRequestedTime, numPassengers) 
VALUES(22, "IN_QUEUE", "605 W Maude Ave, Sunnyvale, CA", "1 Apple Park Way, Cupertino, CA", CURTIME(), 3);

SELECT * FROM TRIP;

-- PassengerTrips
INSERT INTO PASSENGER_TRIPS VALUES (1, "jack.dorsey@tesla.com");
INSERT INTO PASSENGER_TRIPS VALUES (3, "tcook@apple.com");
INSERT INTO PASSENGER_TRIPS VALUES (2, "zucky@meta.com");
INSERT INTO PASSENGER_TRIPS VALUES (4, "tcook@apple.com");

-- DriverTrips 
INSERT INTO DRIVER_TRIPS VALUES (2, "elon.musk@twitter.com"); 
INSERT INTO DRIVER_TRIPS VALUES (3, "satya.nadella@microsoft.com"); 

-- PAYMENT 
INSERT INTO PAYMENT (tripID, paymentMethod) VALUES (1, "CASH");
INSERT INTO PAYMENT (tripID, paymentMethod) VALUES (2, "CREDIT");
INSERT INTO PAYMENT (tripID, paymentMethod) VALUES (3, "DEBIT");

SELECT * FROM DRIVER_TRIPS;

-- Other tests 
SELECT * FROM TRIP; 
SELECT t.* , 
	p.fname as passenger_fname, 
    p.lname as passenger_lname, 
    p.userID as passenger_userID,
    p.dob as passenger_dob, 
	d.fname as driver_fname, 
    d.lname as driver_lname, 
    d.userID as driver_userID,
    d.dob as driver_dob 
    FROM PASSENGER p, DRIVER d, TRIP t 
	WHERE p.userID IN (SELECT passengerID FROM PASSENGER_TRIPS WHERE tripID = t.tripID)  
    AND d.userID IN (SELECT driverID FROM DRIVER_TRIPS WHERE tripID = t.tripID)  
	AND t.state="IN_PROGRESS";


UPDATE TRIP set passengerRating = 4 WHERE tripID = 3;
UPDATE TRIP set driverRating = 4.2 WHERE tripID = 3;
SELECT * FROM passengerRating;
SELECT * FROM driverRating WHERE userID="elon.musk@twitter.com";


