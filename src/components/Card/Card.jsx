import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'

export const Card = ({ name, url, desc, maxSpeed, zeroToHundred }) => {
  return (
    <View style={styles.card}>
      <Image
        style={styles.img}
        source={{ uri: url }}
      />

      <View style={styles.textContainer}>
        <Text style={styles.title}>{name}</Text>

        <ScrollView style={styles.scrollViewStyle} nestedScrollEnabled>
          <Text style={styles.descStyle}>{desc}</Text>
        </ScrollView>

        <View style={styles.speedContainer}>
          <View style={styles.dataContainer}>
            <Image style={styles.tacometerImage} source={{ uri: 'https://w7.pngwing.com/pngs/252/860/png-transparent-logo-tachometer-brand-design-angle-text-telephone-call.png' }} />
            <Text>{`${maxSpeed} km/h`}</Text>
          </View>

          <View style={styles.dataContainer}>
            <Text style={styles.zeroToHundredStyle}>0 - 100</Text>
            <Text>{`${zeroToHundred}s`}</Text>
          </View>

        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  img: {
    width: '90%',
    height: '55%',
    objectFit: 'contain'
  },
  card: {
    flex: 0,
    width: '90%',
    height: 400,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    shadowColor: "#000",
    elevation: 20,
    gap: 5,
  },

  textContainer: {
    flex: 1,
    width: '90%',
    height: 'auto',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    gap: 8,
  },
  title: {
    fontSize: 20
  },
  scrollViewStyle: {
    width: '100%',
    height: 30,
  },
  descStyle: {
    fontSize: 15,
  },
  speedContainer: {
    flex: 1,
    width: '100%',
    height: 'auto',
  },
  dataContainer: {
    flex: 1,
    width: '100%',
    height: 'auto',
    flexDirection: 'row',
    gap: 5,
  },
  tacometerImage: {
    width: 20,
    height: 20,
    objectFit: 'contain',
  },
  zeroToHundredStyle: {
    fontSize: 15,
    color: 'grey'
  }
});
