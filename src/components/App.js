import React, { Component } from 'react';
import './App.scss'
import {connect} from 'react-redux';
import {getCards} from './../actions/cards';
import {getPopup} from './../actions/popup';
import Popup from './Popup';

class App extends Component {

  constructor(props) {
   super(props);
   this.state = {
      numbOfLoadCards: 4,
      currentItem: ''
    };
 }

  openPopup(e){
    this.props.onGetPopup(true);
    this.setState({
     currentItem: e.target.dataset.id
    });
  }

  loadMore(){
    this.setState({
     numbOfLoadCards: this.state.numbOfLoadCards + 5
    });
  }

 sendCards(){
    console.log(this.props.cards, "data of cards for sending on server");
 }

  componentDidMount(){
    this.props.onGetCards()
  }


  render() {


           var renderList = this.props.cards.map((card,index) => {
             if (index  < this.state.numbOfLoadCards){
              return (
                <div data-id={card.id} onClick={this.openPopup.bind(this)} className='card' key={card.id}>
                    <p data-id={card.id} className='card__item'>{card.name}</p>
                    <p data-id={card.id} className='card__item' >{card.email}</p>
                    <p ref={(text) => this.textElem = text} data-id={card.id} className='card__item card__item--this' >{card.body}</p>
                </div>
              )
            }
           })


    return (
      <div className="App">
          <button className="app-btn" onClick={this.sendCards.bind(this)}>send cards</button>
          <div className="card-container">
             {
              renderList
             }
          </div>
         <button className='app-btn' onClick={this.loadMore.bind(this)}>load more</button>
         <Popup currentItem={this.state.currentItem}/>
      </div>
    );
  }
}


export default connect(
  state => ({
    cards : state.cards,
    popup : state.popup,
  }),
  dispatch => ({
    onGetCards: () => {
      dispatch(getCards())
    },
    onGetPopup: (value) => {
      dispatch(getPopup(value))
    }

  })
)(App);
