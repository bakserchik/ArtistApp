import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://example.com/artist.jpg' }} style={styles.image} />
      <Text style={styles.name}>Вінсент Ван Гог</Text>
      <Text style={styles.bio}>
        Нідерландський художник-постімпресіоніст, відомий своїми експресивними роботами.
      </Text>
      <Button title="Перейти до галереї" onPress={() => navigation.navigate('Gallery')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
  image: { width: 200, height: 200, borderRadius: 100, marginBottom: 20 },
  name: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  bio: { textAlign: 'center', marginBottom: 20 },
});

export default HomeScreen;
