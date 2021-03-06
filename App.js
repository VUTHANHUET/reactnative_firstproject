import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, TouchableOpacity,FlatList, ScrollView } from 'react-native';
import CategoryListItem from './components/CategoryListItem';
export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      categories: [
        { id: 1, name: 'Dụng cụ trượt tuyết' },
        { id: 2, name: 'Quần áo trượt tuyết' },
        { id: 3, name: 'Kính mũ' }
      ]
    }
  };


  render() {
    const { categories } = this.state;
    return (
      <FlatList 
        data = {categories}
        renderItem = {({ item }) => <CategoryListItem category={item}/> }
        keyExtractor = { item  => `${item.id}`}
        contentContainerStyle = {{paddingLeft: 16, paddingRight: 16, paddingTop: 50}}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight:16
  },
});
