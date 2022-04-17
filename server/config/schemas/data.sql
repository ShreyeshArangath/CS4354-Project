USE unter;

SHOW TABLES;


-- Drivers 
INSERT INTO DRIVER VALUES ("Elon", "Musk", '2000-01-01', "elon.musk@twitter.com", 20, 5);
INSERT INTO DRIVER VALUES ("Jeff", "Bezos", '1789-03-01', "jeff.bezos@alibaba.com", 23, 2.96);
INSERT INTO DRIVER VALUES ("Satya", "Nadella", '1978-01-01', "satya.nadella@microsoft.com", 95, 4.5);

-- Passengers 
INSERT INTO PASSENGER VALUES ("Jack", "Dorsey", '2000-01-21', "jack.dorsey@tesla.com", 15, 3.95);
INSERT INTO PASSENGER VALUES ("Timothy", "Cook", '1964-01-21', "tcook@apple.com", 45, 5);
INSERT INTO PASSENGER VALUES ("Mark", "Zuckerberg", '1992-01-21', "zucky@meta.com", 15, 3.5);

SELECT * FROM DRIVER;

ALTER TABLE TRIP AUTO_INCREMENT=1;
ALTER TABLE PAYMENT AUTO_INCREMENT=1;

-- Trips 
-- IN QUEUE - Dorsey 
INSERT INTO TRIP(PRICE, STATE, toAddress, fromAddress, tripRequestedTime) 
VALUES(50, "IN_QUEUE", "2210 Main St, Lubbock TX", "2212 Main St, Lubbock TX", CURTIME());

-- In Progesss - Zuck & Elon 
INSERT INTO TRIP(PRICE, STATE, toAddress, fromAddress, tripRequestedTime) 
VALUES(150, "IN_PROGRESS", " 1 Hacker Way, Menlo Park, CA", "Giga Factory, Austin, TX", CURTIME());

-- completed satya, tim
INSERT INTO TRIP(PRICE, STATE, toAddress, fromAddress, tripRequestedTime) 
VALUES(20.95, "COMPLETED", " One Microsoft Way Redmond, WA", "1 Apple Park Way, Cupertino, CA", CURTIME());

SELECT * FROM TRIP;

-- PassengerTrips
INSERT INTO PASSENGER_TRIPS VALUES (1, "jack.dorsey@tesla.com");
INSERT INTO PASSENGER_TRIPS VALUES (3, "tcook@apple.com");
INSERT INTO PASSENGER_TRIPS VALUES (2, "zucky@meta.com");

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
    p.totalTrips as passenger_totalTrips, 
    p.rating as passenger_ratings, 
    p.dob as passenger_dob, 
	d.fname as driver_fname, 
    d.lname as driver_lname, 
    d.userID as driver_userID,
    d.totalTrips as driver_totalTrips, 
    d.rating as driver_ratings, 
    d.dob as driver_dob 
    FROM PASSENGER p, DRIVER d, TRIP t 
	WHERE p.userID IN (SELECT passengerID FROM PASSENGER_TRIPS WHERE tripID = t.tripID)  
    AND d.userID IN (SELECT driverID FROM DRIVER_TRIPS WHERE tripID = t.tripID)  
	AND t.state="IN_PROGRESS";



