/* eslint-disable react/no-unescaped-entities */
import { Container } from "react-bootstrap";

const Home = () => {
  return (
    <Container
      className="mt-5"
      fluid
      style={{
        backgroundImage: "linear-gradient(180deg,#fff -29%,#ecf5ff 105%)",
        padding: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "calc(93vh + 53px)",
      }}
    >
      <div style={{ fontSize: "42px", fontFamily: "Raleway" }}>
        Hello, I'm{" "}
        <span style={{ fontFamily: "Raleway-semibold", color: "#e31b6d" }}>
          Wajeeha Manzoor
        </span>
        .
      </div>
      <div style={{ fontSize: "42px", fontFamily: "Raleway" }}>
        I'm a full-stack web developer
      </div>
    </Container>
  );
};

export default Home;
