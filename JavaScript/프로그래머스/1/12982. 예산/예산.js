// 뺄수 있으면...? 즉 budget에 남은 금액이 d보다 높으면 ! 그러면 result ++;

function solution(d, budget) {
    var answer = 0;
    d.sort((a,b)=>a-b);

    
    for(let i=0; i<d.length; i++){
        if(d[i]<=budget){
            budget-=d[i];
            answer++;
        }
        else {
        break;
        }
    }
       return answer;
}