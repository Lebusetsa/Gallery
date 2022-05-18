import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image,TouchableOpacity} from 'react-native';
import { Ionicons,MaterialCommunityIcons  } from '@expo/vector-icons';
import Display from './Display';
import { useState } from 'react';


export default function App() {
 const[photo, setphoto]=useState(require("./bike.png"));
  function First_photo(){
  
    setphoto(require("./bike.png"));
    
  }
  function second_photo(){
    
    setphoto(require("./car.jpg"));
  }
  
  return (
    <View style={styles.container}>
        
      <View style={styles.header}>
        <TouchableOpacity>
      <Ionicons name="chevron-back" size={30} color="#EC407A" />
      </TouchableOpacity>
<Text style={styles.text}>My Gallery</Text>
      <TouchableOpacity>
      <MaterialCommunityIcons name="phone-rotate-portrait" size={30} color="#EC407A" />
      </TouchableOpacity>
      </View> 
   
<Display photo={photo}/> 

<View style={styles.icons}>
<TouchableOpacity onPress={First_photo}>
<Image style={styles.pics} source={require("./bike.png")}/>
</TouchableOpacity>

<TouchableOpacity onPress={second_photo}>
<Image style={styles.pics} source={require("./car.jpg")}/>
</TouchableOpacity>
      </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    
  
  },
  icons:{
    flexDirection:'row',
    justifyContent:'space-between',
    padding:10,
    width:'60%'
  },
  pics:{
    width:100,
    height:60,
    borderWidth:1,
    borderColor:'brown',
  },

  header:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom:'100%',
    backgroundColor:'#E0F7FA',
    width:'100%',
    height:50,
    padding:5,
    
  },
  text:{
    fontStyle:'italic',
    fontSize:20,
    fontWeight:'bold',
    color:'gray',
    
  }
});
