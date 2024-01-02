import { Link as ReactRouterLink, useNavigate } from "react-router-dom";
import { Flex, Box, Link, Icon, Heading, Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { HamburgerIcon, ChevronDownIcon } from "@chakra-ui/icons";
import CartWidget from "./CartWidget";

const NavBar = ({ setFilter }) => {
  const navigate = useNavigate();

  const handleNavItemClick = (filter) => {
    console.log('Setting filter:', filter);

    // Establecer el filtro
    setFilter(filter);

    // Navegar a la URL correspondiente
    navigate(filter === "cafes" ? "/" : `/${filter}`);
   
  };

  return (
    <Box>
      <Flex
        alignItems="center"
        p="4"
        bg="teal.500"
        color="white"
        backgroundColor="black"
      >
        <Box p="2">
          <ReactRouterLink
            to="/cafes"
            fontSize="lg"
            fontWeight="bold"
            display="flex"
            alignItems="center"
          >
            <Icon as={HamburgerIcon} boxSize={6} mr={2} />
            <Heading
              as="h1"
              size="md"
              display="inline-block"
              verticalAlign="middle"
            >
              <ReactRouterLink
                to="/cafes"
                style={{ color: "white", textDecoration: "none" }}
                onClick={() => handleNavItemClick("cafes")}
              >
                Coffe and Chill
              </ReactRouterLink>
            </Heading>
          </ReactRouterLink>
        </Box>
        <Box flex="1" textAlign="center" p="1" paddingRight="20">
        <Menu>
        <MenuButton
          as={Button}
          rightIcon={<ChevronDownIcon />}
          variant="unstyled"
          px="2"
        >
          Inicio
        </MenuButton>
        <MenuList color="white" backgroundColor="black">
          <MenuItem
            backgroundColor="black"
            onClick={() => handleNavItemClick("cafes")}
          >
            <ReactRouterLink to="/">Cafes</ReactRouterLink>
          </MenuItem>
          <MenuItem
            backgroundColor="black"
            onClick={() => handleNavItemClick("tazas")}
          >
            <ReactRouterLink to="/tazas">Tazas</ReactRouterLink>
          </MenuItem>
        </MenuList>
      </Menu>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              variant="unstyled"
            >
              Experiencias
            </MenuButton>
            <MenuList backgroundColor="black">
              <MenuItem
                color="white"
                backgroundColor="black"
                onClick={() => handleNavItemClick("BigBox")}
              >
                <ReactRouterLink to="/BigBox">Big Box</ReactRouterLink>
              </MenuItem>
              <MenuItem
                color="white"
                backgroundColor="black"
                onClick={() => handleNavItemClick("reservaMesa")}
              >
                <ReactRouterLink to="/reservaMesa">
                  Reserva de mesa
                </ReactRouterLink>
              </MenuItem>
            </MenuList>
          </Menu>
<CartWidget itemCount={3} />
        </Box>
      </Flex>
    </Box>
  );
};

export default NavBar;