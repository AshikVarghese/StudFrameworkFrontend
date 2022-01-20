/** @format */

//Class Advisor ProfessionalDevelopment Data

import React, { useState, useEffect } from "react";
import axios from "axios";
// Chakra imports
import {
  Flex,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
  SimpleGrid,
  Button,
  Collapse,
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

import ProfessionalDevelopmentTableRow1 from "components/Tables/ProfessionalTableRow/ProfessionalTableRow1/PDIndustrialVisitTR1";
import ProfessionalDevelopmentTableRow2 from "components/Tables/ProfessionalTableRow/ProfessionalTableRow1/PDInplantTrainingTR1";
import ProfessionalDevelopmentTableRow3 from "components/Tables/ProfessionalTableRow/ProfessionalTableRow1/PDGuestlectureTR1";
import ProfessionalDevelopmentTableRow4 from "components/Tables/ProfessionalTableRow/ProfessionalTableRow1/PDMotivationalTalkTR1";
import ProfessionalDevelopmentTableRow5 from "components/Tables/ProfessionalTableRow/ProfessionalTableRow1/PDInternshipTR1";
import ProfessionalDevelopmentTableRow6 from "components/Tables/ProfessionalTableRow/ProfessionalTableRow1/PDCoursesTR1";
import ProfessionalDevelopmentTableRow7 from "components/Tables/ProfessionalTableRow/ProfessionalTableRow1/PDWorkshopTR1";
import ProfessionalDevelopmentTableRow8 from "components/Tables/ProfessionalTableRow/ProfessionalTableRow1/PDWebinarTR1";
import ProfessionalDevelopmentTableRow9 from "components/Tables/ProfessionalTableRow/ProfessionalTableRow1/PDCompetitionsTR1";
import ProfessionalDevelopmentTableRow10 from "components/Tables/ProfessionalTableRow/ProfessionalTableRow1/PDPlacementTR1";
import ProfessionalDevelopmentTableRow11 from "components/Tables/ProfessionalTableRow/ProfessionalTableRow1/PDMiniProjectTR1";
import ProfessionalDevelopmentTableRow12 from "components/Tables/ProfessionalTableRow/ProfessionalTableRow1/PDFinalprojectTR1";
import ProfessionalDevelopmentTableRow13 from "components/Tables/ProfessionalTableRow/ProfessionalTableRow1/PDPublicationsTR1";

import { URL, server_URL } from "controller/urls_config";

function ProfessionalDevelopmentData1() {
  const [drop1, setDrop1] = useState(false);
  const [drop2, setDrop2] = useState(false);
  const [drop3, setDrop3] = useState(false);
  const [drop4, setDrop4] = useState(false);
  const [drop5, setDrop5] = useState(false);
  const [drop6, setDrop6] = useState(false);
  const [drop7, setDrop7] = useState(false);
  const [drop8, setDrop8] = useState(false);
  const [drop9, setDrop9] = useState(false);
  const [drop10, setDrop10] = useState(false);
  const [drop11, setDrop11] = useState(false);
  const [drop12, setDrop12] = useState(false);
  const [drop13, setDrop13] = useState(false);

  const [p1data, setp1data] = useState([]);
  const [p2data, setp2data] = useState([]);
  const [p3data, setp3data] = useState([]);
  const [p4data, setp4data] = useState([]);
  const [p5data, setp5data] = useState([]);
  const [p6data, setp6data] = useState([]);
  const [p7data, setp7data] = useState([]);
  const [p8data, setp8data] = useState([]);
  const [p9data, setp9data] = useState([]);
  const [p10data, setp10data] = useState([]);
  const [p11data, setp11data] = useState([]);
  const [p12data, setp12data] = useState([]);
  const [p13data, setp13data] = useState([]);

  const textColor = useColorModeValue("gray.700", "white");

  let params = new URLSearchParams();
  params.append("RollNumber", localStorage.getItem("generalStudent"));
  useState(async () => {
    axios
      .all([
        axios.post(server_URL + "Industrialv_cadisplay", params),
        axios.post(server_URL + "Industrialv_cadisplay", params),
        axios.post(server_URL + "Industrialv_cadisplay", params),
        axios.post(server_URL + "Industrialv_cadisplay", params),
        axios.post(server_URL + "Industrialv_cadisplay", params),
        axios.post(server_URL + "Industrialv_cadisplay", params),
        axios.post(server_URL + "Industrialv_cadisplay", params),
        axios.post(server_URL + "Industrialv_cadisplay", params),
        axios.post(server_URL + "Industrialv_cadisplay", params),
        axios.post(server_URL + "Industrialv_cadisplay", params),
        axios.post(server_URL + "Industrialv_cadisplay", params),
        axios.post(server_URL + "Industrialv_cadisplay", params),
        axios.post(server_URL + "Industrialv_cadisplay", params),
      ])
      .then(
        axios.spread(
          (
            data1,
            data2,
            data3,
            data4,
            data5,
            data6,
            data7,
            data8,
            data9,
            data10,
            data11,
            data12,
            data13
          ) => {
            setp1data(data1.data);
            setp2data(data2.data);
            setp3data(data3.data);
            setp4data(data4.data);
            setp5data(data5.data);
            setp6data(data6.data);
            setp7data(data7.data);
            setp8data(data8.data);
            setp9data(data9.data);
            setp10data(data10.data);
            setp11data(data11.data);
            setp12data(data12.data);
            setp13data(data13.data);
          }
        )
      );
  }, []);

  return (
    <Flex direction="column" pt={{ base: "120px", md: "65px" }}>
      <SimpleGrid columns={{ sm: 1, md: 1, xl: 1 }} gap={5}>
        <Flex direction="column" align="flex-end">
          <box>
            <Button
              ms="auto"
              me="1em"
              bg="orange.400"
              width="6em"
              height="2em"
              onClick={() => {
                setDrop1(true),
                  setDrop2(true),
                  setDrop3(true),
                  setDrop4(true),
                  setDrop5(true),
                  setDrop6(true),
                  setDrop7(true),
                  setDrop8(true),
                  setDrop9(true),
                  setDrop10(true),
                  setDrop11(true),
                  setDrop12(true),
                  setDrop13(true);
              }}
            >
              Show All
            </Button>

            <Button
              ms="auto"
              me="1em"
              bg="orange.400"
              width="6em"
              height="2em"
              onClick={() => {
                setDrop1(false),
                  setDrop2(false),
                  setDrop3(false),
                  setDrop4(false),
                  setDrop5(false),
                  setDrop6(false),
                  setDrop7(false),
                  setDrop8(false),
                  setDrop9(false),
                  setDrop10(false),
                  setDrop11(false),
                  setDrop12(false),
                  setDrop13(false);
              }}
            >
              Hide All
            </Button>
          </box>
        </Flex>
        <Card>
          <CardHeader>
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              Industrial Visit
            </Text>
            <Button
              ms="auto"
              bg="orange.400"
              width="fit-content"
              height="2em"
              onClick={() => setDrop1(!drop1)}
            >
              {drop1 ? "Hide" : "Show"}
            </Button>
          </CardHeader>
          <Collapse in={drop1}>
            <CardBody mt="1em" overflowX={{ sm: "scroll" }}>
              <Table variant="simple" color={textColor}>
                <Thead>
                  <Tr my=".8rem" pl="0px" color="gray.400">
                    <Th color="gray.400">Industry</Th>
                    <Th color="gray.400">Date and Year</Th>
                    <Th color="gray.400">Outcome</Th>
                    <Th color="gray.400">Credits</Th>
                    <Th color="gray.400">Verify Status</Th>
                    <Th color="gray.400">Edit</Th>
                    <Th color="gray.400">Delete</Th>
                    <Th color="gray.400">Verify</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {p1data.map((item1) => {
                    return (
                      <ProfessionalDevelopmentTableRow1
                        id={item1.s_no}
                        row1={item1.industry_name}
                        row2={item1.date}
                        row3={item1.outcome}
                        row4={item1.credits}
                        row5={item1.verified}
                      />
                    );
                  })}
                </Tbody>
              </Table>
            </CardBody>
          </Collapse>
        </Card>

        <Card>
          <CardHeader>
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              Inplant Training
            </Text>
            <Button
              ms="auto"
              bg="orange.400"
              width="fit-content"
              height="2em"
              onClick={() => setDrop2(!drop2)}
            >
              {drop2 ? "Hide" : "Show"}
            </Button>
          </CardHeader>
          <Collapse in={drop2}>
            <CardBody mt="1em" overflowX={{ sm: "scroll" }}>
              <Table variant="simple" color={textColor}>
                <Thead>
                  <Tr my=".8rem" pl="0px" color="gray.400">
                    <Th color="gray.400">Industry</Th>
                    <Th color="gray.400">Date and Year</Th>
                    <Th color="gray.400">Outcome</Th>
                    <Th color="gray.400">Credits</Th>
                    <Th color="gray.400">Verify Status</Th>
                    <Th color="gray.400">Edit</Th>
                    <Th color="gray.400">Delete</Th>
                    <Th color="gray.400">Verify</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {p2data.map((item2) => {
                    return (
                      <ProfessionalDevelopmentTableRow2
                        row1={item2.industry}
                        row2={item2.date}
                        row3={item2.outcome}
                        row4={item2.credits}
                        row5={item2.verified}
                      />
                    );
                  })}
                </Tbody>
              </Table>
            </CardBody>
          </Collapse>
        </Card>

        <Card>
          <CardHeader>
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              Guest Lecture
            </Text>
            <Button
              ms="auto"
              bg="orange.400"
              width="fit-content"
              height="2em"
              onClick={() => setDrop3(!drop3)}
            >
              {drop3 ? "Hide" : "Show"}
            </Button>
          </CardHeader>
          <Collapse mt="1em" in={drop3}>
            <CardBody overflowX={{ sm: "scroll" }}>
              <Table variant="simple" color={textColor}>
                <Thead>
                  <Tr my=".8rem" pl="0px" color="gray.400">
                    <Th color="gray.400">Topic</Th>
                    <Th color="gray.400">Resource Person</Th>
                    <Th color="gray.400">Outcome</Th>
                    <Th color="gray.400">Credits</Th>
                    <Th color="gray.400">Verify Status</Th>
                    <Th color="gray.400">Edit</Th>
                    <Th color="gray.400">Delete</Th>
                    <Th color="gray.400">Verify</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {p3data.map((item3) => {
                    return (
                      <ProfessionalDevelopmentTableRow3
                        row1={item3.topic}
                        row2={item3.resource_person}
                        row3={item3.outcome}
                        row4={item3.credits}
                        row5={item3.verified}
                      />
                    );
                  })}
                </Tbody>
              </Table>
            </CardBody>
          </Collapse>
        </Card>

        <Card>
          <CardHeader>
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              Motivational Talks
            </Text>
            <Button
              ms="auto"
              bg="orange.400"
              width="fit-content"
              height="2em"
              onClick={() => setDrop4(!drop4)}
            >
              {drop4 ? "Hide" : "Show"}
            </Button>
          </CardHeader>
          <Collapse in={drop4}>
            <CardBody mt="1em" overflowX={{ sm: "scroll" }}>
              <Table variant="simple" color={textColor}>
                <Thead>
                  <Tr my=".8rem" pl="0px" color="gray.400">
                    <Th color="gray.400">Topic</Th>
                    <Th color="gray.400">Date and Year</Th>
                    <Th color="gray.400">Resource Person</Th>
                    <Th color="gray.400">Outcome</Th>
                    <Th color="gray.400">Credits</Th>
                    <Th color="gray.400">Verify Status</Th>
                    <Th color="gray.400">Edit</Th>
                    <Th color="gray.400">Delete</Th>
                    <Th color="gray.400">Verify</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {p4data.map((item4) => {
                    return (
                      <ProfessionalDevelopmentTableRow4
                        row1={item4.topic}
                        row2={item4.date}
                        row3={item4.resource_person}
                        row4={item4.outcome}
                        row5={item4.credits}
                        row6={item4.verified}
                      />
                    );
                  })}
                </Tbody>
              </Table>
            </CardBody>
          </Collapse>
        </Card>
      </SimpleGrid>
    </Flex>
  );
}

export default ProfessionalDevelopmentData1;
