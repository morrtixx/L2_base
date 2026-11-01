function whatCentury(year)
{
  let centr = Math.ceil(Number(year)/100);
  if (centr===11||centr===12||centr===13)
    {
      return centr+"th";
    }
  if (centr%10===1)
    {
      return centr+"st";
    }
  else if(centr%10===2)
    {
      return centr+"nd";
    }
  else if (centr%10===3)
    {
      return centr+"rd";
    }
  else
    {
      return centr+"th";
    }
}