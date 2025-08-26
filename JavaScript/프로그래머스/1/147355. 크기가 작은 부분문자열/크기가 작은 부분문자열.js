// 범위는 0~4까지
function solution(t, p) {
    var answer = 0;
    var len = p.length;
    
    for(let i=0; i<=t.length-len; i++){
        let sub = t.slice(i,i+len);
        
        if(sub<=p){
            answer++;
        }
    }
    return answer;
}