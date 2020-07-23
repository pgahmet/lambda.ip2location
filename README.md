## AWS Lambda IP2Location Service


### Install

    npm install


### Run Locally

    $ npm run dev
    -> EVENT: {
        "httpMethod": "GET",
        "queryStringParameters": {
            "ip": "8.8.8.8"
        },
        "key1": "value1",
        "key2": "value2"
    }
    -> CALLBACK: null { 
            statusCode: 200,
            body: '{"ip":"8.8.8.8","countryCode":"US","country":"United States of America"}',
            headers: { 'Content-Type': 'application/json' } 
        }

You can modify ```lambda/event.js``` in order to send different events to your lambda function. 


### Packing and Deploying Lambda Function

    $ npm run package
      adding: node_modules/ (stored 0%)
      ...
      adding: src/index.js (deflated 52%)

This creates a ```zip``` file which can be uploaded to AWS Lambda directly or to an S3 bucket and referenced by your lambda function.

You should change ```lambda.handler``` to ```./src/index.handler``` on Lambda settings.
