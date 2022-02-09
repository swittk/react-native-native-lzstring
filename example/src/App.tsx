import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { compress, compressToBase64, compressToUTF16, decompress, decompressFromBase64, decompressFromUTF16, multiply } from 'react-native-native-lzstring';
import LZString from 'lz-string';
export default function App() {
  const [result, setResult] = React.useState<number | undefined>();

  React.useEffect(() => {
    multiply(3, 7).then(setResult);
  }, []);
  React.useEffect(()=>{
    const testString = 'hello world test';
    compress(testString).then(async (v)=>{
      const comp = LZString.compress(testString);
      console.log('compress equal ?', v == comp, v, comp);
      const decomp = LZString.decompress(comp);
      const res = await decompress(v);
      console.log('decompress equal ?', decomp == res, res, decomp);
    })
    compressToBase64(testString).then(async (v)=>{
      const comp = LZString.compressToBase64(testString);
      console.log('compressToBase64 equal ?', v == comp, v, comp);
      const decomp = LZString.decompressFromBase64(comp);
      const res = await decompressFromBase64(v);
      console.log('decompressFromBase64 equal ?', decomp == res, res, decomp);
    })
    compressToUTF16(testString).then(async (v)=>{
      const comp = LZString.compressToUTF16(testString);
      console.log('compressToUTF16 equal ?', v == comp, v, comp);
      const decomp = LZString.decompressFromUTF16(comp);
      const res = await decompressFromUTF16(v);
      console.log('decompressFromUTF16 equal ?', decomp == res, res, decomp);
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
