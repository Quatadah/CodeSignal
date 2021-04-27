function phoneCall(min1, min2_10, min11, s){
    function phoneCall(min1, min2_10, min11, s, counter){
        if ((s < min1 && counter == 0) || (s < min2_10 && counter >= 1 && counter <= 9) || ( s < min11 && counter >= 10))
            return counter;
        else if ( s >= min1 && counter == 0)
            return phoneCall(min1, min2_10, min11, s - min1, counter + 1 )
        else if ( s >= min2_10 && counter >= 1 && counter <= 9)
            return phoneCall(min1, min2_10, min11, s - min2_10, counter + 1)
        else if ( s >= min11 && counter >= 10)
            return phoneCall(min1, min2_10, min11, s - min11, counter + 1 )
    }
    return phoneCall(min1, min2_10, min11, s , 0);
}