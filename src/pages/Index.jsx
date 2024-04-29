import { Box, Flex, Heading, Text, Image, Button, Link } from "@chakra-ui/react";
import { FaMusic, FaGlobeAmericas, FaHeart } from "react-icons/fa";

const Index = () => {
  return (
    <Box textAlign="center" fontSize="xl">
      <Flex minH="100vh" p={3} flexDirection="column" justifyContent="center" alignItems="center">
        <Image borderRadius="full" boxSize="150px" src="/images/beyonce.jpg" alt="Beyoncé" mb={4} />
        <Heading as="h1" size="2xl" mb={2}>Beyoncé</Heading>
        <Text fontSize="lg" mb={6}>Singer, Songwriter, Actress, and Philanthropist</Text>
        <Flex gap={4} mb={4}>
          <Button leftIcon={<FaMusic />} colorScheme="pink" variant="solid">
            <Link href="/music" style={{ textDecoration: 'none' }}>Music</Link>
          </Button>
          <Button leftIcon={<FaGlobeAmericas />} colorScheme="teal" variant="solid">
            <Link href="/tours" style={{ textDecoration: 'none' }}>Tours</Link>
          </Button>
          <Button leftIcon={<FaHeart />} colorScheme="red" variant="solid">
            <Link href="/philanthropy" style={{ textDecoration: 'none' }}>Philanthropy</Link>
          </Button>
        </Flex>
        <Text fontSize="md">Explore the world of Beyoncé. Discover her latest music, upcoming tours, and philanthropic efforts.</Text>
      </Flex>
    </Box>
  );
};

export default Index;