// 翻转字符串里面的单词
function reverseWords(s) {
  s = s.trim();
  const stack = [];
  let current = "",
    result = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== " ") {
      current += s[i];
    } else if (s[i] === " " && current) {
      stack.push(current, " ");
      current = "";
    } else {
      continue;
    }
  }
  current && stack.push(current);
  while (stack.length) {
    result += stack.pop();
  }
  return result;
}
console.log(reverseWords("the sky is blue"));

// 待优化
