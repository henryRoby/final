import React, { Component } from 'react';
import axios from 'axios';
import "./Affichage.css"


export default class Affichage extends Component {

    constructor(props) {
        super(props);
        this.state = { produit: [] };

    }
    componentDidMount() {
        axios.get('http://localhost:8080/user/produit/')
            .then(response => {
                console.log('i am a response', response)
                this.setState({ produit: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    liste() {
        return <div className='container'>
            <div className="cart">
                {(this.state.produit.length > 0) ? (this.state.produit.map((obj) => {
                    return <div >
                        <div className="" key={obj._id}>
                            <div className="">
                                <img src={'http://localhost:8080/user/produitImage/' + obj.image} alt="pdp" />
                            </div>
                            <div className="row">
                                <div className="col-md-1">
                                <label>Titre</label>:<br/>
                                <h4>{obj.nom}</h4>
                                </div>
                                <div className="col-md-3">
                                    <label>Prix</label> <p>{obj.prix} Ar</p>
                                    <label>l’horaire de début</label> <p>{obj.debut}</p>
                                </div>
                                <div className="col-md-3">
                                    <label>la durée</label><p>{obj.durer}</p>
                                    <label>une date</label><p>{obj.date}</p>
                                </div>
                                <div className="col-md-4">
                                    <label>le nombre de places disponible</label> <p>{obj.nombrePlaceDispo}</p>
                                    <label>le nombre de places réservées</label><p>{obj.nombrePlaceReserver}</p>
                                </div>

                                <div className="col-md-1">
                                <label>Description :</label>
                                <br/>{obj.description}
                                </div>
                            </div>
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-xs-10">
                                        <button id="detay" class="btn btn-info" onClick={() => {
                                            return (
                                                <div className="row">
                                                    <div className="">
                                                        <img width="1050px" height="500px" margin-top="10px" src={'http://localhost:8080/user/produitImage/' + obj.image} alt="pdp" />
                                                    </div>
                                                </div>
                                            )
                                        }}>s,inscrire</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                })) : ('')
                }
            </div>
        </div>
    }
    render() {
        return (
            <div>
                {this.liste()}
            </div>
        );
    }
}