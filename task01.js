function hasTwoCubeSums(n) {
  let count = 0;
  let gran=Math.cbrt(n);
  for (let a = 1; a<gran;a++)
  {
    let ost = n - a ** 3;
    let b = Math.round(Math.cbrt(ost));
    if (b>a&& b**3 === ost)
    {
      count++;
      if(count === 2)
      {
        return true;
      }
    }
  }
  return false;
}