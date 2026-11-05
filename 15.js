function howManyTimes(time1,time2){
  let start = Math.floor(new Date(time1).getTime()/1000);
  let end = Math.floor(new Date(time2).getTime()/1000);
  let count = 0;
  for(let s = start; s<end;s++)
    {
      let d = new Date(s*1000);
      let m = d.getMinutes();
      let sec = d.getSeconds();
      if (m ===30 && sec === 0)
        {
          count++;
        }
      if (m === 0)
        {
          let h = d.getHours()%12;
          let hit;
          if (h === 0)
            {
              hit = 12;
            }
          else
            {
              hit = h;
            }
          if (sec<hit)
            {
              count++;
            }
        }
    }
  return count;
}
