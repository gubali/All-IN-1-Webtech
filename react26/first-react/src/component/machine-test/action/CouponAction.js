import { validateCoupon } from '../../machine-test/service/CoupanService'
export async function applyCoupan(prevData, formData) {
    try {
        const coupan = formData.get('coupon');
        console.log(formData);
        const rslt = await validateCoupon(coupan);
        return {
            success: true,
            message: rslt.message
        }

    } catch (error) {
        return {
            success: false,
            message: error.message || "An error occurred while applying the coupon."
        }
    }
}