function tennisSet(score1, score2) {
    if (score1 == 7)
        return score2 == 6 || score2 == 5;
    else if (score2 == 7)
        return score1 == 6 || score1 == 5;
    return Math.abs(score1 - score2) >= 2 && score1 <= 6 && score2 <= 6;
}
