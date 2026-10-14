Array.prototype.square = function() 
{
  let result = [];
  for (let i = 0; i < this.length; i++) 
  {
    result.push(this[i] ** 2);
  }
  return result;
};
Array.prototype.cube = function()
{
    let result=[];
    for(let i =0;i<this.length;i++)
    {
        result.push(Math.pow(this[i],3));
    }
    return result;
}
Array.prototype.sum = function()
{
    let sum = 0;
    for (let  i = 0; i<this.length; i++)
    {
        sum+=this[i];
    }
    return sum;
}
Array.prototype.average = function()
{
    if (this.length == 0)
    {
        return NaN;
    }
    else
    {
        return this.sum()/this.length;
    }
}
Array.prototype.even = function()
{
    let result = [];
    for (let i = 0; i < this.length; i++)
    {
        if (this[i]%2==0)
        {
            result.push(this[i]);
        }
    }
    return result;
}
Array.prototype.odd = function()
{
    let result = [];
    for (let i = 0; i < this.length; i++)
    {
        if (this[i]%2!=0)
        {
            result.push(this[i]);
        }
    }
    return result;
}