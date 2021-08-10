var express = require("express");
const AlertController = require("../controllers/AlertController");

var router = express.Router();

/** 
* @route GET /getAllAlerts
* @group Alerts - Will Return All the Alerts Created by the User 
* @param {string} eventId.params - Employee ID - eg: EMP100008
* @returns {object} 200 - An array of Alerts 
* @returns {Error}  default - Unexpected error 
*/
router.get("/getAllAlerts", AlertController.getAllAlerts);
router.get("/getAllAlerts/:username", AlertController.getAllAlerts);
/** 
* @route POST /createNewAlert
* @group Alerts - Will Return All the Alerts Created by the User 
* @param {object} Data.body - Sample: 
*{ 
*"transactionId":"tss001",
*"productId":"prood001",
*"productName":"COVAXINE",
*"manufacturer":"BHARATBIOTECH",
*"eventPrimary" : "UPDATE",
*"eventSecondary" : "SHIPMENT",
*"transactionId" : "SH100163",
*"actorOrgId" : "org002",
*"alertMobile" : true,
*"alertEmail" : true,
*"alertWebPush" : false
*}
* @returns {object} 200 - An array of Alerts 
* @returns {Error}  default - Unexpected error 
*/
router.post("/createNewAlert", AlertController.createNewAlert)
/** 
* @route DELETE /deleteAlert/:alertId
* @group Alerts - Will Delete the Alert for the Self User
* @param {string} alertId.params - alert ID - eg: 6918321081
* @returns {object} 200 - An array of Alerts 
* @returns {Error}  default - Unexpected error 
*/
router.delete("/deleteAlert/:alertId", AlertController.deleteAlert);
router.get("/getNotifications",AlertController.getNotifications)
module.exports = router;
