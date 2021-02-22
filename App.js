import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,ScrollView,Image,Pressable,ActivityIndicator } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.container2}> 
          <Text style={styles.stylingText}>  
            working on your app!
          </Text>
          <Text style={styles.stylingText}> 
            working on your app!
          </Text>
          <Text style={styles.stylingText}>
            working on your app
          </Text>
          <StatusBar style="auto"/>
          <Image source={require("./img/konexio-logo_1.png")} 
	    style={{ width: 900, height: 200 }} />
          <Image
        source={{ uri: "https://www.konexio.eu/uploads/1/2/0/2/120245745/konexio-logo_1.png" }}
        style={{ width: 100, height: 100 }} />
          <Pressable
            onPress={() => {
            alert('pressed')
            }}>
          </Pressable>
          <ActivityIndicator size="large" color="#0000ff" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  container2: {
    backgroundColor: 'white',
    alignItems: 'center',
   
    // justifyContent: 'center',
  },
  stylingText:{
    marginVertical: 80,
    fontSize:30,
    fontWeight:'bold',
  }
});
