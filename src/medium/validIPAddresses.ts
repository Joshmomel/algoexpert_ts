export function validIPAddresses(string: string) {
  return partition(string, 4, '', []);
}

function partition(numberString: string, times: number, combination: string, result: string[]) {
  if (times === 1 && isValid(numberString)) {
    result.push(combination + numberString);
    return;
  }

  for (let i = 1; i <= Math.min(numberString.length, 3); i++) {
    let numberList = numberString.split('');
    const firstPart = numberList.splice(0, i).join('');
    const secondPart = numberList.join('');

    if (isValid(firstPart)) {
      partition(secondPart, times - 1, combination + `${firstPart}.`, result);
    }
  }

  return result;
}

function isValid(numberString: string) {
  if (numberString.length > 1 && numberString[0] === '0') return false;
  if (numberString.length < 1) return false;
  return Number(numberString) <= 255;
}

// console.log(partition('3700100', 4, '', []))
console.log(validIPAddresses('1921680'));
