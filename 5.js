function primeFactors(n){
  let res = "";
  for(let i = 2; i<=n; i++)
    {
      let count = 0;
      while (n%i===0)
        {
          count++;
          n/=i;
        }
      if (count === 1)
        {
          res+="("+i+")";
        }
      else if (count > 1)
        {
          res+= "("+i+"**"+count+")";
        }
      else
        {
          continue;
        }
    }
  return res;
}