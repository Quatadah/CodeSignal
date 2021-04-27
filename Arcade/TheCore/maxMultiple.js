function maxMultiple(divisor, bound) {
    N = bound
    while( N > divisor){
        if (N % divisor == 0)
            return N
        N--;
    }
    return N;
}
