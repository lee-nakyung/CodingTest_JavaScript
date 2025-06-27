function solution(s) {

    
    //길이가 4또는 6 그리고 전부 숫자일때만 true
    //isNaN(s)는 숫자가 들어올때 false를 반환
    if(s.length === 4 || s.length === 6){
        for(let i=0; i<s.length; i++){
            if(isNaN(s[i])) return false;
        }
        return true;
    }
    
    return false;

 
}