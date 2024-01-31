import { Text, View, StyleSheet, Pressable, Modal } from "react-native";

export const RemoveModal = ({
    modalVisible,
    cart,
    setCart,
    setModalVisible,
    itemSelected,
}) => {
    const removeItem = () => {
        const filteredArray = cart.filter((item) => item.id !== itemSelected);
        setCart(filteredArray);
        setModalVisible(false);
    };

    return (
        <Modal  animationType="slide" transparent visible={modalVisible}>
            <View style={styles.modalContainer}>
                <View style={styles.modal}>
                    <Text>Quieres eliminar el producto?</Text>
                    <Pressable style={styles.pressableButton} onPress={() => setModalVisible(false)}>
                        <Text>No</Text>
                    </Pressable>
                    <Pressable style={styles.pressableButton} onPress={removeItem}>
                        <Text>Sí</Text>
                    </Pressable>
                </View>
            </View>

        </Modal>
    );
};


const styles = StyleSheet.create({
    modal: {
        height: 250,
        width:'80%',
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        justifyContent: "space-between",
        shadowColor: "#000",
        shadowOpacity: 0.25,
        elevation: 5,
    },
    modalContainer: { 
        width: '100%',
        height: '100%', 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor:'rgba(43, 43, 43, 0.693)',
    },
    pressableButton:{
        width: 40,
        height: 40,
        borderWidth: 1,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center'
    }

});