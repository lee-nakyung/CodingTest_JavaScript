function solution(n, k) {
    var answer = 0;
    
    if(n>=10){
        answer = 12000*n + 2000*k - Math.floor(n/10)*2000;
    } else {
        answer = 12000*n + 2000*k;
    }
    return answer;
}