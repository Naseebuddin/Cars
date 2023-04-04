import React, { useState } from "react";
import { Image, SafeAreaView, Text, View, TouchableOpacity,FlatList } from "react-native";
import imagePath from "../../constant/imagePath";
import styles from "./styles";
import eng from "../../constant/lang/eng";
const Notification = ({ navigation }) => {
    const [shouldShow, setShouldShow] = useState(true);
    const DATA = [
        {
            userId: 1,
            carImage: imagePath.tacoma,
            model: eng.MODELNAME,
        },]
    return (
        <SafeAreaView style={styles.mainViewStyle}>
            <View style={styles.mainViewStyle}>
                <View style={styles.counterViewStyle}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image style={styles.closeStyle} source={imagePath.close} />
                    </TouchableOpacity>
                    <Text style={styles.notifiTextStyle}>{eng.NOTIFICATIONS}</Text>
                </View>
                <View style={styles.counterViewStyle}>
                    <TouchableOpacity onPress={()=>setShouldShow(!shouldShow)}>
                        <Text style={styles.likeandFollowStyle}>{eng.LIKENDFOLLOW}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.alertTextStyle}>{eng.ALERTS}</Text>
                    </TouchableOpacity>

                </View>
                <View style={styles.flatListView}>
                    <View>
                {
                    shouldShow ?(
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
                                            
                                        </View>
                                    </View>
                                </View>)
                        }} />
                        
                        
                    ):null
                }
                 {
                    shouldShow ?(
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
                                            
                                        </View>
                                    </View>
                                </View>)
                        }} />
                        
                        
                    ):null
                }
                 {
                    shouldShow ?(
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
                                            
                                        </View>
                                    </View>
                                </View>)
                        }} />
                        
                        
                    ):null
                }
                 {
                    shouldShow ?(
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
                                            
                                        </View>
                                    </View>
                                </View>)
                        }} />
                        
                        
                    ):null
                }
                 {
                    shouldShow ?(
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
                                            
                                        </View>
                                    </View>
                                </View>)
                        }} />
                        
                        
                    ):null
                }
                 {
                    shouldShow ?(
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
                                            
                                        </View>
                                    </View>
                                </View>)
                        }} />
                        
                        
                    ):null
                }
                 {
                    shouldShow ?(
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
                                            
                                        </View>
                                    </View>
                                </View>)
                        }} />
                        
                        
                    ):null
                }
                
                </View>
                
                </View>
               


            </View>
        </SafeAreaView>
    )

}
export default Notification;



// {
//     shouldShow ?(
//         <FlatList contentContainerStyle={{ paddingBottom: 0 }}
//         scrollEnabled={false}
//         data={DATA}
//         keyExtractor={item => item.userId}
//         renderItem={({ item }) => {
//             return (
//                 <View>
//                     <View style={styles.flatListViewStyle}>
//                         <Image style={styles.flatlistImageStyle} source={item.carImage} />
//                         <View>
//                             <Text style={styles.modelTextStyle}>{item.model}</Text>
                            
//                         </View>
//                     </View>
//                 </View>)
//         }} />
//     ):null
// }



// {shouldShow ? (
// <Text style={styles.notifiTextStyle}>{eng.NOTIFICATIONS}</Text>
// ) : null}
// <Button
// title="Hide/Show Component"
// onPress={() => setShouldShow(!shouldShow)}
// />