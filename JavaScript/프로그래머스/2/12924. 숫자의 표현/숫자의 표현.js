// i가 1부터 n까지 쭉 순회하도록 한다.
//

function solution(n) {
    var answer = 0;
    
    for(let i=1; i<=n; i++){
        let j=i;
        let sum = 0;
        while(sum<=n){
            sum+=j;
            j++;
            if(sum===n){
                answer++;
                break;
            }
            if(sum+j>n){
                break;
            }
        }
    }
    return answer;
}