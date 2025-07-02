function solution(s) {
    var answer = [];
    var words = s.split(" "); // 이렇게되면 try, hello, world로 나누어짐

    for(let i=0; i<words.length; i++){
        var word = words[i]; // 각 단어별로
         let temp = "";
        for(let j=0; j<word.length; j++){ // try 안으로 진입
            // 이어붙여줄 문자열 선언
            temp += (j%2===0 ) ? word[j].toUpperCase() : word[j].toLowerCase();
            
        }
        answer.push(temp);
    }
    return answer.join(" ");
    
    
    
}