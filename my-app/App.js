import * as React from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  return (
      <WebView
          style={styles.container}
          source={{ uri: 'https://develop2--scintillating-khapse-4e80dd.netlify.app/' }}
      />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
