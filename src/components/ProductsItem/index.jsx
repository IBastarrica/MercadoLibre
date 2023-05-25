import { Image, Text, TouchableOpacity, View } from "react-native";

import React from "react";
import styles from "./style";

const ProductsItem = ({ item, onSelected }) => {
  return (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => onSelected(item)}
    >
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: "https://www.urbanocotidiano.com/argentina/buenos-aires/guia-comercial/Ciudad-de-Buenos-Aires/San-Nicolas/river-plate-store-lavalle-580-caba.jpg",
          }}
        />
      </View>
      <View style={styles.textContainer}>
        <Text>{item.name}</Text>
        <Text>{item.description}</Text>
        <Text>${item.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductsItem;