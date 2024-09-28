function solution (str1, str2) {
    // 문자열을 두 글자씩 끊어서 배열로 변환하는 함수
    function explode(text) {
      const result = [];
      for (let i = 0; i < text.length - 1; i++) {
        const node = text.substr(i, 2);  // 두 글자씩 추출
        if (node.match(/[A-Za-z]{2}/)) { // 알파벳 두 글자로만 구성된 경우
          result.push(node.toLowerCase()); // 소문자로 변환하여 추가
        }
      }
      return result; // 두 글자씩 끊어져 변환된 배열 반환
    }
  
    // 두 문자열을 다중집합으로 변환
    const arr1 = explode(str1);
    const arr2 = explode(str2);
  
    // 두 집합의 모든 원소를 합친 Set을 생성하여 중복 제거
    const set = new Set([...arr1, ...arr2]);
    
    let union = 0; // 합집합 크기
    let intersection = 0; // 교집합 크기
  
    // 각 원소에 대해 교집합과 합집합 크기 계산
    set.forEach(item => {
      const has1 = arr1.filter(x => x === item).length; // arr1에서 해당 원소의 개수
      const has2 = arr2.filter(x => x === item).length; // arr2에서 해당 원소의 개수
      union += Math.max(has1, has2); // 합집합은 더 큰 개수 사용
      intersection += Math.min(has1, has2); // 교집합은 더 작은 개수 사용
    });
  
    // 합집합이 0인 경우 공집합이므로 유사도는 1로 처리
    return union === 0 ? 65536 : Math.floor(intersection / union * 65536);
  }
  