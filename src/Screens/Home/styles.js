import {StyleSheet} from 'react-native';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';
import colors from '../../styles/colors';
const styles = StyleSheet.create({
  mainViewStyle: {
    flex:1
  },
  counterViewStyle: {
    flexDirection: 'row',
    marginHorizontal: moderateScale(12),
    marginTop: verticalScale(8),
    marginBottom: moderateScale(22),
  },
  emptyView: {
    height: verticalScale(8),
    backgroundColor: colors.silver,
    width: scale(376),
  },
  carDetailsStyles: {
    marginTop: moderateScale(24),
  },
  carManagementTextStyle: {
    fontSize: moderateScale(24),
    lineHeight: moderateScale(32),
    fontWeight: 'bold',
    color: colors.black,
    marginHorizontal: moderateVerticalScale(16),
  },
  carsInfoView: {
    marginTop: moderateVerticalScale(16),
    height: verticalScale(172),
    width: scale(320),
    backgroundColor: colors.white,
    borderRadius: moderateScale(11),
    borderWidth: 0.4,
    borderTopColor: colors.green,
    borderTopWidth: 3,
    marginHorizontal: moderateScale(16),
  },
  mycarsViewStyle: {
    flexDirection: 'row',
  },
  iconeOfBoxStyle: {
    height: verticalScale(19),
    width: scale(40),
    alignSelf: 'center',
    marginVertical: moderateScale(8),
    marginVertical: moderateVerticalScale(24),
    marginHorizontal: moderateScale(12),
    borderRadius: moderateScale(8),
  },
  imageView: {
    height: verticalScale(64),
    width: scale(64),
    backgroundColor: colors.white,
    borderRadius: moderateScale(8),
    marginLeft: moderateScale(180),
    backgroundColor: colors.boxColor,
    marginTop: moderateVerticalScale(20),
    marginRight: moderateScale(24),
  },
  myCarsStyle: {
    fontSize: 12,
    fontWeight: '300',
    marginTop: moderateVerticalScale(22),
    marginLeft: moderateScale(24),
  },
  numberOfCarsStyle: {
    fontSize: moderateScale(24),
    lineHeight: moderateScale(32),
    color: colors.black,
    fontWeight: 'bold',
    marginTop: moderateScale(4),
    marginLeft: moderateVerticalScale(24),
  },
  lineStyles:{
    marginHorizontal:moderateScale(24),
    color:colors.whiteLineColor,
    marginTop:moderateVerticalScale(12)
  },
  usedCarViewStyle:{
    marginLeft:moderateScale(80),
    borderLeftWidth:1,
    marginTop:moderateVerticalScale(13),
    paddingLeft:moderateScale(27)
  },
  expiredTextStyle:{
    fontSize: moderateScale(24),
    lineHeight: moderateScale(32),
    color: colors.black,
    fontWeight: 'bold',
    marginTop: moderateScale(22),
    marginLeft: moderateVerticalScale(24),
  },
  flatlistImageStyle:{
    height:verticalScale(78),
    width:scale(78),
    marginLeft:moderateScale(23),
    marginTop:moderateVerticalScale(21),
    borderRadius:moderateScale(8),
    resizeMode:'stretch'
  },
  flatListViewStyle:{
    height:verticalScale(164),
    width:scale(318),
    borderRadius:moderateVerticalScale(8),
    borderWidth:.3,
    marginTop:moderateVerticalScale(16),
    marginHorizontal:moderateScale(16),   
    flexDirection:'row'
  },
  modelTextStyle:{
    marginTop:moderateVerticalScale(22),
    fontSize:moderateScale(16),
    fontWeight:'bold',
    marginLeft:moderateScale(16)
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
  },
  addCarBtn:{
    width:scale(112),
    height:verticalScale(40),
    borderRadius:moderateScale(20),
    marginTop:moderateVerticalScale(-65),
    marginLeft:moderateScale(240)
   },
   addCarTextStyle:{
    alignSelf: 'center',
     fontSize: 14,
     marginTop: moderateScale(15),
      fontWeight: '500', 
      color: colors.white 
   }
});
export default styles;
