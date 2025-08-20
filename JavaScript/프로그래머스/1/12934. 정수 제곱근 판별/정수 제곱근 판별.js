// n이 어떤 양의 정수 x의 제곱인지 판단하는 문제

function solution(n) {
    var answer = 0;
    
    for(let i=1; i<=Math.sqrt(n); i++){
        if(i*i===n){
            answer = (i+1)*(i+1);
        }
        else {
            answer = -1;
        }
    }
    return answer;
}