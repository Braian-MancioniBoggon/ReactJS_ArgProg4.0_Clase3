import { Box, Button, Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Heading, IconButton, Image, Input, InputGroup, InputLeftElement, Menu, MenuButton, MenuItem, MenuList, Stack, VStack, useColorMode, useDisclosure } from '@chakra-ui/react';
import {FaSun, FaMoon, FaUser, FaCartArrowDown, FaChevronDown, FaSearch} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import {ImCross} from 'react-icons/im'
import React from 'react';
const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const esOscuro = colorMode === "dark";
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = React.useState('left')
    return(
        <VStack>
            <Box w="100%" display={{sm:"none", md:"block"}} position="fixed" zIndex="99">
                <Flex w="100%" alignItems="Center" justifyContent="space-between" bg="#623BE2" color="white" h="60px"   p="5">
                    <Flex>
                        <Heading  size="md" fontWeight="semibold" color="cyan.400" display="flex" alignItems="center"   alignContent="center">
                            <Box><Image src='img/logo.png' alt='Compranding' w="100%" /></Box>
                        </Heading>
                        <Menu>
                            <MenuButton as={Button} rightIcon={<FaChevronDown />} color="white" bg="#623BE2" _hover={{  bg:"#623BE2" }} _active={{ bg:"#623BE2" }}>Categorias</MenuButton>
                            <MenuList bg="#623BE2">
                                <MenuItem bg="#623BE2" _hover={{ bg:"#7B5BE7" }}>Consolas</MenuItem>
                                <MenuItem bg="#623BE2" _hover={{ bg:"#7B5BE7" }}>Videojuegos</MenuItem>
                                <MenuItem bg="#623BE2" _hover={{ bg:"#7B5BE7" }}>Accesorios</MenuItem>
                                <MenuItem bg="#623BE2" _hover={{ bg:"#7B5BE7" }}>Pre-venta</MenuItem>
                                <MenuItem bg="#623BE2" _hover={{ bg:"#7B5BE7" }}>Ofertas</MenuItem>
                            </MenuList>
                        </Menu>
                    </Flex>
                    <Box>
                        <InputGroup>
                            <InputLeftElement pointerEvents='none'  color='gray.300' >
                                <FaSearch/>
                            </InputLeftElement>
                            <Input placeholder="Buscar" width={{base:"50px", sm:"100px",md:"250px", lg:"500px",     xl:"700px"}} _active={{borderColor:"white"}} _focus={{borderColor:"white"}}/>
                        </InputGroup>
                    </Box>
                    <Flex>
                        <IconButton  ml="2" isRound='true' icon={<FaUser/>} color="white" bg="#7B5BE7" _hover={{ bg:"#7B5BE7" }}></IconButton>
                        <IconButton  ml="2" isRound='true' icon={<FaCartArrowDown />} color="white" bg="#7B5BE7" _hover={{ bg:"#7B5BE7" }}></IconButton>
                        <IconButton  ml="8" isRound='true' icon={esOscuro ? <FaSun /> : <FaMoon />} onClick={toggleColorMode} color="white" bg="#7B5BE7" _hover={{ bg:"#7B5BE7" }}></IconButton>
                    </Flex>
                </Flex>
            </Box>
            <Box w="100%" display={{sm:"block", md:"none"}} position="fixed" zIndex="99">
                <Flex w="100%" alignItems="Center" justifyContent="space-between" bg="#623BE2" color="white" h="60px"   p={{base:"3", sm:"5"}}>
                    <Button  as={IconButton} icon={<GiHamburgerMenu />} variant='outline'  color="white" bg="#623BE2" _hover={{ bg:"#623BE2" }} _active={{ bg:"#623BE2" }} onClick={onOpen} paddingInline={{base:"4px"}}>
                        Menú
                    </Button>
                    <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
                        <DrawerOverlay />
                        <DrawerContent>
                            <DrawerHeader borderBottomWidth='1px' bg="#623BE2">
                                <InputGroup>
                                    <InputLeftElement pointerEvents='none'  color='gray.300'>
                                        <FaSearch/>
                                    </InputLeftElement>
                                    <Input placeholder="Buscar" width="700" color="white" _active={{borderColor:"white"}} _focus={{borderColor:"white"}}/>
                                </InputGroup>
                            </DrawerHeader>
                            <DrawerBody spacing="30px">
                                <Stack spacing="2" pt="5px">
                                    <Menu>
                                        <MenuButton textAlign="left" _hover={{color:"#7B5BE7"}}>Consolas</MenuButton>
                                        <MenuButton textAlign="left" _hover={{color:"#7B5BE7"}}>Videojuegos</MenuButton>
                                        <MenuButton textAlign="left" _hover={{color:"#7B5BE7"}}>Accesorios</MenuButton>
                                        <MenuButton textAlign="left" _hover={{color:"#7B5BE7"}}>Pre-venta</MenuButton>
                                        <MenuButton textAlign="left" _hover={{color:"#7B5BE7"}}>Ofertas</MenuButton>
                                    </Menu>
                                </Stack>
                            </DrawerBody>
                            <DrawerFooter>
                                <Button  as={IconButton} aria-label='Options' icon= {<ImCross />} variant='outline'  color="white"   bg="#623BE2" _hover={{ bg:"#623BE2" }} _active={{ bg:"#623BE2" }} onClick={onClose}>
                                    Cerrar
                                </Button>
                            </DrawerFooter>
                        </DrawerContent>
                    </Drawer>
                    <Image src='img/logo.png' alt='Compranding' w="40%" maxW="300px"/>
                    <Flex>
                        <IconButton  ml="2" isRound='true' icon={<FaUser/>} color="white" bg="#7B5BE7" _hover={{ bg:"#7B5BE7" }}></IconButton>
                        <IconButton  ml="2" isRound='true' icon={<FaCartArrowDown />} color="white" bg="#7B5BE7" _hover={{ bg:"#7B5BE7" }}></IconButton>
                        <IconButton  ml={{base:"3", sm:"8"}} isRound='true' icon={esOscuro ? <FaSun /> : <FaMoon />} onClick={toggleColorMode} color="white" bg="#7B5BE7" _hover={{ bg:"#7B5BE7" }}></IconButton>
                    </Flex>
                </Flex>
            </Box>
        </VStack>
    )
}

export { Header }