function solution(s) {
    var answer = '';
    
    // 최댓값 최솟값 구하기 위해서는 문자열에서 배열로 바뀌어야한다.
    // 문자열 -> 문자열 배열 -> 숫자로 된 배열
    var numbers = s.split(" ");
    // 문자열이 들어오면 자동으로 숫자로 바꿔준다. 
    var max = Math.max(...numbers);
    var min = Math.min(...numbers);
    //최솟값 먼저 그다음 최댓값이 들어가야한다. 
    answer = `${min} ${max}`
    
    
  
    return answer;
}