function solution(s) {
    // 숫자에 대응되는 영단어들을 배열로 정의
    const numWords = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    // numWords 배열을 순회하면서 각 영단어를 해당하는 숫자로 치환
    numWords.forEach((word, i) => {
        // s 문자열에서 영단어 word를 숫자 i로 대체
        // split(word)로 문자열을 영단어로 나누고, join(i)로 그 부분을 숫자로 합침
        s = s.split(word).join(i);
    });
    
    // 최종적으로 숫자로 변환하여 반환
    return Number(s);
}
