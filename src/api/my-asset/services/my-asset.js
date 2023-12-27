'use strict';

/**
 * my-asset service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::my-asset.my-asset');
