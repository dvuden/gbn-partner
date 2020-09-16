import Proxy from "./Proxy";

class AuthProxy extends Proxy {
    constructor(parameters = {}) {
        super("login", parameters);
    }

    login({ username, password }) {
        const payload = {
            LoginName: username,
            Password: password
        };
        return this.submit("post", "/auth", payload);
    }

    refresh({ username, token }) {
        const payload = {
            LoginName: username,
            RefreshToken: token
        };
        return this.submit("post", "/auth/refresh", payload);
    }
}

export default AuthProxy;