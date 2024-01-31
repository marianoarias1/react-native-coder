import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import { products } from '../../productsArray'
import { Card } from '../Card/Card'

export const ProductList = () => {
    return (
        <FlatList
            data={products}
            style={styles.flatListContainer}
            renderItem={({ item }) => (
                <View
                    style={styles.cardContainer}
                >
                    <Card name={item.name} url={item.img} desc={item.desc} maxSpeed={item.maxSpeed} zeroToHundred={item.zeroToHundred}/>
                </View>
            )}
        />
    )

}

const styles= StyleSheet.create({
    flatListContainer: {
        flex: 0,
        width: '100%',
        height:'65%',
    },
    cardContainer:{
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 30,
        marginVertical:30,
    }
})