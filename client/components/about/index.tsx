/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Heading, HeadingSmall } from "../styled/about";
import ProgressBar from "@ramonak/react-progress-bar";
import {
  Rectangle,
  Circle,
  Ellipse,
  Line,
  Polyline,
  CornerBox,
  Triangle,
  Hexagone,
} from "react-shapes";

const About = () => {
  return (
    <>
      <Row>
        <div className="col-md-12">
          <Heading className="categoryHeading">About</Heading>
        </div>
      </Row>
      <Row
        style={{
          display: "flex",
          justifyContent: "space-around",
          textAlign: "center",
          fontFamily: "Raleway",
        }}
      >
        <Col sm={12} lg={4} className="text-center">
          <HeadingSmall>
            Fast load times and lag free interaction, my highest priority.
          </HeadingSmall>
        </Col>
        <Col sm={12} lg={4} className="text-center">
          <HeadingSmall>
            My layouts will work on any device, big or small.
          </HeadingSmall>
        </Col>
        <Col sm={12} lg={4} className="text-center">
          <HeadingSmall>
            Strong preference for easy to use, intuitive UX/UI.
          </HeadingSmall>
        </Col>
        <Col sm={12} lg={4} className="text-center">
          <HeadingSmall>
            Websites don't have to be static, I love making pages come to life.
          </HeadingSmall>
        </Col>
      </Row>
      <Row
        style={{
          display: "flex",
          textAlign: "center",
          justifyContent: "space-between",
          marginBottom: "12px",
        }}
      >
        <Col style={{ flexBasis: "0", flexGrow: "1", maxWidth: "100%" }}>
          <div>
            <span>JAVASCRIPT</span>
            <ProgressBar
              completed={70}
              width={"50%"}
              margin={"auto"}
              height={"30px"}
              borderRadius={"0px"}
              bgColor={"#1447a6"}
            />
          </div>
          <div>
            <span>TYPESCRIPT</span>
            <ProgressBar
              completed={70}
              width={"50%"}
              margin={"auto"}
              height={"30px"}
              borderRadius={"0px"}
              bgColor={"#1447a6"}
            />
          </div>

          <div>
            <span>REACT JS</span>
            <ProgressBar
              completed={80}
              width={"50%"}
              margin={"auto"}
              height={"30px"}
              borderRadius={"0px"}
              bgColor={"#1447a6"}
            />
          </div>

          <div>
            <span>NEXT JS</span>
            <ProgressBar
              completed={70}
              width={"50%"}
              margin={"auto"}
              height={"30px"}
              borderRadius={"0px"}
              bgColor={"#1447a6"}
            />
          </div>
          <div>
            <span>NODE</span>
            <ProgressBar
              completed={30}
              width={"50%"}
              margin={"auto"}
              height={"30px"}
              borderRadius={"0px"}
              bgColor={"#1447a6"}
            />
          </div>
        </Col>
        <Col
          style={{
            flexBasis: "0",
            flexGrow: "1",
            maxWidth: "100%",
          }}
        >
          <div>
            <span>TEAM PLAYER</span>
            <ProgressBar
              completed={90}
              width={"50%"}
              margin={"auto"}
              height={"30px"}
              borderRadius={"0px"}
              bgColor={"#1447a6"}
            />
          </div>

          <div>
            <span>SELF MOTIVATION</span>
            <span>
              <ProgressBar
                completed={80}
                width={"50%"}
                margin={"auto"}
                height={"30px"}
                borderRadius={"0px"}
                bgColor={"#1447a6"}
              />
            </span>
          </div>
          <div>
            <span>COMMUNICATION</span>
            <ProgressBar
              completed={90}
              width={"50%"}
              margin={"auto"}
              height={"30px"}
              borderRadius={"0px"}
              bgColor={"#1447a6"}
            />
          </div>

          <div>
            <span>WILLING TO LEARN NEW THINGS</span>
            <ProgressBar
              completed={65}
              width={"50%"}
              margin={"auto"}
              height={"30px"}
              borderRadius={"0px"}
              bgColor={"#1447a6"}
            />
          </div>
          <div>
            <span>PROBLEM SOLVING</span>
            <ProgressBar
              completed={70}
              width={"50%"}
              margin={"auto"}
              height={"30px"}
              borderRadius={"0px"}
              bgColor={"#1447a6"}
            />
          </div>
        </Col>
      </Row>
    </>
  );
};
export default About;
