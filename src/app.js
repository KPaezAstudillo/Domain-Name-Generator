/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#domain").innerHTML = generateDomain();
  });
};

function generateDomain() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let dmain = [".com", ".cl", ".net"];
  let myDomain = [];
  let list = [];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < dmain.length; l++) {
          myDomain = pronoun[i] + adj[j] + noun[k] + dmain[l];
          list = myDomain + " <br>" + list;
        }
      }
    }
  }
  return list;
}
