/** @format */

//Class Advisor Academic - StudentList

import React, { useState, useEffect } from "react";

import {
  Avatar,
  Badge,
  Button,
  Flex,
  Td,
  Text,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import axios from "axios";

import { URL } from "controller/urls_config";

function CredentialList(props) {
  const { email, roll, batch, dept, user_type } = props;
  const textColor = useColorModeValue("gray.700", "white");
  const bgStatus = useColorModeValue("gray.400", "#1a202c");
  const colorStatus = useColorModeValue("white", "gray.400");

  return (
    <Tr
      cursor=""
      variant="ghost"
      fontSize="md"
      color={textColor}
      fontWeight="bold"
      minWidth="100%"
      onClick={() => {
        localStorage.setItem("generalStudent", roll);
        let params = new URLSearchParams();
        params.append("RollNumber", localStorage.getItem("generalStudent"));
        window.location.href = URL + "Admin#/admin4/AdminCredentialEdit";
      }}
      id={email}
      _hover={{
        Radius: "20px",
        background: "#bbbbbb",
        color: "white",
      }}
    >
      <Td>
        <Flex direction="column">
          <Text fontSize="md" color={textColor} fontWeight="bold">
            {email}
          </Text>
        </Flex>
      </Td>
      <Td>
        <Flex direction="column">
          <Text fontSize="md" color={textColor} fontWeight="bold">
            {roll}
          </Text>
        </Flex>
      </Td>
      <Td>
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {dept}
        </Text>
      </Td>
      <Td>
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {batch}
        </Text>
      </Td>
      <Td>
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {user_type}
        </Text>
      </Td>
    </Tr>
  );
}

export default CredentialList;
