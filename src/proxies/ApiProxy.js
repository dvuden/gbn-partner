import Proxy from "./Proxy";

class ApiProxy extends Proxy {
  constructor(endpoint, parameters = {}) {
    super(`api/${endpoint}`, parameters);
  }
}

export default ApiProxy;
