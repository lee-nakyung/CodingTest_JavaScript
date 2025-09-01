function solution(cards1, cards2, goal) {
    for(let s of goal) {
    		//goal을 배열로 for of문으로 
            //한글자씩 순차적으로 매치되는게 있는지 비교한다
            //shift로 한글자씩 배열에서 제거하여 
            //순서대로 제거못하면 no를 리턴한다
            if(cards1[0] === s) {
                cards1.shift();
            } else if(cards2[0] === s) {
                cards2.shift();
            } else {
                return "No"
            }
        }
    return "Yes";
}