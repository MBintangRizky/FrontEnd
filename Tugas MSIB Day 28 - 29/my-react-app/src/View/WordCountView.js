import React from 'react';
import Navbar from '../Components/Navbar';
import './WordCountView.css';
import { ReactTyped } from "react-typed";

class WordCountView extends React.Component {
  render() {
    return (
      <div className='container'>
          <Navbar/>

          <h1 className='text-center mt-5 mb-2 text-white'>
          <ReactTyped strings={["Aplikasi Penghitung Kata dan Karakter", "Cepat dan Mudah!"]} typeSpeed={80} backSpeed={50} loop />
          </h1>
          
          
          
          <p className='text-center text-white'>Alat penghitung kata dan karakter online <span className='fw-bold'>gratis</span></p>


        {/* <div>
          <div className="word-count-container">
            <textarea 
              className="text-area" 
              onChange={this.props.onTextChange} 
              placeholder="Type here..." 
              />
            <p className="word-count">Word count: {this.props.wordCount}</p>
          </div>

        </div> */}
        
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="word-count-container">
                <textarea 
                  className="form-control text-area" 
                  onChange={this.props.onTextChange} 
                  placeholder="Type here..."
                  rows={14} 
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="row">
                <div className="col-md-12 word-count-container">
                  <div class="card">
                    <div class="card-header">
                      Jumlah Kata
                    </div>
                    <div class="card-body">
                
                        <p className='text-success fs-2'>{this.props.wordCount}</p>   
                    
                    </div>
                  </div>
                 
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 word-count-container">
                  <div class="card">
                    <div class="card-header">
                      Jumlah Karakter
                    </div>
                    <div class="card-body">
                
                        <p className='text-success fs-2'>{this.props.charCount}</p>   
                    
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WordCountView;
