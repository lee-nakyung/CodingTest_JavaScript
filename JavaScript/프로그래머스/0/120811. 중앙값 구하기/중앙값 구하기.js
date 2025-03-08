function solution(array) {
    var answer = 0;
    
    array.sort((a,b)=> a-b); //내림차순
    answer = array[Math.floor(array.length/2)];
    return answer;
}