// map으로 순회를 하되, 숫자를 문자열로 바꿔서 정렬을 해서 합쳐본다.
// 더 큰 수를 반환하기 위해 오름차순으로 정렬을 하고, 그리고 join메소드로 합친다.
// 0이 들어가면 000이 반환되므로 0을 반환하게 하고, 그 외에는 answer을 반환한다.
function solution(numbers) {
    var answer = '';
    
    answer = numbers.map(String).sort((a,b)=>(b+a)-(a+b)).join("");
    return answer[0]==="0" ? "0":answer;
}