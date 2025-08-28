# 동물 보호소에 들어온 동물의 정보 테이블 => ANIMAL_INS
# 동물 보호소에서 입양 보낸 동물의 정보 테이블 => ANIMAL_OUTS
# 조인키는 ANIMAL_ID
# 보호 시작일보다 입양일이 더 빠른 동물의 아이디와 이름을 조회
# ORDER BY 시작일이 빠른 순으로 조회한다.

SELECT I.ANIMAL_ID, I.NAME
FROM ANIMAL_INS I
LEFT JOIN ANIMAL_OUTS O ON I.ANIMAL_ID = O.ANIMAL_ID
WHERE I.DATETIME > O.DATETIME
ORDER BY I.DATETIME