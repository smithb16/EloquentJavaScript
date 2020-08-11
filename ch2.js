for (let i = "#"; i.length <= 7; i += "#") {
  console.log(i);
}

let str_len = 10;

for (let j = 0; j <= str_len; j += 1) {
  let start = j % 2;
  let end = start + str_len;
  let rpt = Math.floor(str_len / 2) + 1;
  let s = "# ".repeat(rpt);
  console.log(s.slice(start, end));
}
