function wave(str){
  let res = [];
  for(let i = 0; i < str.length; i++)
  {
    if (str[i] != " ")
    {
        const chars = str.split("");
        chars[i] = chars[i].toUpperCase();
        const safeWord = chars.join("");
        res.push(safeWord);
    }
  }
  return res;
}