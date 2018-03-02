//
//  DemoManager.swift
//  AES
//
//  Created by Welington da Silva Martins on 01/03/2018.
//  Copyright © 2018 Facebook. All rights reserved.
//

import Foundation

@objc(DemoManager)
class DemoManager: NSObject {
  
  @objc func log(_ message: String, time: NSNumber) -> Void {
    print("Logging Message. message: \(message), time: \(time)")
  }
  
}
