# PET HOTEL PROJECT - Front End

## Description

The Pet Hotel Project is a web application that allows a person that owns a pet hotel to manage owners and their pets. They do this by simply creating an owner in the owner form then add pets to that owners name under the home page. The manager can then manage the pets that are checked into their hotel by clicking on the checkin and checkout button. If a person no longer uses the pet hotel a manager can remove the customer by clicking on the delete button.

## Collaborators
- [Jordan Walker](https://github.com/Jaden-Reklaw)
- [Zach Battaglia](https://github.com/zbattaglia)
- [Mustafa Ibrahim](https://github.com/MustafaIbrahim4)
- [Max Faust](https://github.com/MaxFaust)

## Screen Shot
![ ADD ENTRY PAGE | HOME PAGE](https://github.com/Jaden-Reklaw/pet_hotel_project/blob/master/img/ADD_PET.png "Example of the home page where the manager can add pets")

![ ADD ENTRY PAGE | OWNER PAGE](https://github.com/Jaden-Reklaw/pet_hotel_project/blob/master/img/ADD_OWNER.png "Example of the owners page where the manager can create owners")

### Prerequisites
- [Node.js](https://nodejs.org/en/)

## Installation
1. Clone repository or download zip folder.
2. cd into correct directory from terminal
3. Run npm install
4. Run npm start and it should load in your default browser

## Usage
1. Manager can create owners on the owner's page
2. Manager can add pets to that owner's name on the home page
3. Manager can delete the owner than their pets will be removed from the hotel
4. Remove a pet from the hotel if the owner does not have the pet anymore
5. Manager can check the pet into and out of the hotel
6. On the owner page you can see the count of how many pets an owner has

## Server-Side Expectations

Routes:
 - GET    /api/owner - Display owner list. Each row must contain: id, name, pet_count 
 - POST   /api/owner - Add an owner. Body contains the name
 - DELETE /api/owner - Remove an owner by id
 - GET    /api/pet/ - Display pet list. Each row must contain: id (pet ID), owners_name, pets_name,breed, color, & checked_in (boolean)
 - POST   /api/pet/ - Add a pet. Body contains the owner_id, name, color, & breed.
 - PUT    /api/pet/checkin/:id - Check-in a pet by id
 - DELETE /api/pet/:id - Remove a pet by id


## Built With
- HTML
- CSS
- Javascript
- Node.js
- PostgreSQL
- React.js
- React Redux
- React Sagas
- React Router
- React Logger

## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality. Special shout out to my instructors Mary and Kris for helping become the programmer we always dreamed of and to my cohort at Prime, Dijkstra!! Woot Woot, Help for Life!
