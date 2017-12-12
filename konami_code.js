const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  let index = 0
  const input = document.querySelector('body')
  input.addEventListener('keydown', function(e) {
    let key = parseInt(e.detail || e.which);
    console.log(e)
    console.log(e.detail, e.which, e.location)

    if (key === code[index]) {
      index++;

      if (index === code.length) {
        alert("Hurray!");

        index = 0;
      }
    } else {
      if (key !== 16) {
        index = 0;
      }
    }
  })
}

// function parseBrackets(string) {
//   let openersFound = []
//   let openers = ['{', '(', '[']
//   let closers = { '}': '{', ')': '(', ']': '[' }
//   for (let i=0; i<string.length; i++) {
//     if (openers.includes(string[i])) {
//       openersFound.push(string[i])
//     } else if (Object.keys(closers).includes(string[i])) {
//       if (closers[string[i]] !== openersFound.pop()) {
//         return 'not balanced'
//       }
//     }
//   }
//   if (openersFound.length === 0) {
//       return 'balanced'
//   } else {
//     return 'not balanced'
//   }
// }
