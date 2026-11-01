function ipv4Parser(ip, mask){
  let ipMas=ip.split('.');
  let maskMas=mask.split('.');
  let netMas=[];
  let hostMas=[];
  for(let i = 0; i<4;i++)
    {
      ipMas[i]=Number(ipMas[i]);
      maskMas[i]=Number(maskMas[i]);
      netMas.push(ipMas[i]&maskMas[i]);
      hostMas.push(ipMas[i]-netMas[i]);
    }
  return[netMas.join('.'), hostMas.join('.')];
}