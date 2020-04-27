const utils = require('./utils.js')

exports.addIssueType = async function(httpClient) {
    let response = '';
    const issueTypeUrl = '/rest/api/2/issuetype';
    const options = {   
        url: issueTypeUrl, 
        json: true,
        body: { 
            name: "auto name", 
            description: "auto description"
        }
    };

    try {
        const result = await utils.doPOST(httpClient, options);
        response += ("Success creating issue types" + result.statusCode);
    }
    catch(error) {
        response += ("Error creating issue types:" + error.errors.name);
    }
    // NOTE: At this point `options` has been modified by httpClient

    try {
        const result = await utils.doGET(httpClient, issueTypeUrl);
        response += ("Issue types:" + result.message);
    }
    catch (error) {
        response += ("Error getting issue types:" + error.errors.name);
    }
    return response;
}