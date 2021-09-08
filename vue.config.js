
process.env.VUE_APP_URL = process.env.NODE_ENV === "production" ? "https://yohoho123.azurewebsites.net" : "https://localhost:5001";
module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "/my-demo/" : "/",
    lintOnSave: false

}