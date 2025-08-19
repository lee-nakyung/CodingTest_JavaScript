// 숫자를 배열로 바꿔서 i를 순회해서 더하기
function solution(n)
{
    var answer = 0;

    var array = n.toString().split("");
    for(let i=0; i<array.length; i++){
        answer+=Number(array[i]);
    }

    return answer;
}