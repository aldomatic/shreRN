//
//  RNLinearGradientManager.swift
//  shreApp
//
//  Created by Lugo, Aldo on 6/22/17.
//  Copyright © 2017 Facebook. All rights reserved.
//

import Foundation

@objc(RNLinearGradientSwift)
class RNGradientViewManager : RCTViewManager {
  override func view() -> UIView! {
    return RNGradientView();
  }
}
