function solution(cacheSize, cities) {
    if (cacheSize === 0) return cities.length * 5; // 캐시 크기가 0이면 캐시가 없는 상태이므로 모든 도시에서 캐시 미스가 발생. 따라서 도시의 개수만큼 5를 곱한 값을 바로 반환.
    
    let cache = []; //캐시를 저장할 배열
    let time = 0; //총 실행 시간을 저장하는 변수
    
    for (let city of cities) {
        city = city.toLowerCase(); // 대소문자 구분하지 않기 위해 소문자로 변환
        
        let index = cache.indexOf(city); // 캐시에 있는지 확인
        
        if (index !== -1) {
            // 캐시 히트 (도시가 캐시에 있을 때)
            cache.splice(index, 1); // 해당 도시를 캐시에서 제거
            cache.push(city); // 최신 사용으로 다시 캐시에 추가
            time += 1;
        } else {
            // 캐시 미스 (도시가 캐시에 없을 때)
            if (cache.length === cacheSize) {
                cache.shift(); // 캐시가 꽉 찼다면 가장 오래된 도시 제거
            }
            cache.push(city); // 새로운 도시 캐시에 추가
            time += 5;
        }
    }
    
    return time;
}
