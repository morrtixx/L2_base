function ipv4Parser(ip, mask){
    const ipParts = ip.split('.');
    const maskParts = mask.split('.');
    const netArr = [];
    const hostArr = [];
    for (let i = 0; i < 4; i++) {
        const ipNum = Number(ipParts[i]);
        const maskNum = Number(maskParts[i]);
        const net = ipNum & maskNum;
        netArr.push(net);
        const host = ipNum - net;
        hostArr.push(host);
    }
    return [netArr.join('.'), hostArr.join('.')];
}