function solution(array) {
    var answer = [];
    
    //가장 큰수는 Math.max로 구함
    var max = Math.max(...array);
    var index = 0;
    for(let i=0; i<array.length; i++){
        if(array[i]===max){
            index = i;
        }
    }
    
    answer = [max,index];
    return answer;
}