//
//  Swapi.swift
//  fetchAPI
//
//  Created by lpiem on 12/03/2020.
//  Copyright © 2020 lpiem. All rights reserved.
//

import Foundation
import Moya

public enum Swapi {
    
  //2
  case films
}

extension Swapi: TargetType{
  // 1
  public var baseURL: URL {
    return URL(string: "https://swapi.co/api")!
  }

  // 2
  public var path: String {
    switch self {
    case .films: return "/films"
    }
  }

  // 3
  public var method: Moya.Method {
    switch self {
    case .films: return .get
    }
  }

  // 4
  public var sampleData: Data {
    switch self {
    case .films:
      let path = Bundle.main.path(forResource:"SampleFilmsSwapiReponse", ofType: "json")!
      let data: Data = (try? Data(contentsOf: URL(fileURLWithPath: path))) ?? Data()
      return data
    }
  }

  // 5
  public var task: Task {
    
    switch self {
    case .films:
      // 3
      return .requestPlain
    }
  }

  // 6
  public var headers: [String: String]? {
    return ["Content-Type": "application/json"]
  }

  // 7
  public var validationType: ValidationType {
    return .successCodes
  }
}
