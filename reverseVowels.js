// reverseVowels(word) - Given a string of characters, reverse the vowels but keep the consonants in place.

//          j   i
// "w h a t e b o i r d" --> "w h a t o b e i r d"
// Time: O(N) Space: O(1)
//[a,e,o,i,u]

function swapVowels(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let i = 0,
    j = str.length - 1;
  while (i < j) {
    if (!vowels.includes(str[i])) {
      i++;
    }
    if (!vowels.includes(str[j])) {
      j--;
    }
    if (vowels.includes(str[i]) && vowels.includes(str[j])) {
      [str[i], str[j]] = [str[j], str[i]];
      i++;
      j--;
    }
  }

  return str;
}

console.log(swapVowels(['w', 'h', 'i', 't', 'e', 'b', 'o', 'a', 'r', 'd']));
