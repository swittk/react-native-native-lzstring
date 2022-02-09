# react-native-native-lzstring

Native LZString for react native

Ported from the excellent [lz-string](https://github.com/pieroxy/lz-string) library by @pieroxy
Along with adapted code from the [C++](https://github.com/andykras/lz-string-cpp) implementation, and partially from [Qt/C++](https://github.com/amiart/qt-lzstring/blob/master/src/lzstring.cpp) implementation.

Working for both iOS and Android (*you need JNI installed for Android).

## Installation

```sh
npm install react-native-native-lzstring
```

## Usage

```js
import { compress, decompress } from "react-native-native-lzstring";

// ...

const resultCompress = await compress("hello world");
const decompressed = await decompress(resultCompress);
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
