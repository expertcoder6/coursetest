import React, {useState,useEffect} from 'react';
import {Text, View, FlatList,StyleSheet,Image,TouchableOpacity} from 'react-native';
import axios from 'axios';

export default function Courses({navigation}) {
  const [myData, setMyData] = useState();

  const apiCall = () => {
    axios
      .get('https://api.bricketc.com/bricketc-backend-php/get_all_courses.php')
      .then(res => {
        console.log(res.data.body[0].imageUrl,'............response')
        setMyData(res.data.body);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    apiCall();
  }, []);

  return (
    <View style={{flex: 1,backgroundColor:'#fff',paddingVertical:16}}>
        <View style={{marginLeft:16}}>
            <Text style={{color:'#282828',fontSize:20,fontWeight:'bold'}}>All Courses</Text>
        </View>
      <FlatList
        data={myData}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate(
            'Details',
            {
                data:item
            }
            )} >
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Image
                style={{
                  width: 60,
                  height: 60,
                  marginRight: 10,
                  borderRadius: 5,
                }}
                source={{uri: item?.imageUrl}}
              />
            <View style={{width:'80%'}}>
                <Text style={{color:'#000000',fontWeight:'700',fontSize:17}}>{item.name}</Text>
                <Text style={{color:'#1b1b1b',fontSize:16}}>{item.subjectName}</Text>

            </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 16,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'white',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    borderColor: '#DCDCDC',
    shadowColor: '#DCDCDC',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 2,
      width: 1,
    },
  },
});
