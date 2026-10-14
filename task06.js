function toWeirdCase(string){
  const rasb = string.split(" ");
  let arr = [];
  for ( let i = 0; i<rasb.length; i++)
  {
    const word = rasb[i];
        let newWord = "";
    for ( let j = 0; j<word.length; j++)
    {
        if (j%2 ===0)
        {
            newWord += word[j].toUpperCase();        
        }
        else
        {
            newWord += word[j].toLowerCase();
        }
    }
    arr.push(newWord);
  }
  return arr.join(" ");
}