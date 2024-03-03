import { Box, Flex, Image, VStack } from "@chakra-ui/react";
import {
    
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUser } from "../Redux/users/user.actions";
import axios from "axios";
import { BASE_URL } from "../constants/config";
import './signup.css'
export default function SignupPage(){
    const nav = useNavigate()
  

    const [email,setEmail] =useState("")
    const [password,setPassword] =useState("")
    const [name,setName]=useState("")
   

    const handleSignup =async()=>{
        let data=await axios.post(BASE_URL+"/user/register",{
          name,email,password
        })
        let {message,status}=data.data
        if(status==1){
          alert(message)
          nav('/login')
        }
        else{
          alert(message)
        }
    }
   

    return <Flex className="signup" padding={4} w="100%">

        <Image className="login-image" wi={"50%"} src={"https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg?w=740&t=st=1676630553~exp=1676631153~hmac=6cbdb020ef439ca463660edbc265da0d05f487d529f69f814ee3f5de6e0f54cc"}></Image>
        <VStack w={"50%"}>

            
        <Flex className='form-container'
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign up with notifyNote app</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool <Link color={'orange.400'}>features</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
          <FormControl id="name">
              <FormLabel>Name</FormLabel>
              <Input  value={name} onChange={(e)=>setName(e.target.value)} type="text" />
            </FormControl>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input  value={email} onChange={(e)=>setEmail(e.target.value)} type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                
                
              </Stack>
              <Button
              onClick={handleSignup}
                bg={'orange.400'}
                color={'white'}
                _hover={{ 
                  bg: 'orange.600',
                }}>
                Sign up
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>

        </VStack>
        
    </Flex>
}