'use strict';

/**
 * cleint service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cleint.cleint');
