function solution(n) {
    var answer = [];
    
    for(let i=1; i<=n; i++){
        if(n%i==0){
            answer.push(i);
        }
    }
    
    //만약 n이 24일 경우에, n%i로 약수를 찾아서 answer 배열에 푸쉬한다.
    return answer;
}