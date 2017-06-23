//
//  RNGradientView.swift
//  shreApp
//
//  Created by Lugo, Aldo on 6/22/17.
//  Copyright © 2017 Facebook. All rights reserved.
//

import Foundation
import GradientView

@objc(RNGradientView)
class RNGradientView : GradientView {
  
  override init(frame: CGRect) {
    super.init(frame: frame);
    self.frame = frame;
  }
  
  required init?(coder aDecoder: NSCoder) {
    fatalError("init(coder:) has not been implemented")
  }
  
  
  public func setLocations(_ locations: NSArray) {
    self.locations = locations.map({ return $0 as! CGFloat});
  }
  
  public func setColors(_ colors: NSArray) {
    self.colors = colors.map({return RCTConvert.uiColor($0)})
  }
  
  
}


