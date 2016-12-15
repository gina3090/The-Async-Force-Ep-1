// jshint esversion: 6

(function(window) {

function person4Name() {
  console.log(this.responseText);
  let person = JSON.parse(this.responseText);
  console.log(person);
  let personName = person.name;
  console.log('name', person.name);
  document.getElementById("person4Name").innerHTML = person.name;
}

const personFourName = new XMLHttpRequest();
personFourName.addEventListener("load", person4Name);
personFourName.open("GET", "http://swapi.co/api/people/4/");
personFourName.send();

function person4Home() {
  console.log(this.responseText);
  let home = JSON.parse(this.responseText);
  console.log(home);
  let homeName = home.name;
  console.log('home', home.name);
  document.getElementById("person4HomeWorld").innerHTML = home.name;
}

const personFourHome = new XMLHttpRequest();
personFourHome.addEventListener("load", person4Home);
personFourHome.open("GET", "http://swapi.co/api/planets/1/");
personFourHome.send();

}(window));
