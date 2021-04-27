export function validStartingCity(distances: number[], fuel: number[], mpg: number) {
  let allCityDistance = distances.reduce((accumulator, current) => accumulator + current, 0)
  let totalTravel = 0;
  let mileSum = 0;
  let i = 0;

  while (totalTravel < allCityDistance) {
    totalTravel += distances[i];
    mileSum += fuel[i] * mpg;
    i = (i + 1) % distances.length;

    if (totalTravel > mileSum) {
      totalTravel = 0
      mileSum = 0
    }
  }

  return i;
}

console.log(validStartingCity([5, 25, 15, 10, 15], [1, 2, 1, 0, 3], 10));

