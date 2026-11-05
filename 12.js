function longest(arr, n) {
  let copy = arr.slice();
  for(let i = 0; i <copy.length-1; i++)
    {
      for(let j = 0; j <copy.length-1-i; j++)
        {
          if(copy[j].length<copy[j+1].length)
            {
              let t = copy[j];
              copy[j]=copy[j+1];
              copy[j+1]=t;
            }
        }
    }
  return copy[n-1];
}