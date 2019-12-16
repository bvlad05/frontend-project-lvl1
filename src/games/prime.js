import engine from '..';
import getRandomNum from '../utilities';

export const isPrime = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

export default () => {
  const prime = () => {
    const question = getRandomNum();
    const correntAnswer = isPrime(question) ? 'yes' : 'no';
    return [question, correntAnswer];
  };
  engine(
    'Answer "yes" if given number is prime. Otherwise answer "no".',
    prime,
  );
};
