# hcloud-api
A NodeJS wrapper for the Hetzner Cloud API

## Usage:

`
let API = new require("hcloud-api")("api-token");

API.testConnection().then(con=>{
  console.log("API token valid: " + con)
})
`
