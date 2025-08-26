function solution(s) {
    const lastIndex={}; // 마지막 위치를 기록할 배열 선언
    const answer=[];
    
    for(let i=0; i<s.length; i++){
        let ch = s[i];
        
        if(lastIndex[ch]!==undefined){
            answer.push(i-lastIndex[ch]);
        } else {
            answer.push(-1);
        }
        
        lastIndex[ch]=i;
    }
    return answer;
    
    
}