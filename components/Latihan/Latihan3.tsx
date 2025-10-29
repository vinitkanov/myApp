import { FlatList, Text, View } from "react-native";

export default function Latihan2() {
  return (
    <View>
      <Text>Hello, World!</Text>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductItem name={item.name} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

type ProductItemProps = {
  name: string;
};

const ProductItem = ({ name }: ProductItemProps) => {
  return (
    <View>
      <Text
        style={{
          fontSize: 24,
          padding: 8,
          backgroundColor: "blue",
          margin: 8,
          color: "white",
          borderRadius: 8,
        }}
      >
        {name}
      </Text>
    </View>
  );
};

const products = [
  {
    id: 1,
    name: "product 1",
  },
  {
    id: 2,
    name: "product 2",
  },
  {
    id: 3,
    name: "product 3",
  },
];
