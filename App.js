import { StatusBar } from "expo-status-bar";


import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import flatListData from "./flatListData";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>

        
          <TextInput placeholder="Search for plants" style={styles.textInput}></TextInput>
          <View  style={styles.butHEad}>
          <Image style={styles.imageNgang} source={require('./assets/vector.png')} />
          </View>
        
      </View>

      <View style={styles.body1}>
        <View style={styles.body1Left}>
          <Text style={styles.welcom}>Welcome</Text>
          <Text style={styles.welcom1}>Earch laughts through flowers so let hẻ lauch</Text>
          

        </View>
        <Image style={styles.imageNgangbody} source={require('./assets/remove_bg.png')} />

      </View>



          <View style={styles.body2}>
           <Image style={styles.imgg} source={require('./assets/removebg_flower.png')} />
              <View style={styles.imgg2}>
              <Text style={styles.imgg3}>Plants Pots Shopping</Text>
              <Text style={styles.imgg3}>See the list</Text>
              </View>
          </View>
     
    

    

      <View style={{ marginHorizontal: 30, marginTop: 15 }}>
        
      </View>
      <FlatList
      horizontal={true}
       
        style={{ marginTop: 10 }}
        data={flatListData}
        renderItem={({ item, index }) => {
          return <Item name={item.name} shop={item.shop} img={item.img} />;
        }}
      />
      <StatusBar hidden={true} />
    </SafeAreaView>
  );
}

const Item = ({ name, shop, img }) => {
  return (
    <TouchableOpacity style={styles.item}>
      <View style={{ flexDirection: "column",padding:10,borderRadius:20,}}>
          <View style={{ marginRight: 20,backgroundColor:'green',borderRadius:20, }}>
          <View style={{ marginRight: 20,backgroundColor:'green',borderRadius:20, }}>
          <Image source={{ uri: img }} style={styles.image} />
        </View>
        <View style={{backgroundColor:'white',borderRadius:7}}>
          <Text>{name}</Text>
          <Text style={{ color: "black" }}> {shop}</Text>
    
        </View>
          </View>
        
      </View>

      
    </TouchableOpacity>
  );
};

// style
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    marginTop: StatusBar.currentHeight,
  },
  header: {
    height: 60,
    backgroundColor: "#FFF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    justifyContent:"center",
    
  },
  item: {
    flexDirection: "row",
    marginTop: 5,
    
   
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "rgb(196,196,196)",
   
  },
  image: {
    height: 80,
    width: 80,
  },
 
  textInput:{
    borderRadius:10,
    borderWidth:2,
    width:'70%',
    height:30,
    backgroundColor:'gray'

  },
  butHEad:{
    borderRadius:10,
    borderWidth:2,
   width:50,
    height:30,
    backgroundColor:'green',
    marginHorizontal:20

  },
  imageNgang:{
    width:30,
    height:30
  },
  body1:{
    height:200,
    flexDirection:'row'
  },
  body1Left:{
    flex:1
  },
  imageNgangbody:{
    flex:1
  },
  welcom:{
    color:'red',
    fontSize:30,
    margin:20
  },
  welcom1:{
    marginHorizontal:10
  },
  body2:{
    height:100,
    backgroundColor:'green',
    borderRadius:20,
    marginHorizontal:20,
    flexDirection:'row'
  },
  imgg:{
    flex:2
  },
  imgg2:{
    flex:6
  },
  imgg3:{
    color:'#FFF',
    fontSize:20,
    
  }
  


});
