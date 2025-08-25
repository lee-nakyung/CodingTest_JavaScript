// 일단 약수의 갯수를 구하기
// 만약 약수의 갯수가 짝수이면 answer에다가 더하고
// 약수의 갯수가 홀수이면 answer에다가 빼기

function solution(left, right) {
   
    var sum = 0; // return 해야 할 결과값
    
    for(let i=left; i<=right; i++){
         var answer = 0; // 약수의 갯수를 담을 변수 
        for(let j=1; j<=i; j++){ 
            if(i%j===0){
                answer++;
            }
            
        }
        
        if(answer%2===0){
            sum+=i;
        } else {
            sum-=i;
        }
    }
    
    return sum;
   
}