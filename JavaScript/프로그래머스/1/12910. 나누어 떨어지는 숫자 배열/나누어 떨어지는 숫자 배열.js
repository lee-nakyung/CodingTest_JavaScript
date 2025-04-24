function solution(arr, divisor) {
    var answer = [];
    
    
    //arr만큼 쭉 돌아서 만약 나눠떨어지면 answer 배열에 푸쉬
    for(let i=0; i<arr.length; i++){
        if(arr[i]%divisor ===0){
            answer.push(arr[i]);
        }
    }
    
    //for문을 돌았는데 answer의 배열 길이가 0 이면 -1 푸쉬
    if(answer.length===0){
        answer.push(-1);
    }
    
    //오름차순으로 정렬해서 리턴
    return answer.sort((a,b)=>a-b);
}