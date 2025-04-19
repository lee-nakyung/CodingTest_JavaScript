function solution(hp) {
    var answer = 0;
    
    var a = 0;
    var b = 0;
    var c = 0;
    
    a = Math.floor(hp/5);
    b = Math.floor((hp%5)/3);
    c = Math.floor(((hp%5)%3));
    answer = a+b+c;
    return answer;
}