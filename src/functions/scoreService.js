export const findAvgScore = (scores) => {
  if(scores.length === 0) {
    return 0
  } else {
    let scoresSum = 0;
    scores.forEach(score => {
      scoresSum += score.score
    });
    return scoresSum / scores.length;
  }
}

export const findUserScore = (scores, username) => {
  if(scores.length === 0) {
    return 0
  } else {
    let userScore = 0;
    scores.forEach(score => {
      if(score.username === username) {
        userScore = score.score;
      }
    })
    return userScore;
  }
}