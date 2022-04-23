# CS-4354 Related Details 
## Project Description

# API Calls: 
Admin: 
{delete} api/admin/trips/:tripID       Delete the trip with the given trip ID
{get} api/admin/trips/:state       Get all trips based on a given state
{get} api/admin/passengers       Get all passengers
{get} api/admin/drivers       Get all drivers
{get} api/admin/drivers/:userID       Get driver info
{get} api/admin/passengers/:userID       Get passenger info

Driver: 
{get} api/driver/trips       Get a list of the trips that are In-Queue  
{get} api/driver/trips/:tripID       Get the information about a particular trip  
{get} api/driver/rating/:userID       Get the rating info for a driver 
{get} api/driver/trips/payment/:tripID       Get the driver payment amount
{post} api/driver/trips/accept/:tripID&:driverID      Accept a trip that is In-Queue  
{post} api/driver/trips/completed/:tripID     Complete a ride  
{post} api/driver/trips/rating/:tripID     Rate a ride  

Passenger: 
{post} api/passenger/trips/request Request a trip 
{get} api/passenger/rating/:userID       Get the rating info for a passenger 
{post} api/passenger/trips/rating/:tripID     Rate a ride  
{get} api/passenger/trips/driver/:tripID       Get the driver details of a specific trip
## Project Diagrams
## Project Report 
