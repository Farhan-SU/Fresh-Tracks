import React, { useRef, useEffect, useState} from 'react';
import { Link, Switch, useLocation, useRouteMatch} from 'react-router-dom';
import {Row, Col} from 'react-bootstrap';
import '../../assets/styles/pgagency.scss';
import SEO from '../../components/SEO';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import {gsap} from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const endpoint = 'https://api-us-east-1.graphcms.com/v2/ckf8z1uao08mm01wghz4k17at/master?query=query%7B%0A%20%20members%7B%0A%20%20%20%20id%0A%20%20%20%20memberName%0A%20%20%20%20memberPosition%0A%20%20%20%09agencyImg%7B%0A%20%20%20%20%20%20url%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A%0A';

const MEMBERS = gql`
query{
  members{
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

export default function Eboard() {
 
  const { loading, error, data } = useQuery(MEMBERS);
  const [ Eboard, setEboard ] = useState(undefined);


  useEffect(() => {
    if(loading === false && data){
        setEboard(data);
    }
}, [loading, data])


  if (error) {
    return <><div className="error-bio"><h1>{error.message}</h1></div></>;
  }
  if (loading) {
    return (
      <div className="loading">
        <h2>Loading...</h2>
      </div>
    )
  }
  if (data) {
      return (
        <SEO
        pageMeta={{
        title: "E-Board | Agency",
        keywords: ["Fashion", "Gallery", "Agency", "Models", "Photographers", "Videographers", "Makeup Artists", "Fashion Designers", "Graphic Designers" ],
        description: "We are Fashion and Design Society. We are also a Fashion Agency that can help you in any creative projects you have"
      }}>
      <div className="eboardwrapper">
      <h1>E-Board</h1>
        <div className="members">
          {data.members.map(member => (
            <div key={member.id} className="member-intro">
              <Link to={`/agency/bio/${member.slug}`}>
               {/*image goes below this comment*/}
               <div className="wrapBlur">
               <img src={member.agencyImg.url} alt={member.memberName} className="memImg"/>
               </div>
              <h2>{member.memberName}</h2>
              <h4><em>{member.memberPosition}</em></h4>
              </Link>
            </div>
          ))}
        </div>
        </div>
        </SEO>
      );
  }
};
