function solution(s) {
    if(s.length%2===0){//4일때 1이랑 2값 더해서 출력
        return s[s.length/2-1] + s[s.length/2]
    } else {
        return s[Math.floor(s.length/2)];
    }
}