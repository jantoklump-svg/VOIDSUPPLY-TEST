const COUPONS = Object.freeze([
    { coupon_id: 1, coupon_name: "10%", discount: 0.1 },
    { coupon_id: 2, coupon_name: "15%", discount: 0.15 },
    { coupon_id: 3, coupon_name: "20%", discount: 0.2 },
    { coupon_id: 4, coupon_name: "25%", discount: 0.25 },
    { coupon_id: 5, coupon_name: "30%", discount: 0.3 },
    { coupon_id: 6, coupon_name: "100%", discount: 1 }
]);

function applyCoupon(price, couponName) {
    const coupon = COUPONS.find(c => c.coupon_name === couponName);

    if (!coupon) {
        return {
            success: false,
            message: "Coupon ungültig",
            finalPrice: Number(price.toFixed(2))
        };
    }

    let finalPrice = price - price * coupon.discount;

    finalPrice = Math.round(finalPrice * 100) / 100;

    return {
        success: true,
        message: `Coupon angewendet: ${coupon.coupon_name}`,
        finalPrice: finalPrice
    };
}