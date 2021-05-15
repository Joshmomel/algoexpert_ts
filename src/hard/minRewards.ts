export function minRewards(scores: number[]) {
  let reward = new Array(scores.length).fill(1);

  for (let i = 0; i < scores.length; i++) {
    if (scores[i] < scores[i + 1]) reward[i + 1] = reward[i] + 1;
  }

  console.log('first ', reward);

  for (let i = scores.length - 2; i >= 0; i--) {
    if (scores[i] > scores[i + 1]) {
      reward[i] = Math.max(reward[i + 1] + 1, reward[i]);
    }
  }

  return reward.reduce((a, b) => a + b, 0);
}

console.log(minRewards([8, 4, 2, 1, 3, 6, 7, 9, 5]));
