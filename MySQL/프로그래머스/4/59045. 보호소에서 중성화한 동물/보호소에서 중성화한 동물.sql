# 동물 보호소에 들어온 동물의 정보를 담은 테이블 => ANIMAL_INS
# 동물 보호소에서 입양 보낸 동물의 정보를 담은 테이블 => ANIMAL_OUTS
# 중성화되지 않았지만, 보호소를 나갈 당시에는 중성화된 동물의 아이디와 생물 종 , 이름을 조회하는
# 아이디 순으로 조회
# 


SELECT I.ANIMAL_ID, I.ANIMAL_TYPE, I.NAME
FROM ANIMAL_INS I
JOIN ANIMAL_OUTS O ON I.ANIMAL_ID=O.ANIMAL_ID
WHERE I.SEX_UPON_INTAKE like "Intact%" and O.SEX_UPON_OUTCOME not like "Intact%"
ORDER BY I.ANIMAL_ID
