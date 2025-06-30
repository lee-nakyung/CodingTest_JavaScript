function solution(n, m) {
    const getGCD = (n,m) => {
        if(m===0) return n;
        return getGCD(m,n%m);
    }
    
    const getLCM = (n,m)=>{
        return (n*m)/getGCD(n,m);
    }
    
    return [getGCD(n,m),getLCM(n,m)];
}