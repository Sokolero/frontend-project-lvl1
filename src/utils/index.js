export default function getRandomInt(min = 1, max = 100) {
  const lMin = Math.ceil(min);
  const lMax = Math.floor(max);
  return Math.floor(Math.random() * (lMax - lMin)) + lMin;
}

// evclid algotithm
export function getNod(num1, num2) {
  const max = num1 > num2 ? num1 : num2;
  const min = num1 <= num2 ? num1 : num2;
  const rest = max % min;

  if (rest === 0) {
    return min;
  }
  return getNod(min, rest);
}

export function isPrime(num) {
  for (let i = 2; i < (num / 2); i += 1) {
    let rest = num % i
    if (rest === 0) {
      return false
    }
  }
  return true;
}
