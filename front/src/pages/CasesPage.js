import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CaseComponent from '../components/CasesComponents/CaseComponent';
import { dynamoDB, params } from '../db.js';

const CasePage = () => {
	const  [cases, setCases] = useState([]);

	// 캐싱 O
	// useEffect(() => {
	// 	// 데이터를 가져올 때, 캐시된 데이터가 있으면 사용하도록 함
	// 	const cachedData = localStorage.getItem('cachedData');
	// 	if (cachedData) {
	// 	  setCases(JSON.parse(cachedData));
	// 	} else {
	// 	  // 캐시된 데이터가 없으면, 서버에서 데이터를 가져옴
	// 	  dynamoDB.scan(params, function(err, data) {
	// 		if (err) {
	// 		  console.log(err);
	// 		} else {
	// 		  const items = data.Items
	// 		  .map(({ thumbnail_image, collection_name, malicious_images }) => ({
	// 			thumbnail_image,
	// 			collection_name,
	// 			scam_length: Math.floor(malicious_images.slice(1, -1).split(',').length/2)
	// 		  }))
	// 		  setCases(items); 
	// 		  localStorage.setItem('cachedData', JSON.stringify(items)); // 가져온 데이터를 로컬 스토리지에 저장
	// 		}  
	// 	  });
	// 	}
	// }, []);

	// 캐싱 X 
	useEffect(() => {
		dynamoDB.scan(params, function(err, data) {
		if (err) {
			console.log(err);
		} else {
			const items = data.Items
			.map(({ thumbnail_image, collection_name, malicious_images }) => ({
			thumbnail_image,
			collection_name,
			scam_length: Math.floor(malicious_images.slice(1, -1).split(',').length/2)
			}))
			.filter(({ scam_length }) => scam_length > 0);
			setCases(items); 
		}  
		});
	}, [params]);


	return (
		<CasePageRoot>
			<PageTitle>OUR CASES</PageTitle>
			<Dash />
			<SubTitle>ThreeF has found suspected scam NFTs for several NFT collections</SubTitle>
			<CaseContainer>
				{cases.map((c) => (
					<CaseComponent props={c} />
				))}
			</CaseContainer>
		</CasePageRoot>
	);
}

const CasePageRoot = styled.div`
	width: 100%;
	min-height: 90vh;
	font-family: AkiraExpanded;
	background-color:#016DD8;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const PageTitle = styled.div`
	font-size:3em;
	color:white;
	margin-top: 5vh;
`

const Dash = styled.div`
	background-color: white;
	width: 1.5em;
	height: 0.3em;
	margin: 0.5em 0em 1em 0em;
`

const SubTitle = styled.div`
	font-size:1em;
	color:white;
	margin-bottom:3em;
`

const CaseContainer = styled.div`
	width: 70%;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	margin-bottom: 10vh;
`

export default CasePage;

