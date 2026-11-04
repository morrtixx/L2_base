function isCircleSorted( arr ){
  let count = 0;
  for(let i = 0; i<arr.length; i++)
    {
      let next;
      if (i === arr.length - 1)
        {
          next = arr[0];
        }
      else
        {
          next = arr[i+1];
        }
      if (arr[i]>next)
        {
          count++;
        }
    }
  if (count <=1 )
    {
      return true;
    }
  else
    {
      return false;
    }
}