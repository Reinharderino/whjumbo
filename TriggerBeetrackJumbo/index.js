module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if (req.query.data || (req.body && req.body.data)) {
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: "Hello " + (req.query.data || req.body.data)
        };
        context.reportes = (req.query.data || req.body.data);
        context.done;
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body"
        };
    }
};