function solution(dartResult) {
  const scores = [];
  let currentScore = ""; // 점수 부분을 임시 저장하는 변수

  for (let i = 0; i < dartResult.length; i++) {
    const char = dartResult[i];

    if (!isNaN(char)) {
      // 숫자 처리: 현재 점수가 있으면 배열에 추가하고, 새 숫자 시작
      currentScore += char;
    } else if (char === "S" || char === "D" || char === "T") {
      // 보너스 처리: 점수를 계산하고 배열에 추가
      let score = Number(currentScore);
      if (char === "D") score = Math.pow(score, 2);
      if (char === "T") score = Math.pow(score, 3);
      scores.push(score);
      currentScore = ""; // 점수 저장 후 초기화
    } else if (char === "*" || char === "#") {
      // 옵션 처리
      const index = scores.length - 1; // 마지막 점수 인덱스
      if (char === "*") {
        // 스타상: 해당 점수와 직전 점수를 2배로
        scores[index] *= 2;
        if (index > 0) scores[index - 1] *= 2;
      } else if (char === "#") {
        // 아차상: 해당 점수는 마이너스
        scores[index] *= -1;
      }
    }
  }
  // 모든 점수 합산
  return scores.reduce((a, b) => a + b, 0);
}
