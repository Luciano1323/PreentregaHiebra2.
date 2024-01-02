import React, { useEffect, useState } from "react";
import {
  Heading,
  Box,
  Grid,
  GridItem,
  Badge,
  Image,
  Button as ChakraButton,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import TazaDeCafePersonalizada from "./Imagenes/TazaPersonalizada.jpg";
import ExperienciaPara12 from "./Imagenes/ExperienciaPara12.jpg";
import ImagenTazaAzul from "./Imagenes/ImagenTazaAzul.jpg";
import TazaDeCafeBlanca from "./Imagenes/TazaDeCafeBlanca.jpeg";
import SeasideRetreatImage from "./Imagenes/TazaDeCafeExperiencia.webp";
import TazaDeCafeBlancaLargas from "./Imagenes/TazasDeCafeBlancasLargas.jpg";
import { StarIcon } from "@chakra-ui/icons";

const ItemListContainer = ({ greeting, filterValue }) => {
  const [selectedPropertyIndex, setSelectedPropertyIndex] = useState(null);
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        const filteredProducts = filterValue
          ? propertiesData.filter(
              (property) => property.className === filterValue
            )
          : propertiesData;

        setProperties(filteredProducts);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, [filterValue, navigate]);

  const propertiesData = [
    {
      imageUrl: TazaDeCafePersonalizada,
      imageAlt: "Taza de cafe personalizada",
      title: "Taza de cafe para personalizar a tu gusto",
      formattedPrice: "$10",
      reviewCount: 34,
      rating: 4,
      description:
        "Esta es una taza para personalizar a tu gusto y tu forma de ser. Vos no te adaptas a la taza, la taza se adapta a vos.",
      className: "tazas cafes",
    },
    {
      imageUrl: ExperienciaPara12,
      title: "Experiencia para 12",
      formattedPrice: "$100",
      reviewCount: 12,
      rating: 4,
      description:
        "Una experiencia para compartir con quien más querés. Una buena taza de café y una buena charla es el remedio de cada día.",
      className: "BigBox",
    },
    {
      imageUrl: ImagenTazaAzul,
      title: "Taza vintage para comprar",
      formattedPrice: "$80",
      reviewCount: 22,
      rating: 5,
      description:
        "Esta taza vintage es perfecta para los amantes de lo clásico. Disfruta de tu café con estilo.",
      className: "tazas",
    },
    {
      imageUrl: TazaDeCafeBlanca,
      title: "Taza blanca minimalista",
      formattedPrice: "$80",
      reviewCount: 18,
      rating: 4,
      description:
        "La simplicidad en su máxima expresión. Esta taza blanca minimalista es ideal para los amantes de la elegancia.",
      className: "tazas",
    },
    {
      imageUrl: SeasideRetreatImage,
      title: "Experiencia regalo",
      formattedPrice: "$200",
      reviewCount: 30,
      rating: 5,
      description:
        "Regala una experiencia para dos única con esta opción que incluye café, paisajes y momentos inolvidables.",
      className: "BigBox",
    },
    {
      imageUrl: TazaDeCafeBlancaLargas,
      title: "Tazas para pareja",
      formattedPrice: "$130",
      reviewCount: 25,
      rating: 4,
      description:
        "Comparte tu amor por el café con estas tazas diseñadas especialmente para parejas. ¡Perfectas para disfrutar juntos!",
      className: "tazas",
    },
  ];

  const filteredProperties = properties.filter((property) => {
    if (filterValue) {
      if (filterValue === "tazas") {
        return property.className === "tazas";
      } else if (filterValue === "BigBox") {
        return property.className === "BigBox";
      } else {
        return false;
      }
    } else {
      return true;
    }
  });

  const AirbnbCard = ({ property, onClick, showDetails }) => {
    const { imageUrl, imageAlt, title, reviewCount, rating } = property;
    const [quantity, setQuantity] = useState(1);

    const handleDecrease = () => {
      setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
    };

    const handleIncrease = () => {
      setQuantity((prevQuantity) => prevQuantity + 1);
    };

    const handleAddToCart = () => {
      console.log(`Añadir ${quantity} ${title} al carrito`);
    };

    return (
      <Box
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        p={4}
        m="auto"
        cursor="pointer"
        onClick={onClick}
      >
        <Image src={imageUrl} alt={imageAlt} />

        <Box p="6" textAlign="left">
          <Box display="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme="teal">
              New
            </Badge>
          </Box>

          <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" noOfLines={1}>
            {title}
          </Box>

          {showDetails && (
            <>
              <Box display="flex" alignItems="center">
                {Array(5)
                  .fill("")
                  .map((_, i) => (
                    <StarIcon key={i} color={i < rating ? "teal.500" : "gray.300"} />
                  ))}
                <Box as="span" ml="2" color="gray.600" fontSize="sm">
                  {reviewCount} reviews
                </Box>
              </Box>

              <Box mt={4} textAlign="center">
                <Box display="flex" alignItems="center">
                  <ChakraButton
                    size="sm"
                    onClick={handleDecrease}
                    mr={2}
                    disabled={quantity <= 1}
                  >
                    -
                  </ChakraButton>
                  <Text fontSize="lg">{quantity}</Text>
                  <ChakraButton size="sm" onClick={handleIncrease} ml={2}>
                    +
                  </ChakraButton>
                </Box>
                <ChakraButton
                  mt={2}
                  onClick={handleAddToCart}
                  colorScheme="teal"
                  width="100%"
                >
                  Agregar al carrito de compras
                </ChakraButton>
              </Box>
            </>
          )}
        </Box>
      </Box>
    );
  };

  return (
    <Box p={4} bg="#2C241E" color="white" textAlign="center">
      <Heading as="h1" mb={4} fontSize="2xl" color="#F5D0A9" padding="10px">
        {greeting}
      </Heading>
      {loading ? (
        <p>Cargando productos...</p>
      ) : (
        <>
          <Grid
            templateColumns="repeat(3, 1fr)"
            gap={4}
            autoRows="minmax(200px, auto)"
          >
            {filteredProperties.map((property, index) => (
              <GridItem
                key={index}
                onClick={() => setSelectedPropertyIndex(index)}
              >
                <AirbnbCard
                  key={index}
                  property={property}
                  onClick={() => setSelectedPropertyIndex(index)}
                  showDetails={selectedPropertyIndex === index}
                />
              </GridItem>
            ))}
          </Grid>
          {selectedPropertyIndex !== null && (
            <ItemDetail
              item={properties[selectedPropertyIndex]}
              onCloseDetails={() => setSelectedPropertyIndex(null)}
              onAddToCart={(count) =>
                console.log(
                  `Añadir ${count} ${properties[selectedPropertyIndex].title} al carrito`
                )
              }
            />
          )}
        </>
      )}
    </Box>
  );
};

export default ItemListContainer;
