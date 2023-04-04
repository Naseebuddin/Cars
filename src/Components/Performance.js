import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';
import colors from '../styles/colors';
const Performance = ({
  subject = '',
  counter,
  iconeOfBox,
  cusbackgroundColor = '',
  onpressClick,
  onpresChangeIcone,
}) => {

  return (
    <View>
      <View style={{...styles.mainView, backgroundColor: cusbackgroundColor}}>
        <Text style={styles.likeTextStyle}>{subject}</Text>
        <View style={styles.likesViewStyle}>
            <TouchableOpacity onPress={onpressClick}>
          <Text style={styles.likesCount}>{counter}</Text>
          </TouchableOpacity>
          <View style={styles.imageView}>
            <TouchableOpacity onPress={onpresChangeIcone}>
              <Image style={styles.iconeOfBoxStyle} source={iconeOfBox} />
         
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
export default Performance;
const styles = StyleSheet.create({
  mainView: {
    height: verticalScale(88),
    width: scale(160),
    borderRadius: moderateScale(11),
    marginRight: 10,
    marginTop: moderateScale(16),
  },
  likeTextStyle: {
    color: colors.drakPink,
    marginLeft: moderateVerticalScale(19),
    marginTop: moderateScale(12),
    fontSize: moderateScale(11),
    lineHeight: moderateScale(24),
    fontWeight: 'bold',
  },
  likesCount: {
    fontSize: moderateScale(24),
    lineHeight: moderateScale(32),
    color: colors.black,
    fontWeight: 'bold',
    marginTop: moderateScale(2),
    marginLeft: moderateVerticalScale(19),
  },
  likesViewStyle: {
    flexDirection: 'row',
  },
  imageView: {
    height: verticalScale(32),
    width: scale(32),
    backgroundColor: colors.white,
    borderRadius: moderateScale(4),
    marginLeft: moderateScale(46),
  },
  iconeOfBoxStyle:{
    height:verticalScale(18),
    width:scale(18),
    alignSelf:'center',
    marginVertical:moderateScale(8)
  }
});
