import React from "react";
import Header from './Header';
import axios from 'axios';

const URL = 'http://backend.klinter.ai';
var google = window.google;

export default class ConstructionScheduling extends React.Component {

  constructor(props) {
    super(props);
  }

  fetchSchedulingFrame() {
    // set the dimensions and margins of the graph
    google.charts.load('current', {
      'packages': ['gantt']
    });
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {

      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Task ID');
      data.addColumn('string', 'Task Name');
      data.addColumn('string', 'Resource');
      data.addColumn('date', 'Start Date');
      data.addColumn('date', 'End Date');
      data.addColumn('number', 'Duration');
      data.addColumn('number', 'Percent Complete');
      data.addColumn('string', 'Dependencies');

      data.addRows([
        ['SiteWork', 'Site Work', 'spring',
          new Date(2022, 12, 4), new Date(2022, 12, 5), null, 100, null
        ],
        ['BuildingPermits', 'Building Permits', 'summer',
          new Date(2022, 12, 5), new Date(2022, 12, 6), null, 100, null
        ],
        ['ColumnFoundations', 'Column Foundations', 'autumn',
          new Date(2022, 12, 6), new Date(2022, 12, 7), null, 100, null
        ],
        ['RaftFoundations', 'Raft Foundations', 'winter',
          new Date(2022, 12, 9), new Date(2022, 12, 10), null, 100, null
        ],
        ['ThermalResistance', 'Thermal Resistance', 'spring',
          new Date(2022, 12, 12), new Date(2022, 12, 13), null, 50, null
        ],
        ['HazardousMaterialsRemediation', 'Hazardous Materials Remediation', 'summer',
          new Date(2022, 12, 13), new Date(2022, 12, 14), null, 0, null
        ],
        ['ExcavationandFill', 'Excavation and Fill', 'autumn',
          new Date(2022, 12, 14), new Date(2022, 12, 16), null, 0, null
        ],
        ['Embankments', 'Embankments', 'winter',
          new Date(2022, 12, 21), new Date(2022, 12, 24), null, 0, null
        ],
        ['SoilReinforcement', 'Soil Reinforcement', 'sports',
          new Date(2022, 12, 26), new Date(2022, 12, 30), null, 100, null
        ]
      ]);

      var options = {
        height: 300,
        gantt: {
          trackHeight: 30
        }
      };

      var chart = new google.visualization.Gantt(document.getElementById('chart_div'));

      chart.draw(data, options);
    }
  }

  componentDidMount() {
    this.fetchSchedulingFrame();
  }

  render() {
    return (
      <div className="App">
        <div className="content-construction-scheduling">
          <Header />
          <div className="row" id="dashboard-view" style={{"padding": "40px 30px 30px 30px"}}>
            <div className="col-lg-6">
              <img src="images/Object-Detection.jpg" title="Object Detection" alt="Object Detection" />
            </div>
            <div className="col-lg-6">
              <div className="content-header" style={{"padding": "60px 20px 20px 60px"}}>
                <h2 style={{"textDecoration": "underline"}}>Construction Scheduling</h2>
              </div>
              <div id="container">
                <div id="chart_div"></div>
              </div>
              <label style={{"width": "100%", "textAlign": "center"}}>
                Volume <br/>
                <input style={{"width": "80%", "textAlign": "center"}} type="range" id="volume" name="volume" min="0" max="11" value="5" />
              </label>
            </div>
          </div>
          <div className="row" style={{"padding": "40px 30px 30px 60px"}} id="activity-view">
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
      </div>
    )
  }

}