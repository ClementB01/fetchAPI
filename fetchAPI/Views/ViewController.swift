//
//  ViewController.swift
//  fetchAPI
//
//  Created by lpiem on 12/03/2020.
//  Copyright © 2020 lpiem. All rights reserved.
//

import Foundation
import UIKit
import Moya

class ViewController: UIViewController {
    
    //MARK: - Outlets
    @IBOutlet weak var tableView: UITableView!
    
    //MARK: - Provider
    //let provider = MoyaProvider<Swapi>()
    let provider = MoyaProvider<Swapi>(stubClosure: MoyaProvider.immediatelyStub)
    
    // MARK: - View State
    private var state: State = .loading {
        didSet {
            switch state {
            case .ready:
                print("ready")
                //viewMessage.isHidden = true
                //tblComics.isHidden = false
            //tblComics.reloadData()
            case .loading:
                print("loading")
                //tblComics.isHidden = true
                //viewMessage.isHidden = false
                //lblMessage.text = "Getting comics ..."
            //imgMeessage.image = #imageLiteral(resourceName: "Loading")
            case .error:
                print("error")
                //tblComics.isHidden = true
                //viewMessage.isHidden = false
                //lblMessage.text = """
                //Something went wrong!
                //Try again later.
                //"""
                //imgMeessage.image = #imageLiteral(resourceName: "Error")
            }
        }
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        // 1
        state = .loading
        
        // 2
        provider.request(.films) { [weak self] result in
            guard let self = self else { return }
            
            // 3
            switch result {
            case .success(let response):
                do {
                    // 4
                    //print(try response.mapJSON())
                    //self.state = .ready(try response.map(MarvelResponse<Comic>.self).data.results)
                    self.state = .ready(try response.map(SwapiResponse<Film>.self).results)
                } catch {
                    self.state = .error
                }
            case .failure:
                // 5
                self.state = .error
            }
        }
    }
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        //let navVC = segue.destination as! UINavigationController
        let destVC = segue.destination as! DetailsViewController
        guard case .ready(let items) = state else { return }
        destVC.itemToShow = items[tableView.indexPath(for: (sender as! UITableViewCell))!.row]
        //destVC.delegate = self
    }
}

extension ViewController {
    enum State {
        case loading
        case ready([Film])
        case error
    }
}

// MARK: - UITableView Delegate & Data Source
extension ViewController: UITableViewDelegate, UITableViewDataSource {
  func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
    let cell = tableView.dequeueReusableCell(withIdentifier: "FilmCell", for: indexPath)

    guard case .ready(let items) = state else { return cell }
    
    cell.textLabel?.text = items[indexPath.row].title
    
    return cell
  }
  
  func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
    guard case .ready(let items) = state else { return 0 }

    return items.count
  }
  
  func numberOfSections(in tableView: UITableView) -> Int {
    return 1
  }
  
  func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
    tableView.deselectRow(at: indexPath, animated: false)
    guard case .ready(let items) = state else { return }
    
    
  }
}
