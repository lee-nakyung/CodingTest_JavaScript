function solution(n) {
    let t1 = 0;
    let t2 = 1;
    let answer = 0;
    
    for(let i=2; i<=n; i++){
        answer = (t1 + t2) %1234567;
        t1 = t2;
        t2 = answer;
    }
    return answer;
}