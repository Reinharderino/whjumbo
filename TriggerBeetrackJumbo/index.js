module.exports = async function (context, req) {
    context.log('Se ha gatillado la función');

    if (req.query.data || (req.body && req.body.data)) {
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: "Info Recibida " + (req.query.data || req.body.data)
        };
        context.reportes = (req.query.data || req.body.data);
        context.done;
    }
    else {
        context.res = {
            status: 400,
            body: "Por favor envía un parametro 'data' ó 'data' en el body del request con la información."
        };
    }
};