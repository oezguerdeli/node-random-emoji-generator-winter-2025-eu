import { argv } from 'node:process';
import * as emoji from 'node-emoji';

const length = argv.length;

if (length < 3) {
  //This happens only if there is no user input
  const emojiIcon = emoji.random();
  console.log(emojiIcon.emoji);
} else {
  const emojiInput = argv[2];

  if (emoji.has(':' + emojiInput + ':')) {
    //This happens only if the emoji exists
    console.log(emoji.get(emojiInput));
  } else {
    //This happens if the user input is undefined
    console.log(`This emoji ${emojiInput} doesn´t exist`);
  }
}

/*
if (argv[3] == undefined) {
  //looking for emoji in argument
  emoji.emojify(argv);
} else {
  //random generation of emoji
  console.log(emojiIcon.emoji);
}
*/
