// 1,5,2,6,3,7,4 가 있고 2번째부터 5번째까지면 인덱스 1부터 4까지 자른다.
// 5,2,6,3을 정렬한다. => 2,3,5,6
// 3이니까 인덱스 2는 5 
function solution(array, commands) {
    var answer = [];
    
    for(let i=0; i<commands.length; i++){
                let [start,end,k]=commands[i];
       
        let result = array.slice(start-1,end).sort((a,b)=>a-b);
        answer.push(result[k-1]);
    }
    return answer;
}