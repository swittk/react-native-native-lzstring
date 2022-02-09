import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-native-lzstring' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n';

const NativeLzstring = NativeModules.NativeLzstring
  ? NativeModules.NativeLzstring
  : new Proxy(
    {},
    {
      get() {
        throw new Error(LINKING_ERROR);
      },
    }
  );

export function multiply(a: number, b: number): Promise<number> {
  return NativeLzstring.multiply(a, b);
}
export function compress(input: string): Promise<string> {
  return NativeLzstring.compress(input);
}
export function decompress(input: string): Promise<string> {
  return NativeLzstring.decompress(input);
}
export function compressToUTF16(input: string): Promise<string> {
  return NativeLzstring.compressToUTF16(input);
}
export function decompressFromUTF16(input: string): Promise<string> {
  return NativeLzstring.decompressFromUTF16(input);
}
export function compressToBase64(input: string): Promise<string> {
  return NativeLzstring.compressToBase64(input);
}
export function decompressFromBase64(input: string): Promise<string> {
  return NativeLzstring.decompressFromBase64(input);
}