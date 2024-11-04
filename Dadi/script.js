let randomG;
let randomCpu;

randomG = Math.floor(Math.random()* 6) +1;
randomCpu  = Math.floor(Math.random()* 6) +1;
  
console.log(`Giocatore ${randomG}`);
console.log(`Cpu ${randomCpu}`);

let winner;

if(randomG > randomCpu){
    winner = ('Il Giocatore ha vinto');
} else if (randomCpu > randomG) {
 winner = ('Il computer ha vinto');
 } else {
    winner = ('Pareggio');
 }

console.log(winner);
