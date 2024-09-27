import { Text, View, StyleSheet, Image,TouchableOpacity ,FlatList} from 'react-native';
import React, { useEffect, useState } from 'react';
export default function AssetExample() {
  const [data,setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://66f60a4d436827ced975c265.mockapi.io/Banhang'); 
        const json = await response.json();
        setData(json); 
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  const renderItem = ({ item }) => (
    <View style={{flex:1,flexDirection:'row',justifyContent:'space-between'}}>
      <Image style={{height:50,width:50}} source={{uri:"https://img.lovepik.com/free-png/20210924/lovepik-shopping-cart-icon-png-image_401363020_wh1200.png"}}></Image> 
      <View style={{flex:1}}>
       <Text >{item.name}</Text> 
      </View>
      <View style={{flex:0.3}}>
      <TouchableOpacity style={{flex:1,backgroundColor:'red',borderRadius:20,justifyContent:'center',alignItems:'center'}}>
        <Text style={{color:'white'}}>Chat</Text> 
        </TouchableOpacity>
        </View>
    </View>
  );
  return (
    <View style={styles.container}>
      <View style={{flex:0.2,flexDirection:'row',justifyContent:"space-between",backgroundColor:'#1BA9FF'}}>
        <TouchableOpacity style={{flex:0.1}}>
        <Image style={{height:30,width:20}} source={{uri:"https://cdn0.iconfinder.com/data/icons/glyphpack/26/nav-arrow-left-512.png"}}/>
        </TouchableOpacity>
       <Text >Chat</Text>
        <TouchableOpacity style={{flex:0.2,alignItems:"flex-end"}}>
        <Image style={{height:40,width:40}} source={{uri:"https://img.lovepik.com/free-png/20210924/lovepik-shopping-cart-icon-png-image_401363020_wh1200.png"}}/>
        </TouchableOpacity>
      </View>
      <View style={{flex:0.2}}>
          <Text >Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!</Text>
          
      </View>
      <View style={{flex:1}}>
          <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id} 
        />
      </View>
      <View style={{flex:0.3,flexDirection:'row',justifyContent:"space-evenly",backgroundColor:'#1BA9FF'}}>
        <TouchableOpacity style={{flex:0.2}}>
        <Image style={{height:40,width:40}} source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6bcLlerH8U0ew1SVypV6NCQgKuPHOBFUSvQ&s"}}/>
        </TouchableOpacity>
       <TouchableOpacity style={{flex:0.2}}>
        <Image style={{height:50,width:50}} source={{uri:"https://static.thenounproject.com/png/423483-200.png"}}/>
        </TouchableOpacity>
        <TouchableOpacity style={{flex:0.2,alignItems:"flex-end"}}>
        <Image style={{height:40,width:40}} source={{uri:"https://as2.ftcdn.net/v2/jpg/02/02/93/99/1000_F_202939931_iHgLHxeBiSgNHbPvCSCdEEEtl391oRLM.jpg"}}/>
        </TouchableOpacity>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  
});
