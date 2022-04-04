/** @format */

//Official Academic

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
  IconButton,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
  Box,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
// Custom components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CredentialList from "components/Tables/CredentialList";
import { server_URL, URL } from "controller/urls_config";

var Loader = require("react-loader");

function AdminControl() {
  function newCredential() {
    window.location.href = URL + "Admin#/admin4/AdminControlCreate";
  }

  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [Loaded, setLoading] = useState(false);
  let params = new URLSearchParams();

  useEffect(async () => {
    axios.post(server_URL + "AcademicsDataofficial").then((items) => {
      setData(items.data);
      setLoading(true);
    });
  });

  const textColor = useColorModeValue("gray.700", "white");
  const inputBg = useColorModeValue("white", "gray.800");
  const mainorange = useColorModeValue("orange.300", "orange.300");
  const searchIconColor = useColorModeValue("gray.700", "gray.200");

  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
      <SimpleGrid columns={{ sm: 1, md: 3, xl: 3 }} gap={5}>
        <Card mb="1rem">
          <CardBody>
            <Flex
              flexDirection="column"
              align="center"
              justify="center"
              w="100%"
            >
              <Text fontSize="xl" color={textColor} fontWeight="bold" mr="auto">
                Admin controls | Edit credential
              </Text>
            </Flex>
          </CardBody>

          <SimpleGrid columns={{ sm: 1, md: 1, xl: 1 }} gap={5}>
            <Box>
              <CardHeader mt="1em">
                <Text fontSize="lg" color={textColor} fontWeight="semi">
                  Search Email
                </Text>
              </CardHeader>

              <InputGroup
                bg={inputBg}
                mt="1rem"
                borderRadius="15px"
                w="cover"
                _focus={{
                  borderColor: { mainorange },
                }}
                _active={{
                  borderColor: { mainorange },
                }}
              >
                <InputLeftElement
                  children={
                    <IconButton
                      bg="inherit"
                      borderRadius="inherit"
                      _hover="none"
                      _active={{
                        bg: "inherit",
                        transform: "none",
                        borderColor: "transparent",
                      }}
                      _focus={{
                        boxShadow: "none",
                      }}
                      icon={
                        <SearchIcon color={searchIconColor} w="15px" h="15px" />
                      }
                    ></IconButton>
                  }
                />

                <Input
                  onChange={(event) => setSearchTerm(event.target.value)}
                  fontSize="xs"
                  py="11px"
                  placeholder="Type Email id"
                  borderRadius="inherit"
                  value={searchTerm}
                />
              </InputGroup>
            </Box>
          </SimpleGrid>
        </Card>

        <Card mb="1rem">
          <CardBody>
            <Flex
              flexDirection="column"
              align="center"
              justify="center"
              w="100%"
            >
              <Text fontSize="xl" color={textColor} fontWeight="bold" mr="auto">
                Admin controls | Create new credential
              </Text>
            </Flex>
          </CardBody>
          <SimpleGrid columns={{ sm: 1, md: 3, xl: 3 }} gap={5}>
            <Box>
              <Button
                mt="1em"
                minWidth="fit-content"
                onClick={newCredential}
                colorScheme="orange"
                alignSelf="flex-end"
                variant="solid"
              >
                Create new login
              </Button>
            </Box>
          </SimpleGrid>
        </Card>
        <Card mb="1rem">
          <CardBody>
            <Flex
              flexDirection="column"
              align="center"
              justify="center"
              w="100%"
            >
              <Text fontSize="xl" color={textColor} fontWeight="bold" mr="auto">
                Admin controls | Upload new credential
              </Text>
            </Flex>
          </CardBody>
          <SimpleGrid columns={{ sm: 1, md: 3, xl: 3 }} gap={5}>
            <Box>
              <Button
                mt="1em"
                minWidth="fit-content"
                onClick="m"
                colorScheme="orange"
                alignSelf="flex-end"
                variant="solid"
              >
                Bulk upload
              </Button>
            </Box>
          </SimpleGrid>
        </Card>
      </SimpleGrid>
      <Card>
        <CardHeader p="6px 0px 22px 0px">
          <Text fontSize="xl" color={textColor} fontWeight="bold">
            Credentials List
          </Text>
        </CardHeader>
        <CardBody overflowX={{ sm: "scroll" }}>
          <Table variant="simple" color={textColor} id="dataTable">
            <Thead>
              <Tr my=".8rem" pl="0px" color="gray.400">
                <Th color="gray.400">Email</Th>
                <Th color="gray.400">Roll No.</Th>
                <Th color="gray.400">Department</Th>
                <Th color="gray.400">batch</Th>
                <Th color="gray.400">User Type</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data
                .filter((item) => {
                  if (searchTerm == "") {
                    //data2.push(item);
                    return item;
                  } else if (
                    item.sname
                      .toLowerCase()
                      .includes(searchTerm.toLocaleLowerCase()) ||
                    item.roll_no
                      .toLowerCase()
                      .includes(searchTerm.toLocaleLowerCase()) ||
                    item.batch
                      .toLowerCase()
                      .includes(searchTerm.toLocaleLowerCase()) ||
                    item.reg_no
                      .toLowerCase()
                      .includes(searchTerm.toLocaleLowerCase())
                  ) {
                    //data2.push(item);
                    return item;
                  }
                })
                .map((item) => {
                  return (
                    <CredentialList
                      email={item.licet_email}
                      roll={item.roll}
                      dept={item.dept}
                      batch={item.batch}
                      user_type={item.user_tyoe}
                    />
                  );
                })}
            </Tbody>
          </Table>
        </CardBody>
      </Card>
    </Flex>
  );
}

export default AdminControl;
