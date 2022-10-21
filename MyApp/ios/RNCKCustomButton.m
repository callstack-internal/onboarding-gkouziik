//
//  RNCKCustomButton.m
//  MyApp
//
//  Created by Ioannis Gkouziokas on 21/10/22.
//

#import <Foundation/Foundation.h>
#import "RNCKCustomButton.h"

@implementation RNCKCustomButton

- (instancetype)initWithFrame:(CGRect)frame
{
  self = [super initWithFrame:frame];
  if (self) {
    [self addTarget:self action:@selector(handleOnPress) forControlEvents:UIControlEventTouchUpInside];

    [self setTitleColor:UIColor.whiteColor forState:UIControlStateNormal];
    self.backgroundColor = [[UIColor alloc] initWithRed:51/255.0 green:217/255.0 blue:178/255.0 alpha:1.0];
  }
  return self;
}

- (void)handleOnPress {
  self.onPress([NSDictionary dictionary]);
}

@end
