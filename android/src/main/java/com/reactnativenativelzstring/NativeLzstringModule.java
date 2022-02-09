package com.reactnativenativelzstring;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.module.annotations.ReactModule;

@ReactModule(name = NativeLzstringModule.NAME)
public class NativeLzstringModule extends ReactContextBaseJavaModule {
  public static final String NAME = "NativeLzstring";

  public NativeLzstringModule(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  @Override
  @NonNull
  public String getName() {
    return NAME;
  }

  static {
    try {
      // Used to load the 'native-lib' library on application startup.
      System.loadLibrary("cpp");
    } catch (Exception ignored) {
    }
  }

  // Example method
  // See https://reactnative.dev/docs/native-modules-android
  @ReactMethod
  public void multiply(int a, int b, Promise promise) {
    promise.resolve(nativeMultiply(a, b));
  }

  public static native int nativeMultiply(int a, int b);

  @ReactMethod
  public void compress(String input, Promise promise) { promise.resolve(nativeCompress(input)); }
  public static native String nativeCompress(String input);

  @ReactMethod
  public void decompress(String input, Promise promise) { promise.resolve(nativeDecompress(input)); }
  public static native String nativeDecompress(String input);

  @ReactMethod
  public void compressToBase64(String input, Promise promise) { promise.resolve(nativeCompressToBase64(input)); }
  public static native String nativeCompressToBase64(String input);

  @ReactMethod
  public void decompressFromBase64(String input, Promise promise) { promise.resolve(nativeDecompressFromBase64(input)); }
  public static native String nativeDecompressFromBase64(String input);

  @ReactMethod
  public void compressToUTF16(String input, Promise promise) { promise.resolve(nativeCompressToUTF16(input)); }
  public static native String nativeCompressToUTF16(String input);

  @ReactMethod
  public void decompressFromUTF16(String input, Promise promise) { promise.resolve(nativeDecompressFromUTF16(input)); }
  public static native String nativeDecompressFromUTF16(String input);
}
