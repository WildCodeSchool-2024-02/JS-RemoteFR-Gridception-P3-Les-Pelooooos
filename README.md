## Concept

GeoCode is developing a web application to provide electric vehicle users with an interactive map linking available charging points to vehicles via geolocation.

## Features

#In the current version

- Site presentation page.

- Contact page (form containing a drop-down list: Information request, Partnership request, Other).

- Map page (geolocation).

- Registration page (CUSTOMER INFORMATION, VEHICLE(S) INFORMATION).

- Login page (login and disconnect).

- Vehicle page for modifying or deleting my vehicle(s).

- Terminal page, only accessible from the card if the user has at least one vehicle.

- My reservations” tab for cancelling a charging station reservation.

- Administration page containing all related information.

- Administration page tab for reading, modifying or deleting (user, vehicle, charging station).

- Administration page tab for uploading a CSV file to update the complete list of charging stations.

#Upcoming

- Page containing useful information for electric vehicle owners (different types of plugs, tips...).

- Page containing various recent articles entered by the administrator.

- Markers added to the map, allowing access from the map to the websites of dealers offering electric vehicles around the user's location.

- Profile page, lets me add, modify or delete a profile picture.

- Vehicle page, allows me to add, modify or delete a vehicle image.

- Administration page tab showing total number of registered users, number of users registered in the last 7 days, total number of vehicles, total number of vehicles by filters (makes, models).

- Administration page tab for viewing, creating, modifying or deleting news items.

## Setup & Use

# Project Initialization

- In VSCode, install plugins Prettier - Code formatter and ESLint and configure them.

- Clone this repo with the ssh key.

- Type this command in your terminal if you're running Windows:

  - git config --global core.eol lf,
  - git config --global core.autocrlf false.

- Run command npm i and npm run dev.

- NB: To launch the backend server, you'll need an environment file with database credentials. You'll find a template one in backend/.env.sample.

## Available Commands

- setup : Initialization of frontend and backend, as well as all toolings.
- migrate : Run the database migration script.
- dev : Starts both servers (frontend + backend) in one terminal.
- dev-front : Starts the React frontend server.
- dev-back : Starts the Express backend server.
- lint : Runs validation tools, and refuses unclean code (will be executed on every commit).
- fix : Fixes linter errors (run it if lint growls on your code !).

## FAQ

- The Template used for this project is a fullstack foundation template made by the Wild Code School.

- All pictures and icons from this project are open source. Most of them come from website free copyright picture.

- Don't forget to create your frontend and backend .env files by copying the .env.sample files from each directory.

## Technologies

- JS.
- React.
- Node.
- Express.
- MySQL.

## Tools

- Concurrently : Allows for several commands to run concurrently in the same CLI.

- Husky : Allows to execute specific commands that trigger on git events.

- Vite : Alternative to Create-React-App, packaging less tools for a more fluid experience.

- ESLint : "Quality of code" tool, ensures chosen rules will be enforced.

- Prettier : "Quality of code" tool as well, focuses on the styleguide.

- Airbnb Standard : One of the most known "standards", even though it's not officially linked to ES/JS.

- Nodemon : Allows to restart the server everytime a .js file is udated.
