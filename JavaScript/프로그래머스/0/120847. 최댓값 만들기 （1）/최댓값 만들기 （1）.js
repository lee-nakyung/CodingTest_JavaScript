function solution(numbers) {
    var answer = 0;
    // 오름차순으로 정리를 하고, 맨 뒤에 요소랑 그 앞의 요소를 곱하면 되지 않나?
    
    numbers.sort((a,b)=>a-b);
    answer = numbers[numbers.length-1] * numbers[numbers.length-2];
    return answer;
}