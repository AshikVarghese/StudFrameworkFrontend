/** @format */

//Student AcademicData

import React, { useState, useEffect } from "react";
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
  TableContainer,
  TableCaption,
  Tfoot,
  Stat,
  StatLabel,
  Box,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Select,
  SimpleGrid,
  Td,
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import axios from "axios";
import { server_URL } from "controller/urls_config";

function LicetCredits() {
  const textColor = useColorModeValue("gray.700", "white");
  let params = new URLSearchParams();
  const [data, setdata] = useState([]);
  const [Adata, setAdata] = useState([]);
  params.append("StudentDetails", localStorage.getItem("StudentRoll"));
  useState(async () => {
    axios
      .all([
        axios.post(server_URL + "getColumnName", params),
        axios.post(server_URL + "AcademicsData", params),
      ])
      .then(
        axios.spread((data1, data2) => {
          let filtered_data = data1.data.filter(
            (header) =>
              header.COLUMN_NAME != "id" && header.COLUMN_NAME != "roll_no"
          );

          console.log(data2);
          let student_data = [];
          for (var i = 0; i < data2.data.length; i++) {
            let student = Object.values(data2.data[i]);
            student.splice(0, 2);
            student_data.push(student);
          }
          setdata(filtered_data);
          setAdata(student_data);
        })
      );
  }, []);

  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
      <SimpleGrid columns={{ sm: 1, md: 1, xl: 1 }} gap={5}>
        <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
          <CardHeader p="6px 0px 22px 0px">
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              LICET Credits
            </Text>
          </CardHeader>
          <CardBody overflowX={{ sm: "scroll" }}>
            <TableContainer>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Year</Th>
                    <Th>Course/Activity</Th>
                    <Th>Requirements</Th>
                    <Th>
                      Marks expected <br></br> (out of)
                    </Th>
                    <Th>Credits</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Th>I Year</Th>
                    <Td minWidth="18em">
                      <Tr>
                        <Td paddingLeft={0}>System Discovery</Td>
                      </Tr>
                      <Tr>
                        <Td paddingLeft={0}>Industrial Visit</Td>
                      </Tr>
                      <Tr>
                        <Td paddingLeft={0}>Guest Lecture/ Workshops</Td>
                      </Tr>
                      <Tr>
                        <Td paddingLeft={0}>
                          Professional Integration Courses
                          {/* <br></br> (Skill rack
                          practice, other equivalents) */}
                        </Td>
                      </Tr>
                      <Tr>
                        <Td paddingLeft={0}>
                          Projects (Math-Science)/Competitions
                        </Td>
                      </Tr>
                    </Td>

                    <Td minWidth="18em">
                      <Tr>
                        <Td paddingLeft={0}>1 per semester</Td>
                      </Tr>
                      <Tr>
                        <Td paddingLeft={0}>1 per semester</Td>
                      </Tr>
                      <Tr>
                        <Td paddingLeft={0}>1 per semester</Td>
                      </Tr>
                      <Tr>
                        <Td paddingLeft={0}>2 hrs/week</Td>
                      </Tr>
                      <Tr>
                        <Td paddingLeft={0}>Bonus</Td>
                      </Tr>
                    </Td>

                    <Td minWidth="8em">
                      <Tr>
                        <Td paddingLeft={0}>10</Td>
                      </Tr>
                      <Tr>
                        <Td paddingLeft={0}>10</Td>
                      </Tr>
                      <Tr>
                        <Td paddingLeft={0}>10</Td>
                      </Tr>
                      <Tr>
                        <Td paddingLeft={0}>30</Td>
                      </Tr>
                      <Tr>
                        <Td paddingLeft={0}>_</Td>
                      </Tr>
                    </Td>

                    <Td minWidth="6em">
                      <Tr>
                        <Td paddingLeft={0}>{""}</Td>
                      </Tr>
                      <Tr>
                        <Td paddingLeft={0}>{""}</Td>
                      </Tr>
                      <Tr>
                        <Td paddingLeft={0}>{""}</Td>
                      </Tr>
                      <Tr>
                        <Td paddingLeft={0}>{""}</Td>
                      </Tr>
                      <Tr>
                        <Td paddingLeft={0}>{""}</Td>
                      </Tr>
                    </Td>
                  </Tr>

                  <Tr>
                    <Th>II Year</Th>
                    <Td>
                      <Tr>
                        <Td paddingLeft={0}>System Analysis</Td>
                      </Tr>
                      <Tr>
                        <Td paddingLeft={0}>Industrial Visit</Td>
                      </Tr>
                      <Tr>
                        <Td paddingLeft={0}>Guest Lecture/ Workshops</Td>
                      </Tr>
                      <Tr>
                        <Td paddingLeft={0}>In-plant training</Td>
                      </Tr>
                      <Tr>
                        <Td paddingLeft={0}>Internship</Td>
                      </Tr>
                      <Tr>
                        <Td paddingLeft={0}>
                          Certification Courses/ Online Course (MOOC)
                        </Td>
                      </Tr>
                      <Tr>
                        <Td paddingLeft={0}>Competitions and Hackathons</Td>
                      </Tr>
                      <Tr>
                        <Td paddingLeft={0}>Projects</Td>
                      </Tr>
                    </Td>

                    <Td>
                      <Tr>
                        <Td paddingLeft={0}>1 per semester</Td>
                      </Tr>
                      <Tr>
                        <Td paddingLeft={0}>1 per semester</Td>
                      </Tr>
                      <Tr>
                        <Td paddingLeft={0}>1 per semester</Td>
                      </Tr>
                      <Tr>
                        <Td paddingLeft={0}>1 per year</Td>
                      </Tr>
                      <Tr>
                        <Td paddingLeft={0}>Bonus</Td>
                      </Tr>
                      <Tr>
                        <Td paddingLeft={0}>Bonus</Td>
                      </Tr>
                      <Tr>
                        <Td paddingLeft={0}>Bonus</Td>
                      </Tr>
                      <Tr>
                        <Td paddingLeft={0}>Bonus</Td>
                      </Tr>
                    </Td>

                    <Td>
                      <Tr>
                        <Td paddingLeft={0}>29</Td>
                      </Tr>
                      <Tr>
                        <Td paddingLeft={0}>10</Td>
                      </Tr>
                      <Tr>
                        <Td paddingLeft={0}>10</Td>
                      </Tr>
                      <Tr>
                        <Td paddingLeft={0}>25</Td>
                      </Tr>
                      <Tr>
                        <Td paddingLeft={0}>_</Td>
                      </Tr>
                      <Tr>
                        <Td paddingLeft={0}>_</Td>
                      </Tr>
                      <Tr>
                        <Td paddingLeft={0}>_</Td>
                      </Tr>
                      <Tr>
                        <Td paddingLeft={0}>_</Td>
                      </Tr>
                    </Td>
                  </Tr>

                  <Tr>
                    <Th>III Year</Th>
                    <Td>
                      <Tr>
                        <Td paddingLeft={0}>Mini Project</Td>
                      </Tr>
                      <Tr>
                        <Td paddingLeft={0}>Internship</Td>
                      </Tr>
                      <Tr>
                        <Td paddingLeft={0}>
                          Certification Courses/ Online Course (MOOC)
                        </Td>
                      </Tr>
                      <Tr>
                        <Td paddingLeft={0}>Competitions and Hackathons </Td>
                      </Tr>
                      <Tr>
                        <Td paddingLeft={0}>Soft skills (weekly assessment)</Td>
                      </Tr>
                      <Tr>
                        <Td paddingLeft={0}>
                          Aptitude Training (weekly assessment)
                        </Td>
                      </Tr>
                      <Tr>
                        <Td paddingLeft={0}>
                          Employability Skills
                          {/* <br></br> (AMCAT & Co-Cubes
                          assessments /<br></br>Boot Camp, Weekly Coding
                          Challenge) */}
                        </Td>
                      </Tr>
                    </Td>

                    <Td>
                      <Tr>
                        <Td paddingLeft={0}>1 per semester</Td>
                      </Tr>
                      <Tr>
                        <Td paddingLeft={0}>1 per semester</Td>
                      </Tr>
                      <Tr>
                        <Td paddingLeft={0}>3 per year</Td>
                      </Tr>
                      <Tr>
                        <Td paddingLeft={0}>1 per semester </Td>
                      </Tr>
                      <Tr>
                        <Td paddingLeft={0}>72 hrs</Td>
                      </Tr>
                      <Tr>
                        <Td paddingLeft={0}>72 hrs</Td>
                      </Tr>
                      <Tr>
                        <Td paddingLeft={0}>Bonus</Td>
                      </Tr>
                    </Td>

                    <Td>
                      <Tr>
                        <Td paddingLeft={0}>30</Td>
                      </Tr>
                      <Tr>
                        <Td paddingLeft={0}>50</Td>
                      </Tr>
                      <Tr>
                        <Td paddingLeft={0}>15</Td>
                      </Tr>
                      <Tr>
                        <Td paddingLeft={0}>20</Td>
                      </Tr>
                      <Tr>
                        <Td paddingLeft={0}>20</Td>
                      </Tr>
                      <Tr>
                        <Td paddingLeft={0}>20</Td>
                      </Tr>
                      <Tr>
                        <Td paddingLeft={0}>30</Td>
                      </Tr>
                    </Td>
                  </Tr>
                  <Tr>
                    <Th>IV Year</Th>
                    <Td>
                      <Tr>
                        <Td paddingLeft={0}>Final Project</Td>
                      </Tr>
                      <Tr>
                        <Td paddingLeft={0}>Publications </Td>
                      </Tr>
                    </Td>

                    <Td>
                      <Tr>
                        <Td paddingLeft={0}>1 per semester</Td>
                      </Tr>
                      <Tr>
                        <Td paddingLeft={0}>1 per semester</Td>
                      </Tr>
                    </Td>

                    <Td>
                      <Tr>
                        <Td paddingLeft={0}>60</Td>
                      </Tr>
                      <Tr>
                        <Td paddingLeft={0}>30</Td>
                      </Tr>
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </CardBody>
        </Card>
      </SimpleGrid>
    </Flex>
  );
}

export default LicetCredits;
