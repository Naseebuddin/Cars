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

const Header = () => {
  return (
    <SafeAreaView>
      <LinearGradient
        style={{ marginTop: moderateVerticalScale(-48) }}
        colors={[colors.ligthOrange, colors.orange]}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}>
        <View style={styles.mainView}>
          <Image source={imagePath.profile} style={styles.imageStyle} />
          <View>
            <Text style={styles.userTextStyle}>{eng.USERNAME}</Text>
            <TouchableOpacity>
              <Text style={styles.viewProfileText}>{eng.VIEWPROFILE}</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Image style={styles.smsIcone} source={imagePath.sms} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.bellIcone} source={imagePath.bell} />
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};
export default Header;
const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    marginTop: moderateScale(52),
    paddingBottom: moderateVerticalScale(10),
  },
  imageStyle: {
    height: verticalScale(48),
    width: scale(42),
    resizeMode: 'contain',
    marginLeft: moderateVerticalScale(14),
  },
  userTextStyle: {
    color: colors.white,
    fontSize: moderateScale(20),
    fontWeight: 'bold',
    marginLeft: moderateScale(14),
    marginTop: moderateVerticalScale(5),
  },
  viewProfileText: {
    marginLeft: moderateScale(14),
    color: colors.white,
    textDecorationLine: 'underline',
    fontSize: moderateScale(13),
    marginTop: moderateVerticalScale(5),
    textDecorationStyle: 'dashed',
    fontWeight: '300',

  },
  smsIcone: {
    height: verticalScale(24),
    width: scale(20),
    marginLeft: moderateScale(36),
    marginTop: verticalScale(5)
  },
  bellIcone: {
    height: verticalScale(20),
    width: scale(17),
    marginTop: verticalScale(5),
    marginLeft: moderateScale(16),
  }
});
