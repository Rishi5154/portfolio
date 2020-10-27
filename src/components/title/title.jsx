import React from 'react'
import TypeWriter from "typewriter-effect"
import styled from "styled-components"

const MyTitleMessage = styled.h1`
position: absolute;
width: 100%;
top: 22rem;
z-index: 1;
margin-top: -125px;
text-align: center;
strong {
  font-size: 1.1em;
  color: white;
}
div {
//   color: ${props => props.theme.textColor};
  color: cyan;
  text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
  font-weight: 300;
  letter-spacing: 5px;
  .main {
    font-size: 60px;
  }
  .sub {
    font-size: 40px;
    letter-spacing: 2px;
  }
}
`;

const TitleMessage = () => (
<MyTitleMessage>
  <div className="titleMessage">
    <div className="heading">
      <div className="main text-center mb-3">
        <span>
          <strong>Rishi</strong>
        </span>
      </div>
      <div className="sub">
        <TypeWriter
          options={{
            strings: ["Budding Software Engineer", "Computer Science", "App developer"],
            autoStart: true,
            loop: true,
            delay: 50
          }}
        />
      </div>
    </div>
  </div>
</MyTitleMessage>
);

export default TitleMessage;