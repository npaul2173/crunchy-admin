/* eslint-disable */
/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___   
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || | 
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___|
                                                                                                                                                                                                                                                                                                                                       
=========================================================
* Horizon UI - v1.1.0
=========================================================

* Product Page: https://www.horizon-ui.com/
* Copyright 2022 Horizon UI (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import React from "react";
import { NavLink } from "react-router-dom";
// Chakra imports
import {
    Box,
    Button,
    ButtonGroup,
    Spacer,
    Stack,
    Image,
    SimpleGrid,
    Select,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Icon,
    Input,
    InputGroup,
    InputRightElement,
    Text,
    useToast,
    useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import { HSeparator } from "components/separator/Separator";
import DefaultAuth from "layouts/auth/Default";
// Assets
import illustration from "assets/img/auth/auth.png";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineRemoveRedEye, MdArrowDropDown } from "react-icons/md";
import { RiEyeCloseLine } from "react-icons/ri";

function AdminOne() {
    // Chakra color mode
    const textColor = useColorModeValue("navy.700", "white");
    const textColorSecondary = "gray.400";
    const textColorDetails = useColorModeValue("navy.700", "secondaryGray.600");
    const textColorBrand = useColorModeValue("brand.500", "white");
    const brandStars = useColorModeValue("brand.500", "brand.400");
    const googleBg = useColorModeValue("secondaryGray.300", "whiteAlpha.200");
    const googleText = useColorModeValue("navy.700", "white");
    const googleHover = useColorModeValue(
        { bg: "gray.200" },
        { bg: "whiteAlpha.300" }
    );
    const googleActive = useColorModeValue(
        { bg: "secondaryGray.300" },
        { bg: "whiteAlpha.200" }
    );
    const toast = useToast();
    const handleClick = () =>
      toast({
        title: 'Logged In',
        description: "You`ve successfully logged in.",
        status: 'success',
        duration: 9000,
        isClosable: true,
      });

interface MyComponentState {
  fullName: string;
  mobNumber: number;
  contactNum: number;
}

  const [name, setName] = React.useState({fullName : '', mobNumber : '', contactNum : ''});
  const [mail, setmail] = React.useState({email : '',});
  const [select, setSelect] = React.useState({selected : ''});
  
  console.log(name.fullName) 
  console.log(name.mobNumber)
  console.log(name.contactNum)
  console.log(mail.email)
  console.log(select.selected)
    
    return (

        <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
            <SimpleGrid mb='20px' columns={{ sm: 1, md: 2 }} spacing={{ base: '20px', xl: '20px' }}>
                <Flex
                  maxW={{ base: "100%", md: "max-content" }}
                  w='100%'
                  mx={{ base: "auto", lg: "0px" }}
                  me='auto'
                  h='100%'
                  alignItems='start'
                  justifyContent='center'
                  mb={{ base: "30px", md: "60px" }}
                  px={{ base: "25px", md: "0px" }}
                  mt={{ base: "40px", md: "14vh" }}
                  flexDirection='column'>
                  <Box me='auto'>
                    <Heading color={textColor} fontSize='36px' mb='10px'>
                      Partner Login
                    </Heading>
                    <Text
                      mb='36px'
                      ms='4px'
                      color={textColorSecondary}
                      fontWeight='400'
                      fontSize='md'>
                      Enter your credentials!
                    </Text>
                  </Box>
                  <Flex
                    zIndex='2'
                    direction='column'
                    w={{ base: "100%", md: "420px" }}
                    maxW='100%'
                    background='transparent'
                    borderRadius='15px'
                    mx={{ base: "auto", lg: "unset" }}
                    me='auto'
                    mb={{ base: "20px", md: "auto" }}>
                    {/* <Button
                      fontSize='sm'
                      me='0px'
                      mb='26px'
                      py='15px'
                      h='50px'
                      borderRadius='16px'
                      bg={googleBg}
                      color={googleText}
                      fontWeight='500'
                      _hover={googleHover}
                      _active={googleActive}
                      _focus={googleActive}>
                      <Icon as={FcGoogle} w='20px' h='20px' me='10px' />
                      Sign in with Google
                    </Button> */}
                    {/* <Flex align='center' mb='25px'>
                      <HSeparator />
                      <Text color='gray.400' mx='14px'>
                        or
                      </Text>
                      <HSeparator />
                    </Flex> */}
                    <FormControl>
                      <FormLabel
                        display='flex'
                        ms='4px'
                        fontSize='sm'
                        fontWeight='500'
                        color={textColor}
                        mb='8px'>
                        Partner Name<Text color={brandStars}>*</Text>
                      </FormLabel>
                      <Input
                        isRequired={true}
                        variant='admin'
                        fontSize='sm'
                        ms={{ base: "0px", md: "0px" }}
                        type='text'
                        placeholder='John Cox'
                        mb='24px'
                        fontWeight='500'
                        size='lg'
                        value={name.fullName}
                        onChange={(event) => setName({ ...name, fullName: event.target.value })}
                      />
                      <FormLabel
                        display='flex'
                        ms='4px'
                        fontSize='sm'
                        fontWeight='500'
                        color={textColor}
                        mb='8px'>
                        Reg. Mobile Number<Text color={brandStars}>*</Text>
                      </FormLabel>
                      <Input
                        isRequired={true}
                        variant='admin'
                        fontSize='sm'
                        ms={{ base: "0px", md: "0px" }}
                        type='tel'
                        placeholder='123-231-2456'
                        mb='24px'
                        fontWeight='500'
                        size='lg'
                        value={name.mobNumber}
                        onChange={(event) => setName({ ...name, mobNumber: event.target.value })}
                      />
                      <FormLabel
                        display='flex'
                        ms='4px'
                        fontSize='sm'
                        fontWeight='500'
                        color={textColor}
                        mb='8px'>
                        Secondary Contact Number<Text color={brandStars}></Text>
                      </FormLabel>
                      <Input
                        isRequired={false}
                        variant='admin'
                        fontSize='sm'
                        ms={{ base: "0px", md: "0px" }}
                        type='tel'
                        placeholder='123-231-2456'
                        mb='24px'
                        fontWeight='500'
                        size='lg' 
                        value={name.contactNum}
                        onChange={(event) => setName({ ...name, contactNum: event.target.value })}
                      />
                      <FormLabel
                        display='flex'
                        ms='4px'
                        fontSize='sm'
                        fontWeight='500'
                        color={textColor}
                        mb='8px'>
                        Email<Text color={brandStars}>*</Text>
                      </FormLabel>
                      <Input
                        isRequired={true}
                        variant='auth'
                        fontSize='sm'
                        ms={{ base: "0px", md: "0px" }}
                        type='email'
                        placeholder='mail@simmmple.com'
                        mb='24px'
                        fontWeight='500'
                        size='lg'
                        value={mail.email}
                        onChange={(event) => setmail({ ...mail, email: event.target.value })}
                      />
                      <FormLabel
                        ms='4px'
                        fontSize='sm'
                        fontWeight='500'
                        color={textColor}
                        display='flex'>
                        User Type<Text color={brandStars}>*</Text>
                      </FormLabel>
                      <InputGroup size='md'>
                      {/* <Stack spacing={3}> */}
                        <Select 
                            mb='24px'
                            color={textColor}
                            placeholder='Select one' icon={<MdArrowDropDown />} 
                            value={select.selected}
                            onChange={(event) => setSelect({ ...select, selected: event.target.value })}>
                            <option value='option1'>Manager</option>
                            <option value='option2'>Admin</option>
                            
                        </Select>
                      {/* </Stack> */}
                        
                        {/* <InputRightElement display='flex' alignItems='center' mt='4px'>
                          <Icon
                            color={textColorSecondary}
                            _hover={{ cursor: "pointer" }}
                            as={show ? RiEyeCloseLine : MdOutlineRemoveRedEye}
                            onClick={handleClick}
                          />
                        </InputRightElement> */}
                      </InputGroup>
                      {/* <Flex justifyContent='space-between' align='center' mb='24px'>
                        <FormControl display='flex' alignItems='center'>
                          <Checkbox
                            id='remember-login'
                            colorScheme='brandScheme'
                            me='10px'
                          />
                          <FormLabel
                            htmlFor='remember-login'
                            mb='0'
                            fontWeight='normal'
                            color={textColor}
                            fontSize='sm'>
                            Keep me logged in
                          </FormLabel>
                        </FormControl>
                        <NavLink to='/auth/forgot-password'>
                          <Text
                            color={textColorBrand}
                            fontSize='sm'
                            w='124px'
                            fontWeight='500'>
                            Forgot password?
                          </Text>
                        </NavLink>
                      </Flex> */}
                      <Button
                        fontSize='sm'
                        variant='brand'
                        fontWeight='500'
                        w='100%'
                        h='50'
                        mb='24px'
                        onClick={handleClick}
                        >
                        Submit
                      </Button>
                    </FormControl>
                    {/* <Flex
                      flexDirection='column'
                      justifyContent='center'
                      alignItems='start'
                      maxW='100%'
                      mt='0px'>
                      <Text color={textColorDetails} fontWeight='400' fontSize='14px'>
                        Not registered yet?
                        <NavLink to='/auth/sign-up'>
                          <Text
                            color={textColorBrand}
                            as='span'
                            ms='5px'
                            fontWeight='500'>
                            Create an Account
                          </Text>
                        </NavLink>
                      </Text>
                    </Flex> */}
                  </Flex>
                </Flex>
            </SimpleGrid>
        </Box>
    );
}

export default AdminOne;
