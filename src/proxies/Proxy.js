import axios from "axios";
// import Vue from 'vue'
//import Axios from "axios";
require("dotenv").config();

axios.defaults.timeout = 3000;

class BaseProxy {
  constructor(endpoint, parameters = {}) {
    this.endpoint = endpoint;
    this.parameters = parameters;
  }

  setParameters(parameters) {
    console.log("setParameters");
    console.log(parameters);
    Object.keys(parameters).forEach(key => {
      this.parameters[key] = parameters[key];
    });

    return this;
  }

  setParameters2(parameters) {
    if (parameters.length > 0) {
      parameters.forEach(object => {
        var parameter = object.name + "[" + object.operator + "]";
        this.parameters[parameter] = object.value;
      });
    }
    return this;
  }

  setParameter(parameter, value) {
    // console.log("Proxy.setParameter()");
    // console.log(parameter);
    // console.log(value);

    this.parameters[parameter] = value;
    // console.log("this.parameter");
    // console.log(this.parameters);
    return this;
  }

  removeParameters(parameters) {
    parameters.forEach(parameter => {
      delete this.parameters[parameter];
    });

    return this;
  }

  removeParameter(parameter) {
    delete this.parameters[parameter];

    return this;
  }

  submit(requestType, url, data = null) {
    return new Promise((resolve, reject) => {
      console.log("proxy submit");
      console.log(data)

      console.log(url + this.getParameterString());
      //axios[requestType](url + this.getParameterString(), data)
      axios[requestType](url + this.getParameterString(), { data })
        .then(response => {
          console.log("axios response");
          // console.log(response);
          // console.log(JSON.stringify(response.data));
          // console.log(JSON.stringify(response.headers));
          // console.log(JSON.stringify(response.config));
          resolve(response);
        })
        .catch(err => {
          if (err) {
            console.log("proxy.submit.catch");
            console.log(err);
            reject(err);
          } else {
            reject(new Error("REST Client error"));
          }
        });
    });
  }

  // submithttp(requestType, url, data = null) {
  //   return new Promise((resolve, reject) => {
  //     console.log("submithttp");
  //     //Vue.$http[requestType](url + this.getParameterString(), data)
  //     //Vue.$http[requestType](url, data)
  //     fetch(url, data)
  //       .then(response => {
  //         console.log("submithttp response");
  //         console.log(response);
  //         resolve(response.data)
  //       })
  //       .catch(({ error }) => {
  //         console.log("submithttp error");
  //         console.log(error);
  //         if (error) {
  //           reject(error.data)
  //         } else {
  //           reject(new Error('REST Client error'))
  //         }
  //       })
  //   })
  // }


  submitPost(requestType, url, data = null) {
    console.log("Proxy.js => submitPost");
    return new Promise((resolve, reject) => {
      console.log("proxy submitPost");
      console.log(url);
      console.log(requestType);
      // console.log(JSON.stringify(data));
      // axios[requestType](url, {
      //   to: data.to,
      //   subject: data.subject,
      //   body: data.body
      // })

      // let axiosConfig = {
      //   headers: {
      //     //'Content-Type': 'application/json;charset=UTF-8',
      //     'Content-Type': 'application/x-www-form-urlencoded',
      //     "Access-Control-Allow-Origin": "*"
      //   },
      //   data: data
      // };

      // const body = data.body;

      // axios[requestType](url, data)
      axios({
        method: requestType,
        url: url,
        data: data
      })
        // console.log("await result")
        // console.log(res.data);
        .then(response => {
          //console.log("axios response");
          //console.log(JSON.stringify(response.data));
          //console.log(JSON.stringify(response));
          resolve(response);
        })
        .catch(err => {
          if (err) {
            //console.log("SubmitPost .catch");
            //console.log(err);
            reject(err.data);
          } else {
            reject(new Error("REST Client error"));
          }
        })
        .finally((response) => {
          //console.log("finally");
          //console.log(response);
        });
    });
  }


  // submitPost = async (requestType, url, data = null) => {

  //   // return new Promise((resolve, reject) => {
  //   console.log("proxy submitPost");
  //   console.log(data);
  //   // axios[requestType](url, {
  //   //   to: data.to,
  //   //   subject: data.subject,
  //   //   body: data.body
  //   // })
  //   return await axios[requestType](url, data)
  //     .then(response => {
  //       console.log("axios response");
  //       console.log(response);
  //       resolve(response);
  //     })
  //     .catch(({ response }) => {
  //       if (response) {
  //         console.log("SubmitPost .catch");
  //         console.log(response);
  //         reject(response.data);
  //       } else {
  //         reject(new Error("REST Client error"));
  //       }
  //     });
  //   console.log("einde submit post");
  //   // });
  // }

