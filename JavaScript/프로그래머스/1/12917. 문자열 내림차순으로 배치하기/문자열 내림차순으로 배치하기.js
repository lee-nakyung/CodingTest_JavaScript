function solution(s) {
    
//     split을 하면 문자열을 배열로 바꿔줌 따라서, Zbcdefg -> ["Z","b","c","d","e","f","g"]
//     숫자 정렬할 때만 (a,b)=>a-b
// 얘는 문자이기 때문에 sort() 그리고 역순이니까 reverse()
    // join() = 배열 -> 문자열로 다시 합치기 
    var array = s.split("").sort().reverse().join("");
    
    return array;
}