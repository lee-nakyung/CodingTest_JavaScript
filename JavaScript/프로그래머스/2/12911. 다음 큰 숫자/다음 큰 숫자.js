function solution(n) {
    let binary = n.toString(2);
    let curOne = binary.match(/1/g).length;
    
    while(true){
        let nextBinary = (++n).toString(2);
        let nextOne = nextBinary.match(/1/g).length;
        if(curOne===nextOne)break;
    }
    
    return n;
}