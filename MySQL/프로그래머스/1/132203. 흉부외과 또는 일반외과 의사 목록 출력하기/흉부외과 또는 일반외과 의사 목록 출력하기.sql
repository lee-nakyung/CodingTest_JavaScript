# DOCTOR => 종합벙원에 속한 의사 정보를 담은 테이블
# WHERE => 진료과가 흉부외과이거나 일반외과인
# SELECT => 이름, 의사ID, 진료과, 고용일자
# 정렬 => 고용일자를 기준으로 내림차순, 잉름을 기준으로 오름차순

SELECT DR_NAME, DR_ID, MCDP_CD, DATE_FORMAT(HIRE_YMD, "%Y-%m-%d") AS HIRE_YMD
FROM DOCTOR
WHERE MCDP_CD = "GS" or MCDP_CD = "CS"
ORDER BY HIRE_YMD DESC, DR_NAME ASC