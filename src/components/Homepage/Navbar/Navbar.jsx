// import { Box } from "@chakra-ui/react";
// import { Link, useNavigate } from "react-router-dom";
// import profile from '../../../assets/Profile.png'

// import { 
//   Flex,
//   Avatar,
//   Text,
//   Button,
//   Menu,
//   MenuButton,
//   MenuList,
//   MenuItem,
//   MenuDivider,
//   useDisclosure,
//   useColorModeValue,
//   Stack,
//   useColorMode,
//   Center,
// } from '@chakra-ui/react'
// import { MoonIcon, SunIcon } from '@chakra-ui/icons'
// import { useDispatch, useSelector } from "react-redux";
// import { LOGOUT } from "../../../Redux/users/user.types";

// export default function Navbar() {
//   const { colorMode, toggleColorMode } = useColorMode()
//   const { isOpen, onOpen, onClose } = useDisclosure()
//   const dispatch=useDispatch()
//   const {auth,token,loading,error}=useSelector((state)=>state.userReducer)
//   console.log(auth)
//   const nav=useNavigate()
//   return (
//     <>
//       <Box zIndex={1000}  w={"100%"} boxShadow={"rgba(0,0,0,0.16) 0px 3px 6px,rgba(0,0,0,0.23) 0px 3px 6px;"} bg={useColorModeValue('gray.300', 'gray.900')} px={4}>
//         <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
//           <Box fontWeight={"bold"} onClick={()=>{
//             nav("/")
//           }} fontSize={25} cursor={"pointer"}>notifyNote</Box>

//           <Flex alignItems={'center'}>
//             <Stack alignItems={"center"} direction={'row'} spacing={7}>
//             <Button bg={"orange"} onClick={()=>{
//               nav("/")
//             }}>Home</Button>
//             <Button display={auth==true?"block":"none"} bg={"orange"} onClick={()=>{
//               nav("/notes")
//             }}>All Notes</Button>
//             <Button display={auth==true?"none":"block"} bg={"orange"} onClick={()=>{
//               nav("/register")
//             }}>Sign up</Button>
//             <Button display={auth==true?"none":"block"} bg={"orange"} onClick={()=>{
//               nav("/login")
//             }}>Login</Button>
//               <Button bg={"orange"} onClick={toggleColorMode}>
//                 {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
//               </Button>

//               <Menu>
//                 <MenuButton
//                   as={Button}
                  
//                   padding={2}
                  
//                   rounded={'full'}
//                   variant={'link'}
//                   cursor={'pointer'}
//                   minW={0}>
//                   <Avatar
//                     size={'sm'}
//                     src={profile}
//                   />
//                 </MenuButton>
//                 <MenuList alignItems={'center'}>
//                   <br />
//                   <Center>
//                     <Avatar
//                       size={'2xl'}
//                       src={profile}
//                     />
//                   </Center>
//                   <br />
//                   <Center>
//                     <p>Username</p>
//                   </Center>
//                   <br />
//                   <MenuDivider />
//                   <MenuItem>Your Servers</MenuItem>
//                   <MenuItem>Account Settings</MenuItem>
//                   <MenuItem  onClick={()=>{
                   
//                     dispatch({type:LOGOUT})
//                   }}>Logout</MenuItem>
//                 </MenuList>
//               </Menu>
//             </Stack>
//           </Flex>
//         </Flex>
//       </Box>
//     </>
//   )
// }

   
import { Box, Flex, Button, useColorMode, useMediaQuery, IconButton, Stack, Avatar, Menu, MenuButton, MenuList,useColorModeValue, MenuItem, MenuDivider } from '@chakra-ui/react';
import { MoonIcon, SunIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LOGOUT } from '../../../Redux/users/user.types';
import profile from '../../../assets/Profile.png';

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const nav = useNavigate();
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state.userReducer);

  const [isSmallerThan768] = useMediaQuery('(max-width: 768px)');

  const handleNavigation = (path) => {
    nav(path);
  };

  return (
    <Box zIndex={1000} w="100%" boxShadow="rgba(0,0,0,0.16) 0px 3px 6px, rgba(0,0,0,0.23) 0px 3px 6px;" bg={useColorModeValue('gray.300', 'gray.900')} px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box fontWeight="bold" fontSize={25} cursor="pointer" onClick={() => handleNavigation('/')}>notifyNote</Box>

        <Flex alignItems="center">
          {isSmallerThan768 ? (
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon />}
                variant="ghost"
                mr={2}
              />
              <MenuList>
                <MenuItem onClick={() => handleNavigation('/')}>Home</MenuItem>
                {auth && <MenuItem onClick={() => handleNavigation('/notes')}>All Notes</MenuItem>}
                {!auth && <MenuItem onClick={() => handleNavigation('/register')}>Sign Up</MenuItem>}
                {!auth && <MenuItem onClick={() => handleNavigation('/login')}>Login</MenuItem>}
                <MenuDivider />
                <MenuItem onClick={toggleColorMode}>
                  {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                </MenuItem>
              </MenuList>
            </Menu>
          ) : (
            <Stack alignItems="center" direction="row" spacing={7}>
              <Button bg="orange" onClick={() => handleNavigation('/')}>Home</Button>
              {auth && <Button bg="orange" onClick={() => handleNavigation('/notes')}>All Notes</Button>}
              {!auth && <Button bg="orange" onClick={() => handleNavigation('/register')}>Sign Up</Button>}
              {!auth && <Button bg="orange" onClick={() => handleNavigation('/login')}>Login</Button>}
              <Button bg="orange" onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
              <Menu>
                <MenuButton
                  as={Button}
                  padding={2}
                  rounded="full"
                  variant="link"
                  cursor="pointer"
                  minW={0}
                >
                  <Avatar size="sm" src={profile} />
                </MenuButton>
                <MenuList>
                  <Avatar size="2xl" src={profile} />
                  <p>Username</p>
                  <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem onClick={() => dispatch({ type: LOGOUT })}>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          )}
        </Flex>
      </Flex>
    </Box>
  );
}
