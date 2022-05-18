import { StyleSheet,Image, View ,Text} from 'react-native'
import React from 'react';


export default function Display({photo}) {
    
   
  return (
    <View style={styles.image}>
      <Image
          style={styles.image}
          source={photo}
          />
  
    </View>
  )
}

const styles = StyleSheet.create({


image:{
    
    width:'100%',
    height:200,
    margin:10,

}
})