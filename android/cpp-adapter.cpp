#include <jni.h>
#include "react-native-native-lzstring.h"
#include "include-header-only-lz-string.h"

extern "C"
JNIEXPORT jint JNICALL
Java_com_reactnativenativelzstring_NativeLzstringModule_nativeMultiply(JNIEnv *env, jclass type, jint a, jint b) {
    return SKRNNativeLZString::multiply(a, b);
}

extern "C"
JNIEXPORT jstring JNICALL
Java_com_reactnativenativelzstring_NativeLzstringModule_nativeCompress(JNIEnv *env, jclass clazz,
                                                                       jstring input) {
    jboolean isCopy = false;
    const jchar *chars = env->GetStringChars(input, &isCopy);
    jlong len = env->GetStringLength(input);
    std::u16string res = lzstring::compress(std::u16string ((char16_t *)chars, len));
    if(isCopy) {
        env->ReleaseStringChars(input, chars);
    }
    return env->NewString((jchar *)res.data(), res.length());
}
extern "C"
JNIEXPORT jstring JNICALL
Java_com_reactnativenativelzstring_NativeLzstringModule_nativeDecompress(JNIEnv *env, jclass clazz,
                                                                         jstring input) {
    jboolean isCopy = false;
    const jchar *chars = env->GetStringChars(input, &isCopy);
    jlong len = env->GetStringLength(input);
    std::u16string res = lzstring::decompress(std::u16string ((char16_t *)chars, len));
    if(isCopy) {
        env->ReleaseStringChars(input, chars);
    }
    return env->NewString((jchar *)res.data(), res.length());
}
extern "C"
JNIEXPORT jstring JNICALL
Java_com_reactnativenativelzstring_NativeLzstringModule_nativeCompressToBase64(JNIEnv *env,
                                                                               jclass clazz,
                                                                               jstring input) {
    jboolean isCopy = false;
    const jchar *chars = env->GetStringChars(input, &isCopy);
    jlong len = env->GetStringLength(input);
    std::u16string res = lzstring::compressToBase64(std::u16string ((char16_t *)chars, len));
    if(isCopy) {
        env->ReleaseStringChars(input, chars);
    }
    return env->NewString((jchar *)res.data(), res.length());
}
extern "C"
JNIEXPORT jstring JNICALL
Java_com_reactnativenativelzstring_NativeLzstringModule_nativeDecompressFromBase64(JNIEnv *env,
                                                                                   jclass clazz,
                                                                                   jstring input) {
    jboolean isCopy = false;
    const jchar *chars = env->GetStringChars(input, &isCopy);
    jlong len = env->GetStringLength(input);
    std::u16string res = lzstring::decompressFromBase64(std::u16string ((char16_t *)chars, len));
    if(isCopy) {
        env->ReleaseStringChars(input, chars);
    }
    return env->NewString((jchar *)res.data(), res.length());
}
extern "C"
JNIEXPORT jstring JNICALL
Java_com_reactnativenativelzstring_NativeLzstringModule_nativeCompressToUTF16(JNIEnv *env,
                                                                              jclass clazz,
                                                                              jstring input) {

    jboolean isCopy = false;
    const jchar *chars = env->GetStringChars(input, &isCopy);
    jlong len = env->GetStringLength(input);
    std::u16string res = lzstring::compressToUTF16(std::u16string ((char16_t *)chars, len));
    if(isCopy) {
        env->ReleaseStringChars(input, chars);
    }
    return env->NewString((jchar *)res.data(), res.length());
}
extern "C"
JNIEXPORT jstring JNICALL
Java_com_reactnativenativelzstring_NativeLzstringModule_nativeDecompressFromUTF16(JNIEnv *env,
                                                                                  jclass clazz,
                                                                                  jstring input) {
    jboolean isCopy = false;
    const jchar *chars = env->GetStringChars(input, &isCopy);
    jlong len = env->GetStringLength(input);
    std::u16string res = lzstring::decompressFromUTF16(std::u16string ((char16_t *)chars, len));
    if(isCopy) {
        env->ReleaseStringChars(input, chars);
    }
    return env->NewString((jchar *)res.data(), res.length());
}
