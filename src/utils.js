exports.doGET = async (httpClient, url) => {
    console.log(url);
    return new Promise((resolve, reject) => {
        httpClient.get(url, (error, response, body) => {
            if (error || response.statusCode < 200 || response.statusCode >= 300) reject (error || body);
            resolve({statusCode: response.statusCode, message: body});
        })
    })
}

exports.doPOST = async (httpClient, options) => {
    return new Promise((resolve, reject) => {
        httpClient.post(options, (error, response, body) => {
            if (error || response.statusCode < 200 || response.statusCode >= 300) reject (error || body);
            resolve({statusCode: response.statusCode, message: body});
        })
    })
}