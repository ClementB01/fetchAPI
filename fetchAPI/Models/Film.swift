//
//  Film.swift
//  fetchAPI
//
//  Created by lpiem on 12/03/2020.
//  Copyright © 2020 lpiem. All rights reserved.
//

import Foundation

struct Film: Codable {
    let episode_id: Int
    let title: String
    let opening_crawl: String
    let director: String
    let producer: String
    let release_date: String
}
