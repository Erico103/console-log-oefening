const log = console.log;

const array = [
    { name: "N. Armstrong", profession: "spacecowboy", age: 89 },
    { name: "H. de Haan", profession: "kippen hypnotiseur", age: 59 },
    { name: "A. Curry", profession: "kikvorsman", age: 32 },
    { name: "F. Vonk", profession: "slangenmelker", age: 36 },
    { name: "B. Bunny", profession: "konijnen uitlater", age: 27 },
    { name: "Dr.Evil", profession: "digital overlord", age: 56 }
  ];
  
  for (let person of array) {
    // log("Dit is het gehele persoon, " , person);
    // log("Zijn naam is,", person.name)
    const year = 2022
    // log("is geboren in het jaar,", year - person.age)
    // log(person.name,"is a ", person.profession)
      if(person.age > 50){
        log(person.name, "is older than 50")
    
}
    log("Dit is,", person.name, "Hij is geboren in,", year - person.age,"Zijn beroep is een,", person.profession)
  }