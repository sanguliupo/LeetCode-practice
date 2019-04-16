
//wrap lines, so that each line's maximum number of characters does not exceed lineLength

const wrapLines = (lineLimit, words) => {
  let currentLineLength = 0;
  return words.reduce((result, word) => {
    if (currentLineLength + word.length < lineLimit){
      currentLineLength += word.length + (result ? 1 : 0);
      // console.log("currentLineLength",currentLineLength);
      const temp=result ? result + ` ${word}` : `${word}`; // add space only when needed
      // console.log("temp",temp);
      return temp;
    }else{
      currentLineLength = word.length;
      // console.log("currentLineLength",currentLineLength);
      const temp= result + `\n${word}`; // don't add spaces upfront
      // console.log("temp",temp);
      return temp;
    } 
  }, '');
}


// function wrapLines(lineLimit, words) {
//   let currentLineLength = 0;
//   let finalString = '';
//   for(let i = 0; i < words.length; i++) {
//     if(currentLineLength + words[i].length < lineLimit) {
//       let whiteSpaceLength = 0;
//       if(finalString === '') {
//         finalString = words[i];
//       } else {
//         finalString = finalString + ' ' + words[i];
//         whiteSpaceLength = 1;
//        }
//        currentLineLength += words[i].length + whiteSpaceLength;
//     } else {
//       finalString = finalString + `\n` + `${words[i]}`
//       currentLineLength = words[i].length;      
//     }
//   }
//   return finalString;
// }



console.log(wrapLines(13, [ 'abc', 'xyz', 'foobar', 'cuckoo', 'seven', 'hello' ]));

// console.log('hello')




