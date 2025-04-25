function solution(s) {
    var answer = '';
    
    
    
    // 짝수면 ? qwer 이면 4-> 1,2 를 접근해야함 : slice 메소드는 자동으로 내림 처리 2는 3번째 문자 
    answer = s.length%2===0 ? s.slice(s.length/2-1, s.length/2+1) : s.slice(s.length/2,s.length/2+1)
    return answer;
}