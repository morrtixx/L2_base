function wave(str){
  let res = [];
  for (let i = 0; i < str.length; i++)
    {
      if (str[i]===' ')
        {
          continue;
        }
      let letter = str.split('');
      letter[i]=letter[i].toUpperCase();
      res.push(letter.join(''));
    }
  return res;
}