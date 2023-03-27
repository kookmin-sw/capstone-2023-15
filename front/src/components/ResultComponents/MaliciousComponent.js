import React, { Component } from 'react';
import styled from 'styled-components';
import OpenseaLogo from '../../statics/images/OpenseaLogo.png'

const MaliciousComponent = () => {
	return (
    <MaliciousItemRoot>
			<MarketIconConatiner>
				<MarketIcon src={OpenseaLogo} />			
			</MarketIconConatiner>
			<MarliciousItemUrl>[PLAGIARIST] http://naver.com</MarliciousItemUrl>
		</MaliciousItemRoot>
	);
}

const MaliciousItemRoot = styled.div`
	font-family: AkiraExpanded;
	display:flex;
	margin-left:1em;
`

const MarliciousItemUrl = styled.p`
	font-size:0.7vw;
	line-height:1;
	margin-left:1em;
`

const MarketIconConatiner = styled.div`
	display:flex;
	justify-content: center;
	align-items: center;
`

const MarketIcon = styled.img`
	width: 1vw;
	height: 1vw;
`

export default MaliciousComponent;

