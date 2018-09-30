import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getPopup} from './../actions/popup';
import {addText} from './../actions/addText';

class Popup extends Component {

  constructor(props) {
   super(props);
   this.closePopup = this.closePopup.bind(this);
   this.addText = this.addText.bind(this);
 }

  closePopup(){
    this.props.onGetPopup(false);
  }

  addText(){
    this.props.onGetPopup(false);
    let id = +this.props.currentItem;
    let value = this.textarea.value;
    // console.log('addText', this.textarea.value );
    this.props.onAddText(id, value);
  }


  render() {

    const isPopup = this.props.popup;

    return (

         isPopup
         ? <div className='popup'>
          <div className='popup__mask'></div>
            <div className="popup__content">
                <textarea ref={(text) => this.textarea = text} className="popup__text">
                </textarea>
                <div className="button">
                   <button onClick={this.closePopup} className="button__close">закрыть</button>
                   <button onClick={this.addText} className="button__use">применить</button>
                </div>
             </div>
         </div>
         : null

    );
  }
}



const mapStateToProps = store => {
  return {
    popup: store.popup
  }
}
export default connect(
  mapStateToProps,
  dispatch => ({
  onGetPopup: (value) => {
    dispatch(getPopup(value))
  },
  onAddText: (id, value) => {
    dispatch(addText(id, value))
  }
}))(Popup);
