function solution(my_string) {
    var letter = my_string.split("");
    var answer = 0;
    
    for(let i=0; i<letter.length; i++){
        if(Number(letter[i]))
            answer+=Number(letter[i]);
    }
    return answer;
}