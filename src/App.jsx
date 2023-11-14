import { ChakraProvider, Divider, Flex, Heading, Box } from '@chakra-ui/react'
import { Header } from './Components/Header/Header'
import { ProductoPrincipal } from './Components/ProductoPrincipal/ProductoPrincipal'
import { ProductoRelacionado } from './Components/ProductoRelacionado/ProductoRelacionado'
import { Footer } from './Components/Footer/Footer'

function App() {
  const productoPrincipal = {
    "id" : "1",
    "nombre" : "Microsoft Xbox Series X 1TB",
    "precio" : "$991.999",
    "descripcion" : "La consola Xbox Series X es la consola más rápida y potente de la historia. Experimentá la velocidad y el rendimiento de la próxima generación de juegos con Xbox Velocity Architecture, impulsada por un disco SSD personalizado y software integrado.",
    "img" : "img/xboxSerieX.png"
  }
  const productosRelacionados = [
    {
      "id" : "1",
      "nombre" : "Microsoft Xbox Series S White 512GB",
      "precio" : "$519.999",
      "img" : "img/xboxSerieS.png"
    },
    {
      "id" : "2",
      "nombre" : "Sony Playstation 5 Estándar + GOW Ragnarok",
      "precio" : "$991.999",
      "img" : "img/ps5fisico.png"
    },
    {
      "id" : "3",
      "nombre" : "Sony PlayStation 5 PS5 Digital Edition + GOW Ragnarok",
      "precio" : "$869.999",
      "img" : "img/ps5digital.png"
    },
    {
      "id" : "6",
      "nombre" : "Sony PlayStation DualSense Controller",
      "precio" : "$139.999",
      "img" : "img/joyPs.png"
    },
    {
      "id" : "4",
      "nombre" : "Sony PlayStation 4 Slim 1TB + GOW Ragnarok",
      "precio" : "$742.999",
      "img" : "img/ps4.png"
    },
    {
      "id" : "5",
      "nombre" : "Microsoft Xbox Series X|S Controller",
      "precio" : "$139.999",
      "img" : "img/joyXbox.png"
    }
  ]
  return (
    <ChakraProvider>
      <Header />
      <Box position='relative' padding='10' mb="40px" mt="50px">
        <Heading as='h4' size='xl' ml="20px" color="#623BE2" textAlign={{sm:"center", md:"left"}}>Información General</Heading>
        <Divider/>
      </Box>
      <ProductoPrincipal nombre={productoPrincipal.nombre} precio={productoPrincipal.precio} descripcion={productoPrincipal.descripcion} img={productoPrincipal.img}/>
      <Box position='relative' padding='10' mt="40px" mb="20px">
        <Heading as='h4' size='xl' ml="20px" color="#623BE2" textAlign={{sm:"center", md:"left"}}>Productos Relacionados</Heading>
        <Divider/>
      </Box>
      <Flex justifyContent="center" flexWrap="wrap" >
        {productosRelacionados.map(productoRelacionado => <ProductoRelacionado key={productoRelacionado.id} nombre={productoRelacionado.nombre} precio={productoRelacionado.precio} img={productoRelacionado.img} />)}
      </Flex>
      <Footer />
    </ChakraProvider>
  )
}

export default App
