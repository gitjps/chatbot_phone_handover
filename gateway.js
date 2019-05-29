var rp = require('request-promise');
function main(params) {
    var uri = params.target_hostname + params.target_route + params.query_params;
    return new Promise(function (resolve, reject) {
       rp(uri)
       .then(function (parsedBody) {
           obj = JSON.parse(parsedBody);
           resolve({ "gw_result": obj });
       })
       .catch(function (err) {
           resolve({ message: 'Fehler!!', error: err.toString() });
       });
    });
}
