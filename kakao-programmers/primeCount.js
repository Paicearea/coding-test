function solution(n, k) {
  // n을 k진수로 변환하고 0을 기준으로 분할
  const kBaseStr = n.toString(k).split("0");

  // 소수 판정 함수
  const isPrime = (num) => {
    if (num < 2) return false; // 2 미만은 소수가 아님
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) return false; // 나누어 떨어지면 소수가 아님
    }
    return true; // 나누어 떨어지지 않으면 소수
  };

  // k진수로 변환된 숫자들 중 소수인 것만 카운트
  let primeCount = 0;
  kBaseStr.forEach((str) => {
    if (str && isPrime(Number(str))) {
      // 빈 문자열 무시, 소수 판정
      primeCount++;
    }
  });

  return primeCount;
}
