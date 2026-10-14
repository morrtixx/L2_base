function primeFactors(n){
    let res = "";
    let d = 2;
    do
    {
        let count =0;
        while(n%d==0)
        {
            n = n/d;
            count ++;
        }
        if ( count == 1)
        {
            res += "(" + d + ")";
        }
        else if (count > 1)
        {
            res += "(" + d + "**" + count + ")";
        }
        d++;
    }while (n>1);
    return res;
}