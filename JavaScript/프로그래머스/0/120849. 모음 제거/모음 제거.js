function solution(my_string) {
    var answer = '';
    
    var vowel = ["a","i","e","o","u"];
    
    for(let i=0; i<my_string.length; i++){
        if(!vowel.includes(my_string[i]))
            answer+=my_string[i];
    }
    return answer;
}