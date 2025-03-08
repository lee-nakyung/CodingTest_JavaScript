function solution(n) {
    var answer = 0;
    
    let nstring = n.toString();
    
    for(let i=0; i<nstring.length; i++){
        answer+=Number(nstring[i]);
    }
    return answer;
}