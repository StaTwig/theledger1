const redis = require("redis");
const client = redis.createClient(process.env.REDIS_URL);

client.on("connect", () => {
  console.log("Connected to Redis");
});
client.on("error", (err) => {
  console.log("Error " + err);
});

const member = async (key, value) => {
  return new Promise((resolve, reject) => {
    client.sismember(key, value, (err, reply) => {
      if (err) {
        reject(err);
      }
      resolve(reply);
    });
  });
};

const checkPermissions = async (request, next) => {
  try {
    const required_permission = request["permissionRequired"];
    const request_role = request["role"];
    for (var i = 0; i < required_permission.length; i++) {
      const result = await member(request_role, required_permission[i]);
      if (result === 1) {
        next({
          success: true,
          message: "Permission Granted",
        });
        break;
      } else {
        if (i === required_permission.length - 1) {
          next({
            success: false,
            message: "Permission Denied",
          });
        }
      }
    }
  } catch (err) {
    console.log(err);
    next({
      success: false,
      message: "Error",
    });
  }
};

module.exports = {
  checkPermissions: checkPermissions,
};
