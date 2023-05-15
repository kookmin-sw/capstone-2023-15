import React, {useRef, useCallback, useEffect, useState} from 'react';
import styled from 'styled-components';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ResultPage from './ResultPage';
import * as AWS from 'aws-sdk';
import { useParams } from "react-router-dom";

import nextArrow from '../statics/images/arrow-right.png';
import prevArrow from '../statics/images/arrow-left.png';

/*
---- parameter matching ----

    DONE - (safe, danger)
    UNDONE - (ignore)
*/

const ResultPageList = () => {
	const {
		REACT_APP_REGION,
		REACT_APP_ACCESSKEY_ID,
		REACT_APP_SECRETACCESSKEY,
	} = process.env;

  const params = useParams();

  const slickRef = useRef(null);

  const previous = useCallback(() => slickRef.current.slickPrev(), []);
  
  const next = useCallback(() => slickRef.current.slickNext(), []);

  const [results, setResults] = useState([]);
  const [email, setEmail] = useState(params.email);

	AWS.config.update({
		region: REACT_APP_REGION,
		accessKeyId: REACT_APP_ACCESSKEY_ID,
		secretAccessKey: REACT_APP_SECRETACCESSKEY,
	});

	const dynamoDB = new AWS.DynamoDB.DocumentClient();

  useEffect(() => {
    if (results.length === 0) {
      dynamoDB.query({
        TableName: "TF_database",
        KeyConditionExpression: '#ce = :email',
        ExpressionAttributeNames: {
          "#ce": 'client_email'
        },
        ExpressionAttributeValues: {
          ':email': email,
        }
      }, (err, data) => {
        if (err)
          console.log('Fail to get results.. Error: ' + err);
        else {
          setResults(data.Items);
        }
      });
    }
  }, [])

  const settings = {
    dots: false,
    infinite: true,
    arrows:false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Slider {...settings} ref={slickRef}>
        {
          results !== [] ?
            results.map( (result, idx) =>  <ResultPage props={result} sequence={idx + 1}/>) : <></>
        }
      </Slider>
      {
        results.length > 1 &&
        <ArrowGroup>
          <ArrowBtn onClick={previous}>
            <img
              src={prevArrow}
              alt={"pre-arrow"}
            />
          </ArrowBtn>
          <ArrowBtn onClick={next}>
            <img
              src={nextArrow}
              alt={"next-arrow"}
            />
          </ArrowBtn>
        </ArrowGroup>
      }
    </>
	);
}

const ArrowGroup = styled.div`
  position:absolute;
  width:100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top:50%;
`

const ArrowBtn = styled.div`
  margin:1em;
`

export default ResultPageList;