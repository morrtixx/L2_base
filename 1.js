function hasTwoCubeSums(n) {
	let count = 0;
  for (let a = 1; a**3<n; a++)
    {
      for(let b = a+1; b**3+a**3 <= n; b++)
        {
          let sum = a**3+b**3;
          if(sum===n)
            {
              count++;
            }
          if (count===2)
            {
              return true;
            }
        }
    }
  return false;
}