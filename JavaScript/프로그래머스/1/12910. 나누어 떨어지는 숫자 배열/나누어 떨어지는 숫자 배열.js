// arr을 순회해서 만약에 divisor로 나눠떨어지면 , 그 값은 이제 answer배열에 푸쉬한다.

function solution(arr, divisor) {
    var answer = [];
    
    for(let i=0; i<arr.length; i++){
        if(arr[i]%divisor ===0){
            answer.push(arr[i]);
        }
    }
    return answer.length === 0 ? [-1] : answer.sort((a,b)=>a-b)
}