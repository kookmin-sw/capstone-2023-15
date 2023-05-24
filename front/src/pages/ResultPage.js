import React from 'react';
import styled from 'styled-components';
import IgnoreComponent from '../components/ResultComponents/IgnoreComponent';
import SafeComponent from '../components/ResultComponents/SafeComponent';
import DangerComponent from '../components/ResultComponents/DangerComponent';

import bgGreen from '../statics/images/bg-green.png'
import bgRed from '../statics/images/bg-red.png'
import bgBlue from '../statics/images/bg-blue.png'

/*
---- parameter matching ----

    DONE - (safe, danger)
    UNDONE - (ignore)
*/

const ResultPage = ({props, sequence}) => {

	const ResultComponent = {
		safe:<SafeComponent props={Object.assign(props, {sequence:sequence})} />,
		danger:<DangerComponent props={Object.assign(props, {sequence:sequence})} />,
		ignore:<IgnoreComponent props={Object.assign(props, {sequence:sequence})}/>,
	}
	
	return (
		<ResultPageRoot result={props.result}>
			<PageTitle>RESULTs</PageTitle>
			{
				props !== undefined && ResultComponent[props.result]
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