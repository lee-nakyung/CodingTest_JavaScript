# 쇼핑몰에서 판매중인 상품들의 상품 정보를 담은 테이블 => PRODUCT
# 오프라인 상품 판매 정보를 담은 테이블 => OFFLINE_SALE
# 상품코드 별 매출액 (판매가 * 판매량) 합계를 출력하는 것
# 매출액을 기준으로 내림차순 정렬, 상품 코드를 기준으로 오름차순 정렬

SELECT P.PRODUCT_CODE, SUM(P.PRICE * O.SALES_AMOUNT) AS SALES
FROM PRODUCT P
JOIN OFFLINE_SALE O ON P.PRODUCT_ID = O.PRODUCT_ID
GROUP BY P.PRODUCT_CODE
ORDER BY SALES DESC, PRODUCT_CODE 