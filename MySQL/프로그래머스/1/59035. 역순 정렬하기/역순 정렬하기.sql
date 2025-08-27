# 동물 보호소에 들어온 동물의 정보를 담은 테이블 => ANIMAL_INS
# 구해야하는 것 => 동물보호소에 들어온 모든 동물의 이름과 보호 시작일을 조회
# ANIMAL_ID를 역순으로 ORDER BY
SELECT NAME, DATETIME
FROM ANIMAL_INS
ORDER BY ANIMAL_ID DESC