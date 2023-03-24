import React, { Component } from 'react';
import styled from 'styled-components';
import CaseComponent from '../components/CasesComponents/CaseComponent';

const CasePage = () => {
	return (
		<CasePageRoot>
			<PageTitle>CASE OF PLAGIRIZM</PageTitle>
			<Dash />
			<SubTitle>THIS IS A CASE OF PLAGIARISM OF NFT WORKS CAUGHT BY FFF</SubTitle>

			<CaseComponent props={{isReverse:false}} />
			<CaseComponent props={{isReverse:true}} />
			<CaseComponent props={{isReverse:false}} />
			<CaseComponent props={{isReverse:true}} />
		</CasePageRoot>
	);
}

const PageTitle = styled.div`
	font-size:3em;
	color:white;
`

const Dash = styled.div`
  background-color: white;
  width: 1.5em;
  height: 0.3em;
	margin:0.3em 0em 0.5em 0.3em;
`

const SubTitle = styled.div`
	font-size:1em;
	color:white;
	margin-bottom:3em;
`

const CasePageRoot = styled.div`
	width: 100vw;
	height: 100vh;
	font-family: AkiraExpanded;
	background-color:#016DD8;
	padding: 2em;
`

export default CasePage;

