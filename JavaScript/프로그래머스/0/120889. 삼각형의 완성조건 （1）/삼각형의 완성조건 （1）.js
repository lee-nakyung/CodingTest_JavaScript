function solution(sides) {
    var answer = 0;
    
    sides.sort(function(a,b){
        return a-b;
    }) //오름차순 정렬 2,3,6
    
    if(sides[2]<sides[0]+sides[1]){
        answer = 1;
    }else {
        answer = 2;
    }
    
    
    return answer;
}