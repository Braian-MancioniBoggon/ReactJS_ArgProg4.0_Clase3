import React from 'react';
import { Button, Flex, Heading, Image, Text, VStack } from '@chakra-ui/react';
const ProductoPrincipal = ({nombre, precio, descripcion, img}) => {
    return(
        <VStack mt="30px">
            <Flex direction="row" justifyContent="center" flexWrap="wrap" >
                <Flex justifyContent="center" w="30%" minW="450px">
                    <Image src={img} alt={nombre} />
                </Flex>
                <Flex direction="column" justifyContent="center" w="30%" minW="450px">
                    <Text mb="10px" fontSize="25px">{nombre}</Text>
                    <Heading mb="10px">{precio}</Heading>
                    <Text mb="10px">{descripcion}</Text>
                    <Button bg="#623BE2" color="white" _hover={{ bg:"#7B5BE7" }}>Añadir al carrito</Button>
                </Flex>
            </Flex>
        </VStack>
    )
}

export { ProductoPrincipal }