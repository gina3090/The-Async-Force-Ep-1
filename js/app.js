// jshint esversion: 6

(function(window) {

function person4Name() {
  console.log('person4info', this.responseText);
  let person = JSON.parse(this.responseText);
  console.log('person4', person);
  let personName = person.name;
  console.log('person4name', person.name);
  document.getElementById("person4Name").innerHTML = person.name;
  console.log('person4homeworld', person.homeworld);
}

const personFourName = new XMLHttpRequest();
personFourName.addEventListener("load", person4Name);
personFourName.open("GET", "http://swapi.co/api/people/4/");
personFourName.send();

function person4Home() {
  console.log('person4homeinfo', this.responseText);
  let home = JSON.parse(this.responseText);
  console.log(home);
  let homeName = home.name;
  console.log('person4home', home.name);
  document.getElementById("person4HomeWorld").innerHTML = home.name;
}

const personFourHome = new XMLHttpRequest();
personFourHome.addEventListener("load", person4Home);
personFourHome.open("GET", "http://swapi.co/api/planets/1/");
personFourHome.send();

function person14Name() {
  console.log('person14info', this.responseText);
  let person = JSON.parse(this.responseText);
  console.log('person14', person);
  let personName = person.name;
  console.log('person14name', person.name);
  document.getElementById("person14Name").innerHTML = person.name;
  console.log('person14species', person.species);
}

const personFourteenName = new XMLHttpRequest();
personFourteenName.addEventListener("load", person14Name);
personFourteenName.open("GET", "http://swapi.co/api/people/14/");
personFourteenName.send();

function person14Species() {
  console.log('person14speciesinfo', this.responseText);
  let species = JSON.parse(this.responseText);
  console.log('person14species', species.name);
  document.getElementById("person14Species").innerHTML = species.name;
}

const personFourteenSpecies = new XMLHttpRequest();
personFourteenSpecies.addEventListener("load", person14Species);
personFourteenSpecies.open("GET", "http://swapi.co/api/species/1/");
personFourteenSpecies.send();

}(window));
