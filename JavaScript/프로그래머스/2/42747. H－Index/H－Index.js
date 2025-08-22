// 총 배열의 길이가 총 발표한 논문의 수이다.
// 이거를 내림차순을 정렬한다. => 6,5,3,1,0
// index와 비교를 해서 높거나 같으면 count++, 적으면 break;
// count를 반환한다.
function solution(citations) {
    var answer = 0;
    
    var sort = citations.sort((a,b)=>b-a);
    
    for(let i=0; i<sort.length; i++){ //6,5,3,1,0
        if(sort[i]>=i+1){
            answer++;
        }
        else {
            break;
        }
    }
    return answer;
   
}