// 0 부터 9까지 순회를 하고 만약에 그 값이 없으면 count 에서 더해서 구한다.
// number 배열을 1부터 쭉 순회를 하고 만약에 
function solution(numbers) {
    var answer = 0;
    
    for(let i=0; i<=9; i++){
        if(numbers.includes(i)===false){
            answer+=i;
        }
    }
    return answer;
}