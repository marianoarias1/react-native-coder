import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Appbar } from '../AppBar/AppBar.jsx'
import {ProductList} from '../Products/ProductList'
export const Main = () => {
    return (
        <View style={styles.main}>
            <Appbar />
            <ProductList/>

        </View>
    )

}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 30,
    },
})