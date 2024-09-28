function solution(n, arr1, arr2) {
    return arr1.map((val, i) => {
        // arr1과 arr2의 값을 OR 연산한 결과를 이진수로 변환
        const binary = (val | arr2[i]).toString(2).padStart(n, '0');
        // 이진수를 "#"와 " "로 변환
        return binary.replace(/1/g, '#').replace(/0/g, ' ');
    });
}