  all() {
    return this.submit(
      "get",
      `${window.config.connections.rest}/${this.endpoint}`
    );
  }

  find(id) {
    return this.submit("get", `${window.config.connections.rest}/${this.endpoint}/${id}`);
  }
  // find(id) {
  //   return this.submit("get", `/${this.endpoint}/${id}`);
  // }

  //nieuwe entry toevoegen
  create(item) {
    return this.submitPost(
      "post",
      `${window.config.connections.rest}/${this.endpoint}`,
      item
    );
  }

  update(id, item) {
    return this.submitPost(
      "put",
      `${window.config.connections.rest}/${this.endpoint}/${id}`,
      item
    );
  }

  sendMail(mailbody) {
    // console.log("sendMail...");
    // console.log(mailbody);
    // console.log(`${window.config.connections.rest}/${this.endpoint}`);
    return this.submitPost(
      "post",
      `${window.config.connections.rest}/${this.endpoint}`,
      mailbody
    );
  }

  destroy(id) {
    return this.submit("delete", `/${this.endpoint}/${id}`);
  }

  getParameterString() {
    const keys = Object.keys(this.parameters);

    const parameterStrings = keys
      .filter(key => !!this.parameters[key])
      .map(key => `${key}=${this.parameters[key]}`);

    return parameterStrings.length === 0
      ? ""
      : `?${parameterStrings.join("&")}`;
  }
}

export default BaseProxy;

// //-------------------------------------------------------------------------------------------------------------
// import Vue from 'vue'

// class BaseProxy {
//   constructor(endpoint, parameters = {}) {
//     this.endpoint = endpoint
//     this.parameters = parameters
//   }

//   setParameters(parameters) {
//     Object.keys(parameters).forEach(key => {
//       this.parameters[key] = parameters[key]
//     })

//     return this
//   }

//   setParameters2(parameters) {
//     parameters.forEach(object => {
//       var parameter = object.name + '[' + object.operator + ']'
//       this.parameters[parameter] = object.value
//     })
//     return this
//   }

//   setParameter(parameter, value) {
//     this.parameters[parameter] = value

//     return this
//   }

//   removeParameters(parameters) {
//     parameters.forEach(parameter => {
//       delete this.parameters[parameter]
//     })

//     return this
//   }

//   removeParameter(parameter) {
//     delete this.parameters[parameter]

//     return this
//   }

//   submit(requestType, url, data = null) {
//     return new Promise((resolve, reject) => {
//       Vue.$http[requestType](url + this.getParameterString(), data)
//         .then(response => {
//           resolve(response.data)
//         })
//         .catch(({ response }) => {
//           if (response) {
//             reject(response.data)
//           } else {
//             reject(new Error('REST Client error'))
//           }
//         })
//     })
//   }

//   all() {
//     return this.submit('get', `/${this.endpoint}`)
//   }

//   find(id) {
//     return this.submit('get', `/${this.endpoint}/${id}`)
//   }

//   create(item) {
//     return this.submit('post', `/${this.endpoint}`, item)
//   }

//   update(id, item) {
//     return this.submit('put', `/${this.endpoint}/${id}`, item)
//   }

//   destroy(id) {
//     return this.submit('delete', `/${this.endpoint}/${id}`)
//   }

//   getParameterString() {
//     const keys = Object.keys(this.parameters)

//     const parameterStrings = keys
//       .filter(key => !!this.parameters[key])
//       .map(key => `${key}=${this.parameters[key]}`)

//     return parameterStrings.length === 0 ? '' : `?${parameterStrings.join('&')}`
//   }
// }

// export default BaseProxy

// ------------------------------------------ OAuth2 --------------------------------------------------------

// const credentials = {
//   client: {
//     id: VUE_APP_CLIENT_ID,
//     secret: VUE_APP_CLIENT_SECRET
//   },
//   auth: {
//     //tokenHost: "https://api.oauth.com"
//     tokenHost:
//       "https://dev-865365.okta.com/oauth2/aus2z49ctBOkkAqMu4x6/.well-known/oauth-authorization-server"
//   }
// };
//const oauth2 = require("simple-oauth2").create(credentials);

// const btoa = require("btoa");
// const request = require("request-promise");
// const oauth = require("../utils/oauth");

// const {
//   VUE_APP_ISSUER_DEV,
//   VUE_APP_CLIENT_ID,
//   VUE_APP_CLIENT_SECRET,
//   VUE_APP_DEFAULT_SCOPE
// } = process.env;
