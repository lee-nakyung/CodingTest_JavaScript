function solution(arr1, arr2){
	const arr1y = arr1.length; // 결과의 행
	const arr2x = arr2[0].length;  // 결과의 열 
	
    // 결과 배열을 0으로 채워서 반환한다.
    const result=[];
	for(let i=0; i<arr1y; i++){
        result.push(new Array(arr2x).fill(0));
    }
    
    for(let i=0; i<arr1y; i++){
        for(let j=0; j<arr2x; j++){
            for(let k=0; k<arr1[0].length; k++){
                result[i][j] += arr1[i][k] * arr2[k][j];
            }
        }
    }
    
	
	return result;

}