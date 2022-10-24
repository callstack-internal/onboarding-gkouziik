//
//  RNCKCustomViewManager.m
//  MyApp
//
//  Created by Ioannis Gkouziokas on 21/10/22.
//

#import <Foundation/Foundation.h>
#import "RNCKCustomButtonViewManager.h"
#import "RNCKCustomButton.h"
@implementation RNCKCustomButtonViewManager


RCT_EXPORT_MODULE(CustomButton)
RCT_EXPORT_VIEW_PROPERTY(enabled, BOOL)
RCT_EXPORT_VIEW_PROPERTY(onPress, RCTBubblingEventBlock)
RCT_CUSTOM_VIEW_PROPERTY(text, NSString, UIButton) {
    [view setTitle:json forState:UIControlStateNormal];
}
- (UIButton *)view
{
    return [[RNCKCustomButton alloc] initWithFrame:CGRectZero];
}

@end

