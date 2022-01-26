/*!

=========================================================
* Paper Kit React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Button,
  Label,
  FormGroup,
  Input,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";

function ProfilePage() {
  const [activeTab, setActiveTab] = React.useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });
  return (
    <>
      <IndexNavbar />
      <ProfilePageHeader />
      <div className="section profile-content">
        <Container>
          <div className="owner">
            <div className="avatar">
              <img
                alt="..."
                className="img-circle img-no-padding img-responsive"
                src={require("assets/img/faces/me.jpeg").default}
              />
            </div>
            <div className="name">
              <h2 className="title">
                <b>Tigerlilly Zietz</b> <br />
              </h2>
              <h6 className="description">Loyola Marymount University<br/><b>Computer Science & Pure Mathematics</b><br/> Class of 2022</h6>
              <hr/>
            </div>
          </div>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="9">
              <h5>
              I am a Software Engineer from the North Shore of Kauai, Hawaii. I will be graduating in May of 2022 with a Bachelor of Science degree with a major in Computer Science and a minor in Pure Mathematics from Loyola Marymount University located in Los Angeles, California. Through internships and schooling I have gained experience in developing, shipping, monitoring, and maintaining software with solid test infrastructure. I have expertise in accomplishing tasks in an orderly and practical manner due to my detail-oriented and methodical approach to problem-solving paired with my constant drive to catalyze, optimize, and unveil potential errors and imperfections. While working at Digital Media Solutions participating in daily stand-up meetings gave me the skills necessary to work on a collaborative team and meet deadlines. My weekly engagement in scrum methodology has led me to be proficient in working and communicating with team members with differing perspectives. I developed the skills to organize tasks and reflect on results in order to continuously improve both as a team and as an individual. I have a strong passion for programming and I am excited and optimistic about what the future holds!

              </h5>
            </Col>
          </Row>


        </Container>
      </div>
    </>
  );
}

export default ProfilePage;
