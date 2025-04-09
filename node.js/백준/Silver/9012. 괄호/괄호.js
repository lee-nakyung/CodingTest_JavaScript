const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const T = Number(input[0]);

for (let i = 1; i <= T; i++) {
  const line = input[i];
  solution(line);
}

function solution(s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(s[i]);
    } else if (s[i] === ')') {
      if (stack.length === 0) {
        console.log('NO');
        return;
      } else {
        stack.pop();
      }
    }
  }

  if (stack.length === 0) {
    console.log('YES');
  } else {
    console.log('NO');
  }
}
