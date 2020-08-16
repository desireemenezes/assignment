const MacaddressValidation = (req, res, next) => {
    !req.body.macaddress ? res.status(400).json({ error: 'macaddress é obrigatório'}) : next()   
}

module.exports = MacaddressValidation;