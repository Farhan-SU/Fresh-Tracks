import React, { useRef, useEffect, useState} from 'react';
import { Link, Switch, useLocation, useRouteMatch} from 'react-router-dom';
import {Row, Col, Container} from 'react-bootstrap';
import '../assets/styles/bio.scss';
import SEO from './SEO';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import Banner from '../assets/images/bannerFarhan.png';
import BioPic from '../assets/images/imgBiosample.png';
import {ReactComponent as Facebook} from '../assets/images/facebook.svg';
import {ReactComponent as Twitter} from '../assets/images/twitter.svg';
import {ReactComponent as IG} from '../assets/images/instagram.svg';
import {ReactComponent as Linkedin} from '../assets/images/linkedin.svg';
import {gsap} from 'gsap';
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

const MEMBER = gql`
  query Member ($slug: string) {
    member(where : {slug: $slug}) {
      id
      memberName
      memberPosition
      slug
      agencyImg {
        url
      }
    }
  }
`;

const pictures = [
    {
      source:
        "https://images.unsplash.com/photo-1525498128493-380d1990a112?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
      content: {
        date: "04.29.2020",
        desc: "Behind the leaves. "
      }
    },
    {
      source:
        "https://images.unsplash.com/photo-1533038590840-1cde6e668a91?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      content: {
        date: "04.28.2020",
        desc: "Minimal eucalyptus leaves"
      }
    },
    {
      source:
        "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1266&q=80",
      content: {
        date: "04.28.2020",
        desc: "Rubber Plant"
      }
    },
    {
      source:
        "https://images.unsplash.com/photo-1506543277633-99deabfcd722?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=623&q=80",
      content: {
        date: "04.27.2020",
        desc: "Person holding leaf plant"
      }
    },
    {
      source:
        "https://images.unsplash.com/photo-1512428813834-c702c7702b78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      content: {
        date: "04.23.2020",
        desc: "Green leafed plant photography"
      }
    },
    {
      source:
        "https://images.unsplash.com/photo-1517848568502-d03fa74e1964?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      content: {
        date: "04.21.2020",
        desc: "Gree leafed plant in focus photography"
      }
    },
    {
      source:
        "https://images.unsplash.com/photo-1536882240095-0379873feb4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
      content: {
        date: "04.23.2020",
        desc: "I took the shot at home with Sigma 105 mm"
      }
    },
    {
      source:
        "https://images.unsplash.com/photo-1471086569966-db3eebc25a59?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      content: {
        date: "04.21.2020",
        desc: "Cheese plant leaf in clear glass vase"
      }
    }
  ];

  const Slide = ({ imageSource, content }) => {
    return (
      <div className="slide">
        <div className="preview">
          <img src={imageSource} alt="The Plant" draggable="false" />
        </div>
        <div className="infos">
          <h3>{content.date}</h3>
          <h2>{content.desc}</h2>
        </div>
      </div>
    );
  };

export default function Bio() {


    const sliderRef = useRef(null);

    useEffect(() => {
        console.log(sliderRef.current.clientWidth);
        Draggable.create(sliderRef.current, {
          type: "x"
          /*bounds: {
            minX: -sliderRef.current.clientWidth + window.innerWidth * 0.88,
            maxX: 0
          }*/
        });
      }, []);

      return (
        <SEO
        pageMeta={{
        title: "E-Boards | Agency",
        keywords: ["Fashion", "Gallery", "Agency", "Models", "Photographers", "Videographers", "Makeup Artists", "Fashion Designers", "Graphic Designers" ],
        description: "We are Fashion and Design Society. We are also a Fashion Agency that can help you in any creative projects you have"
      }}>
        <div className="biowrapper">
            <div className="bio-header">
                <h1>Farhan Islam</h1>
                <h4>Head of Web Development</h4>
                <div className="bannerBio">
                    <img src={Banner} className="banner-img" alt=""/>
                </div>
            </div>
            <>
                <Row className="actualbio">
                    <Col md={6} className="bioPic">
                        <img src={BioPic}/>
                    </Col>
                    <Col md={5} className="biocontent">
                        <h2>Information Management and Technology</h2>
                        <div className="desBio">
                        <p>stiuffvjdfvkjvnevlnvnldnvlndlnvl
                            dnvndlvndlvnldnvndf lvnldfvnldfnvd
                            lvndlnvlvndlvnvlndlvndldddnvdlvnl
                            dnvldnvdlfnvldnvdddd</p>
                        </div>
                        <Row style={{width: '84%'}}>
                            <a className='not' href="https://www.instagram.com/syracusefads/" target="_blank" rel="noopener noreferrer" ><Facebook/></a>
                            <a href="https://www.instagram.com/syracusefads/" target="_blank" rel="noopener noreferrer" ><IG/></a>
                            <a href="https://www.instagram.com/syracusefads/" target="_blank" rel="noopener noreferrer" ><Linkedin/></a>
                        </Row>
                    </Col>
                </Row>
                <div className="showcase">
                <div id="slider" className="slider" ref={sliderRef}>
                    {pictures.map((item, index) => {
                        return (
                        <Slide key={index} imageSource={item.source} content={item.content} />
                        );
                    })}
                    </div>
                </div>
            </>
        </div>
        </SEO>
      );
};
