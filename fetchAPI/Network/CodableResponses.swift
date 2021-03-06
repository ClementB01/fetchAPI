//
//  CodableResponses.swift
//  fetchAPI
//
//  Created by lpiem on 12/03/2020.
//  Copyright © 2020 lpiem. All rights reserved.
//

import Foundation

struct SwapiResponse<T: Codable>: Codable {
  let results: [T]
}

struct TheMoviesBDResponse: Codable {
  let results: [TheMoviesBDMovie]
}

struct TheMoviesBDMovie: Codable {
  let poster_path: String?
}
