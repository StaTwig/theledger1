export const TEST_SERVER_URL = 'http://test.vaccineledger.com:9001';
export const PROD_SERVER_URL = 'http://api.vaccineledger.com:9001';
export const DEMO_SERVER_URL = 'http://vaccineledger.com:9001';
export const LOCAL_SERVER_URL_USER = 'http://localhost:3001';
export const LOCAL_SERVER_URL_SHIPMENT = 'http://localhost:3002';
export const LOCAL_SERVER_URL_INVENTORY = 'http://localhost:3007';
export const LOCAL_SERVER_URL_PO = 'http://localhost:3012';
export const LOCAL_SERVER_URL_TRACKANDTRACE = 'http://localhost:3005';
export const LOCAL_SERVER_URL_NOTIFICATION = 'http://localhost:3006';
export const LOCAL_SERVER_URL_PRODUCTS = 'http://localhost:3010';
export const STABLE_SERVER_URL_USER = 'http://65.0.135.24:3001';
export const STABLE_SERVER_URL_SHIPMENT = 'http://65.0.135.24:3002';
export const STABLE_SERVER_URL_PO = 'http://65.0.135.24:3012';
export const STABLE_SERVER_URL_INVENTORY = 'http://65.0.135.24:3007';
export const STABLE_SERVER_URL_TRACKANDTRACE = 'http://65.0.135.24:3005';
export const STABLE_SERVER_URL_NOTIFICATION = 'http://65.0.135.24:3006';
export const STABLE_SERVER_URL_PRODUCTS = 'http://65.0.135.24:3010';
export const DEV_SERVER_URL = 'http://127.0.0.1:9001';

