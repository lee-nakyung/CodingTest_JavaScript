function solution(s){
    var answer = true;
    let countp = 0;
    let county = 0;
    let Lowers = s.toLowerCase();

    for(let i=0; i<Lowers.length; i++){
        if(Lowers[i]==="p"){
            countp++;
        } else if (Lowers[i]==="y"){
            county++;
        }
    }
    
    if(countp === county){
        answer = true;
    } else {
        answer = false;
    }

    return answer;
}