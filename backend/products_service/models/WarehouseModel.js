var mongoose = require('mongoose');
var WarehouseSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    organizationId: {
      type: String,
      required: true,
      default: 'org123',
    },
    postalAddress: {
      type: String,
      required: true,
      default: 'T-Hub, IIIT, Gachibowli, Hyderabad, Telangana, India',
    },
    region: {
      type: Object,
      required: true,
      default: {
        id: 'reg123',
        name: 'Earth Prime',
      },
    },
    country: {
      type: Object,
      required: true,
      default: {
        id: '001',
        name: 'India',
      },
    },
    location: {
      type: Object,
      default: {
        longitude: 12.12323453534,
        latitude: 13.123435345435,
        geohash: '1231nejf923453',
      },
    },
    supervisors: {
      type: Array,
      default: []
    },
    employees: {
      type: Array,
      default: []
    }
  },
  { timestamps: true },
);
module.exports = mongoose.model('warehouses', WarehouseSchema);