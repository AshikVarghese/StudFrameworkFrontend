/** @format */

//Class Advisor ExtraCurricularData

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
  Hide,
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import ExtraCurricualarTableRow1 from "components/Tables/ExtraCurricularTableRow/ExtraCurricularTableRow1/ExtraCurricularClubTableRow1";
import ExtraCurricualarTableRow2 from "components/Tables/ExtraCurricularTableRow/ExtraCurricularTableRow1/ExtraCurricularOutreachTableRow1";
import ExtraCurricualarTableRow3 from "components/Tables/ExtraCurricularTableRow/ExtraCurricularTableRow1/ExtraCurricularSportsTableRow1";
import ExtraCurricualarTableRow4 from "components/Tables/ExtraCurricularTableRow/ExtraCurricularTableRow1/ExtraCurricularCulturalsTableRow1";
import { server_URL } from "controller/urls_config";

function ExtraCurricularData() {
  var [drop1, setDrop1] = useState(false);
  var [drop2, setDrop2] = useState(false);
  var [drop3, setDrop3] = useState(false);
  var [drop4, setDrop4] = useState(false);

  const [Cdata, setCdata] = useState([]);
  const [Odata, setOdata] = useState([]); 
  const [Sdata, setSdata] = useState([]);
  const [Fdata, setFdata] = useState([]);

  const Null_message = "NULL";

  const textColor = useColorModeValue("gray.700", "white");
  let params = new URLSearchParams();
  params.append("RollNumber", localStorage.getItem("generalStudent"));
  params.append("StudentDetails", localStorage.getItem("generalStudent"));
  localStorage.setItem("firsttime", "yes");

  useEffect(async () => {
    axios
      .all([
        axios.post(server_URL + "ExtraClubStudentDisplay", params),
        axios.post(server_URL + "ExtraOutreachStudentDisplay", params),
        axios.post(server_URL + "ExtraSportsStudentDisplay", params),
        axios.post(server_URL + "ExtraCulturalStudentDisplay", params),
      ])
      .then(
        axios.spread((data1, data2, data3, data4) => {
          setCdata(data1.data);
          setOdata(data2.data);
          setSdata(data3.data);
          setFdata(data4.data);
        })
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
                setDrop1(true), setDrop2(true), setDrop3(true), setDrop4(true);
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
                  setDrop4(false);
              }}
            >
              Hide All
            </Button>
          </box>
        </Flex>
        <Card>
          <CardHeader>
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              Clubs
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
                    <Th color="gray.400">Name Of The Club</Th>
                    <Th color="gray.400">Activity</Th>
                    <Th color="gray.400">Date & Year</Th>
                    <Th color="gray.400">Outcome</Th>
                    <Th color="gray.400">Credits</Th>
                    <Th color="gray.400">verify Status</Th>
                    <Th color="gray.400">Edit</Th>
                    <Th color="gray.400">Delete</Th>
                    <Th color="gray.400">Verify</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {
                    Cdata.map((items) => {
                      return (
                        <ExtraCurricualarTableRow1
                          id={items.s_no || Null_message}
                          row1={items.club_name || Null_message}
                          row2={items.activity_name || Null_message}
                          row3={items.date || Null_message}
                          row4={items.outcome || Null_message}
                          row5={items.credits || Null_message}
                          row6={items.verified || Null_message}
                        />
                      );
                    })
                   }
                </Tbody>
              </Table>
            </CardBody>
          </Collapse>
        </Card>

        <Card>
          <CardHeader>
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              Outreach Activity
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
                    <Th color="gray.400">Activity</Th>
                    <Th color="gray.400">Date & Year</Th>
                    <Th color="gray.400">Outcome</Th>
                    <Th color="gray.400">Credits</Th>
                    <Th color="gray.400">verify Status</Th>
                    <Th color="gray.400">Edit</Th>
                    <Th color="gray.400">Delete</Th>
                    <Th color="gray.400">Verify</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {
                    Odata.map((item) => {
                      return (
                        <ExtraCurricualarTableRow2
                          id={item.s_no || Null_message}
                          row1={item.activity_name || Null_message}
                          row2={item.date || Null_message}
                          row3={item.outcome || Null_message}
                          row4={item.credits || Null_message}
                          row5={item.verified || Null_message}
                        />
                      );
                    })
                 }
                </Tbody>
              </Table>
            </CardBody>
          </Collapse>
        </Card>

        <Card>
          <CardHeader>
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              Sports Achievements
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
          <Collapse in={drop3}>
            <CardBody mt="1em" overflowX={{ sm: "scroll" }}>
              <Table variant="simple" color={textColor}>
                <Thead>
                  <Tr my=".8rem" pl="0px" color="gray.400">
                    <Th color="gray.400">Name Of The Sport</Th>
                    <Th color="gray.400">Representation</Th>
                    <Th color="gray.400">Position Secured</Th>
                    <Th color="gray.400">Date & Year</Th>
                    <Th color="gray.400">Credits</Th>
                    <Th color="gray.400">Verify Status</Th>
                    <Th color="gray.400">Edit</Th>
                    <Th color="gray.400">Delete</Th>
                    <Th color="gray.400">Verify</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {
                    Sdata.map((row) => {
                      return (
                        <ExtraCurricualarTableRow3
                          id={row.s_no || Null_message}
                          row1={row.sport_name || Null_message}
                          row2={row.representation || Null_message}
                          row3={row.position_secures || Null_message}
                          row4={row.date || Null_message}
                          row5={row.credits || Null_message}
                          row6={row.verified || Null_message}
                        />
                      );
                    })
                 }
                </Tbody>
              </Table>
            </CardBody>
          </Collapse>
        </Card>

        <Card>
          <CardHeader>
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              Culturals
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
            <CardBody overflowX={{ sm: "scroll" }}>
              <Table variant="simple" color={textColor}>
                <Thead>
                  <Tr my=".8rem" pl="0px" color="gray.400">
                    <Th color="gray.400">Name Of The Event</Th>
                    <Th color="gray.400">Date and Year</Th>
                    <Th color="gray.400">Position Secured</Th>
                    <Th color="gray.400">Credits</Th>
                    <Th color="gray.400">Verify Status</Th>
                    <Th color="gray.400">Edit</Th>
                    <Th color="gray.400">Delete</Th>
                    <Th color="gray.400">Verify</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {
                    Fdata.map((row) => {
                      return (
                        <ExtraCurricualarTableRow4
                          id={row.s_no || Null_message}
                          row1={row.event_name || Null_message}
                          row2={row.date || Null_message}
                          row3={row.position_secures || Null_message}
                          row4={row.credits || Null_message}
                          row5={row.verified || Null_message}
                        />
                      );
                    })
                 }
                </Tbody>
              </Table>
            </CardBody>
          </Collapse>
        </Card>
      </SimpleGrid>
    </Flex>
  );
}

export default ExtraCurricularData;
