import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {MainStackNavigationProp} from '../navigation/SalesAppOneNavigator';

const HomeScreen = () => {
  const navigation = useNavigation<MainStackNavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Sales Mini App Home Screen</Text>
      <Button
        color="rgba(127, 103, 190, 1)"
        title="Navigate to Sales Mini App Screen"
        onPress={() => {
          navigation.navigate('Gallery');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 40,
  },
});

export default HomeScreen;
