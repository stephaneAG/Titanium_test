/**
 * Appcelerator Titanium Mobile
 * This is generated code. Do not modify. Your changes *will* be lost.
 * Generated code is Copyright (c) 2009-2011 by Appcelerator, Inc.
 * All Rights Reserved.
 */
#import <Foundation/Foundation.h>
#import "ApplicationRouting.h"

extern NSData * decode64 (NSData * thedata); 
extern NSData * dataWithHexString (NSString * hexString);
extern NSData * decodeDataWithKey (NSData * thedata, NSString * key);

@implementation ApplicationRouting

+ (NSData*) resolveAppAsset:(NSString*)path;
{
     static NSMutableDictionary *map;
     if (map==nil)
     {
         map = [[NSMutableDictionary alloc] init];
         [map setObject:dataWithHexString(@"54692e55492e7365744261636b67726f756e64436f6c6f7228272330303027293b7661722077696e313d54692e55492e63726561746557696e646f77287b7469746c653a275363726f6c6c61626c6557696e31272c6261636b67726f756e64436f6c6f723a2723666666277d293b76617220776562766965773d54692e55492e63726561746557656256696577287b75726c3a27687474703a2f2f37382e3139322e34302e3135363a343536372f277d293b77696e312e6164642877656276696577293b77696e312e6f70656e28293b") forKey:@"app_js"];
     }
     return [map objectForKey:path];
}

@end
