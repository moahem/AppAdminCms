'use strict';

/**
 * top-student service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::top-student.top-student');
