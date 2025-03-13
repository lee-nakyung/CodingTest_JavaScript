function solution(a, b) {
    var answer = 0;
    
    // a+ b == a.concat(b);
    // 2*a*b 
    
    if([a,b].join("")>2*a*b){
        return Number([a,b].join(""));
    }
    
    else if([a,b].join("")<2*a*b){
        return 2*a*b;
    }
    
    else {
        return Number([a,b].join(""));
    }
    return answer;
}