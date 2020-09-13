// 两个字符串相加
function add(str1, str2) {
  let a = str1.length,
    b = str2.length,
    temp = 0;
  result = "";

  while (a || b) {
    a ? (temp += +str1[--a]) : "";
    b ? (temp += +str2[--b]) : "";

    result = (temp % 10) + result;
    temp = temp > 9 ? 1 : 0;
  }

  if (temp) temp += result;
  return result;
}

console.log(add("22", "19"));
