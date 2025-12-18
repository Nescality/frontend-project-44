import getRandomNumber from '../utils.js';

const gcd = (a, b) => {
  if (b === 0) return a;
  return gcd(b, a % b);
};

const generateRound = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const question = `${num1} ${num2}`;
  const correctAnswer = gcd(num1, num2).toString();
  return [question, correctAnswer];
};

const description = 'Find the greatest common divisor of given numbers.';

export { generateRound, description };
