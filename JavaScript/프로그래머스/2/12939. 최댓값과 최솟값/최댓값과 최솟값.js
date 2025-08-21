// 문자열 -> 배열 -> 숫자 배열
//최솟값과 최대값만 남겨야하므로, 인덱스 0 / 그리고 s.length-1
// 만약 s의 0 과 1이 같으면 그냥 그 s의 값을 리턴한다.

function solution(s) {
    var answer = "";
    var str = "";
    
    str = s.split(" ").map(Number).sort((a,b)=>a-b);
    return answer = str[0]+" "+str[str.length-1];

    
}