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
/*
client_email
: 
"test@gmail.com"
collection_name
: 
"Azuki"
data_type
: 
"response"
malicious_images
: 
"[]"
predict_result
: 
false
request_id
: 
"0x123qqqww"
target_images_cnt
: 
21231
thumbnail_image
: 
"https://nftevening.com/wp-content/uploads/2022/05/Azuki-NFT-Founder.png"
timestamp
: 
111111
train_images_cnt
: 
1040

*/

const ResultPage = ({props, sequence}) => {
	// console.log(props.result)
	return (
		<ResultPageRoot result={props.result}>
			<PageTitle>RESULTs</PageTitle>
			{
				props !== undefined && props.status === 'done' ? <RequestDoneComponent props={Object.assign(props, {sequence:sequence})}/> : <RequestUndoneComponent props={sampleJson}/>
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
	background-image:url(${ props => BgDict[props.result]});
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