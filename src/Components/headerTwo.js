import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../styles/colors';
import imagePath from '../constant/imagePath';
import eng from '../constant/lang/eng';
import navigationString from '../constant/navigationString';

const HeaderTwo = ({onPressToBack})  => {
  return (
    <SafeAreaView>
      <LinearGradient
        style={{ marginTop: moderateVerticalScale(-48) }}
        colors={[colors.ligthOrange, colors.orange]}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}>
        <View style={styles.mainView}>
            <TouchableOpacity onPress={onPressToBack}>
          <Image source={imagePath.arrow} style={styles.imageStyle} />
          </TouchableOpacity>
          <View>
            <Text style={styles.userTextStyle}>{eng.MYCARSSMALL}</Text>
            <TouchableOpacity>
            <Image style={styles.bellIcone} source={imagePath.clarity} />
          </TouchableOpacity>
            <View style={styles.newAndUsedView}>
            <TouchableOpacity>
              <Text style={styles.newCarsText}>{eng.NEWCARSSMALL}</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.usedCarsText}>{eng.NEWCARSSMALL}</Text>
            </TouchableOpacity>
            </View>
          </View>
         
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};
export default HeaderTwo;
const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    marginTop: moderateScale(52),
    paddingBottom: moderateVerticalScale(10),
  },
  imageStyle: {
    height: verticalScale(24),
    width: scale(24),
    resizeMode: 'contain',
    marginLeft: moderateVerticalScale(16),
  },
  userTextStyle: {
    color: colors.white,
    fontSize: moderateScale(20),
    fontWeight: 'bold',
    marginLeft: moderateScale(8),
    marginTop: moderateVerticalScale(1),
  },
  newCarsText: {
    marginLeft: moderateScale(42),
    color: colors.white,
    fontSize: moderateScale(14),
    marginTop: moderateVerticalScale(18),
    fontWeight: 'bold',
  },
  usedCarsText: {
    marginLeft: moderateScale(78),
    color: colors.white,
    fontSize: moderateScale(14),
    marginTop: moderateVerticalScale(18),
    fontWeight: 'bold',
  },

  bellIcone: {
    height: verticalScale(29),
    width: scale(28),
    marginTop: verticalScale(-22),
    marginLeft: moderateScale(272),
  },
  newAndUsedView:{
    flexDirection:'row'
  }
});
