#import "NativeLzstring.h"
#import "react-native-native-lzstring.h"
#import "include-header-only-lz-string.h"

@implementation NativeLzstring

RCT_EXPORT_MODULE()

// Example method for C++
// See the implementation of the example module in the `cpp` folder
RCT_EXPORT_METHOD(multiply:(nonnull NSNumber*)a withB:(nonnull NSNumber*)b
                  withResolver:(RCTPromiseResolveBlock)resolve
                  withReject:(RCTPromiseRejectBlock)reject)
{
    NSNumber *result = @(SKRNNativeLZString::multiply([a floatValue], [b floatValue]));

    resolve(result);
}

RCT_EXPORT_METHOD(compress:(NSString *)input
                  withResolver:(RCTPromiseResolveBlock)resolve
                  withReject:(RCTPromiseRejectBlock)reject
                  )
{
    std::u16string str((const char16_t*)[input cStringUsingEncoding:NSUTF16StringEncoding], input.length);
    std::u16string res = lzstring::compress(str);
    resolve([[NSString alloc] initWithCharacters:(const unichar *)res.data() length:res.length()]);
}
RCT_EXPORT_METHOD(decompress:(NSString *)input
                  withResolver:(RCTPromiseResolveBlock)resolve
                  withReject:(RCTPromiseRejectBlock)reject
                  )
{
    std::u16string str((const char16_t*)[input cStringUsingEncoding:NSUTF16StringEncoding], input.length);
    std::u16string res = lzstring::decompress(str);
    resolve([[NSString alloc] initWithCharacters:(const unichar *)res.data() length:res.length()]);
}

RCT_EXPORT_METHOD(compressToUTF16:(NSString *)input
                  withResolver:(RCTPromiseResolveBlock)resolve
                  withReject:(RCTPromiseRejectBlock)reject
                  )
{
    std::u16string str((const char16_t*)[input cStringUsingEncoding:NSUTF16StringEncoding], input.length);
    std::u16string res = lzstring::compressToUTF16(str);
    resolve([[NSString alloc] initWithCharacters:(const unichar *)res.data() length:res.length()]);
}
RCT_EXPORT_METHOD(decompressFromUTF16:(NSString *)input
                  withResolver:(RCTPromiseResolveBlock)resolve
                  withReject:(RCTPromiseRejectBlock)reject
                  )
{
    std::u16string str((const char16_t*)[input cStringUsingEncoding:NSUTF16StringEncoding], input.length);
    std::u16string res = lzstring::decompressFromUTF16(str);
    resolve([[NSString alloc] initWithCharacters:(const unichar *)res.data() length:res.length()]);
}

RCT_EXPORT_METHOD(compressToBase64:(NSString *)input
                  withResolver:(RCTPromiseResolveBlock)resolve
                  withReject:(RCTPromiseRejectBlock)reject
                  )
{
    std::u16string str((const char16_t*)[input cStringUsingEncoding:NSUTF16StringEncoding], input.length);
    std::u16string res = lzstring::compressToBase64(str);
    resolve([[NSString alloc] initWithCharacters:(const unichar *)res.data() length:res.length()]);
}
RCT_EXPORT_METHOD(decompressFromBase64:(NSString *)input
                  withResolver:(RCTPromiseResolveBlock)resolve
                  withReject:(RCTPromiseRejectBlock)reject
                  )
{
    std::u16string str((const char16_t*)[input cStringUsingEncoding:NSUTF16StringEncoding], input.length);
    std::u16string res = lzstring::decompressFromBase64(str);
    resolve([[NSString alloc] initWithCharacters:(const unichar *)res.data() length:res.length()]);
}


@end
