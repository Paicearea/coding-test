function solution(N, stages) {
    const fail = Array(N + 1).fill(0); // 각 스테이지별 실패자 수 저장
    let total = stages.length; // 총 플레이어 수
  
    stages.forEach((s) => {
      if (s <= N) fail[s]++; // N 이하 스테이지에 있는 사용자만 카운트
    });
  
    return Array.from({ length: N }, (_, i) => i + 1) // 1부터 N까지의 스테이지 번호 생성
      .map((stage) => {
        const rate = total ? fail[stage] / total : 0; // 실패율 계산
        total -= fail[stage]; // 해당 스테이지에 도달한 사람 차감
        return [stage, rate];
      })
      .sort((a, b) => b[1] - a[1] || a[0] - b[0]) // 실패율 내림차순, 동일 시 번호 오름차순
      .map(([stage]) => stage); // 스테이지 번호만 반환
  }  