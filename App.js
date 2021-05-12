import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import CategoryListItem from './components/CategoryListItem';
export default function App() {
  return (
    <View style={styles.container}>
     <CategoryListItem/>
     <CategoryListItem/>
     <CategoryListItem/>
     <CategoryListItem/>
     <CategoryListItem/>
     <CategoryListItem/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingLeft: 30,
    paddingRight:30
  },
});
