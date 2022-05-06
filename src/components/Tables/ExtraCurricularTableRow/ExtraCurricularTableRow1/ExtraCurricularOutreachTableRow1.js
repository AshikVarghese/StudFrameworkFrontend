/** @format */

//Class Advisor ExtraCurricular Outreach TableRow

import {
  Button,
  Flex,
  Input,
  Td,
  Text,
  Tr,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useColorModeValue,
  useToast,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";

import { server_URL } from "controller/urls_config";

function ExtraCurricularTableRow(props) {
  
  const { isOpen: isEditOpen , onOpen: onEditOpen, onClose: onEditClose } = useDisclosure()
  const { isOpen: isResultOpen , onOpen: onResultOpen, onClose: onResultClose } = useDisclosure()

  // Toast var
  const toast = useToast();
  const { id, row1, row2, row3, row4, row5 } = props;
  const textColor = useColorModeValue("gray.700", "white");

  function funedit() {
    let cid = { id };
    let params = new URLSearchParams();
    params.append("columnid", cid.id);
    params.append("outreachname", document.getElementById("ECID").value);
    params.append("date", document.getElementById("EPID").value);
    params.append("outcome", document.getElementById("EOID").value);
    params.append("credits", document.getElementById("EPDID").value);
    axios.post(server_URL + "OutreachEdit", params).then((results) => {
      localStorage.setItem("ec_outreach", results.data);
      onResultOpen();
    });
  }

  function fundelete() {
    let cid = { id };
    let params = new URLSearchParams();
    params.append("columnid", cid.id);
    axios.post(server_URL + "OutreachDelete", params).then((results) => {
      localStorage.setItem("ec_outreach", results.data);
      onResultOpen();
    })
  }

  function funverify() {
    let cid = { id };
    let params = new URLSearchParams();
    params.append("columnid", cid.id);
    params.append("verify", "Verified");
    axios.post(server_URL + "OutreachVerify", params).then((results) => {
      localStorage.setItem("ec_outreach", results.data);
      onResultOpen();
    });
  }

  function reload() {
    window.location.reload(false);
  }

  return (
    <Tr>
      <Td minWidth={{ sm: "10em" }}>
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Flex direction="column">
            <Text fontSize="md" color={textColor} minWidth="100%">
              {row1}
            </Text>
          </Flex>
        </Flex>
      </Td>
      <Td minWidth={{ sm: "10em" }}>
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Flex direction="column">{row2}</Flex>
        </Flex>
      </Td>
      <Td minWidth={{ sm: "10em" }}>
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Flex direction="column">{row3}</Flex>
        </Flex>
      </Td>
      <Td minWidth={{ sm: "10em" }}>
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Flex direction="column">{row4}</Flex>
        </Flex>
      </Td>
      <Td minWidth={{ sm: "5em" }}>
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Flex direction="column">{row5}</Flex>
        </Flex>
      </Td>
      <Td>
        <Button
          onClick={onEditOpen}
          bg="orange.300"
          alignSelf="flex-end"
          width="fit-content"
        >
          Edit
        </Button>

        {/* Modal for result display*/}
        <Modal isOpen={isResultOpen} onClose={()=>{onResultClose();reload();}}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Result</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{localStorage.getItem("ec_outreach")}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={()=>{onResultClose();reload();}}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

        {/* Modal for edit*/}
        <Modal size="xl" isOpen={isEditOpen} onClose={onEditClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Edit Details</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Tr>
                <Td>
                  <Text m="1em">Activity</Text>
                </Td>
                <Td>
                  <Input
                    minWidth="20em"
                    borderRadius="5px"
                    fontSize="sm"
                    type="text"
                    defaultValue={row1}
                    id="ECID"
                  />
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <Text m="1em">Date & Year</Text>
                </Td>
                <Td>
                  <Input
                    minWidth="20em"
                    borderRadius="5px"
                    fontSize="sm"
                    type="date"
                    defaultValue={row2}
                    id="EPID"
                  />
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <Text m="1em">Outcome</Text>
                </Td>
                <Td>
                  <Input
                    minWidth="20em"
                    borderRadius="5px"
                    fontSize="sm"
                    type="text"
                    defaultValue={row3}
                    id="EOID"
                  />
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <Text m="1em">Credits</Text>
                </Td>
                <Td>
                  <Input
                    minWidth="20em"
                    borderRadius="5px"
                    fontSize="sm"
                    type="text"
                    defaultValue={row4}
                    id="EPDID"
                  />
                </Td>
              </Tr>
            </ModalBody>

            <ModalFooter>
              <Button
                colorScheme="blue"
                mr={3}
                onClick={() => {
                  funedit();
                  onEditClose();
                }}
              >
                Submit
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Td>
      <Td>
        <Button
          onClick={()=>{
            fundelete();
            onEditClose();
          }}
          bg="orange.300"
          alignSelf="flex-end"
          width="fit-content"
        >
          Delete
        </Button>
      </Td>
      <Td>
        <Button
          onClick={()=>{
            funverify();
            onEditClose();
          }}
          bg="orange.300"
          alignSelf="flex-end"
          width="fit-content"
          disabled={{ row5 }.row5 == "Verified" ? true : false}
        >
          Verify
        </Button>
      </Td>
    </Tr>
  );
}

export default ExtraCurricularTableRow;
