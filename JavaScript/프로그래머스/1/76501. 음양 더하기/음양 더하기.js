function solution(absolutes, signs) {
    var answer = 0;
    
    // *-1을 하면 음수로 변함 
    
    for(let i=0; i<absolutes.length; i++){
        if(signs[i]==true){
            answer+=absolutes[i];
        } else if (signs[i]==false){
            answer+=absolutes[i]*-1;
        }
    }
    return answer;
}