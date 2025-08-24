function gcd(a,b){
    if(b===0){
        return a;
    }
    return gcd(b,a%b);
}

function lcm(a,b){
    return a*b/gcd(a,b);
}

function solution(n, m) {
    var answer = [];
    answer.push(gcd(n,m),lcm(n,m));
    return answer;
}