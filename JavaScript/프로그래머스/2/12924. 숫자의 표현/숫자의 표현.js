// 브루트포스 
// start를 1부터 n까지 순회한다
// 각 start에 대해 연속된 수를 하나씩 더하면서 합을 계산한다
// 합이 n이 되면 count를 1 증가시킨다
// 합이 n 이상이 되면 해당 start에 대한 반복을 종료한다
// 최종 count를 반환한다

function solution(n) {
    var count = 0;
    
    for(let i=1; i<=n; i++){
            let sum = 0;
        for(let j=i; j<=n; j++){
            sum+=j;
            if(sum===n){
                count++;
            }
            if(sum>=n){
                break;
            }
        }
    }
            return count;
}