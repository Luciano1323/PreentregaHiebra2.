// ItemDetail.jsx
import React from 'react';
import { Box, Button, Text } from '@chakra-ui/react';

const ItemDetail = ({ item, onIncrease, onDecrease, onAddToCart, onCloseDetails }) => {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} m="auto">
      <img src={item.imageUrl} alt={item.imageAlt} style={{ width: '100%', height: 'auto' }} />

      <Box p="6" textAlign="left">
        <Text fontSize="lg" fontWeight="semibold" lineHeight="tight" noOfLines={2} mb={2}>
          {item.title}
        </Text>
        {item.description && (
          <Text color="gray.600" fontSize="sm" mb={4}>
            {item.description}
          </Text>
        )}
        <Box display="flex" alignItems="center" mb={4}>
          <Button size="sm" onClick={onDecrease} mr={2} disabled={item.quantity <= 1}>
            -
          </Button>
          <Text fontSize="lg">{item.quantity}</Text>
          <Button size="sm" onClick={onIncrease} ml={2}>
            +
          </Button>
        </Box>
        <Button colorScheme="teal" width="100%" onClick={onAddToCart}>
          Agregar al carrito
        </Button>
      </Box>
    </Box>
  );
};

export default ItemDetail;
