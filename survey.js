const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let profile = {};

rl.question('What do you think of Node.js? ', (answer) => {
  profile.name = answer;

  rl.question('What do you think of Node.js? ', (answer) => {
  profile.activity = answer;

  rl.question('What do you think of Node.js? ', (answer) => {
  profile.music = answer;

  rl.question('What do you think of Node.js? ', (answer) => {
 profile.meal = answer;

  rl.question('What do you think of Node.js? ', (answer) => {
 profile.food = answer;

 console.log("\nHere's your profile:"); 
 
  console.log(`${profile.name} loves listening to ${profile.music} and ${profile.activity}. ${profile.name} also enjoys devouring ${profile.food} for ${profile.meal}!`)
  console.log('Nice getting to know you!')

  rl.close();
   })
      })
    })
  })
})