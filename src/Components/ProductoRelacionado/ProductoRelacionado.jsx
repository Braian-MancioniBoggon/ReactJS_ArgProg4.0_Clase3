import { Button, Card, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
const ProductoRelacionado = ({nombre, precio, img}) => {
    return(
        <Card p="10px" maxW="240px" margin="10px">
            <Flex direction="column" alignItems={{sm:"center", md:"flex-start"} } textAlign={{sm:"center", md:"left"}} >
                <Image src={img} alt={nombre} w="200px"/>
                <Text>{nombre}</Text>
                <Heading mb="5px">{precio}</Heading>
                <Button color="white" bg="#623BE2" _hover={{  bg:"#623BE2" }} _active={{ bg:"#623BE2" }} w="50%">Ver</Button>
            </Flex>
        </Card>
    )
}

export { ProductoRelacionado }