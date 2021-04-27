function addTwoDigits(n) {
    sum = 0;
    for(let i=0; i<String(n).length;i++)
        sum += parseInt(String(n)[i]);
    return sum;
}
