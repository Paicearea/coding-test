function solution(s) {
    // 1. 문자열에서 숫자 집합을 추출(문자열 파싱)
    const sets = s
        .slice(2, -2) // 양 끝의 "{{"와 "}}" 제거
        .split('},{') // 집합을 분리
        .map(set => set.split(',').map(Number)); // 각 집합을 숫자로 변환

    // 2. 집합을 원소 개수 순으로 정렬
    sets.sort((a, b) => a.length - b.length);

    // 3. 결과를 저장할 배열과 Set은 중복된 원소를 자동으로 제외할 수 있는 자료구조
    const result = [];
    const seen = new Set();

    // 4. 각 집합에서 중복되지 않은 숫자만 result에 추가
    for (const set of sets) {
        for (const num of set) {
            if (!seen.has(num)) { // 이미 seen에 존재하지 않는 숫자만 result 배열에 추가
                seen.add(num); // 해당 숫자를 seen에 추가해 중복 추적에 사용
                result.push(num); // 결과 배열에 추가
            }
        }
    }

    return result;
}

// 문자열로 주어진 집합 표현에서 중복되지 않는 숫자들을 순차적으로 추출해 튜플을 완성하는 방식으로 작동