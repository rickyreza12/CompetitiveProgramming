// Questions
// You will be given two strings a and b consisting of lower case letters,
//  but a will have at most one asterix character. The asterix (if any) can
//   be replaced with an arbitrary sequence (possibly empty) of lowercase letters.
//    No other character of string a can be replaced. If it is possible to replace
//    the asterix in a to obtain string b, then string b matches the pattern.

// If the string matches, return true else false.

// solve("code*s","codewars") = true, because we can replace the asterix(*) with "war" to match the second string.
// solve("codewar*s","codewars") = true, because we can replace the asterix(*) with "" to match the second string.
// solve("codewars","codewars") = true, because the strings already match.
// solve("a","b") = false
// solve("*", "codewars") = true

////Attempt 1
// function solve(a, b) {
//   //..
//   let value = "";

//   let aBefore = [];
//   let aAfter = [];

//   let getIndexAbritari = [...a].indexOf("*");
//   if(getIndexAbritari < 0) return a === b

//   for (let i = 0; i < a.length; i++) {

//     if (i < getIndexAbritari) {
//       aBefore.push(a[i]);
//     }

//     if (i > getIndexAbritari) [aAfter.push(a[i])];
//   }

//   let j = 0;
//   let newArray = [];
//   // j
//   while (j < b.length) {
//     if (b[j] != aBefore[j]) {
//       newArray.push(b[j]);
//     }
//     j++;
//   }

//   for (const item of aAfter) {
//     let indexs = newArray.indexOf(item);

//     if (indexs >= 0) {
//       newArray.pop();
//     }
//   }

//   let result = [...aBefore, ...newArray, ...aAfter].join("");
//   result
//   return result === b;
// }

// const TestAsert = (valueA, valueB) => {
//   return console.log(
//     valueA === valueB ? "no error : " + valueA : "error : " + valueA
//   );
// };

function solve(a, b) {
  //..
  let getIndexAbritari = [...a].indexOf("*");
  if (getIndexAbritari < 0) return a === b;

  let aBefore = a.slice(0, getIndexAbritari);
  let aAfter = a.slice(getIndexAbritari + 1, a.length);

  let j = 0;
  let newArray = [];

  while (j < b.length) {
    if (b[j] != aBefore[j]) {
      newArray.push(b[j]);
    }
    j++;
  }
  for (const item of aAfter) {
    let indexs = newArray.indexOf(item);
    if (indexs >= 0) {
      newArray.pop();
    }
  }

  let result = [...aBefore, ...newArray, ...aAfter].join("");
  return result === b;
}

const TestAsert = (valueA, valueB) => {
  return console.log(
    valueA === valueB ? "no error : " + valueA : "error : " + valueA
  );
};

TestAsert(solve("code*s", "codewars"), true);
// TestAsert(solve("codewar*s", "codewars"), true);
// TestAsert(solve("code*warrior", "codewars"), false);
// TestAsert(solve("c","c"),true)
// TestAsert(solve("*s","codewars"),true)
// TestAsert(solve("*s","s"), true)
// TestAsert(solve("s*","s"),true)
// TestAsert(solve("aa","aaa"), false)
// TestAsert(solve("aa*","aaa"), true)
// TestAsert(solve("aaa","aa"), false)
// TestAsert(solve("aaa*","aa"), false)
// TestAsert(solve("*","codewars"),true)
