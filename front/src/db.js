import AWS from 'aws-sdk';

const {
  REACT_APP_REGION,
  REACT_APP_ACCESSKEY_ID,
  REACT_APP_SECRETACCESSKEY,
} = process.env;

AWS.config.update({
  region: REACT_APP_REGION,
  accessKeyId: REACT_APP_ACCESSKEY_ID,
  secretAccessKey: REACT_APP_SECRETACCESSKEY,
});

const dynamoDB = new AWS.DynamoDB.DocumentClient();
const dbName = 'TF_database';

const params = {
  TableName: dbName,
};

const main_case_params = {
  TableName: dbName,
  Limit: 6,
  ScanIndexForward: false,
  IndexName: 'result-index',
  KeyConditionExpression: "#res = :result",
  ExpressionAttributeNames: {
    "#res": "result"
  },
  ExpressionAttributeValues: {
    ":result": 'danger'
  }
}

const case_params = {
  TableName: dbName,
  ScanIndexForward: false,
  IndexName: 'result-index',
  KeyConditionExpression: "#res = :result",
  ExpressionAttributeNames: {
    "#res": "result"
  },
  ExpressionAttributeValues: {
    ":result": 'danger'
  }
}

export {dynamoDB, params, main_case_params, case_params};