import { StyleSheet } from 'react-native';
import {
    moderateScale,
    moderateVerticalScale,
    scale,
    verticalScale,
} from 'react-native-size-matters';
import colors from '../../styles/colors';
const styles = StyleSheet.create({
    mainViewStyle: {
        flex: 1
    },
    counterViewStyle: {
        flexDirection: 'row',
    },
    flatListView:{
        flexDirection:'row',
        marginTop:moderateVerticalScale(16),
    },
    closeStyle: {
        height: verticalScale(24),
        width: scale(25),
        resizeMode: 'contain',
        marginLeft: moderateVerticalScale(20),
      },
      notifiTextStyle:{
        fontSize:moderateScale(16),
        color:colors.black,
        marginLeft:moderateScale(7),
        marginTop:moderateVerticalScale(3)
      },
      likeandFollowStyle:{
        fontSize:moderateScale(14),
        color:colors.black,
        marginLeft:moderateScale(48),
        marginTop:moderateVerticalScale(18),
        fontWeight:'bold'
      },
      alertTextStyle:{
        fontSize:moderateScale(14),
        color:colors.black,
        marginLeft:moderateScale(122),
        marginTop:moderateVerticalScale(18),
        fontWeight:'bold'
      },


      flatListViewStyle:{
        height:verticalScale(70),
        width:scale(320),
      borderBottomWidth:.2,
        flexDirection:'row',
        marginHorizontal:moderateScale(16)
      },
      flatlistImageStyle:{
        height:verticalScale(40),
        width:scale(40),
        marginLeft:moderateScale(2),
        marginTop:moderateVerticalScale(21),
        borderRadius:moderateScale(8),
        resizeMode:'stretch'
      },
      modelTextStyle:{
        marginTop:moderateVerticalScale(22),
        fontSize:moderateScale(16),
        marginLeft:moderateScale(16)
      },
     
})
export default styles;