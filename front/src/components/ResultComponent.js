import React from 'react';
import styled from 'styled-components';

const ResultComponent = ({props}) => {
	return (
		<ComponentRoot>
			<AuthorSection />
			<RequestSection />
			<TargetSection />
			<TargetSection />
			<SummarySection />
		</ComponentRoot>
	);
}

const ComponentRoot = styled.div`
	width: 60vw;
	height:60vh;
	background-color:#016DD8;
	display:flex;
	flex-direction: column;
	border:5px solid;
`

const AuthorSection = styled.div`
	border:0 0 5px 0 solid;
	flex:1;
`
const RequestSection = styled.div`
	border:0 0 5px 0 solid;
	flex:1;
`
const TargetSection = styled.div`
	border:0 0 5px 0 solid;
	flex:1;
`
const SummarySection = styled.div`
	border:0 0 5px 0 solid;
	flex:1;
`

export default ResultComponent;