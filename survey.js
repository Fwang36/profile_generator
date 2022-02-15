const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable ", (ans1) => {
  rl.question("What's an activity you like doing? ", (ans2) => {
    rl.question("What do you listen to while doing that? ", (ans3) => {
      rl.question("Which meal is your favorite? ", (ans4) => {
        rl.question("What is your favorite thing to eat during that meal? ", (ans5) => {
          rl.question("Which sport is your absolute favorite? ", (ans6) => {
            rl.question("What is your superpower? In a few words, tell us what you're amazing at! ", (ans7) => {
              console.log(`${ans1} loves listening to ${ans3} while ${ans2}, devouring ${ans5} for ${ans4}, prefers ${ans6} over any other sport, and is amazing at ${ans7}.`)
              rl.close()
            })
          })
        })
      })
    })
  })
})

