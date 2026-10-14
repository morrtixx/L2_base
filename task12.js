function longest(arr, n) {
    let words = arr.slice();
    for (let step = 0; step < n; step++)
    {
        let maxInd = 0;
        for (let i = 0; i < words.length; i++)
        {
            if ( words[i].length > words[maxInd].length)
            {
                maxInd = i;
            }
        }
        if (step == n-1)
        {
            return words[maxInd];
        }
        else
        {
            words.splice(maxInd, 1)
        }
    }
}