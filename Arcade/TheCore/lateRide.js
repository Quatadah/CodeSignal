function lateRide(n) {
    hours = 0
    minutes = 0
    while(n > 0){
        if (n >= 60){
            hours++;
            n -= 60;
        }
        else{
            minutes = n;
            n = 0;
        }
    }
    return hours % 10 + Math.floor(hours/10) + minutes %10 + Math.floor(minutes / 10);
    
}
