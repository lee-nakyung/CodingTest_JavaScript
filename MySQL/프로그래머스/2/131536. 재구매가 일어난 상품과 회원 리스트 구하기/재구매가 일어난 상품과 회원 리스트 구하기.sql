# ONLINE_SALE => 온라인 상품 판매 정보 테이블
# 구해야 하는 것 => 동일한 회원이 동일한 상품을 재구매한 데이터를 구하여, 재구매한 회원 ID와 재구매한 상품 ID를 출력
# 정렬 => 회원 ID를 기준으로 오름차순, 상품 ID를 기준으로 내림차순

SELECT USER_ID, PRODUCT_ID
FROM ONLINE_SALE
GROUP BY USER_ID, PRODUCT_ID
HAVING COUNT(*)>=2
ORDER BY USER_ID, PRODUCT_ID DESC