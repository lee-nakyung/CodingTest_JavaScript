// seoul 배열을 돌아서 indexOf으로 반환하면 될것같은디
function solution(seoul) {
    var answer = '';
    
    for(let i=0; i<seoul.length; i++){
        if(seoul[i]==="Kim"){
            answer= `김서방은 ${i}에 있다`
        }
    }
    return answer;
}