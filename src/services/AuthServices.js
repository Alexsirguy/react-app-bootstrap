import CacheServices from "./CacheServices";
var jwtDecode = require('jwt-decode');
export default class AuthServices extends CacheServices {

    //helper = new JwtHelperService();

    login(token) {
        this.logout();
        this.setCookie("token", token, 1);
        // this.setCookie("role", role, 1);
    }

    logout() {
        this.deleteCookie("token", " ", 2);
        // this.deleteCookie("role", " ", 2);
    }

    checkLogin() {
        if (!this.isAuthenticate()) {
            window.location.href = "/"
        }
    }

    isAdmin() {
        if (this.getRole() != 1) {
            window.location.href = "/"
        }
    }

    isAuthenticate() {
        if (
            this.getCookie("token") != "" &&
            this.getCookie("token") != null
        ) {
            return true;
        }
        return false;
    }

    getToken() {
        return this.getCookie('token');
    }


    getRole() {
        if (
            this.getCookie("token") != "" &&
            this.getCookie("token") != null
        ) {
            return jwtDecode(this.getToken()).role
        } else {
            return "";
        }

    }
}