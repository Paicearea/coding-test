function solution(msg) {
    // dictionary 객체를 사용하여 알파벳 A부터 Z까지를 1부터 26까지의 색인 번호로 초기화
    const dictionary = {};
    let dictSize = 26;
    for (let i = 0; i < 26; i++) {
        dictionary[String.fromCharCode(65 + i)] = i + 1; // String.fromCharCode(65 + i)는 아스키 코드에서 A(65)부터 Z(90)까지의 문자를 생성
    }

    const result = []; // 최종적으로 색인 번호를 저장할 배열
    let w = ""; //  현재까지 탐색한 패턴을 저장하는 변수

    for (let i = 0; i < msg.length; i++) {
        w += msg[i]; // 패턴을 확장

        // 다음 글자와 합친 패턴이 사전에 없으면
        if (!dictionary[w]) {
            result.push(dictionary[w.slice(0, -1)]); // 사전에서 가장 긴 일치하는 패턴의 색인 번호를 저장
            dictSize++; // 사전에 새 패턴 추가
            dictionary[w] = dictSize; // 사전의 크기 증가
            w = msg[i]; // w는 현재 글자로 초기화
        }
    }

    // 마지막 패턴 처리
    if (w) result.push(dictionary[w]);

    return result;
}
