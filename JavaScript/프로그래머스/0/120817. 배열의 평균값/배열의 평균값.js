function solution(numbers) {
    var answer = 0;
    
    var answer = numbers.reduce((a,b)=> (a+b),0)/numbers.length;
    
    
    return answer;
}