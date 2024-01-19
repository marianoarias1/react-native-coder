import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export const Card = ({name, url}) => {
  return (
    <View style={styles.card}>
        <Image
          style={styles.img}
          source={{uri:url}}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{name}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    img:{
      width: 320,
      height:180,
      overflow:'hidden',
      borderRadius:15,
    },
    
    card:{
      flex:0,
      width: '90%',
      height:300,
      backgroundColor: '#F5F5F5',
      alignItems:'center',
      justifyContent: 'flex-end',
      borderRadius:15,
      shadowColor: "#000",
      elevation: 20,
      gap:5,

    },

    textContainer:{
      flex:0,
      width: '90%',
      height:100,
      alignItems:'flex-start',
      justifyContent: 'flex-start',
    },
    title:{
      fontSize: 20
    },
  });
  