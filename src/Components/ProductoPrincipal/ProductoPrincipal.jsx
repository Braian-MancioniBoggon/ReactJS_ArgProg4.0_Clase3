import React , {useState} from 'react';
import { Badge, Button, Flex, Heading, Image, Text, VStack } from '@chakra-ui/react';
const ProductoPrincipal = ({nombre, precio, descripcion, unidades, sku, img}) => {
    const [cantidad, setCantidad] = useState(1);
    const cantidadMaxima = unidades;
    let sumar = () => {
        if(cantidad < unidades){
            setCantidad(cantidad + 1)
        }
    }
    let restar = () => {
        if(cantidad > 1){
            setCantidad(cantidad - 1)
        }
    }
    return(
        <VStack mt="30px">
            <Flex direction="row" justifyContent="center" flexWrap="wrap" >
                <Flex justifyContent="center" w="30%" minW="450px">
                    <Image src={img} alt={nombre} />
                </Flex>
                <Flex direction="column" justifyContent="center" w="30%" minW="450px">
                    <Text mb="10px" fontSize="25px">{nombre}</Text>
                    <Badge bg="#E9D8FD" color="#44337a" width="fit-content" mb="10px">SKU: {sku}</Badge>
                    <Heading mb="10px">{precio}</Heading>
                    <Text mb="10px">{descripcion}</Text>
                    <Badge bg="#E9D8FD" color="#44337a" width="fit-content" mb="10px">
                        <Flex>
                            <Text mr="3px">{unidades}</Text>
                            <Text> unidades disponibles</Text>
                        </Flex>
                    </Badge>
                    <Text mb="10px" fontSize="18px">Cantidad:</Text>
                    <Flex mb="10px" alignItems="center">
                        <Button onClick={restar} isDisabled={cantidad==1 ? true : false} bg="#E9D8FD" color="#44337a" _hover={{ bg:"#623BE2", color:"white" }}>-</Button>
                        <Text marginInline="15px">{cantidad}</Text>
                        <Button onClick={sumar} isDisabled={cantidad==cantidadMaxima ? true : false} bg="#E9D8FD" color="#44337a" _hover={{ bg:"#623BE2", color:"white" }}>+</Button>
                    </Flex>
                    <Button mb="10px" bg="#44337a" color="white" _hover={{ bg:"#623BE2" }}>Comprar ahora</Button>
                    <Button bg="#44337a" color="white" _hover={{ bg:"#623BE2" }}>Añadir al carrito</Button>
                </Flex>
            </Flex>
        </VStack>
    )
}

export { ProductoPrincipal }