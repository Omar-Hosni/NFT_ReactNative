import { StatusBar } from 'react-native'
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native'
import React,{useState} from 'react'
import { COLORS } from '../constants';
import HomeHeader from '../components/HomeHeader';
import dummy from '../constants/dummy';
import NFTCard from '../components/NFTCard';
import DetailsBid from '../components/DetailsBid';
import DetailsDesc from '../components/DetailsDesc';
import FocusedStatusBar from '../components/FocusedStatusBar';


const Home = () => {

  const [nftData, setNftData] = useState(dummy.NFTData);

  const handleSearch = (value) =>{
    if(value.length === 0) setNftData(dummy.NFTData)

    const filteredData = dummy.NFTData.filter((item)=> item.name.toLowerCase().includes(value.toLowerCase()));
    
    if(filteredData.length){
      return setNftData(filteredData)
    }else{
      return setNftData(dummy.NFTData)
    }
  }

  return (
    <SafeAreaView style={styles.conatiner}>
      <FocusedStatusBar
      backgroundColor={COLORS.primary}
      />
      
      <View style={{flex:1}}>
        <View style={{zIndex:0}}>
          <FlatList
          data={nftData}
          renderItem={({item})=><NFTCard data={item}/>}
          keyExtractor={(item)=>item.id}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={<HomeHeader onSearch={handleSearch}/>}
          />
        </View>

        <View style={{
          position:"absolute",
          top:0,
          bottom:0,
          right:0,
          left:0,
          zIndex:-1, //to appear behind the NFT
        }}>
          <View style={{height:300, backgroundColor:COLORS.primary}}/>
          <View style={{flex:1, backgroundColor:COLORS.white}}/>

        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  conatiner:{
    flex:1,
    color:'white',
    backgroundColor: COLORS.primary,
    textAlign:'left',
    //alignItems: 'center',
    justifyContent:'center'
  }
})

export default Home;