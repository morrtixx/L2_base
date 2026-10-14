function expandedForm(num) {
  let parts = [];
  const s = num.toString();
  for(let i = 0; i < s.length; i++)
  {
    if (s[i]!="0")
    {
        parts.push(s[i]+"0".repeat(s.length-1-i));
    }
  }
  return parts.join(" + ");
}