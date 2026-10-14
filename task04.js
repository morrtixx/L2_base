function findMissing(list) { 
    const last = list[list.length-1];
    const dist = last - list[0];
    const step = dist/list.length;
    for(let i = 0; i<list.length-1;i++)
    {
        if (list[i+1]-list[i]!=step)
        {
            return list[i]+step;
        }
    }
}