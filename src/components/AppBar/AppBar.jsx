import { FlatList, Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import Constants from "expo-constants"
import { RemoveModal } from '../RemoveModal/RemoveModal';
import { WishList } from '../wishList/WishList';


export const Appbar = () => {
    const [cart, setCart] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [itemSelected, setItemSelected] = useState(null);
    const [inputValue, setInputValue] = useState();

    const handleAddItem = () => {
        const newItem = {
            id: new Date().getTime(),
            name: inputValue,
        };
        if(!inputValue){
            alert('No se puede agregar un campo vacío')
        }
        else{
            setInputValue('')
            return setCart([...cart, newItem])
        }

    }
    
    const handeInput = (textValue) => setInputValue(textValue)

    const handleModal=(id)=>{
        setModalVisible(true)
        setItemSelected(id);
    }

    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <Text>Dream Car</Text>
                <Image style={styles.icon} source={{ uri: 'https://purepng.com/public/uploads/large/purepng.com-shopping-cartshoppingcarttrolleycarriagebuggysupermarkets-1421526532320cblq3.png' }} />
            </View>
            <View style={styles.pressableContainer}>
                <TextInput onChangeText={handeInput} value={inputValue} style={styles.textInput} placeholder='¿Que le gustaría agregar a su auto?' />
                <Pressable onPress={() => handleAddItem()} style={styles.pressable}>
                    <Text>+</Text>
                </Pressable>
            </View>

            <RemoveModal
            modalVisible={modalVisible}
            cart={cart}
            setCart={setCart}
            setModalVisible={setModalVisible}
            itemSelected={itemSelected}
            />
            <View style={styles.flatListContainer} >
                <WishList cart={cart} handleModal={handleModal}/>
            </View>
        </View>
    )

}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '40%',
        flex: 0,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight + 50
    },
    icon: {
        width: 30,
        height: 30,
        overflow: 'hidden',
        objectFit: 'contain',

    },
    iconContainer: {
        width: '75%',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',

    },
    textInput: {
        borderColor: 'grey',
        borderWidth: 1,
        width: 300,
        height: 40,
        paddingHorizontal: 10,
        borderRadius: 4,
    },
    pressableContainer: {
        width: 200,
        height: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        marginVertical: 20,
    },
    pressable: {
        width: 40,
        height: 40,
        borderWidth: 1,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    flatListContainer: {
        flex: 0,
        width: '100%',
        height: '50%',
        alignItems:'flex-start',
    }
});
