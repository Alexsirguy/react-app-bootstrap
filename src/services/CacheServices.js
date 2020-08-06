export default class CacheServices {
    setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
        const expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    getCookie(cname) {
        const value = "; " + document.cookie;
        const parts = value.split("; " + cname + "=");
        if (parts.length == 2) {
            return parts.pop().split(";").shift();
        }
        return ""
    }

    deleteCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() - exdays * 24 * 60 * 60 * 1000);
        const expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

}