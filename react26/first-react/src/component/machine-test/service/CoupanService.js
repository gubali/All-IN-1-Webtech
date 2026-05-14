export async function validateCoupon(coupon) {
    await new Promise((r) => setTimeout(r, 1500));
    if (coupon !== "SAVE10") {
        throw new Error("Invalid coupan code. Please try again.");
    }
    return {
        message: `${coupon} Applied Succcesfully`
    }
}