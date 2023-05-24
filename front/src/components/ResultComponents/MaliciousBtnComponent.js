import React from 'react';
import styled from 'styled-components';

const MaliciousBtnComponent = () => {
	return (
		<MaliciousItemRoot>
			<ResultBtn>Download Results</ResultBtn>
		</MaliciousItemRoot>
	);
}

const MaliciousItemRoot = styled.div`
	font-family: AkiraExpanded;
	display:flex;
	margin-left:1em;
`

const ResultBtn = styled.button`
	font-size: 1em;
	font-family: AkiraExpanded;
	padding: 5% 2% 5% 2%;
	background: red;
	border-radius: 1em;
	border: none;
    color: white;
	&:hover{
		box-shadow: -0.3em -0.3em 0.5em rgba(255,255,255,0.45), 5px 5px 9px rgba(94,104,121,0.3);
	}
	&:active{
		box-shadow: inset -0.3em -0.3em 0.5em rgba(255,255,255,0.45), inset 5px 5px 9px rgba(94,104,121,0.3);
	}
`

export default MaliciousBtnComponent;

