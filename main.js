
console.log("Generando nombre...")
var timer = setTimeout(nameGenerator, 2000);
//aquí la función
function nameGenerator(){
let name = ["Hugo","Martín","Lucas","Mateo","Francisco","Miguel","David","Carlos","Daniel","Hernando","Juan","Fernando"];
let surname = ["García","Gonzalez","Rodriguez","Asensio","López","Torrado","Franco","Hernández","Fernan"]
var randomName = name[Math.floor(Math.random()*name.length)];
var randomSurname = surname[Math.floor(Math.random()*surname.length)];
var randomAge = Math.round(Math.random()*100)
//console.log aquí
console.log(randomName + " " + randomSurname);
console.log("edad = "+ randomAge);
if (randomName === "Francisco" && randomSurname === "Franco"){
  console.log("Arriba España");
}
if  (randomAge >= 50){
  let vaccines = ["AstraZeneca","Pfizer","Moderna"]
  var randomVaccine = vaccines[Math.floor(Math.random()*vaccines.length)];
  console.log("vacunado = si, " + randomVaccine);
}else{
  console.log("vacunado = no");
}

if (randomAge =100 || randomAge >= 60)
var nationality =["Español","Chino","Sudamericano","Filipino"]
var randomNationality = nationality[Math.floor(Math.random()*nationality.length)];
console.log(randomNationality)
}




