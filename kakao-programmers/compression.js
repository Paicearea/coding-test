function solution(msg) {
  // 알파벳 A~Z를 1부터 26까지 색인 번호로 초기화
  const dictionary = {};
  let dictSize = 26;
  for (let i = 0; i < 26; i++) {
    dictionary[String.fromCharCode(65 + i)] = i + 1; // 아스키 코드 65부터 시작하여 A~Z 생성
  }

  const result = []; // 색인 번호를 저장할 배열
  let w = ""; // 현재 탐색 중인 패턴

  for (let i = 0; i < msg.length; i++) {
    w += msg[i]; // 패턴 확장

    // 사전에 패턴이 없으면 이전 패턴 색인 번호 저장, 새 패턴 추가
    if (!dictionary[w]) {
      result.push(dictionary[w.slice(0, -1)]); // 가장 긴 일치 패턴의 색인 번호 저장
      dictionary[w] = ++dictSize; // 새로운 패턴을 사전에 추가
      w = msg[i]; // 패턴 초기화
    }
  }

  // 마지막 남은 패턴 처리
  if (w) result.push(dictionary[w]);

  return result;
}
