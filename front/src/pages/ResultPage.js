import React, { Component, useState, useEffect } from 'react';
import styled from 'styled-components';
import RequestDoneComponent from '../components/ResultComponents/RequestDoneComponent';
import RequestUndoneComponent from '../components/ResultComponents/RequestUndoneComponent';
import * as AWS from 'aws-sdk'

import bgGreen from '../statics/images/bg-green.png'
import bgRed from '../statics/images/bg-red.png'
import bgBlue from '../statics/images/bg-blue.png'

/*
---- parameter matching ----

    DONE - (safe, danger)
    UNDONE - (ignore)
*/
const sampleJson = {
	clientName : "AMERICAN MONKEY",
	sequence:1,
	requestStatus: "DONE", // DONE or UNDONE
	requestResult:"danger", // safe, danger, ignore
	numberOfImagesScanned:3258,
	numberOfMaliciousImages:5
}

const ResultPage = () => {
	const {
		REACT_APP_REGION,
		REACT_APP_ACCESSKEY_ID,
		REACT_APP_SECRETACCESSKEY,
	} = process.env;

	var results;

	AWS.config.update({
		region: REACT_APP_REGION,
		accessKeyId: REACT_APP_ACCESSKEY_ID,
		secretAccessKey: REACT_APP_SECRETACCESSKEY,
	});

	const dynamoDB = new AWS.DynamoDB.DocumentClient();
	
	// get
	try {
		dynamoDB.query({
			TableName: "TF_database",
			KeyConditionExpression: '#dt = :dataCondition',
			ExpressionAttributeNames: {
				"#dt": 'data_type'
			},
			ExpressionAttributeValues: {
				':dataCondition': 'response',
			}
		}, (err, data) => {
			if(err)
				console.error(err);
			else{
				results = data.Items;
			}
		});
	} catch {
		console.error("Fail to get results.. please try again after one minute");
	}

	return (
		<ResultPageRoot>
			<PageTitle>RESULTs</PageTitle>
			{
				sampleJson.requestStatus === 'DONE' ? <RequestDoneComponent props={sampleJson}/> : <RequestUndoneComponent props={sampleJson}/>
			}
		</ResultPageRoot>
	);
}

const BgDict = {
	safe:bgGreen,
	danger:bgRed,
	ignore:bgBlue
}

const ResultPageRoot = styled.div`
	background-image:url(${BgDict[sampleJson.requestResult]});
	height:100vh;
	font-family: AkiraExpanded;
	display:flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`

const PageTitle = styled.div`
	margin-bottom: 1.3%;
	font-size:3.5em;
`


export default ResultPage;

// {
//   "data_type": {
//     "S": "response"
//   },
//   "timestamp": {
//     "N": "11111111111"
//   },
//   "id": {
//     "S": "0xaEwarso12392samdl"
//   },
//   "malicious_images": {
//     "S": "[{platform:opensea, info:ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/51669552594437927291657533851464109096593131995911303099186686504615012204545}, {platform:opensea, info:ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/51669552594437927291657533851464109096593131995911303099186686505714523832321]"
//   },
//   "predict_result": {
//     "B": "true"
//   },
//   "request_id": {
//     "S": "0x123wsda"
//   },
//   "target_images_cnt": {
//     "N": "78210"
//   },
//   "thumbnail_image": {
//     "S": "https://nftevening.com/wp-content/uploads/2022/05/Azuki-NFT-Founder.png"
//   },
//   "train_images_cnt": {
//     "N": "2031"
//   }
// }