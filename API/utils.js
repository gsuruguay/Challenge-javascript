const validDate = /^\d{4}[-]?((((0[13578])|(1[02]))[-]?(([0-2][0-9])|(3[01])))|(((0[469])|(11))[-]?(([0-2][0-9])|(30)))|(02[-]?[0-2][0-9]))$/;

function isValidFormCreate(data) {
    if (!data.concept || data.concept.lenght > 100) return false
    if (!data.amount || data.amount < 0) return false
    if (!data.date || !validDate.test(data.date)) return false
    if (!data.type || (data.type !== "entry" && data.type !== "egress")) return false

    return true
}

function isValidFormUpdate(data) {
    if (!data.concept || data.concept.lenght > 30) return false
    if (!data.amount || data.amount < 0) return false
    if (!data.date || !validDate.test(data.date)) return false

    return true
}

module.exports = {
    isValidFormCreate,
    isValidFormUpdate
}