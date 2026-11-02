function toWeirdCase(string){
  let res = "";
  let ind = 0; 
  for(let i = 0; i <string.length; i++)
    {
      if (string[i]===' ')
        {
          res+=string[i];
          ind = 0;
        }
      else if (ind%2===0)
        {
          res+=string[i].toUpperCase();
          ind++;
        }
      else
        {
          res+=string[i].toLowerCase();
          ind++;
        }
    }  
  return res;
}