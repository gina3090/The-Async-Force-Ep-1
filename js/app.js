// jshint esversion: 6

(function(window) {

function person4Name() {
  // console.log('person4Info', this.responseText);
  let person = JSON.parse(this.responseText);
  // console.log('person4', person);
  let personName = person.name;
  // console.log('person4Name', person.name);
  document.getElementById("person4Name").innerHTML = person.name;
  // console.log('person4HomeWorld', person.homeworld);
}

const personFourName = new XMLHttpRequest();
personFourName.addEventListener("load", person4Name);
personFourName.open("GET", "http://swapi.co/api/people/4/");
personFourName.send();

function person4Home() {
  // console.log('person4HomeInfo', this.responseText);
  let home = JSON.parse(this.responseText);
  // console.log(home);
  let homeName = home.name;
  // console.log('person4Home', home.name);
  document.getElementById("person4HomeWorld").innerHTML = home.name;
}

const personFour = new XMLHttpRequest();
personFour.addEventListener("load", person4);
personFour.open("GET", "http://swapi.co/api/people/4/");
personFour.send();

const personFourHome = new XMLHttpRequest();
personFourHome.addEventListener("load", person4Home);
personFourHome.open("GET", "http://swapi.co/api/planets/1/");
personFourHome.send();

function person14Name() {
  // console.log('person14Info', this.responseText);
  let person = JSON.parse(this.responseText);
  // console.log('person14', person);
  let personName = person.name;
  // console.log('person14Name', person.name);
  document.getElementById("person14Name").innerHTML = person.name;
  // console.log('person14Species', person.species);
}

const personFourteenName = new XMLHttpRequest();
personFourteenName.addEventListener("load", person14Name);
personFourteenName.open("GET", "http://swapi.co/api/people/14/");
personFourteenName.send();

function person14Species() {
  // console.log('person14SpeciesInfo', this.responseText);
  let species = JSON.parse(this.responseText);
  // console.log('person14Species', species.name);
  document.getElementById("person14Species").innerHTML = species.name;
}

const personFourteenSpecies = new XMLHttpRequest();
personFourteenSpecies.addEventListener("load", person14Species);
personFourteenSpecies.open("GET", "http://swapi.co/api/species/1/");
personFourteenSpecies.send();

let filmList = document.getElementById("filmList");

let filmClass = document.createElement("div");
filmClass.className = "film";
filmList.appendChild(filmClass);

function filmsList() {
  // console.log('filmsInfo', this.responseText);
  let film = JSON.parse(this.responseText);
  // console.log('filmsList', film.results);
  let filmResults = film.results;
  // console.log('film1', film.results[0]);

  let filmTitle = document.createElement("h2");
  filmTitle.className = "filmTitle";
  filmTitle.innerHTML = "Films";
  filmClass.appendChild(filmTitle);

  for(var i = 0; i < filmResults.length; i++) {
    var filmsList = document.createElement("li");
    filmsList.innerHTML = filmResults[i].title;
    filmClass.appendChild(filmsList);
  }

}

const getFilms = new XMLHttpRequest();
getFilms.addEventListener("load", filmsList);
getFilms.open("GET", "http://swapi.co/api/films/");
getFilms.send();

function planetsList() {
  // console.log('filmsInfo', this.responseText);
  let film = JSON.parse(this.responseText);
  // console.log('filmsList', film.results);
  let filmResults = film.results[0];
  // console.log('planetsInfo', film.results[0].planets);
  let planetResults = film.results[0];

  let planetsTitle = document.createElement("h3");
  planetsTitle.innerHTML = "Planets";
  filmClass.appendChild(planetsTitle);

  let filmPlanets = document.createElement("ul");
  filmPlanets.className = "filmPlanets";
  filmClass.appendChild(filmPlanets);

  let planet = document.createElement("li");
  planet.className = "planet";
  filmPlanets.appendChild(planet);

  let planetName = document.createElement("h4");
  planetName.className = "planetName";
  filmPlanets.appendChild(planetName);

}

const getPlanets = new XMLHttpRequest();
getPlanets.addEventListener("load", planetsList);
getPlanets.open("GET", "http://swapi.co/api/films/");
getPlanets.send();

}(window));
