//Host of the api
export const API_HOST = "http://localhost:5000";

//@desc Get all products
//@format API_HOST/api/products
export const GET_ALL_PRODUCTS = `${API_HOST}/api/products`;

//@desc Get specific product by id
//@format API_HOST/api/product/:id
export const GET_SINGLE_PRODUCT = `${API_HOST}/api/products`;

//@desc Post for new account register
//@format API_HOST/api/users
export const POST_USER_REGISTER = `${API_HOST}/api/users`;

//@desc Post login info to login
//@format API_HOST/api/users/login
export const POST_USER_LOGIN = `${API_HOST}/api/users/login`;

//@desc Get user profile info
//@format API_HOST/api/users/profile
export const GET_USER_PROFILE = `${API_HOST}/api/users/profile`;

//@desc Update user profile info
//@format API_HOST/api/users/profile
export const UPDATE_USER_PROFILE = `${API_HOST}/api/users/profile`;
