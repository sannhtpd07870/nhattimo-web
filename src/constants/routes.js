export const ROUTES = {
    ADMIN: {
        ROLE: {
            VIEW: "/admin/curd/role",
            ADD: "/admin/curd/role/add",
            EDIT: "/admin/curd/role/:id",
        },
        ACCOUNT: {
            LOGIN: "/admin/account/login",
            REGISTER: "/admin/account/register",
            EDIT: "/admin/role/:id",
        },
    },
    // USER: {
    //     HOME: "/",
    //     PRODUCT_LIST: "/products",
    //     PRODUCT_DETAIL: "/products/details/:id",
    //     CART: "/cart",
    //     CHECKOUT: "/checkout",
    //     // profile
    //     PROFILE: "/profile",
    //     USER_INFO: "/profile/user-info",
    //     ORDER_HISTORY: "/profile/order-history",
    //     CHANGE_PASSWORD: "/profile/change-password",
    //     LOGIN_SUCCESS: "/login-success/:userId/:tokenLogin",
    // },
    // CONTACT: "/contact",
    // POST: "/post",
    // LOGIN: "/login",
    // REGISTER: "/register",
    // RESET_PASSWORD: "/reset-password/:token",
    // FORGOT_PASSWORD: "/forgot-password",
};
