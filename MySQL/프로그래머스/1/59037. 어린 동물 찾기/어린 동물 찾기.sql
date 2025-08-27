# 동물 보호소에 들어온 동물의 정보를 담은 테이블 => ANIMAL_INS
# 젊은 동물의 아이디와 이름을 조회
# 결과는 아이디 순으로 조회

SELECT ANIMAL_ID, NAME
FROM ANIMAL_INS
WHERE INTAKE_CONDITION != "Aged"
ORDER BY ANIMAL_ID