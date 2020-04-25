const init = require('../src/init.js')

export default function routes(app, addon) {
    app.get('/', (req, res) => {
        res.redirect('/atlassian-connect.json');
    });

    app.get('/hello-world/project/:projectId', addon.authenticate(), (req, res) => {
        res.render('hello-world', {
            title: 'Atlassian Connect',
            projectId: req.params['projectId']
        });
    });

    app.get('/hello-world/init', addon.authenticate(), safeHandler(initHandler));

    function safeHandler(handler) {
        return function(req, res) {
            handler(req, res).catch(error => res.status(500).send(error));
        };
    }

    async function initHandler(req, res) {
        const response = await init.addIssueType(addon.httpClient(req))
        res.send(response);
    }
}
