# 프로그래밍 언어에 대한 정보 테이블 => SKILLCODES
# 프로그래밍 스킬 정보를 담은 테이블 => DEVELOPERS
# where python 이나 C# 스킬을 가진 개발자의 정보


SELECT DISTINCT P.ID, P.EMAIL, P.FIRST_NAME, P.LAST_NAME
FROM DEVELOPERS P
JOIN SKILLCODES S ON (P.SKILL_CODE & S.CODE)>0
WHERE S.NAME IN ("Python", "C#")
ORDER BY P.ID;
