//signs를 배열로 돌려서 true이면 absolutes[i]를 그대로 반환하고 false이면-를 넣도록
function solution(absolutes, signs) {
    var answer = 0;
    
    for(let i=0; i<signs.length; i++){
        if(signs[i]===false){
            absolutes[i]= absolutes[i]*-1;
        }
        answer+=absolutes[i];
        
    }
    
    return answer;
}