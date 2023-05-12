import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CaseComponent from '../components/CasesComponents/CaseComponent';
import { dynamoDB, case_params } from '../db.js';

const CasePage = () => {
	const  [cases, setCases] = useState([]);

	useEffect(() => {
		dynamoDB.query(case_params, function(err, data) {
		if (err) {
			console.log(err);
		} else {
			const items = data.Items
			.map(({ thumbnail_image, collection_name, number_of_malicious_images }) => ({
			thumbnail_image,
			collection_name,
			scam_length: number_of_malicious_images
			}))
			setCases(items); 
		}  
		});
	}, [case_params]);


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
	margin-top: 8vh;
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

