
const joe = {
  name: "joe",
  age: 70.23,
  isAlive: true,
  haveBirthday:function(){
    this.age++
    console.log(`Happy Birthday ${this.name}! You are now ${this.age} years old!`)
  }
};

const george = {
  name: "George Washington",
  age: 350,
  isAlive: false,
  haveBirthday:function(){
    this.age++
    console.log(`Happy Birthday ${this.name}! You are now ${this.age} years old!`)
  }
};

const shiva = {
  name: "Shiva Koopa Ebesten Rehfuss",
  age: 4,
  isAlive: true,
  haveBirthday:function(){
    this.age++
    console.log(`Happy Birthday ${this.name}! You are now ${this.age} years old!`)
  }
};

const abeLincoln = {
    name: "Abraham Lincoln",
    age: 300,
    isAlive: false,
    haveBirthday:function(){
        this.age++
        console.log(`Happy Birthday ${this.name}! You are now ${this.age} years old!`)
      }
}

const people = [joe, george, shiva, abeLincoln];

function introduce(personObj){
    if (personObj.isAlive) {
        console.log(
          `Hi my name is ${personObj.name} and I am currently ${personObj.age} years old!`
        );
      }
}

function makeCard(personObj) {
    //1. create elements
    const newCard = document.createElement("div");
    //2. add styles/content
    newCard.setAttribute("class", "card");
    //3. append
    document.body.append(newCard);

    //1. create elements
    const newNameH2 = document.createElement("h2");
    //2. add styles/content
   newNameH2.textContent = personObj.name
    //3. append
    newCard.append(newNameH2);

    //1. create elements
    const newAgeh3 = document.createElement("h3");
    //2. add styles/content
   newAgeh3.textContent = `Age: ${personObj.age}`
    //3. append
    newCard.append(newAgeh3);

    //1. create elements
    const birthdayButton = document.createElement("button");
    //2. add styles/content
   birthdayButton.textContent = `Have a birthday!`
    //3. append
    newCard.append(birthdayButton);
    birthdayButton.addEventListener("click",function(event){
        personObj.haveBirthday();
        newAgeh3.textContent= `Age: ${personObj.age}`
    })


}
// if(people[0].isAlive){
//     console.log(`Hi my name is ${people[0].name} and I am currently ${people[0].age} years old!`)
// }
// if(people[1].isAlive){
//     console.log(`Hi my name is ${people[1].name} and I am currently ${people[1].age} years old!`)
// }
// if(people[2].isAlive){
//     console.log(`Hi my name is ${people[2].name} and I am currently ${people[2].age} years old!`)
// }
// console.table(people)

for (let i = 0; i < people.length; i++) {
  const person = people[i];
  introduce(person)
  person.haveBirthday();
  makeCard(person)
  console.log('==============================')
}



