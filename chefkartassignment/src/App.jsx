import React from 'react';
 import {
   Table,
   Thead,
   Tbody,
   Tfoot,
   Tr,
   Th,
   Td,
   TableCaption,
   TableContainer,
 } from "@chakra-ui/react";
import './App.css';
import {  HamburgerIcon } from "@chakra-ui/icons";
import Dropdown from './dropdown';
import { Select } from '@chakra-ui/react'

function App() {
  const [data, setData] = React.useState([]);
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    fetch("https://espn-fantasy.onrender.com/chefkart")
      .then((res) => res.json())
    .then((res) => setData(res) )
  }, [])
  
  const handliASC = () => {
    let newdata = [...data].sort((a,b) => {
      return a.first_name.localeCompare(b.first_name);
    })
    setData(() => newdata)
  }
  const handliDSC = () => {
    let newdata = [...data].sort((a, b) => {
      return b.first_name.localeCompare(a.first_name);
    });
    console.log(newdata)
    setData(() => newdata);
  };

  
  return (
    <div className="App">
      
        <Table  variant="striped" size={'md'} w='100%' colorScheme="facebook" gap="5">
          <Thead>
            <Tr textAlign="left" >
              {/* <Th>
                First Name <HamburgerIcon onClick={toggleShow} />
                {show ? <Dropdown /> : ""}
              </Th> */}
              <Th>
                First Name{" "}
                <Dropdown handliASC={handliASC} handliDSC={handliDSC} />
              </Th>
              <Th>Last Name</Th>
              <Th>email</Th>
              <Th>Gender</Th>
              <Th>ip_address</Th>
              <Th>airport_code</Th>
              <Th>time</Th>
              <Th>status</Th>
              <Th>mobile</Th>
              <Th>area</Th>
              <Th>show</Th>
              <Th>edit</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((ele, index) => (
              <Tr
                
                textAlign="left"
                _hover={{ borderColor: "whiteAlpha.200", bgColor: "yellow" }}
              >
                <Td>{ele.first_name}</Td>
                <Td>{ele.last_name}</Td>
                <Td>{ele.email}</Td>
                <Td>{ele.gender}</Td>
                <Td>{ele.ip_address} </Td>
                <Td>{ele["airport code"]}</Td>
                <Td>{ele.time}</Td>
                {/* <Td>{ele.status?"Green":"Red"}</Td> */}
                {ele.status ? (
                  <Td bg="green">true</Td>
                ) : (
                  <Td bg="red">failed</Td>
                )}

                <Td>{ele.mobile}</Td>
                <Td>{ele.area}</Td>
                <Td>{ele.show ? "true" : "false"}</Td>
                <Td>{ele.edit ? "true" : "false"}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      
    </div>
  );
}

export default App;
