//
//  Swapi.swift
//  fetchAPI
//
//  Created by lpiem on 12/03/2020.
//  Copyright © 2020 lpiem. All rights reserved.
//

import Foundation
import Moya

public enum TheMovieBD {
    static private let key = "3d2a52368b0d553c6297ca7d9cd6dc17"
    //2
    case search(String)
}

extension TheMovieBD: TargetType{
    // 1
    public var baseURL: URL {
        
        return URL(string: "https://api.themoviedb.org/3")!
    }
    
    // 2
    public var path: String {
        switch self {
        case .search: return "/search/movie"
        }
    }
    
    // 3
    public var method: Moya.Method {
        switch self {
        case .search: return .get
        }
    }
    
    // 4
    public var sampleData: Data {
        return Data()
    }
    
    // 5
    public var task: Task {
        
        switch self {
        case .search(let title):
            // 3
            return .requestParameters(
                parameters: [
                    "api_key": TheMovieBD.key,
                    "query": title
                ],
                encoding: URLEncoding.default)
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
