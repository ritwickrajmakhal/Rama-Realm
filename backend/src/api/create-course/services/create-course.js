'use strict';

/**
 * create-course service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::create-course.create-course');
