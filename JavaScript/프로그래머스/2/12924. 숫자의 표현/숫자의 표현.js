// 1. i는 1부터 n까지 순회한다.
// 2. while문으로 sum값을 구해서 누적한다. j를 인덱스로 하여 sum값을 구하면 ++ 해준다.
// 3. sum과 n이 같아지면 count가 증가되고 break문으로 탈출한다.
// 4. count를 리턴한다.

function solution(n) {
    var answer = 0;
    let count = 0;
    
    for(let i=1; i<=n; i++){
        let j = i;
            let sum = 0;
        
        while(sum<n){
            sum+=j;
            j++;
            if(sum==n){
                count++;
                break;
            }
            if(sum+j>n){
                break;
            }
        }
    }
    return count;
}