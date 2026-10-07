function bingo(ticket, win)
{
    let wins = 0;
    for(let i = 0; i < ticket.length; i++)
    {
        let str = ticket[i][0];
        let code = ticket[i][1];
        for ( let j = 0; j < str.length; j++)
        {
            if ( str.charCodeAt(j) == code)
            {
                wins++;
                break;
            }
        }
    }
    if ( wins >= win)
    {
        return "Winner!";
    }
    else
    {
        return "Loser!";
    }
}