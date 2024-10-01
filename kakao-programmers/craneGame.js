function solution(board, moves) {
  let basket = []; // 인형을 담을 바구니 (스택) 역할을 할 빈 배열
  let removeDolls = 0; // 터트려진 인형의 개수 저장할 변수

  // moves 배열의 각 요소에 대해 크레인 움직임을 처리
  moves.forEach((move) => {
    // 1부터 시작하는 moves를 0부터 시작하는 인덱스로 변환
    const column = move - 1;
    // board 배열에서 해당 열(column)에서 가장 위에 있는 인형을 찾기 위해 findIndex 사용
    // findIndex는 조건을 만족하는 첫 번째 인덱스를 반환
    const row = board.findIndex((row) => row[column] !== 0);

    // 배열 안에 없으면 -1 이므로, 배열 안에 있다는 조건
    if (row !== -1) {
      const doll = board[row][column]; // 집어 올린 인형을 doll 변수에 저장
      board[row][column] = 0; // 인형을 집어 올린 후 그 자리를 빈칸(0)으로 처리

      // 바구니의 마지막 인형과 집어 올린 인형이 동일한지 확인
      if (basket[basket.length - 1] === doll) {
        basket.pop(); // 동일하다면 마지막 인형을 바구니에서 제거 (터트리기)
        removeDolls += 2; // removeDolls = removeDolls + 2
      } else {
        // 마지막 바구니 인형과 집은 인형이 동일하지 않다면
        basket.push(doll); // 집어 올린 인형을 바구니에 추가
      }
    }
  });

  return removeDolls; // 터트려진 인형의 개수 반환
}
