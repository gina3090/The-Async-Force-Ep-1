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

function filmList() {
  // console.log('filmsInfo', this.responseText);
  let film = JSON.parse(this.responseText);
  console.log('filmsList', film.results);
  let filmResults = film.results;
  // console.log('film1', film.results[0]);

  let filmList = document.getElementById("filmList");

  let filmClass = document.createElement("div");
  filmClass.className = "film";
  filmList.appendChild(filmClass);

  let filmTitle = document.createElement("h2");
  filmTitle.className = "filmTitle";
  filmTitle.innerHTML = "Film Titles";
  filmClass.appendChild(filmTitle);

  let filmName1 = film.results[0].title;
  // console.log('film1Title', film.results[0].title);
  let film1 = document.createElement("li");
  film1.innerHTML = film.results[0].title;
  filmClass.appendChild(film1);

  let filmName2 = film.results[1].title;
  // console.log('film2Title', film.results[1].title);
  let film2 = document.createElement("li");
  film2.innerHTML = film.results[1].title;
  filmClass.appendChild(film2);

  let filmName3 = film.results[2].title;
  // console.log('film3Title', film.results[2].title);
  let film3 = document.createElement("li");
  film3.innerHTML = film.results[2].title;
  filmClass.appendChild(film3);

  let filmName4 = film.results[3].title;
  // console.log('film4Title', film.results[3].title);
  let film4 = document.createElement("li");
  film4.innerHTML = film.results[3].title;
  filmClass.appendChild(film4);

  let filmName5 = film.results[4].title;
  // console.log('film5Title', film.results[4].title);
  let film5 = document.createElement("li");
  film5.innerHTML = film.results[4].title;
  filmClass.appendChild(film5);

  let filmName6 = film.results[5].title;
  // console.log('film6Title', film.results[5].title);
  let film6 = document.createElement("li");
  film6.innerHTML = film.results[5].title;
  filmClass.appendChild(film6);

  let filmName7 = film.results[6].title;
  // console.log('film7Title', film.results[6].title);
  let film7 = document.createElement("li");
  film7.innerHTML = film.results[6].title;
  filmClass.appendChild(film7);

}

const getFilms = new XMLHttpRequest();
getFilms.addEventListener("load", filmList);
getFilms.open("GET", "http://swapi.co/api/films/");
getFilms.send();

}(window));
