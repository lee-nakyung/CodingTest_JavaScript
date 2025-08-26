// 만약 문자열을 순회하는데 0 이 있으면 제거하고, 그 카운트를 센다.
// 제거한 길이를 구한다.
// 그 길이를 2진 변환한다.


function solution(s) {
    var answer = [];
    var removed = 0;
    var count = 0;
    
    while(s!=="1"){
        const oneleng = [...s].filter(item=> item==="1").length;  //3
        removed += s.length-oneleng; // 제거한 0 의 갯수 (s의 길이 - oneleng) == 2
        s = oneleng.toString(2);
        
        count++;
    }
    return [count,removed];
}