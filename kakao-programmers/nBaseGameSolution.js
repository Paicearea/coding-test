function solution(n, t, m, p) {
    let result = ''; // 튜브가 말해야 할 숫자를 담을 문자열
    let number = 0;  // 0부터 시작하는 숫자
    let sequence = ''; // 모든 참가자가 말하는 전체 숫자 시퀀스

    // 튜브가 말할 숫자의 개수 t개를 구하려면, 전체 t * m 길이만큼의 시퀀스를 준비
    while (sequence.length < t * m) {
        sequence += number.toString(n).toUpperCase(); // 숫자를 n진법으로 변환
        number++;
    }

    // 튜브가 말할 숫자를 추출 (튜브의 순서 p에 맞게 t개 추출)
    for (let i = 0; i < t; i++) {
        result += sequence[(p - 1) + i * m]; // p-1 위치부터 m 간격으로 t개 추출
    }

    return result;
}
