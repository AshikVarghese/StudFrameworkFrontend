/** @format */

//Class Advisor PD Competitions TableRow
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

function ProfessionalDevelopmentTableRow(props) {
  // Toast var
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { id, row1, row2, row3, row4} = props;
  const textColor = useColorModeValue("gray.700", "white");

  function funedit() {
    let cid = { id };
    let params = new URLSearchParams();
    params.append("edit", "yes");
    params.append("columnid", cid.id);
    params.append("components", document.getElementById("compID").value);
    params.append("date", document.getElementById("DateID").value);
    params.append("remarks", document.getElementById("ReID").value);
    params.append("credits", document.getElementById("creditsID").value);
    axios.post(server_URL + "sdiscovery_edit_delete", params).then((results) => {
      if (results) {
        window.location.reload(false);
      }
    });
  }

  function fundelete() {
    let cid = { id };
    let params = new URLSearchParams();
    params.append("edit", "no");
    params.append("columnid", cid.id);
    axios.post(server_URL + "sdiscovery_edit_delete", params).then((results) => {
      if (results) {
        window.location.reload(false);
      }
    });
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
      <Td>
        <Button
          onClick={onOpen}
          bg="orange.300"
          alignSelf="flex-end"
          width="fit-content"
        >
          Edit
        </Button>
        <Modal size="xl" isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Edit Details</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Tr>
                <Td>
                  <Text m="1em">Components</Text>
                </Td>

                <Td>
                  <Input
                    minWidth="20em"
                    borderRadius="5px"
                    fontSize="sm"
                    type="text"
                    defaultValue={row1}
                    id="compID"
                  />
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <Text m="1em">Date</Text>
                </Td>
                <Td>
                  <Input
                    minWidth="20em"
                    borderRadius="5px"
                    fontSize="sm"
                    type="text"
                    defaultValue={row2}
                    id="DateID"
                  />
                </Td>
              </Tr>

              <Tr>
                <Td>
                  <Text m="1em">Remarks</Text>
                </Td>
                <Td>
                  <Input
                    minWidth="20em"
                    borderRadius="5px"
                    fontSize="sm"
                    type="text"
                    defaultValue={row3}
                    id="ReID"
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
                    id="creditsID"
                  />
                </Td>
              </Tr>
            </ModalBody>

            <ModalFooter>
              <Button
                colorScheme="blue"
                mr={3}
                onClick={() => {
                  toast({
                    title: "Edited Successfully",
                    status: "success",
                    duration: 9000,
                    position: "top",
                    isClosable: true,
                  });
                  funedit();
                  onClose();
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
          onClick={fundelete}
          bg="orange.300"
          alignSelf="flex-end"
          width="fit-content"
        >
          Delete
        </Button>
      </Td>
    </Tr>
  );
}

export default ProfessionalDevelopmentTableRow;
