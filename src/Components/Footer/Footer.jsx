import { Divider, Flex, Heading, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';
const Footer = () => {
    return(
        <VStack bg="#475778" h="auto" w="100%" color="#F4F4F4" mt="50px">
            <Flex bg="#303B52" h="5px" w="100%"></Flex>
            <Flex h="auto" w="100%" direction={{sm:"column", md:"row"}} pl={{sm:"5%", md:"0"}} justifyContent={{sm:"flex-start", md:"space-around"}} alignItems="center">
                <Flex flexDirection="column" width={{sm:"90%", md:"20%"}} mb={{sm:"20px", md:"0px"}} alignItems={{sm:"center", md:"flex-start"}}>
                    <Image src='../../../public/img/logo.png' alt='Compranding' w={{sm:"60%", md:"100%"}} maxWidth="300px" />
                    <Text fontSize='md'>Atención al cliente:</Text>
                    <Heading as='h4' size='md' cursor="pointer" _hover={{ color:"#9C64FF" }}>
                        0800 122 0338
                    </Heading>
                    <Heading as='h4' size='md' cursor="pointer" _hover={{ color:"#9C64FF" }}>
                        0810 999 3728
                    </Heading>
                    <Text fontSize='md'>LU-VI de 09:00 a 18:00</Text>
                    <Text fontSize='md'>SA de 9:00 a 13:00</Text>
                    <Text fontSize='md' cursor="pointer" _hover={{ color:"#9C64FF" }}>contacto@compranding.com</Text>
                </Flex>
                <Flex flexDirection="column" width={{sm:"90%", md:"20%"}} mb={{sm:"20px", md:"0px"}} alignItems={{sm:"center", md:"flex-start"}}>
                    <Heading as='h4' mb="15px" size='md'>
                        Ayuda
                    </Heading>
                    <Text fontSize='md' cursor="pointer" _hover={{ color:"#9C64FF" }}>Comprar</Text>
                    <Text fontSize='md' cursor="pointer" _hover={{ color:"#9C64FF" }}>Problemas</Text>
                    <Text fontSize='md' cursor="pointer" _hover={{ color:"#9C64FF" }}>Sucursales</Text>
                    <Text fontSize='md' cursor="pointer" _hover={{ color:"#9C64FF" }}>Contactanos</Text>
                </Flex>
                <Flex flexDirection="column" width={{sm:"90%", md:"20%"}} mb={{sm:"20px", md:"0px"}} alignItems={{sm:"center", md:"flex-start"}}>
                    <Heading as='h4' mb="15px" size='md'>
                        Redes Sociales
                    </Heading>
                    <Text fontSize='md' cursor="pointer" _hover={{ color:"#9C64FF" }}>Twitter</Text>
                    <Text fontSize='md' cursor="pointer" _hover={{ color:"#9C64FF" }}>Facebook</Text>
                    <Text fontSize='md' cursor="pointer" _hover={{ color:"#9C64FF" }}>Instagram</Text>
                    <Text fontSize='md' cursor="pointer" _hover={{ color:"#9C64FF" }}>Youtube</Text>
                </Flex>
                <Flex flexDirection="column" width={{sm:"90%", md:"20%"}} mb={{sm:"20px", md:"0px"}} alignItems={{sm:"center", md:"flex-start"}}>
                    <Heading as='h4' mb="15px" size='md'>
                        Mi Cuenta
                    </Heading>
                    <Text fontSize='md' cursor="pointer" _hover={{ color:"#9C64FF" }}>Resumen</Text>
                    <Text fontSize='md' cursor="pointer" _hover={{ color:"#9C64FF" }}>Favoritos</Text>
                    <Text fontSize='md' cursor="pointer" _hover={{ color:"#9C64FF" }}>Direcciones</Text>
                    <Text fontSize='md' cursor="pointer" _hover={{ color:"#9C64FF" }}>Historial</Text>
                </Flex>
            </Flex>
            <Divider/>
            <Flex w="100%" alignItems="center" justifyContent="center" pb="10px">
                <Text fontSize='sm'>Copyrigth - All rigths reserved © 2024</Text>
            </Flex>
        </VStack>
    )
}

export { Footer }