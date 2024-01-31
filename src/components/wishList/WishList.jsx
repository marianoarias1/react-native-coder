import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export const WishList=({cart, handleModal})=> {
    return (
        <FlatList
        style={styles.flatlist}
        data={cart}
        renderItem={({ item }) => (
            <View
                style={styles.listContainer}
            >
                <Text>{item.name}</Text>
                <Pressable onPress={() => handleModal(item.id)}>
                    <Text style={styles.deleteIcon}>🗑</Text>
                </Pressable>

            </View>
        )}
        keyExtractor={(item) => item.id}
    />
    )
}


const styles=StyleSheet.create({
    listContainer: {
        flex: 1,
        width:'100%',
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft:20,
        gap:10,
    },
    flatlist:{
        width:'100%'
    },
    deleteIcon:{ 
        fontSize: 20, 
    },
})