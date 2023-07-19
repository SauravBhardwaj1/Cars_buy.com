import {

    Flex,
    Image,

    SimpleGrid,
    Text,
  } from "@chakra-ui/react"
  import { useState } from "react"
import { useDispatch } from "react-redux"
  import { useNavigate } from "react-router-dom"

  
  const Navbar = () => {
    // const { isAuth } = useSelector((store) => store.auth)
    const nav = useNavigate()
    const dispatch = useDispatch()
  
    const [current, setCurrent] = useState("deals")
    
    
    return (
      <>
        <SimpleGrid
          bg="white"
          p={2}
          zIndex={5}
          width={"100%"}
          pos="fixed"
          columns={3}
          border={"1px"}
        >
          
          <Image
            onClick={() => nav("/")}
            borderRadius={5}
            width={"100px"}
            src="https://stimg.cardekho.com/images/carexteriorimages/930x620/Toyota/Fortuner/8241/1609921660871/front-left-side-47.jpg"
          />
          <Flex justifyContent={"space-around"} alignItems={"center"}>
            <Text
              style={
                current === "addNew"
                  ? { backgroundColor: "royalblue", color: "white" }
                  : null
              }
              p={2}
              textAlign={"center"}
              borderRadius={5}
              _hover={{ bg: "royalblue", color: "white" }}
              onClick={() => [nav("/Addnew"), setCurrent("addNew")]}
            >
              New Deal
            </Text>
            <Text
              style={
                current === "deals"
                  ? { backgroundColor: "royalblue", color: "white" }
                  : null
              }
              p={2}
              textAlign={"center"}
              borderRadius={5}
              _hover={{ bg: "royalblue", color: "white" }}
              
            >
              All Deals
            </Text>
          </Flex>
  
       
        </SimpleGrid>
      </>
    )
  }
  
  export default Navbar