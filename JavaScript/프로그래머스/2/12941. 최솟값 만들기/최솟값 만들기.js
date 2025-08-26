// 최솟값을 만드려면 , 큰수는 작은수와 작은수는 큰수와 곱해서 값을 더해야한다. 
// A는 오름차순을 하고, B는 내림차순을 해서 곱해서 누적값을 더한다. 

function solution(A,B){
    var answer = 0;

    A.sort((a,b)=>a-b);
    B.sort((a,b)=>b-a);
    
    for(let i=0; i<A.length; i++){
      
            answer+=A[i]*B[i];   
        
    }

    return answer;
}