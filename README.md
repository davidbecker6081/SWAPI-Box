# SWAPI-Box


## Overview

Who doesn't like Star Wars?! SWAPI-Box used the Star Wars API to tap into various data sets with nested URLs of more data. The goal was to create an application that allowed users to view and favorite different people, planets, and vehicles from Star Wars, create a scrolling effect, and design a loading screen. Challenges with the project included learning Promise.all, writing nested Promises, using React Lifecycle Methods, implementing propTypes, and testing with fetch-mock. This was a 3-day partner project. Credits: Dan Alvarez.


![User Interface](https://i.imgur.com/dFlmnE6.png)


## Set Up

Fork this project

Run `npm install` from the root directory

Run `npm start` and visit localhost:3000 in your browser

You can begin running your tests with `npm test`

## Original Project Requirements 

### Project Goals

* Get comfortable whipping together React components on your own with the additional complexity of implementing React Router (if you want to).
* Write squeaky clean, well refactored code using ES6 syntax.
* Make informed design decisions to create a user-friendly application.
* Keep state based components to a minimum and leverage more functional components.
* Use a modular architecture for your application file structure.
* Think deeply about React Lifecycle Methods.
* Use propTypes for every component receiving props.

### Project Requirements

This project is broken out into multiple iterations. You are expected to complete all required iterations for a passing score, additional extensions are provided to push your comfort level.  

#### Iteration 0: Landing Page
* When the app starts up '/' the user should see the opening scrolling text of a random film, with the title of the film and release year listed below.
* There should be buttons to browse three different categories: People, Planets, and Vehicles.
* There should be a button to view favorites, with the number of current favorites indicated.

#### Iteration 1: Get People
* When a user clicks on People, the page is populated with cards with data for each person.
* The cards should have:
	- Name
	- Homeworld
	- Species
	- Population of Homeworld
	- A button to “Favorite” the person
* The button should have an active class indicating it has been pressed.

#### Iteration 2: Get Planets/Vehicles
* When a user clicks on any of the other buttons, the data should then represent the button pressed.
* Planet Cards:
	- Name
	- Terrain
	- Population
	- Climate
	- Residents
	- A button to “Favorite” the planet
* Vehicle Cards:
	- Name
	- Model
	- Class
	- Number of Passengers

#### Iteration 3: Favorites
* There should be a button on each card to save it to Favorites
* There should also be a button that when clicked, displays only the favorited cards
* User should be able to unfavorite a card
* If there are no favorites, there should be message indicating that there are no favorites

## Extensions

* Implement a More button. When clicked, the next 10 items of that category should be shown. There should be a Back button to go back to the previous page.
* Use localStorage to persist data.
