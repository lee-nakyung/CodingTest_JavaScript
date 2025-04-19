function solution(array) {
    var answer = 0;
    
    array2 = array.sort((a,b)=>a-b);
    answer = array2[Math.floor(array2.length/2)];
    return answer;
}