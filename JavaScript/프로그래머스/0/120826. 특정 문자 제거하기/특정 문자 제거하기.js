function solution(my_string, letter) {
    var answer = '';
    var string = my_string.split("");
    
    answer = string.filter((value) => value !== letter).join("");
    
    return answer;
}