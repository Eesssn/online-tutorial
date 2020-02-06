import { BackHandler, ToastAndroid } from 'react-native';

class BackButtonHandler {
  counter = 0;
  handleBackButtonStart;
  handleBackButtonStop;

  mount(back, navigation) {
    this.addBackButtonListeners(back, navigation);
  }

  addBackButtonListeners(back, navigation) {
    this.handleBackButtonStart = navigation.addListener('didFocus', () =>
      BackHandler.addEventListener('hardwareBackPress', () =>
        this.onBackButtonPressAndroid(back, navigation)
      )
    );

    this.handleBackButtonStop = navigation.addListener('willBlur', () =>
      BackHandler.removeEventListener('hardwareBackPress', () =>
        this.onBackButtonPressAndroid(back, navigation)
      )
    );
  }

  onBackButtonPressAndroid = (back, navigation) => {
    if (back) {
      navigation.goBack();
      return true;
    }
    if (this.counter > 0) {
      BackHandler.exitApp();
    } else {
      setTimeout(() => {
        this.counter = 0;
      }, 3000);
      this.counter++;
      ToastAndroid.show('جهت خروج  دوباره دکمه بازگشت را فشار دهید ', ToastAndroid.SHORT);
      return true;
    }
  };

  unmount() {
    this.removeBackButtonListeners();
  }

  removeBackButtonListeners() {
    this.handleBackButtonStart && this.handleBackButtonStart.remove();
    this.handleBackButtonStop && this.handleBackButtonStop.remove();
  }
}

export default new BackButtonHandler();
