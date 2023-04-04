import React, { useState } from 'react';
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import imagePath from '../../constant/imagePath';
import Header from '../../Components/Header';
import Performance from '../../Components/Performance';
import eng from '../../constant/lang/eng';
import colors from '../../styles/colors';
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';
import navigationString from '../../constant/navigationString';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch } from 'react-redux';
import { AddItemToCart } from '../../redux/actions/actions';
const Home = ({ navigation }, porps) => {

    const [like, setLike] = useState(100)
    const handleClick = () => {
        setLike(like + 1)
    }
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
            sellTag: imagePath.tag,
        },];

        const dispatch = useDispatch();
        const addItem = item =>{
            dispatch(AddItemToCart(item))
        }
    return (
        <View style={styles. mainViewStyle}>
            <ScrollView bounces={false}>
                <View style={{ flex: 1, backgroundColor: colors.white }}>
                    <Header />
                    <View style={styles.counterViewStyle}>
                        <View>
                            <Performance
                                onpressClick={handleClick}
                                counter={like}
                                iconeOfBox={imagePath.heart}
                                cusbackgroundColor={colors.pink}
                                subject={eng.TOTALLIKES}
                            />

                            <Performance
                                counter={eng.LIKECOUNT}
                                subject={eng.TOTALCARSVIEWS}
                                cusbackgroundColor={colors.ligthGreen}
                                iconeOfBox={imagePath.view}
                            />
                        </View>
                        <View>
                            <Performance
                                counter={eng.LIKECOUNT}
                                subject={eng.TOTALFOLLOWERS}
                                cusbackgroundColor={colors.followerColor}
                                iconeOfBox={imagePath.users}
                            />
                            <Performance
                                counter={eng.LIKECOUNT}
                                subject={eng.TOTALVISITER}
                                cusbackgroundColor={colors.sky}
                                iconeOfBox={imagePath.clarity}
                            />
                        </View>
                    </View>
                    <View style={styles.emptyView} />
                    <View style={styles.carDetailsStyles}>
                        <Text style={styles.carManagementTextStyle}>
                            {eng.CRAMANAGEMENT}
                        </Text>
                        <TouchableOpacity onPress={() => navigation.navigate(navigationString.MYCARS)}>
                            <View style={styles.carsInfoView}>
                                <View style={styles.mycarsViewStyle}>
                                    <View>
                                        <Text style={styles.myCarsStyle}>{eng.MYCARS}</Text>
                                        <Text style={styles.numberOfCarsStyle}>{eng.MYCARNO}</Text>
                                    </View>
                                    <View style={styles.imageView}>
                                        <Image
                                            style={styles.iconeOfBoxStyle}
                                            source={imagePath.car}
                                        />
                                    </View>
                                </View>
                                <Text style={styles.lineStyles}>
                                    _______________________________________
                                </Text>
                                <View style={styles.mycarsViewStyle}>
                                    <View>
                                        <Text
                                            style={{
                                                ...styles.myCarsStyle,
                                                marginTop: moderateVerticalScale(13),
                                            }}>
                                            {eng.NEWCARS}
                                        </Text>
                                        <Text
                                            style={{
                                                ...styles.numberOfCarsStyle,
                                                fontSize: moderateScale(20),
                                            }}>
                                            {eng.MYCARNO}
                                        </Text>
                                    </View>
                                    <View style={styles.usedCarViewStyle}>
                                        <Text style={{ ...styles.myCarsStyle, marginTop: 0 }}>
                                            {eng.USEDCARS}
                                        </Text>
                                        <Text
                                            style={{
                                                ...styles.numberOfCarsStyle,
                                                fontSize: moderateScale(20),
                                            }}>
                                            {eng.MYCARNO}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <View>
                            <Text style={styles.expiredTextStyle}>{eng.EXPIREDLISTING}</Text>
                            <FlatList contentContainerStyle={{ paddingBottom: 16 }}
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
                        <FlatList contentContainerStyle={{ paddingBottom: 30 }}
                            scrollEnabled={false}
                            data={DATA}
                            keyExtractor={item => item.userId}
                            renderItem={({ item }) => {
                                return (
                                    <View>
                                        <View style={{ ...styles.flatListViewStyle, marginTop: moderateVerticalScale(0) }}>
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
                                    </View>
                                )
                            }} />
                    </View>
                </View>
            </ScrollView>
            <View >
                <TouchableOpacity onPress={()=>navigation.navigate(navigationString.NOTIFICATION)}>
                    <LinearGradient style={styles.addCarBtn}
                        colors={[colors.ligthOrange, colors.orange]}
                        start={{ x: 0, y: 0.5 }}
                        end={{ x: 1, y: 0.5 }}>
                        <Text style={styles.addCarTextStyle}>{eng.ADDCAR}</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </View>
    );
};
export default Home;
