const sentence = 'hello there from lighthouse labs \n';


const typewriter = str => {
  let delay = 0;

  for (const char of str) {
    setTimeout(() => {
      process.stdout.write(char);
    }, delay);
    delay += 50;
  }
  
}

typewriter(sentence);