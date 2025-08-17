// 0번째 문자는 자신 앞에 같은 문자가 없으므로 answer에 초기값으로 -1을 담아둔다.
// 1번째 문자부터 쭉 순회를 하는데,
// 현재 인덱스부터 0까지 거꾸로 반복해서 자신과 자신 앞의 문자들을 차례대로 비교한다.
// 같은 문자가 나왔을 때 인덱스의 차를 push하고 break로 빠져나간다.
// j가 0이 되었다는 것은 자신과 같은 문자가 없었다는 의미로 answer에 -1을 푸쉬한다.

function solution(s) {
    var answer = [-1];
    
    for(let i=1; i<s.length; i++){
        for(let j=i-1; j>=0; j--){
            if(s[i]===s[j]){
                answer.push(i-j);
                break;
            }
            if (j===0){
                answer.push(-1);
            }
        }
    }
    return answer;
}