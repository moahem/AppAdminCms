'use strict';

/**
 * student-material service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::student-material.student-material');
