import OTPInputView from '@twotalltotems/react-native-otp-input';
import {SafeContainer} from '../../../components/Container';
import {StyleSheet} from 'react-native';
import {horizontalScale} from '../../../theme/helper';
import {colors} from '../../../theme/colors';

const Otp = () => {
  return (
    <SafeContainer style={{alignItems: 'center'}}>
      <OTPInputView
        style={{width: '80%', height: 200}}
        pinCount={4}
        // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
        // onCodeChanged = {code => { this.setState({code})}}
        autoFocusOnLoad
        codeInputFieldStyle={styles.underlineStyleBase}
        codeInputHighlightStyle={styles.underlineStyleHighLighted}
        onCodeFilled={code => {
          console.log(`Code is ${code}, you are good to go!`);
        }}
      />
    </SafeContainer>
  );
};
export default Otp;
const styles = StyleSheet.create({
  borderStyleBase: {
    width: 30,
    height: 45,
  },

  borderStyleHighLighted: {
    borderColor: colors.black[1],
  },

  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
    color: colors.black[0],
  },

  underlineStyleHighLighted: {
    borderColor: colors.black[1],
  },
});
