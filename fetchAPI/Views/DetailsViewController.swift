//
//  DetailsViewController.swift
//  fetchAPI
//
//  Created by lpiem on 12/03/2020.
//  Copyright © 2020 lpiem. All rights reserved.
//

import Foundation
import UIKit
import Moya

class DetailsViewController: UITableViewController {
    
    var itemToShow: Film?
    
    //MARK: - Outlets
    @IBOutlet weak var lblTitle: UILabel!
    @IBOutlet weak var lblDirector: UILabel!
    @IBOutlet weak var lblProducer: UILabel!
    @IBOutlet weak var lblDate: UILabel!
    @IBOutlet weak var lblOpening: UITextView!
    @IBOutlet weak var imgView: UIImageView!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        if let itemToShow = itemToShow {
            //tfNewItem.text = itemToShow.text
            self.title = itemToShow.title
            
            lblTitle.text = itemToShow.title
            lblDirector.text = itemToShow.director
            lblProducer.text = itemToShow.producer
            lblDate.text = itemToShow.release_date
            lblOpening.text = itemToShow.opening_crawl

        }
    }
}
