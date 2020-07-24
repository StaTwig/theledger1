const RbacModel = require('../models/RbacModel');
const { body, validationResult } = require('express-validator');
//helper file to prepare responses.
const checkToken = require('../middlewares/middleware').checkToken;
const auth = require('../middlewares/jwt');

const apiResponse = require('../helpers/apiResponse');

const init = require('../logging/init');
const logger = init.getLog();

// rbac casbin
// import { newEnforcer } from 'casbin';

// const e = await newEnforcer('../rbac/model.conf', '../rbac/policy.csv');
// Policies can be initialized with DB instead of file using adapters

// Adding an enforcement hook right before the access happens
// const subject = 'statwig'; // the user that wants to access a resource.
// const object = 'rbacService'; // the resource that is going to be accessed.
// const action = 'read'; // the operation that the user performs on the resource.

// if ((await e.enforce(subject, object, action)) === true) {
//     // permit alice to read data1
// } else {
//     // deny the request, show an error
// }


exports.getRbacData = [
  auth,
  async (req, res) => {
    try {
      checkToken(req, res, async result => {
        if (result.success) {
          logger.log('info', '<<<<< RbacService < RbacController < getRbacData : token verifed successfully');
          const rbacData = await RbacModel.find({});
          res.json({ data: rbacData });
        } else {
          logger.log('warn', '<<<<< RbacService < RbacController < getRbacData : user is not authenticated')
          res.status(403).json(result);
        }
      });
    } catch (err) {
      logger.log('error', '<<<<< RbacService < RbacController < getRbacData : error (catch block)')
      return apiResponse.ErrorResponse(res, err);
    }
  },
];

exports.addRbacData = [
  auth,
  body('rbacData')
    .isLength({ min: 1 })
    .trim()
    .withMessage('Rbac Data must be specified.'),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        // Display sanitized values/errors messages.
        logger.log('error', '<<<<< RbacService < RbacController < addRbacData : Validation Error: rbac data must be specified')
        return apiResponse.validationErrorWithData(
          res,
          'Validation Error.',
          errors.array(),
        );
      }
      checkToken(req, res, async result => {
        if (result.success) {
          logger.log('info', '<<<<< RbacService < RbacController < addRbacData : token verifed successfully');
          const rbac = new RbacModel({
            rbacData: req.body.rbacData,
          });
          await rbac.save();
          apiResponse.successResponseWithData(res, 'Success');
        } else {
          logger.log('warn', '<<<<< RbacService < RbacController < addRbacData : user is not authenticated')
          return apiResponse.ErrorResponse(res, 'User not authenticated');
        }
      });
    } catch (err) {
      logger.log('error', '<<<<< RbacService < RbacController < addRbacData : error (catch block)')
      return apiResponse.ErrorResponse(res, err);
    }
  },
];
