function solution(n, k) {
    var answer = 0
    
        answer = n*12000+ 2000*(k-Math.floor(n/10));
    
    return answer;
}