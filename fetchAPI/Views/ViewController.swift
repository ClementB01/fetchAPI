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

import Kingfisher

class ViewController: UIViewController {
    
    //MARK: - Outlets
    @IBOutlet weak var tableView: UITableView!

    
    //MARK: - Provider
    //let provider = MoyaProvider<Swapi>()
    let providerSwapi = MoyaProvider<Swapi>(stubClosure: MoyaProvider.immediatelyStub)
    let providerTheMovieBD = MoyaProvider<TheMovieBD>(plugins: [NetworkLoggerPlugin()])
    
    
    // MARK: - View State
    private var state: State = .loading {
        didSet {
            switch state {
            case .ready:
                print("ready")
            case .loading:
                print("loading")
            case .error:
                print("error")
            }
        }
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        // 1
        state = .loading
        
        // 2
        providerSwapi.request(.films) { [weak self] result in
            guard let self = self else { return }
            
            // 3
            switch result {
            case .success(let response):
                do {
                    // 4
                    var movies = try response.map(SwapiResponse<Film>.self).results
                    self.state = .ready(movies)
                    
                    for (index, var item) in movies.enumerated() {
                        self.providerTheMovieBD.request(.search(item.title)) { [weak self] result in
                            guard let self = self else { return }
                            
                            // 3
                            switch result {
                            case .success(let response):
                                do {
                                    // 4
                                    let images = try response.map(TheMoviesBDResponse.self).results
                                    item.poster_path = images[0].poster_path!  //TODO: mettre un placeholder si pas d'image
                                    movies[index] = item
                                    self.state = .ready(movies)
                                } catch {
                                    print("1")
                                    //self.state = .error
                                }
                            case .failure:
                                // 5
                                print("2")
                                //self.state = .error
                            }
                        }
                    }
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
        let destVC = segue.destination as! DetailsViewController
        guard case .ready(let items) = state else { return }
        let index = tableView.indexPath(for: (sender as! UITableViewCell))!.row
        destVC.itemToShow = items[index]
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
        //let cell = tableView.dequeueReusableCell(withIdentifier: FilmCell.reuseIdentifier, for: indexPath) as? FilmCell ?? FilmCell()
        let cell = tableView.dequeueReusableCell(withIdentifier: "FilmCell", for: indexPath)
        
        guard case .ready(let items) = state else { return cell }
        
        let item = items[indexPath.row]
        
        cell.textLabel?.text = item.title
        cell.detailTextLabel?.text = item.release_date
        
        if let endPath = item.poster_path {
            let startPath: String = "https://image.tmdb.org/t/p/original/"
            let path: String = startPath + endPath
            let url = URL(string: path)
            print(path)
            print("1")
            cell.imageView?.kf.setImage(with: url)
        }
        
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
        
    }
}
