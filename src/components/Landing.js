import React from "react";
import Header from './Header';

export default class Landing extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="content-landing">
        <Header />
        <section className="content-section" id="dataset">
          <div className="row">
            <div className="col-lg-6">
              <img src="images/dataset-description.JPG" alt="Dataset Description" title="Dataset Description" class="img-fluid" />
            </div>
            <div className="col-lg-6">
              <div className="content-header">
                <h1>Dataset Description</h1>
              </div>
              <em style={{"textAlign": "justify"}}>From about 700+ images, 77 classes are identified with at least 1 object from each class. The Dataset is custom built for Construction Foundations
                Site. The dataset is collected from the year 2000 onwards from Construction Sites using Digital Cameras. The tasks undertaken by the dataset requires 
                us to collect more images related to such Construction Sites using Videos and Internet Images. The Dataset is available at: <br/>
                <a href="https://universe.roboflow.com/klinterai/construction-dataset-6xih3" className="link" title="#dataset-inspect">KlinterAI Roboflow Universe Dataset</a>
              </em>
            </div>
          </div>
        </section>
        <section className="content-section" id="object-detection">
          <div className="row">
            <div className="col-lg-6">
              <div className="content-header">
                <h1>Object Detection Prediction</h1>
              </div>
              <em style={{"textAlign": "justify"}}>Computer Vision is found to be useful for producing the Scheduling of tasks from a Construction Site. Using Vision as a sensor from Depth Cameras, 
                the detected objects form an input towards the recognition of activity. The Core application will run an Object Detection Model and an Activity recognition 
                Model. Advanced Computer Vision techniques such as OpenhVINO are used for Performance Improvement. 
              </em>
            </div>
            <div className="col-lg-6">
              <img src="images/object-detection-prediction.JPG" alt="Object Detection Prediction" title="Object Detection Prediction" class="img-fluid" />
            </div>
          </div>
        </section>
        <section className="content-section" id="activity-recognition">
          <div className="row">
            <div className="col-lg-6">
              <img src="images/Activity-recognition.JPG" alt="Activity Recognition" title="Activity Recognition" class="img-fluid" />
            </div>
            <div className="col-lg-6">
              <div className="content-header">
                <h1>Activity Recognition</h1>
              </div>
              <em style={{"textAlign": "justify"}}>The outcome of a recognized activity is a block of text generated from an image and the objects detected. Such recognized activities compose
                together to form the BIM (Building Information Modeling) activities in a BIM 4D model. The BIM 4D Model is connected to the BIM 5D Model using the 
                Conceptual Classification Codes presented by Revit which each activity exposes. 
              </em>
            </div>
          </div>
        </section>
        <section className="content-section" id="construction-classification">
          <div className="row">
            <div className="col-lg-6">
              <div className="content-header">
                <h1>Construction Classification Codes</h1>
              </div>
              <em style={{"textAlign": "justify"}}>A scrollable list of Activities with Classification Codes, Equipment Name / Number and the Timestamp recorded every 2-5 minutes are presented 
                in the Prototype. An SNMP polling of equipments combined with MQTT polling of Vision Depth Cameras are used to form a standards based 
                Vision Exchange Format Data Model to integrate the Applications in the Foundation Sites. 
              </em>
            </div>
            <div className="col-lg-6">
            <table class="table table-striped table-bordered" style={{"fontSize": "12px"}}>
                <thead>
                <tr>
                <th>Sl. No.</th>
                <th>NameFromActivity</th>
                <th>Object 1</th>
                <th>TimeStamp</th>
                <th>RandomNumber</th>
                <th>SNMP Token</th>
                <th>UF Num</th>
                <th>Title of   Activity</th>
                <th>MF Num</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                <td>1</td>
                <td>Earthmoving</td>
                <td>Excavator</td>
                <td>04/12/2022   12:23</td>
                <td>89</td>
                <td>bfa14955daca93db2acc6116543d4fa46c7a22b5</td>
                <td>G1070</td>
                <td>Site Earthwork</td>
                <td>31 20 00</td>
                </tr>
                <tr>
                <td>2</td>
                <td>Earthmoving</td>
                <td>Dump Truck</td>
                <td>05/12/2022   12:23</td>
                <td>81</td>
                <td>1c58a446a63e719d7b90156a8998ccc461609ed7</td>
                <td>G1070</td>
                <td>Site Earthwork</td>
                <td>31 20 00</td>
                </tr>
                <tr>
                <td>3</td>
                <td>Undefined</td>
                <td>Person with PPE</td>
                <td>06/12/2022   12:23</td>
                <td>13</td>
                <td>e868a7f71518c30388f725182ee85510c18f306e</td>
                <td>G1070</td>
                <td>Site Earthwork</td>
                <td>31 20 00</td>
                </tr>
                <tr>
                <td>4</td>
                <td>Earthmoving</td>
                <td></td>
                <td>07/12/2022   12:23</td>
                <td>68</td>
                <td>3a02579c191f8558e3fedece867419cb15398b26</td>
                <td>G1070</td>
                <td>Site Earthwork</td>
                <td>31 20 00</td>
                </tr>
                <tr>
                <td>5</td>
                <td>Earthmoving</td>
                <td>Excavator</td>
                <td>08/12/2022   12:23</td>
                <td>26</td>
                <td>5206febf99a349f32b0edf724d9cd1cd9333ebad</td>
                <td>G1070</td>
                <td>Site Earthwork</td>
                <td>31 20 00</td>
                </tr>
                <tr>
                <td>6</td>
                <td>Earthmoving</td>
                <td>Excavator</td>
                <td>09/12/2022   12:23</td>
                <td>54</td>
                <td>a1e4f0b333cb5950624a09c8991401df8c68830e</td>
                <td>G1070</td>
                <td>Site Earthwork</td>
                <td>31 20 00</td>
                </tr>
                <tr>
                <td>7</td>
                <td></td>
                <td>Excavator</td>
                <td>10/12/2022   12:23</td>
                <td>68</td>
                <td>e3579b1e47f273529f0f929453e939a68ede9fd1</td>
                <td>G1070</td>
                <td>Site Earthwork</td>
                <td>31 20 00</td>
                </tr>
                <tr>
                <td>8</td>
                <td>Earthmoving</td>
                <td>Excavator</td>
                <td>11/12/2022   12:23</td>
                <td>15</td>
                <td>da6bfa4b76e2b488e948bab5180520112ebfb18b</td>
                <td>G1070</td>
                <td>Site Earthwork</td>
                <td>31 20 00</td>
                </tr>
                <tr>
                <td>9</td>
                <td>Earthmoving</td>
                <td>Excavator</td>
                <td>12/12/2022   12:23</td>
                <td>45</td>
                <td>e06d6e729196c564869a2c58b1ba7b1454a04b25</td>
                <td>G1070</td>
                <td>Site Earthwork</td>
                <td>31 20 00</td>
                </tr>
                <tr>
                <td>10</td>
                <td>Earthmoving</td>
                <td>Excavator</td>
                <td>13/12/2022   12:23</td>
                <td>9</td>
                <td>8ad73f92d9f9d8ffbb8fcc019cab870008ac555c</td>
                <td>G1070</td>
                <td>Site Earthwork</td>
                <td>31 20 00</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    )
  }

}