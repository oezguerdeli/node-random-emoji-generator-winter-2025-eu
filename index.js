import { argv } from 'node:process';
import * as emoji from 'node-emoji';

if (argv.length < 3) {
  //This happens only if there is no user input
  console.log(emoji.random().emoji);
} else {
  const emojiInput = argv[2];

  if (emoji.has(':' + emojiInput + ':')) {
    //This happens only if the emoji exists
    console.log(emoji.get(emojiInput));
  } else {
    //This happens if the user input is undefined
    console.log(`This emoji ${emojiInput} does not exist`);
  }
}
