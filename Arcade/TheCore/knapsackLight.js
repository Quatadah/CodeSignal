function knapsackLight(value1, weight1, value2, weight2, maxW) {
    if (weight1 + weight2 <= maxW)
        return value1 + value2;
    else if (weight1 > maxW)
        return weight2 <= maxW ? value2 : 0;
    else if (weight2 > maxW)
        return weight1 <= maxW ? value1 : 0;
    else if (weight1 <= maxW && value1 >= value2 )
        return value1;
    else if (weight2 <= maxW && value2 >= value1)
        return value2;
    else
        return 0;
}