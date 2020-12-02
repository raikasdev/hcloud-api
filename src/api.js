const axios_module = require('axios')
const hcloudError = require('./hcloudError')
const baseURL = "https://api.hetzner.cloud/v1/"
let token;
let axios;
class API {
    constructor(apitoken) {
        if(!apitoken) throw new hcloudError("No API-token provided"); 
        token = apitoken; 
        axios = setupAxios();
    }

    testConnection = function() {
        return new Promise((resolve, reject)=> {
            try {
                axios.get("/servers")
                .then(function (r) {
                    console.log(r.data)
                    return resolve(true);
                  })
                  .catch(function () {
                    return resolve(false);
                  })
            } catch {
                resolve(false);
            }
        })
        
    }
}

function setupAxios() {
    let axios1 = axios_module.create({
        baseURL: baseURL,
        timeout:  5000,
        headers: {
          Authorization: 'Bearer ' + token,
          'User-Agent': "hcloud-api"
        }
    });
    axios1.interceptors.response.use(function (response) {
        return response;
      }, function (err) {
        if(err.response) throw new hcloudError(err.response.data.error)
        return Promise.reject(error);
      });
    return axios1;
}
module.exports = API;