function solution(str){
    let mas =[];
   if (str.length %2 != 0)
   {
    str += "_";
   }
   for (let i = 0; i<str.length;i+=2)
   {
    mas.push(str[i]+str[i+1]);
   }
   return mas;
}