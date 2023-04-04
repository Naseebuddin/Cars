import React from "react";
import { Text, View ,FlatList,Image} from "react-native";
import HeaderTwo from "../../Components/headerTwo";
import imagePath from "../../constant/imagePath";
import eng from "../../constant/lang/eng";
import styles from "../Home/styles";
 const MyCars = ({navigation}) =>{
    const DATA = [
        {
            userId: 1,
            carImage: imagePath.tacoma,
            model: eng.MODELNAME,
            iconeHeart: imagePath.heart,
            likes: eng.LIKES,
            viewAdd: eng.VIEW,
            price: eng.PRICE,
            eyes: imagePath.view,
            sellTag: imagePath.tag ,
        },]
      
return(
  
    <View>
       <HeaderTwo onPressToBack={()=>navigation.goBack()}/>
       <View>

       <FlatList contentContainerStyle={{ paddingBottom: 0 }}
                            scrollEnabled={false}
                            data={DATA}
                            keyExtractor={item => item.userId}
                            renderItem={({ item }) => {
                                return (
                                    <View>
                                        <View style={styles.flatListViewStyle}>
                                            <Image style={styles.flatlistImageStyle} source={item.carImage} />
                                            <View>
                                                <Text style={styles.modelTextStyle}>{item.model}</Text>
                                                <View style={styles.mycarsViewStyle}>
                                                    <Image style={styles.iconeLikeStyle} source={item.iconeHeart} />
                                                    <Text style={styles.likeTextStyle}>{item.likes}</Text>
                                                    <Image style={styles.iconeViewStyle} source={item.eyes} />
                                                    <Text style={styles.likeTextStyle}>{item.viewAdd}</Text>
                                                </View>
                                                <View style={styles.mycarsViewStyle}>
                                                    <Image style={styles.tagStyle} source={item.sellTag} />
                                                    <Text style={styles.priceTage}>{item.price}</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>)
                            }} />
                            <FlatList contentContainerStyle={{ paddingBottom: 1 }}
                            scrollEnabled={false}
                            data={DATA}
                            keyExtractor={item => item.userId}
                            renderItem={({ item }) => {
                                return (
                                    <View>
                                        <View style={styles.flatListViewStyle}>
                                            <Image style={styles.flatlistImageStyle} source={item.carImage} />
                                            <View>
                                                <Text style={styles.modelTextStyle}>{item.model}</Text>
                                                <View style={styles.mycarsViewStyle}>
                                                    <Image style={styles.iconeLikeStyle} source={item.iconeHeart} />
                                                    <Text style={styles.likeTextStyle}>{item.likes}</Text>
                                                    <Image style={styles.iconeViewStyle} source={item.eyes} />
                                                    <Text style={styles.likeTextStyle}>{item.viewAdd}</Text>
                                                </View>
                                                <View style={styles.mycarsViewStyle}>
                                                    <Image style={styles.tagStyle} source={item.sellTag} />
                                                    <Text style={styles.priceTage}>{item.price}</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>)
                            }} />
                            <FlatList contentContainerStyle={{ paddingBottom: 1}}
                            scrollEnabled={false}
                            data={DATA}
                            keyExtractor={item => item.userId}
                            renderItem={({ item }) => {
                                return (
                                    <View>
                                        <View style={styles.flatListViewStyle}>
                                            <Image style={styles.flatlistImageStyle} source={item.carImage} />
                                            <View>
                                                <Text style={styles.modelTextStyle}>{item.model}</Text>
                                                <View style={styles.mycarsViewStyle}>
                                                    <Image style={styles.iconeLikeStyle} source={item.iconeHeart} />
                                                    <Text style={styles.likeTextStyle}>{item.likes}</Text>
                                                    <Image style={styles.iconeViewStyle} source={item.eyes} />
                                                    <Text style={styles.likeTextStyle}>{item.viewAdd}</Text>
                                                </View>
                                                <View style={styles.mycarsViewStyle}>
                                                    <Image style={styles.tagStyle} source={item.sellTag} />
                                                    <Text style={styles.priceTage}>{item.price}</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>)
                            }} />
       </View>
    </View>
)

 }
 export default MyCars;