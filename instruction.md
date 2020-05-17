# PROJECT NAME
	#PET HOTEL PROJECT

## Description
_Duration: 3 Days_

The Pet Hotel Project is a web application that allows a person that owns a pet hotel to manage owners and their pets. They do this by simply creating an owner in the owner form then add pets to that owners name under the home page. The manager can then manage the pets that are checked into their hotel by clicking on the checkin and checkout button. If a person no longer uses the pet hotel a manager can remove the customer by clicking on the delete button.

To see the fully functional website, please visit: [DEPLOYED VERSION OF APP](https://aqueous-waters-27132.herokuapp.com/)

## Screen Shot
Example Base Mode Server Side Calculator
![ ADD ENTRY PAGE | HOME PAGE](https://github.com/Jaden-Reklaw/To-Do-List-App/blob/master/img/TODO_LIST_FORM.png "Example of the form to create a task")
Example Stretch Mode Server Side Calculator
![ ADD ENTRY PAGE | OWNER PAGE](https://github.com/Jaden-Reklaw/To-Do-List-App/blob/master/img/LIST_OF_TASKS.png "Example of the list that holds all the tasks")

### Prerequisites
- [Node.js](https://nodejs.org/en/)
- [PostgreSQL](https://eggerapps.at/postico/)

## Database

Create a database in Postico called *pet_hotel* and run the SQL commands in the table_queries.sql.

## Installation
1. Clone repository or download zip folder.
2. cd into correct directory from terminal
3. Run npm install
4. Run npm start and it should load in your default browser
5. Follow the steps from the database section to create the correct database and tables

## Features
- Add owners
- Add pets
- Remove owners if no pets are assigned
- Remove pets
- Check in / out a pet
- Show total number of pet next to each owner

## Usage
1. Once application is running a person can simply enter inputs in the following fields:
Task Name(name of task), Task Description(brief summary of task), Location(place the task is performed), and Date Due(when the task needs to be completed by). After the fields are completed then the user can hit enter and it will create the task.

2. Edit and Update currently not working. Orignially I had a each field set to contenteditable which allow a user to edit all fields when ever with out having to click update and the list would be change with the new content.

3.) Once a user is finished with a task they can simply click on scheduled button in order to show a green completed text to show they are done with a task.

4.) If a user creates a task they don't want anymore or by accident they can simply click the x button that will remove the task from the list.

## Built With
- HTML
- CSS
- Javascript
- Node.js
- Express.js
- PostgreSQL
- React.js
- React Redux
- React Sagas
- React Router
- React Logger
- TypeScript

## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality. Special shout out to my instructors Mary and Kris for helping become the programmer I always dreamed of and to my cohort at Prime Dijkstra!! Woot Woot, Help for Life!