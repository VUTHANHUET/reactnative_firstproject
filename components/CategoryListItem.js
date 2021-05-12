import React from 'react'
import {
    Image,
    Text,
    View,
    StyleSheet,
} from 'react-native' 
import SkiImage from '../assets/ski.png'
export default function CategoryListItem(props){
    const { category } = props;
    return (
    <View style={styles.container}>
        <Text style={styles.title}> {category.name} </Text>
        <Image style={styles.categoryImage} source={SkiImage}/>
    </View>
    );
}

const styles = StyleSheet.create ({
    container: {
        alignItems: 'center',
        padding: 16,
        borderRadius: 10,
        backgroundColor: '#FFF',
        shadowColor: '#000',
        shadowOpacity: 0.8,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 0},
        marginBottom: 16,
        elevation:7,
        marginLeft: 3,
        marginRight: 3
    },
    categoryImage: {
        width: 64,
        height: 64,

    },
    title: {
        textTransform: 'uppercase',
        marginBottom: 8,
        fontWeight: '700'
    },
    
});