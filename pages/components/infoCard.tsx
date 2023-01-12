import type { NextPage } from "next";
import { Card, Text, Row, Col, Button } from "@nextui-org/react";
import { info } from "console";

interface Props {
  title: string;
  label: string;
  imageUrl: string;
  studentCount: string;
}

const InfoCard: NextPage<Props> = (props) => {
  const { title, label, imageUrl, studentCount } = props;

  return (
    <Card>
      <Card.Header css={{ position: "absolute", top: 5 }}>
        <Col>
          <Text
            size={12}
            weight="bold"
            transform="uppercase"
            color="#fffffffAA"
          >
            {label} Article
          </Text>
          <Text h4 color="white">
            {title}
          </Text>
        </Col>
      </Card.Header>
      <Card.Image src={imageUrl}></Card.Image>
      <Card.Footer
        isBlurred
        css={{ position: "absolute", bgBlur: "#0f111466", bottom: 0 }}
      >
        <Row>
          <Col>
            <Text color="#d1d1d1" size={18}>
              {studentCount} students
            </Text>
          </Col>
          <Col>
            <Row justify="flex-end">
              <Button flat auto rounded color="primary">
                <Text
                  css={{ color: "inherit" }}
                  size={12}
                  weight="bold"
                  transform="uppercase"
                >
                  Enroll in course
                </Text>
              </Button>
            </Row>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
};

export default InfoCard;
