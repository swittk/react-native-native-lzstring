import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { compress, compressToBase64, compressToUTF16, multiply } from 'react-native-native-lzstring';
import LZString from 'lz-string';
export default function App() {
  const [result, setResult] = React.useState<number | undefined>();

  React.useEffect(() => {
    multiply(3, 7).then(setResult);
  }, []);
  React.useEffect(()=>{
    const testString = 'hello shithead';
    compress(testString).then((v)=>{
      const comp = LZString.compress(testString);
      console.log('compress equal ?', v == comp, v, comp);
    })
    compressToBase64(testString).then((v)=>{
      const comp = LZString.compressToBase64(testString);
      console.log('compressToBase64 equal ?', v == comp, v, comp);
    })
    compressToUTF16(testString).then((v)=>{
      const comp = LZString.compressToUTF16(testString);
      console.log('compressToUTF16 equal ?', v == comp, v, comp);
    })
  })

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
