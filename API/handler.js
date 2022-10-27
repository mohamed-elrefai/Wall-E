const awsService = require('aws-serverless-express')
const app = require('./src/index')

const server = awsService.createServer(app);

exports.handler = (event, context) => {
      return awsService.proxy(server, event, context);
}