function solution(array, commands) {
    var answer = [];
    
    //commands의 전체를 순회를 해야한다.
    
    for(let i=0; i<commands.length; i++){
        const [a,b,c] = commands[i]; // 2 5 3
        const sliced = array.slice(a-1,b).sort((a,b)=>a-b);
        answer.push(sliced[c-1]);
    }
    return answer;
}