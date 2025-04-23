function solution(x) {
    var answer = true;
    
    //문자열로 바꿔서 , 더한 값이 , x%로 나눴을때 0 이면, true 그렇지 않으면 false.
    
    answer = x% [...String(x)].reduce((a,b)=> a+ Number(b), 0 )=== 0 ? true : false;
    return answer;
}