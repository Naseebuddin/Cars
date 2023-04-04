import {StyleSheet} from 'react-native';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';
import colors from '../../styles/colors';
const styles = StyleSheet.create({
    flatListViewStyle:{
        height:verticalScale(164),
        width:scale(318),
        borderRadius:moderateVerticalScale(8),
        borderWidth:.3,
        marginTop:moderateVerticalScale(16),
        marginHorizontal:moderateScale(16),   
        flexDirection:'row'
      },
      flatlistImageStyle:{
        height:verticalScale(78),
        width:scale(78),
        marginLeft:moderateScale(23),
        marginTop:moderateVerticalScale(21),
        borderRadius:moderateScale(8),
        resizeMode:'stretch'
      },
      modelTextStyle:{
        marginTop:moderateVerticalScale(22),
        fontSize:moderateScale(16),
        fontWeight:'bold',
        marginLeft:moderateScale(16)
      },
      mycarsViewStyle: {
        flexDirection: 'row',
      },
      iconeLikeStyle:{
        height:verticalScale(18),
        width:scale(18),
       marginTop:moderateVerticalScale(15),
       marginLeft:moderateScale(19)
      },
      likeTextStyle:{
        marginTop:moderateVerticalScale(17),
        marginLeft:moderateScale(7),
        fontWeight:'300'
      },
      iconeViewStyle:{
        height:verticalScale(18),
        width:scale(18),
       marginTop:moderateVerticalScale(15),
       marginLeft:moderateScale(9)
      },
      tagStyle:{
        height:verticalScale(18),
        width:scale(18),
        marginTop:moderateVerticalScale(28),
       marginLeft:moderateScale(-80)
      },
      priceTage:{
        marginTop:moderateVerticalScale(25),
        marginLeft:moderateScale(11),
        fontSize:moderateScale(20),
        fontWeight:'300'
      }
})