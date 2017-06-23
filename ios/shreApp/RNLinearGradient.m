//
//  RNLinearGradient.m
//  shreApp
//
//  Created by Lugo, Aldo on 6/22/17.
//  Copyright © 2017 Facebook. All rights reserved.
//


#import "RNLinearGradient.h"
#import <React/RCTConvert.h>
#import <React/RCTViewManager.h>

@interface RCT_EXTERN_MODULE(RNLinearGradientSwift, RCTViewManager)

RCT_EXPORT_VIEW_PROPERTY(locations, NSArray);
RCT_EXPORT_VIEW_PROPERTY(colors, NSArray);

@end
