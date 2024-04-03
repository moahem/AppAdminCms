'use strict';

/**
 * student-level service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::student-level.student-level');
