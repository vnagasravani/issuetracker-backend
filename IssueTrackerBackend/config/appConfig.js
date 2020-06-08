let appConfig = {};
let nodeMailer = {};

appConfig.port = 3000;
appConfig.allowedCorsOrigin = "*";
appConfig.env = "dev";
appConfig.db = {
    uri: 'mongodb://localhost:27017/tracking'
}
appConfig.apiVersion = '/api/v1';

nodeMailer.email = "meetingplanner2020@gmail.com";
nodeMailer.password = "Vue@1508";

module.exports = {
    port: appConfig.port,
    allowedCorsOrigin: appConfig.allowedCorsOrigin,
    environment: appConfig.env,
    db: appConfig.db,
    apiVersion: appConfig.apiVersion,
    email: nodeMailer.email,
    password: nodeMailer.password
};