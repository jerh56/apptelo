import React, { Component } from "react";
 
class Stuff extends Component {
  render() {
    return (
      <div>
        <h2>UPLOAD FILES</h2>
        <p>Mauris sem velit, vehicula eget sodales vitae,
        rhoncus eget sapien:</p>
        <ol>
          <li>Nulla pulvinar diam</li>
        </ol>
        <div id="contenedor">      
          <div className="recontenedordrop">
              <div className="dropArea">
                  <div id="myId" className="dropzone"> </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}
 
export default Stuff;