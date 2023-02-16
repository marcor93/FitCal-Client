client dependencies:
sass, axios, react-router-dom, react-calendar,
Git Client: https://github.com/marcor93/FitCal-Client

server dependencies:
express, knex, cors, jwt, sql
Git Server: https://github.com/marcor93/FitCal-Server

database variables:
schema: fitcal
table: activity

3rd party API: https://api-ninjas.com/api/exercises

Fitcall is a cross-discipline activity tracking application build utilizing a React Client, Express Server, 3rd party API, and SQL Database.

To get started:

1. Download the Client and Server files from git
2. Install all node dependencies
3. Create a new schema in SQL called 'fitcal'
4. Create a table in your database called 'activity' by running 'knex migrate:latest'
   OPTIONAL: to seed data for demo purposes, run 'knex seed:run'
5. Sign up for a free API-Ninja's account and register to receive your own API Key. You will need to add this key to your clients .env file as per the example below:

REACT_APP_API_Key = "FIPnK0XCT3v/q/eS+gkchg==0nDqaK71uaG7NLIJ" <- not a real key

Or you can hard code in your api code on line 24 of Library.js

How to use the app:
This app currently uses simple server side verification at the login page, matching passwords is the only constraint when making an account. (To bypass the login should issues occur during demo, you can also click the logo in the header to redirect to the activity page. This bypass can be turned off with state when going live.

Once in the app, a user click either the cardio or workout buttons at the top of the page to submit a new event. The forms utilize a point and click calendar, drop down menus, and text fields to guide users through the forms.

For workouts, a user can enter up to 5 exercises by clicking the more button, but these fields are NOT mandatory should the user not wish to submit this extra data.

Should a user not know what exercises fall into which category, they can access the exercise library at the bottom of the page by selecting a muscle group and clicking go. Once data is returned each exercise name can be clicked to toggle more information about the specific exercise.

Once back on the main activity page, each activity can be clicked on to see more information about the specific event, as well as edit all fields or delete it all together.
