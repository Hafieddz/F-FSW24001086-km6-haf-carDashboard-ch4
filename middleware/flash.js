function flashCode(req, status, message) {
    req.flash("status", status);
    req.flash("message", message);
}

module.exports = flashCode;