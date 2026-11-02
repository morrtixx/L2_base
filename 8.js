function expandedForm(num) {
  let str = String(num);
  let res = [];
  for (let i = 0; i<str.length; i++)
    {
      if (str[i]!=='0')
        {
          let t = str[i]
          for (let j = 0; j < str.length - 1 - i; j++)
            {
              t+='0';
            }
          res.push(t);
        }
    }
  return res.join(' + ');
}
