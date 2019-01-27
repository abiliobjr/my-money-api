const express = require('express');

module.exports = function (server) {
    const router = express.Router();
    server.use('/api', router);

    //Rotas de ciclo de pagamento
    const BillingCycle = require('../api/billingCycle/billingCycleService.js');
    BillingCycle.register(router, '/billingCycles')
}