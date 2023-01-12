import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { Container, Navbar, Text, Button, Grid, Col } from "@nextui-org/react";
import InfoCard from "./components/infoCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Container>
      <Navbar isCompact variant={"static"}>
        <Navbar.Brand>
          <Text b color="inherit">
            Photograph Website
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="md">
          <Navbar.Link href="#">Learning</Navbar.Link>
          <Navbar.Link href="#">Community</Navbar.Link>
          <Navbar.Link href="#">Contact us</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Link href="#">Login</Navbar.Link>
          <Navbar.Item>
            <Button auto flat href="#">
              Sign up
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
      {/* Jumbotron */}
      <Grid.Container
        justify="center"
        css={{
          height: "500px",
          backgroundImage: "url(https://littlevisuals.co/images/AE1.jpg)",
        }}
      >
        <Grid xs={12} sm={6} alignItems="center">
          <Col css={{ width: "100%" }}>
            <Text weight={"bold"} size={70} css={{ textAlign: "center" }}>
              The Photographer Platform
            </Text>
            <Text weight={"bold"} size={70} css={{ textAlign: "center" }}>
              Of the future
            </Text>
            <Button
              size="md"
              shadow
              color="gradient"
              css={{ width: "100%", marginTop: "10px" }}
            >
              Join Forum
            </Button>
          </Col>
        </Grid>
      </Grid.Container>
      {/* 3 Displaying product cards */}
      <Grid.Container gap={2}>
        <Grid xs={12} sm={4}>
          <InfoCard
            label="Course"
            title="Learn Next.js With Cooper Codes"
            imageUrl="https://littlevisuals.co/images/red_dawn.jpg"
            studentCount="3,500"
          />
        </Grid>
        <Grid xs={12} sm={4}>
          <InfoCard
            label="Course"
            title="Learn Apollo Server With Cooper Codes"
            imageUrl="https://littlevisuals.co/images/sunset.jpg"
            studentCount="1,000"
          />
        </Grid>
        <Grid xs={12} sm={4}>
          <InfoCard
            label="Course"
            title="Create A Startup With Cooper Codes"
            imageUrl="https://littlevisuals.co/images/tail.jpg"
            studentCount="5,000"
          />
        </Grid>
      </Grid.Container>
    </Container>
  );
}
