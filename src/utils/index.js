export default function getRandomInt(min = 1, max = 100) {
  const lMin = Math.ceil(min);
  const lMax = Math.floor(max);
  return Math.floor(Math.random() * (lMax - lMin)) + lMin;
}

// evclid algotithm
export function getNod(num1, num2) {
  let max = num1 > num2 ? num1 : num2;
  let min = num1 <= num2 ? num1 : num2;
  let rest = max % min;

  if (rest === 0) {
    return min
  } else {
    return getNod(min, rest)
  }
}
