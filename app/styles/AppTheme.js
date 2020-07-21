import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const AppTheme = {
  colors: {
    primaryColor: 'rgb(210,172,103)',
    gray: 'rgb(244,244,244)',
    darkGray: 'rgb(207,207,207)',
  },
  fonts: {
    heavy: 'AvenirLTStd-Heavy',
    medium: 'AvenirLTStd-Medium',
    light: 'AvenirLTStd-Light',
    book: 'AvenirLTStd-Book',
  },
  metrics: {
    deviceWidth: width,
    deviceHeight: height,
  },
};
export default AppTheme;