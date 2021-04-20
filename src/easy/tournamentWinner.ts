export function tournamentWinner(competitions: string[][], results: number[]) {
  let d: { [key: string]: number } = {};
  let max = {teamName: '', score: 0}

  for (let i = 0; i < competitions.length; i++) {
    const homeTeam = competitions[i][0]
    const awayTeam = competitions[i][1]

    if (results[i] === 1) {
      d[homeTeam] ? d[homeTeam] += 1 : d[homeTeam] = 1
      if (d[homeTeam] > max.score) max = {teamName: homeTeam, score: d[homeTeam]}
    } else {
      d[awayTeam] ? d[awayTeam] += 1: d[awayTeam] = 1
      if (d[awayTeam] > max.score) max = {teamName: awayTeam, score: d[awayTeam]}
    }
  }

  return max.teamName;
}

const competitions = [
  ['HTML', 'C#'],
  ['C#', 'Python'],
  ['Python', 'HTML'],
];
const results = [0, 0, 1];
console.log(tournamentWinner(competitions, results));
