function solution(arr1, arr2) {
    var answer = [[]];
    
    const r1 = arr1.length;  //예시 1번 같은 경우는 2
    const c1 = arr1[0].length; //예시 1번 같은 경우는 1
    const r2 = arr2.length; //1
    const c2 = arr2[0].length; // 2
    
    //2)결과를 저장할 2차원 배열 초기화
    const ret=[];
    for(let i=0; i<r1; i++){
        ret.push(Array(c2).fill(0));
    }
    
    //3)arr1과 arr2의 행렬을 곱하기 위한 반복문이다. 
    for(let i=0; i<r1; i++){
        for(let j=0; j<c2; j++){
            for(let k=0; k<c1; k++){
                ret[i][j]+=arr1[i][k]*arr2[k][j];
            }
        }
    }
    
    return ret;
}