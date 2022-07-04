import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

export default function CourseDetails({route}) {
  const data = route?.params?.data;
  console.log('dkgjd===', data);

  return (
    <View style={{flex: 1, backgroundColor: '#fff',paddingVertical:16}}>
      <View style={styles.card}>
        <View style={{alignItems: 'center', marginVertical: 15,borderBottomWidth:1,marginBottom:16,paddingBottom:10}}>
          <Text style={{color: '#000000', fontWeight: 'bold', fontSize: 20,textAlign:'center'}}>
            {data.name} ({data.idSubject})
          </Text>
        </View>
        <View style={{marginHorizontal: 16, flexDirection: 'row'}}>
          <Image
            style={{
              width: 130,
              height: 100,
              marginRight: 10,
              borderRadius: 5,
            }}
            source={{uri: data.imageUrl}}
            resizeMode="cover"
          />
          <View>
            <Text style={{color: '#282828', fontWeight: 'bold', fontSize: 18,marginBottom:4}}>
              {data.subjectName}
            </Text>
            <Text style={{color: '#1b1b1b', fontWeight: '700',}}>
              Duration: <Text style={{fontWeight:'400'}}>{data.duration}</Text>
            </Text>
            <Text style={{color: '#1b1b1b', fontWeight: '700'}}>
              Session Count: <Text style={{fontWeight:'500'}}>{data.sessionCount}</Text>
            </Text>
            <Text style={{color: '#1b1b1b', fontWeight: '700'}}>
              Milestone Count: <Text style={{fontWeight:'500'}}>{data.milestoneCount}</Text>
            </Text>
            <Text style={{color: '#1b1b1b', fontWeight: '700'}}>
              LiveSession Count: <Text style={{fontWeight:'500'}}>{data.liveSessionCount}</Text>
            </Text>
          </View>
        </View>
        <View style={{marginHorizontal: 16, marginVertical: 10}}>
          <Text style={{color: '#000', fontSize: 16, fontWeight: '400'}}>
            {data.info}
          </Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    padding: 5,
    borderRadius: 10,
    borderColor: '#dcdcdc',
    marginHorizontal: 15,
  },
});
