console.log("test");

const yesResident = document.getElementById("yesResident");
const noResident = document.getElementById("noResident");
const yesCit = document.getElementById("yesCit");
const noCit = document.getElementById("noCit");
const yesCTM = document.getElementById("yesCTM");
const noCTM = document.getElementById("noCTM");
const yesMinor = document.getElementById("yesMinor");
const notMinor = document.getElementById("notMinor");
const yesPregnant = document.getElementById("yesPregnant");
const notPregnant = document.getElementById("notPregnant");
const yesBCC = document.getElementById("yesBCC");
const notBCC = document.getElementById("notBCC");
const yesFoster = document.getElementById("yesFoster");
const notFoster = document.getElementById("notFoster");
const toolResult = document.getElementById("toolResult");


function eligibility(){

let eligible = true;

if (yesResident.checked) eligible = true;
if (yesCit.checked) eligible = true;
if (noCit.checked) eligible = false;
if (noResident.checked) eligible = false;

let population = true; 

if (noCTM.checked && notMinor.checked && notPregnant.checked && notBCC.checked && notFoster.checked) population = false;


if(eligible && population){
    toolResult.textContent = "You are potentially eligible!";
}
else if(noResident.checked){
    toolResult.textContent = "You are not eligible because you aren't a resident of the state";
}
else if(noCit.checked){
    toolResult.textContent = "You are not eligible because you aren't a US Citizen or Eligible Non-Citizen";
}
else{
    toolResult.textContent = "You are not within an eligible population";
}

}

// decided to use booleans here with operators