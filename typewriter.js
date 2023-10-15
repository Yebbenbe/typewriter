const sentence = "hello there from lighthouse labs";

/* problem code: this creates timers for each char, but they're all registered at the same time, so they all execute after 1000ms
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, 1000) 
  
}; */


let delay = 1050;

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay);
  
  delay += 50; // Increase the delay for the next character
}

// creates a newline at the end the animation
setTimeout(() => {
  console.log("\n");
}, delay);
