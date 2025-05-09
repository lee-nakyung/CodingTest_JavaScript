function solution(left, right) {
    var sum = 0;
    
    
    //전체 순회
    for(let i=left; i<=right; i++){
        
        var count = 0; //약수의 갯수
        
        for(let j=1; j<=i; j++){
            if(i%j===0){
                count++;
            }
             }
            
            if(count%2===0){
                sum+=i;
            }
            else {
                sum-=i;
            }
       
    
        
    }
     return sum;
}