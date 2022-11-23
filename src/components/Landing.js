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
        <div className="content-section">
          <div className="col-lg-6">
            <img src="images/dataset-description.JPG" alt="Dataset Description" title="Dataset Description" />
          </div>
          <div className="col-lg-6">
            <em>From about 700+ images, 77 classes are identified with at least 1 object from each class. The Dataset is custom built for Construction Foundations
              Site. The dataset is collected from the year 2000 onwards from Construction Sites using Digital Cameras. The tasks undertaken by the dataset requires 
              us to collect more images related to such Construction Sites using Videos and Internet Images. The Dataset is available at:
              <a href="https://universe.roboflow.com/klinterai/construction-dataset-6xih3" className="link"></a>
            </em>
          </div>
        </div>
        <div className="content-section">
          <div className="col-lg-6">
            <em>Computer Vision is found to be useful for producing the Scheduling of tasks from a Construction Site. Using Vision as a sensor from Depth Cameras, 
              the detected objects form an input towards the recognition of activity. The Core application will run an Object Detection Model and an Activity recognition 
              Model. Advanced Computer Vision techniques such as OpenhVINO are used for Performance Improvement. 
            </em>
          </div>
          <div className="col-lg-6">
            <img src="images/object-detection-prediction.JPG" alt="Object Detection Prediction" title="Object Detection Prediction" />
          </div>
        </div>
        <div className="content-section">
          <div className="col-lg-6">
            <img src="images/Activity-recognition.JPG" alt="Activity Recognition" title="Activity Recognition" />
          </div>
          <div className="col-lg-6">
            <em>The outcome of a recognized activity is a block of text generated from an image and the objects detected. Such recognized activities compose
              together to form the BIM (Building Information Modeling) activities in a BIM 4D model. The BIM 4D Model is connected to the BIM 5D Model using the 
              Conceptual Classification Codes presented by Revit which each activity exposes. 
            </em>
          </div>
        </div>
        <div className="content-section">
          <div className="col-lg-6">
            <em>A scrollable list of Activities with Classification Codes, Equipment Name / Number and the Timestamp recorded every 2-5 minutes are presented 
              in the Prototype. An SNMP polling of equipments combined with MQTT polling of Vision Depth Cameras are used to form a standards based 
              Vision Exchange Format Data Model to integrate the Applications in the Foundation Sites. 
            </em>
          </div>
          <div className="col-lg-6">
            <img src="images/Construction-Classification-Codes.JPG" alt="Construction Classification Codes" title="Construction Classification Codes" />
          </div>
        </div>
      </div>
    )
  }

}