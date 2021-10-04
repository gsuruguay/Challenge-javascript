function validacion(input) {
    let errors = {}
    if (!input.concept) {
        errors.concept = "Concept is required"
    } else if (input.concept.lenght > 255) {
        errors.concept = "The maximum number of characters is 255"
    }
    if (!input.amount) {
        errors.amount = "Amount is required"
    } else if (isNaN(input.amount)) {
        errors.amount = "Only numbers are allowed"
    } else if (input.amount < 0) {
        errors.amount = "You cannot enter negative numbers"
    } else if (input.amount > 999999) {
        errors.amount = "The maximum number allowed is 999.999"
    }
    if (!input.date) {
        errors.date = "Date is required"
    }
    if (!input.type) {
        errors.type = "Type is required"
    } else if (input.type !== "entry" && input.type !== "egress") {
        errors.type = "Valid options are Entry or Egress"
    }
    return errors;
}

module.exports = validacion;
