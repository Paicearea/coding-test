function solution(n, t, m, p) {
  let result = ""; // 튜브가 말해야 할 숫자를 저장하는 문자열
  let number = 0; // 차례대로 증가하는 숫자로, 진법 n에 맞게 변환할 숫자
  let sequence = ""; // 참가자들이 차례대로 말하는 전체 숫자 시퀀스를 저장

  while (sequence.length < t * m) { // sequence에 모든 참가자가 말해야 할 숫자들을 미리 계산
    sequence += number.toString(n).toUpperCase(); // 숫자를 진법 n으로 변환한 뒤, 대문자로 (toUpperCase()) 변환하여 숫자들을 추가
    number++; // 숫자를 1씩 증가시켜서 차례대로 변환
  }
  for (let i = 0; i < t; i++) { // p-1번째 위치(튜브의 순서)에서 시작해 m 간격으로 t개의 숫자를 추출
    result += sequence[p - 1 + i * m]; // 튜브의 순서 p에 맞는 숫자를 찾아서 result에 저장
  }
  return result; // 튜브가 말해야 할 숫자를 result에 저장한 후 반환
}
