function whatCentury(year)
{
  const vek = Math.ceil(Number(year)/100);
  if ( vek >= 11 && vek <= 13)
  {
    return vek + "th";
  }
  const lastNum = vek%10;
  if (lastNum == 1)
  {
    return vek + "st";
  }
  else if (lastNum == 2)
  {
    return vek + "nd";
  }
  else if (lastNum == 3)
  {
    return vek + "rd";
  }
  else
  {
    return vek + "th";
  }
}