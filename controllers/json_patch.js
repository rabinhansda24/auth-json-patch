const jsonpatch = require('fast-json-patch');



module.exports = {
    patch: (req, res, next) => {
        let document = req.body.document;
        let patch = req.body.patch;
        document = jsonpatch.applyPatch(document, patch).newDocument;
        res.json({success: true, document: document})
    }
}