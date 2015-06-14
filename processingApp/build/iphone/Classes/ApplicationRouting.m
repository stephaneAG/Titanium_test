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
         [map setObject:dataWithHexString(@"54692e55492e7365744261636b67726f756e64436f6c6f7228272330303027293b7661722074616247726f75703d54692e55492e63726561746554616247726f757028293b7661722077696e313d54692e55492e63726561746557696e646f77287b7469746c653a2748544d4c272c75726c3a2776696577732f77696e312e6a73272c6261636b67726f756e64436f6c6f723a2723666666277d293b76617220746162313d54692e55492e637265617465546162287b69636f6e3a274b535f6e61765f76696577732e706e67272c7469746c653a2768746d6c272c77696e646f773a77696e317d293b766172206c6162656c313d54692e55492e6372656174654c6162656c287b636f6c6f723a2723393939272c746578743a274920616d20636f6e6365707457696e646f772031272c666f6e743a7b666f6e7453697a653a32302c666f6e7446616d696c793a2748656c766574696361204e657565277d2c74657874416c69676e3a2763656e746572272c77696474683a276175746f277d293b77696e312e616464286c6162656c31293b74616247726f75702e6164645461622874616231293b76617220646562756757696e3d54692e55492e63726561746557696e646f77287b7469746c653a2750726f63657373696e67272c75726c3a2776696577732f77696e322e6a73272c6261636b67726f756e64436f6c6f723a2723666666277d293b76617220746162323d54692e55492e637265617465546162287b69636f6e3a274b535f6e61765f76696577732e706e67272c7469746c653a2750726f63657373696e67272c77696e646f773a646562756757696e7d293b74616247726f75702e6164645461622874616232293b74616247726f75702e6f70656e28293b") forKey:@"app_js"];
         [map setObject:dataWithHexString(@"7661722077696e3d54692e55492e63757272656e7457696e646f773b7661722076696577733d5b5d3b666f722876617220693d313b693c3d343b692b2b297b7661722070726f6a6563745363726f6c6c566965773d54692e55492e6372656174655363726f6c6c56696577287b6261636b67726f756e64436f6c6f723a27272c636f6e74656e744865696768743a276175746f272c73686f77566572746963616c5363726f6c6c496e64696361746f723a747275652c7d293b7661722070726f6a656374566965773d54692e55492e63726561746557656256696577287b68746d6c3a27746869732069732070726f6a65637456696577204e756d6265723a20272b692c75726c3a2768746d6c4c6f63616c436f6e74656e742f68746d6c436f6e74656e74272b692b272e68746d6c272c6865696768743a276175746f272c7d293b70726f6a6563745363726f6c6c566965772e6164642870726f6a65637456696577293b76696577732e707573682870726f6a6563745363726f6c6c56696577293b7d0a766172207363726f6c6c566965773d54692e55492e6372656174655363726f6c6c61626c6556696577287b73686f77506167696e67436f6e74726f6c3a747275652c63757272656e74506167653a302c6261636b67726f756e64436f6c6f723a27272c6865696768743a3335302c76696577733a76696577737d293b77696e2e616464287363726f6c6c56696577293b") forKey:@"views/win1_js"];
         [map setObject:dataWithHexString(@"77696e3d54692e55492e63757272656e7457696e646f773b766172206d794465627567566965773d54692e55492e63726561746557656256696577287b6865696768743a3438302c77696474683a3334302c75726c3a2770726f63657373696e6748544d4c2f70726f63657373696e67566965772e68746d6c277d290a77696e2e616464286d79446562756756696577293b") forKey:@"views/win2_js"];
     }
     return [map objectForKey:path];
}

@end