export function config() {
  const confs = {
    local: {
      loginUrl: `${LOCAL_SERVER_URL_USER}/usermanagement/api/auth/login`,
      registerUrl: `${LOCAL_SERVER_URL_USER}/usermanagement/api/auth/register`,
      verifyOtpUrl: `${LOCAL_SERVER_URL_USER}/usermanagement/api/auth/verify-otp`,
      userInfoUrl: `${LOCAL_SERVER_URL_USER}/usermanagement/api/auth/userInfo`,
      getAllUsersUrl: `${LOCAL_SERVER_URL_USER}/usermanagement/api/auth/getAllUsers`,
      updateProfileUrl: `${LOCAL_SERVER_URL_USER}/usermanagement/api/auth/updateProfile`,
      upload: `${LOCAL_SERVER_URL_USER}/usermanagement/api/auth/upload`,
      shipmentsUrl: `${LOCAL_SERVER_URL_SHIPMENT}/shipmentmanagement/api/shipping/fetchUserShipments`,
      getProducts: `${LOCAL_SERVER_URL_PRODUCTS}/productmanagement/api/products/getProducts`,
      generateCodes: `${LOCAL_SERVER_URL_PRODUCTS}/productmanagement/api/products/generateCodes`,
      getManufacturers: `${LOCAL_SERVER_URL_SHIPMENT}/shipmentmanagement/api/shipping/getManufacturers`,
      inventoriesUrl: `${LOCAL_SERVER_URL_INVENTORY}/inventorymanagement/api/inventory/getGroupedInventoryDetails?skip=0&limit=100`,
      getSerialNumbersByBatchNumber: `${LOCAL_SERVER_URL_INVENTORY}/inventorymanagement/api/inventory/getInventoryDetailsByBatchNumber?skip=0&limit=100&batchNumber=`,
      getInventoryDetailsUrl: `${LOCAL_SERVER_URL_INVENTORY}/inventorymanagement/api/inventory/getInventoryDetails`,
      getInventoryByBatchNumber:`${LOCAL_SERVER_URL_INVENTORY}/inventorymanagement/api/inventory/getBatchDetailsByBatchNumber?skip=0&limit=100&batchNumber=`,
      addProductsToInventory: `${LOCAL_SERVER_URL_INVENTORY}/inventorymanagement/api/inventory/addProductsToInventory`,
      addInventoriesFromExcel: `${LOCAL_SERVER_URL_INVENTORY}/inventorymanagement/api/inventory/addInventoriesFromExcel`,
      createShipmentUrl: `${LOCAL_SERVER_URL_SHIPMENT}/shipmentmanagement/api/shipping/createShipment`,
      addInventoryUrl: `${LOCAL_SERVER_URL_INVENTORY}/inventorymanagement/api/inventory/addNewInventory`,
      shipmentsSearch: `${LOCAL_SERVER_URL_SHIPMENT}/shipmentmanagement/api/shipping/fetchShipments?key=`,
      inventorySearch: `${LOCAL_SERVER_URL_INVENTORY}/inventorymanagement/api/inventory/getInventoryDetailsForProduct?key=`,
      createPurchaseOrderUrl: `${LOCAL_SERVER_URL_PO}/pomanagement/api/po/createPurchaseOrder`,
      addPOsFromExcelUrl: `${LOCAL_SERVER_URL_SHIPMENT}/shipmentmanagement/api/shipping/addPOsFromExcel`,
      changePOStatus: `${LOCAL_SERVER_URL_SHIPMENT}/shipmentmanagement/api/shipping/changePOStatus`,
      fetchAllPurchaseOrderUrl: `${LOCAL_SERVER_URL_SHIPMENT}/shipmentmanagement/api/shipping/fetchpurchaseOrder?key=`,
      getPOs: `${LOCAL_SERVER_URL_SHIPMENT}/pomanagement/api/po/purchaseOrderStatistics`,
      trackShipment: `${LOCAL_SERVER_URL_SHIPMENT}/shipmentmanagement/api/shipping/trackShipment?shipmentId=`,
      poDetailsByShipmentId:`${LOCAL_SERVER_URL_SHIPMENT}/shipmentmanagement/api/shipping/fetchPOdetailsByShipmentID?shipmentId=`,
      productDetailsByShipmentId:`${LOCAL_SERVER_URL_SHIPMENT}/shipmentmanagement/api/shipping/fetchProductdetailsByShipmentID?shipmentId=`,
      trackTemperature: `${LOCAL_SERVER_URL_TRACKANDTRACE}/tracktracemanagement/api/track/fetchTemp`,
      trackProduct: `${LOCAL_SERVER_URL_TRACKANDTRACE}/tracktracemanagement/api/track/track?trackingNumber=`,
      addNewProduct: `${LOCAL_SERVER_URL_PRODUCTS}/productmanagement/api/products/addProductName`,
      getOrganisations:`${LOCAL_SERVER_URL_PRODUCTS}/productmanagement/api/organisation/getOrganisations`,
      getWarehouseByOrgId:`${LOCAL_SERVER_URL_PRODUCTS}/productmanagement/api/organisation/warehouses?id=`,
      addMultipleProducts: `${LOCAL_SERVER_URL_PRODUCTS}/productmanagement/api/products/addMultipleProducts`,
      getNotificationsUrl: `${LOCAL_SERVER_URL_NOTIFICATION}/notificationmanagement/api/notification/getNotifications`,
      deleteNotificationUrl: `${LOCAL_SERVER_URL_NOTIFICATION}/notificationmanagement/api/notification/deleteNotification`,
    },
    dev: {
      loginUrl: `${DEV_SERVER_URL}/usermanagement/api/auth/login`,
      registerUrl: `${DEV_SERVER_URL}/usermanagement/api/auth/register`,
      verifyOtpUrl: `${DEV_SERVER_URL}/usermanagement/api/auth/verify-otp`,
      userInfoUrl: `${DEV_SERVER_URL}/usermanagement/api/auth/userInfo`,
      getAllUsersUrl: `${DEV_SERVER_URL}/usermanagement/api/auth/getAllUsers`,
      updateProfileUrl: `${DEV_SERVER_URL}/usermanagement/api/auth/updateProfile`,
      upload: `${DEV_SERVER_URL}/usermanagement/api/auth/upload`,
      shipmentsUrl: `${DEV_SERVER_URL}/shipmentmanagement/api/shipping/fetchUserShipments`,
      getProducts: `${DEV_SERVER_URL}/productmanagement/api/products/getProductNames`,
      generateCodes: `${DEV_SERVER_URL}/productmanagement/api/products/generateCodes`,
      getManufacturers: `${DEV_SERVER_URL}/shipmentmanagement/api/shipping/getManufacturers`,
      createShipmentUrl: `${DEV_SERVER_URL}/shipmentmanagement/api/shipping/createShipment`,
      inventoriesUrl: `${DEV_SERVER_URL}/inventorymanagement/api/inventory/getGroupedInventoryDetails?skip=0&limit=100`,
      getSerialNumbersByBatchNumber: `${DEV_SERVER_URL}/inventorymanagement/api/inventory/getInventoryDetailsByBatchNumber?skip=0&limit=100&batchNumber=`,
      getInventoryDetailsUrl: `${DEV_SERVER_URL}/inventorymanagement/api/inventory/getInventoryDetails`,
      getInventoryByBatchNumber:`${DEV_SERVER_URL}/inventorymanagement/api/inventory/getBatchDetailsByBatchNumber?skip=0&limit=100&batchNumber=`,
      addProductsToInventory: `${DEV_SERVER_URL}/inventorymanagement/api/inventory/addProductsToInventory`,
      addInventoriesFromExcel: `${DEV_SERVER_URL}/inventorymanagement/api/inventory/addInventoriesFromExcel`,
      addInventoryUrl: `${DEV_SERVER_URL}/inventorymanagement/api/inventory/addNewInventory`,
      shipmentsSearch: `${DEV_SERVER_URL}/shipmentmanagement/api/shipping/fetchShipments?key=`,
      inventorySearch: `${DEV_SERVER_URL}/inventorymanagement/api/inventory/getInventoryDetailsForProduct?key=`,
      createPurchaseOrderUrl: `${DEV_SERVER_URL}/shipmentmanagement/api/shipping/createPurchaseOrder`,
      addPOsFromExcelUrl: `${DEV_SERVER_URL}/shipmentmanagement/api/shipping/addPOsFromExcel`,
      changePOStatus: `${DEV_SERVER_URL}/shipmentmanagement/api/shipping/changePOStatus`,
      fetchAllPurchaseOrderUrl: `${DEV_SERVER_URL}/shipmentmanagement/api/shipping/fetchpurchaseOrder?key=`,
      getPOs: `${DEV_SERVER_URL}/pomanagement/api/po/purchaseOrderStatistics`,
      trackShipment: `${DEV_SERVER_URL}/shipmentmanagement/api/shipping/trackShipment?shipmentId=`,
      poDetailsByShipmentId:`${DEV_SERVER_URL}/shipmentmanagement/api/shipping/fetchPOdetailsByShipmentID?shipmentId=`,
      productDetailsByShipmentId:`${DEV_SERVER_URL}/shipmentmanagement/api/shipping/fetchProductdetailsByShipmentID?shipmentId=`,
      trackTemperature: `${DEV_SERVER_URL}/tracktracemanagement/api/track/fetchTemp`,
      trackProduct: `${DEV_SERVER_URL}/tracktracemanagement/api/track/track?trackingNumber=`,
      addNewProduct: `${DEV_SERVER_URL}/productmanagement/api/products/addProductName`,
      addMultipleProducts: `${DEV_SERVER_URL}/productmanagement/api/products/addMultipleProducts`,
      getOrganisations:`${DEV_SERVER_URL}/productmanagement/api/organisation/getOrganisations`,
      getWarehouseByOrgId:`${DEV_SERVER_URL}/productmanagement/api/organisation/warehouses?id=`,
      getNotificationsUrl: `${DEV_SERVER_URL}/notificationmanagement/api/notification/getNotifications`,
      deleteNotificationUrl: `${DEV_SERVER_URL}/notificationmanagement/api/notification/deleteNotification`,
    },
    stable: {
      loginUrl: `${STABLE_SERVER_URL_USER}/usermanagement/api/auth/login`,
      registerUrl: `${STABLE_SERVER_URL_USER}/usermanagement/api/auth/register`,
      verifyOtpUrl: `${STABLE_SERVER_URL_USER}/usermanagement/api/auth/verify-otp`,
      userInfoUrl: `${STABLE_SERVER_URL_USER}/usermanagement/api/auth/userInfo`,
      getAllUsersUrl: `${STABLE_SERVER_URL_USER}/usermanagement/api/auth/getAllUsers`,
      updateProfileUrl: `${STABLE_SERVER_URL_USER}/usermanagement/api/auth/updateProfile`,
      upload: `${STABLE_SERVER_URL_USER}/usermanagement/api/auth/upload`,
      shipmentsUrl: `${STABLE_SERVER_URL_SHIPMENT}/shipmentmanagement/api/shipping/fetchUserShipments`,
      getProducts: `${STABLE_SERVER_URL_SHIPMENT}/shipmentmanagement/api/shipping/getProducts`,
      generateCodes: `${STABLE_SERVER_URL_SHIPMENT}/productmanagement/api/products/generateCodes`,
      getManufacturers: `${STABLE_SERVER_URL_SHIPMENT}/shipmentmanagement/api/shipping/getManufacturers`,
      createShipmentUrl: `${STABLE_SERVER_URL_SHIPMENT}/shipmentmanagement/api/shipping/createShipment`,
      shipmentsSearch: `${STABLE_SERVER_URL_SHIPMENT}/shipmentmanagement/api/shipping/fetchShipments?key=`,
      createPurchaseOrderUrl: `${STABLE_SERVER_URL_PO}/pomanagement/api/po/createPurchaseOrder`,
      addPOsFromExcelUrl: `${STABLE_SERVER_URL_SHIPMENT}/shipmentmanagement/api/shipping/addPOsFromExcel`,
      changePOStatus: `${STABLE_SERVER_URL_SHIPMENT}/shipmentmanagement/api/shipping/changePOStatus`,
      fetchAllPurchaseOrderUrl: `${STABLE_SERVER_URL_SHIPMENT}/shipmentmanagement/api/shipping/fetchpurchaseOrder?key=`,
      getPOs: `${STABLE_SERVER_URL_SHIPMENT}/pomanagement/api/po/purchaseOrderStatistics`,
      inventorySearch: `${STABLE_SERVER_URL_INVENTORY}/inventorymanagement/api/inventory/getInventoryDetailsForProduct?key=`,
      inventoriesUrl: `${STABLE_SERVER_URL_INVENTORY}/inventorymanagement/api/inventory/getGroupedInventoryDetails?skip=0&limit=100`,
      addProductsToInventory: `${STABLE_SERVER_URL_INVENTORY}/inventorymanagement/api/inventory/addProductsToInventory`,
      addInventoriesFromExcel: `${STABLE_SERVER_URL_INVENTORY}/inventorymanagement/api/inventory/addInventoriesFromExcel`,
      addInventoryUrl: `${STABLE_SERVER_URL_INVENTORY}/inventorymanagement/api/inventory/addNewInventory`,
      getSerialNumbersByBatchNumber: `${STABLE_SERVER_URL_INVENTORY}/inventorymanagement/api/inventory/getInventoryDetailsByBatchNumber?skip=0&limit=100&batchNumber=`,
      getInventoryDetailsUrl: `${STABLE_SERVER_URL_INVENTORY}/inventorymanagement/api/inventory/getInventoryDetails`,
      getInventoryByBatchNumber:`${STABLE_SERVER_URL_INVENTORY}/inventorymanagement/api/inventory/getBatchDetailsByBatchNumber?skip=0&limit=100&batchNumber=`,
      trackShipment: `${STABLE_SERVER_URL_SHIPMENT}/shipmentmanagement/api/shipping/trackShipment?shipmentId=`,
      poDetailsByShipmentId:`${STABLE_SERVER_URL_SHIPMENT}/shipmentmanagement/api/shipping/fetchPOdetailsByShipmentID?shipmentId=`,
      productDetailsByShipmentId:`${STABLE_SERVER_URL_SHIPMENT}/shipmentmanagement/api/shipping/fetchProductdetailsByShipmentID?shipmentId=`,
      trackTemperature: `${STABLE_SERVER_URL_TRACKANDTRACE}/tracktracemanagement/api/track/fetchTemp`,
      getOrganisations:`${STABLE_SERVER_URL_PRODUCTS}/productmanagement/api/organisation/getOrganisations`,
      getWarehouseByOrgId:`${STABLE_SERVER_URL_PRODUCTS}/productmanagement/api/organisation/warehouses?id=`,
      addNewProduct: `${STABLE_SERVER_URL_PRODUCTS}/productmanagement/api/products/addProductName`,
      trackProduct: `${STABLE_SERVER_URL_TRACKANDTRACE}/tracktracemanagement/api/track/track?trackingNumber=`,
      addMultipleProducts: `${STABLE_SERVER_URL_PRODUCTS}/productmanagement/api/products/addMultipleProducts`,
      getNotificationsUrl: `${STABLE_SERVER_URL_PRODUCTS}/notificationmanagement/api/notification/getNotifications`,
      deleteNotificationUrl: `${STABLE_SERVER_URL_PRODUCTS}/notificationmanagement/api/notification/deleteNotification`,
    },
    test: {
      loginUrl: `${TEST_SERVER_URL}/usermanagement/api/auth/login`,
      registerUrl: `${TEST_SERVER_URL}/usermanagement/api/auth/register`,
      verifyOtpUrl: `${TEST_SERVER_URL}/usermanagement/api/auth/verify-otp`,
      userInfoUrl: `${TEST_SERVER_URL}/usermanagement/api/auth/userInfo`,
      getAllUsersUrl: `${TEST_SERVER_URL}/usermanagement/api/auth/getAllUsers`,
      updateProfileUrl: `${TEST_SERVER_URL}/usermanagement/api/auth/updateProfile`,
      upload: `${TEST_SERVER_URL}/usermanagement/api/auth/upload`,
      shipmentsUrl: `${TEST_SERVER_URL}/shipmentmanagement/api/shipping/fetchUserShipments`,
      getManufacturers: `${TEST_SERVER_URL}/shipmentmanagement/api/shipping/getManufacturers`,
      createShipmentUrl: `${TEST_SERVER_URL}/shipmentmanagement/api/shipping/createShipment`,
      shipmentsSearch: `${TEST_SERVER_URL}/shipmentmanagement/api/shipping/fetchShipments?key=`,
      createPurchaseOrderUrl: `${TEST_SERVER_URL}/pomanagement/api/po/createPurchaseOrder`,
      addPOsFromExcelUrl: `${TEST_SERVER_URL}/shipmentmanagement/api/shipping/addPOsFromExcel`,
      changePOStatus: `${TEST_SERVER_URL}/shipmentmanagement/api/shipping/changePOStatus`,
      fetchAllPurchaseOrderUrl: `${TEST_SERVER_URL}/shipmentmanagement/api/shipping/fetchpurchaseOrder?key=`,
      getPOs: `${TEST_SERVER_URL}/pomanagement/api/po/purchaseOrderStatistics`,
      inventorySearch: `${TEST_SERVER_URL}/inventorymanagement/api/inventory/getInventoryDetailsForProduct?key=`,
      inventoriesUrl: `${TEST_SERVER_URL}/inventorymanagement/api/inventory/getGroupedInventoryDetails?skip=0&limit=100`,
      getSerialNumbersByBatchNumber: `${TEST_SERVER_URL}/inventorymanagement/api/inventory/getInventoryDetailsByBatchNumber?skip=0&limit=100&batchNumber=`,
      getInventoryDetailsUrl: `${TEST_SERVER_URL}/inventorymanagement/api/inventory/getInventoryDetails`,
      getInventoryByBatchNumber:`${TEST_SERVER_URL}/inventorymanagement/api/inventory/getBatchDetailsByBatchNumber?skip=0&limit=100&batchNumber=`,
      addProductsToInventory: `${TEST_SERVER_URL}/inventorymanagement/api/inventory/addProductsToInventory`,
      addInventoriesFromExcel: `${TEST_SERVER_URL}/inventorymanagement/api/inventory/addInventoriesFromExcel`,
      addInventoryUrl: `${TEST_SERVER_URL}/inventorymanagement/api/inventory/addNewInventory`,
      trackShipment: `${TEST_SERVER_URL}/shipmentmanagement/api/shipping/trackShipment?shipmentId=`,
      poDetailsByShipmentId:`${TEST_SERVER_URL}/shipmentmanagement/api/shipping/fetchPOdetailsByShipmentID?shipmentId=`,
      productDetailsByShipmentId:`${TEST_SERVER_URL}/shipmentmanagement/api/shipping/fetchProductdetailsByShipmentID?shipmentId=`,
      trackTemperature: `${TEST_SERVER_URL}/tracktracemanagement/api/track/fetchTemp`,
      trackProduct: `${TEST_SERVER_URL}/tracktracemanagement/api/track/track?trackingNumber=`,
      getOrganisations:`${TEST_SERVER_URL}/productmanagement/api/organisation/getOrganisations`,
      getWarehouseByOrgId:`${TEST_SERVER_URL}/productmanagement/api/organisation/warehouses?id=`,
      addNewProduct: `${TEST_SERVER_URL}/productmanagement/api/products/addProductName`,
      getProducts: `${TEST_SERVER_URL}/productmanagement/api/products/getProductNames`,
      generateCodes: `${TEST_SERVER_URL}/productmanagement/api/products/generateCodes`,
      addMultipleProducts: `${TEST_SERVER_URL}/productmanagement/api/products/addMultipleProducts`,
      getNotificationsUrl: `${TEST_SERVER_URL}/notificationmanagement/api/notification/getNotifications`,
      deleteNotificationUrl: `${TEST_SERVER_URL}/notificationmanagement/api/notification/deleteNotification`,
    },
    demo: {
      loginUrl: `${DEMO_SERVER_URL}/usermanagement/api/auth/login`,
      registerUrl: `${DEMO_SERVER_URL}/usermanagement/api/auth/register`,
      verifyOtpUrl: `${DEMO_SERVER_URL}/usermanagement/api/auth/verify-otp`,
      userInfoUrl: `${DEMO_SERVER_URL}/usermanagement/api/auth/userInfo`,
      getAllUsersUrl: `${DEMO_SERVER_URL}/usermanagement/api/auth/getAllUsers`,
      updateProfileUrl: `${DEMO_SERVER_URL}/usermanagement/api/auth/updateProfile`,
      upload: `${DEMO_SERVER_URL}/usermanagement/api/auth/upload`,
      shipmentsUrl: `${DEMO_SERVER_URL}/shipmentmanagement/api/shipping/fetchUserShipments`,
      getManufacturers: `${DEMO_SERVER_URL}/shipmentmanagement/api/shipping/getManufacturers`,
      createShipmentUrl: `${DEMO_SERVER_URL}/shipmentmanagement/api/shipping/createShipment`,
      shipmentsSearch: `${DEMO_SERVER_URL}/shipmentmanagement/api/shipping/fetchShipments?key=`,
      createPurchaseOrderUrl: `${DEMO_SERVER_URL}/pomanagement/api/po/createPurchaseOrder`,
      addPOsFromExcelUrl: `${DEMO_SERVER_URL}/shipmentmanagement/api/shipping/addPOsFromExcel`,
      changePOStatus: `${DEMO_SERVER_URL}/shipmentmanagement/api/shipping/changePOStatus`,
      fetchAllPurchaseOrderUrl: `${DEMO_SERVER_URL}/shipmentmanagement/api/shipping/fetchpurchaseOrder?key=`,
      getPOs: `${DEMO_SERVER_URL}/pomanagement/api/po/purchaseOrderStatistics`,
      inventorySearch: `${DEMO_SERVER_URL}/inventorymanagement/api/inventory/getInventoryDetailsForProduct?key=`,
      inventoriesUrl: `${DEMO_SERVER_URL}/inventorymanagement/api/inventory/getGroupedInventoryDetails?skip=0&limit=100`,
      getSerialNumbersByBatchNumber: `${DEMO_SERVER_URL}/inventorymanagement/api/inventory/getInventoryDetailsByBatchNumber?skip=0&limit=100&batchNumber=`,
      getInventoryDetailsUrl: `${DEMO_SERVER_URL}/inventorymanagement/api/inventory/getInventoryDetails`,
      getInventoryByBatchNumber:`${DEMO_SERVER_URL}/inventorymanagement/api/inventory/getBatchDetailsByBatchNumber?skip=0&limit=100&batchNumber=`,
      addProductsToInventory: `${DEMO_SERVER_URL}/inventorymanagement/api/inventory/addProductsToInventory`,
      addInventoriesFromExcel: `${DEMO_SERVER_URL}/inventorymanagement/api/inventory/addInventoriesFromExcel`,
      addInventoryUrl: `${DEMO_SERVER_URL}/inventorymanagement/api/inventory/addNewInventory`,
      trackShipment: `${DEMO_SERVER_URL}/shipmentmanagement/api/shipping/trackShipment?shipmentId=`,
      poDetailsByShipmentId:`${DEMO_SERVER_URL}/shipmentmanagement/api/shipping/fetchPOdetailsByShipmentID?shipmentId=`,
      productDetailsByShipmentId:`${DEMO_SERVER_URL}/shipmentmanagement/api/shipping/fetchProductdetailsByShipmentID?shipmentId=`,
      trackTemperature: `${DEMO_SERVER_URL}/tracktracemanagement/api/track/fetchTemp`,
      trackProduct: `${DEMO_SERVER_URL}/tracktracemanagement/api/track/track?trackingNumber=`,
      getOrganisations:`${DEMO_SERVER_URL}/productmanagement/api/organisation/getOrganisations`,
      getWarehouseByOrgId:`${DEMO_SERVER_URL}/productmanagement/api/organisation/warehouses?id=`,
      addNewProduct: `${DEMO_SERVER_URL}/productmanagement/api/products/addProductName`,
      getProducts: `${DEMO_SERVER_URL}/productmanagement/api/products/getProductNames`,
      generateCodes: `${DEMO_SERVER_URL}/productmanagement/api/products/generateCodes`,
      addMultipleProducts: `${DEMO_SERVER_URL}/productmanagement/api/products/addMultipleProducts`,
      getNotifications: `${DEMO_SERVER_URL}/notificationmanagement/api/notification/getNotifications`,
      deleteNotificationUrl: `${DEMO_SERVER_URL}/notificationmanagement/api/notification/deleteNotification`,
    },
    prod: {
      loginUrl: `${PROD_SERVER_URL}/usermanagement/api/auth/login`,
      registerUrl: `${PROD_SERVER_URL}/usermanagement/api/auth/register`,
      verifyOtpUrl: `${PROD_SERVER_URL}/usermanagement/api/auth/verify-otp`,
      userInfoUrl: `${PROD_SERVER_URL}/usermanagement/api/auth/userInfo`,
      getAllUsersUrl: `${PROD_SERVER_URL}/api/auth/getAllUsers`,
      updateProfileUrl: `${PROD_SERVER_URL}/usermanagement/api/auth/updateProfile`,
      upload: `${PROD_SERVER_URL}/usermanagement/api/auth/upload`,
      shipmentsUrl: `${PROD_SERVER_URL}/shipmentmanagement/api/shipping/fetchUserShipments`,
      createShipmentUrl: `${PROD_SERVER_URL}/shipmentmanagement/api/shipping/createShipment`,
      shipmentsSearch: `${PROD_SERVER_URL}/shipmentmanagement/api/shipping/fetchShipments?key=`,
      getProducts: `${PROD_SERVER_URL}/productmanagement/api/products/getProductNames`,
      generateCodes: `${PROD_SERVER_URL}/productmanagement/api/products/generateCodes`,
      getManufacturers: `${PROD_SERVER_URL}/shipmentmanagement/api/shipping/getManufacturers`,
      createPurchaseOrderUrl: `${PROD_SERVER_URL}/pomanagement/api/po/createPurchaseOrder`,
      addPOsFromExcelUrl: `${PROD_SERVER_URL}/shipmentmanagement/api/shipping/addPOsFromExcel`,
      changePOStatus: `${PROD_SERVER_URL}/shipmentmanagement/api/shipping/changePOStatus`,
      fetchAllPurchaseOrderUrl: `${PROD_SERVER_URL}/shipmentmanagement/api/shipping/fetchpurchaseOrder?key=`,
      getPOs: `${PROD_SERVER_URL}/pomanagement/api/po/purchaseOrderStatistics`,
      inventorySearch: `${PROD_SERVER_URL}/inventorymanagement/api/inventory/getInventoryDetailsForProduct?key=`,
      inventoriesUrl: `${PROD_SERVER_URL}/inventorymanagement/api/inventory/getGroupedInventoryDetails?skip=0&limit=100`,
      getSerialNumbersByBatchNumber: `${PROD_SERVER_URL}/inventorymanagement/api/inventory/getInventoryDetailsByBatchNumber?skip=0&limit=100&batchNumber=`,
      getInventoryDetailsUrl: `${PROD_SERVER_URL}/inventorymanagement/api/inventory/getInventoryDetails`,
      getInventoryByBatchNumber:`${PROD_SERVER_URL}/inventorymanagement/api/inventory/getBatchDetailsByBatchNumber?skip=0&limit=100&batchNumber=`,
      addInventoryUrl: `${PROD_SERVER_URL}/inventorymanagement/api/inventory/addNewInventory`,
      addProductsToInventory: `${PROD_SERVER_URL}/inventorymanagement/api/inventory/addProductsToInventory`,
      addInventoriesFromExcel: `${PROD_SERVER_URL}/inventorymanagement/api/inventory/addInventoriesFromExcel`,
      trackShipment: `${PROD_SERVER_URL}/shipmentmanagement/api/shipping/trackShipment?shipmentId=`,
      poDetailsByShipmentId:`${PROD_SERVER_URL}/shipmentmanagement/api/shipping/fetchPOdetailsByShipmentID?shipmentId=`,
      productDetailsByShipmentId:`${PROD_SERVER_URL}/shipmentmanagement/api/shipping/fetchProductdetailsByShipmentID?shipmentId=`,
      trackTemperature: `${PROD_SERVER_URL}/tracktracemanagement/api/track/fetchTemp`,
      trackProduct: `${PROD_SERVER_URL}/tracktracemanagement/api/track/track?trackingNumber=`,
      getOrganisations:`${PROD_SERVER_URL}/productmanagement/api/organisation/getOrganisations`,
      getWarehouseByOrgId:`${PROD_SERVER_URL}/productmanagement/api/organisation/warehouses?id=`,
      addNewProduct: `${PROD_SERVER_URL}/productmanagement/api/products/addProductName`,
      addMultipleProducts: `${PROD_SERVER_URL}/productmanagement/api/products/addMultipleProducts`,
      getNotificationsUrl: `${PROD_SERVER_URL}/notificationmanagement/api/notification/getNotifications`,
      deleteNotificationUrl: `${PROD_SERVER_URL}/notificationmanagement/api/notification/deleteNotification`,
    },
  };

  const environment = process.env.ENVIRONMENT || 'local'; // change prod to test, local,stable, dev for respective environments
  const conf = confs[environment];
  return conf;
}
