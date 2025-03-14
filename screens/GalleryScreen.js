import React from 'react';
import { View, FlatList, Image, Text, StyleSheet } from 'react-native';

const paintings = [
  { id: '1', title: 'Зоряна ніч', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/640px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg' },
  { id: '2', title: 'Соняшники', image: 'https://cdn.vogue.ua/i/original/media/image/66c/9ac/9f7/66c9ac9f72112.jpg.webp' },
];

const GalleryScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={paintings}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  item: { marginBottom: 20, alignItems: 'center' },
  image: { width: 200, height: 200, borderRadius: 10 },
  title: { marginTop: 10, fontSize: 18 },
});

export default GalleryScreen;
