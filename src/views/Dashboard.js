import React from "react";
import ChartistGraph from "react-chartist";
// react-bootstrap components
import './Style.css';
import ReactECharts from 'echarts-for-react';
import '@foo-software/react-charts-donut/dist/DonutChart.css';
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { CardTitle } from "reactstrap";

const options = {
  animationEnabled: true,
  title: {
    text: "Customer Satisfaction"
  },
  subtitles: [{
    text: "71% Positive",
    verticalAlign: "center",
    fontSize: 24,
    dockInsidePlotArea: true
  }],
  data: [{
    type: "doughnut",
    showInLegend: true,
    indexLabel: "{name}: {y}",
    yValueFormatString: "#,###'%'",
    dataPoints: [
      { name: "Unsatisfied", y: 5 },
      { name: "Very Unsatisfied", y: 31 },
      { name: "Very Satisfied", y: 40 },
      { name: "Satisfied", y: 17 },
      { name: "Neutral", y: 7 }
    ]
  }]
}
let option = {
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '5%',
    left: 'center'
  },
  series: [
    {
      name: 'Accesso por',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '40',
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 1048, name: 'Busca' },
        { value: 735, name: 'Magister' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Anúncios' },
        
      ]
    }
  ],
  responsiveOptions:[
    [
      "screen and (max-width: 650px)",
      {
        axisX: {
          labelInterpolationFnc: function (value) {
            return value[0];
          },
        },
      },
    ],
  ]
};
let optionPie = {
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '5%',
    left: 'center'
  },
  series: [
    {
      name: 'Accesso por',
      type: 'pie',
      radius: ['0%', '70%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '40',
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 1048, name: 'Busca' },
        { value: 735, name: 'Magister' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Anúncios' },
        
      ]
    }
  ],
  responsiveOptions:[
    [
      "screen and (max-width: 650px)",
      {
        axisX: {
          labelInterpolationFnc: function (value) {
            return value[0];
          },
        },
      },
    ],
  ]
};
let horizontalBoption = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      // Use axis to trigger tooltip
      type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
    }
  },
  legend: {},
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'value'
  },
  yAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  series: [
    {
      name: 'Direct',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [320, 302, 301, 334, 390, 330, 320]
    },
    {
      name: 'Mail Ad',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: 'Affiliate Ad',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      name: 'Video Ad',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [150, 212, 201, 154, 190, 330, 410]
    },
    {
      name: 'Search Engine',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [820, 832, 901, 934, 1290, 1330, 1320]
    }
  ]
  ,
  responsiveOptions:[
    [
      "screen and (max-width: 650px)",
      {
        axisX: {
          labelInterpolationFnc: function (value) {
            return value[0];
          },
        },
      },
    ],
  ]
};
function Dashboard() {
  return (
    <>
      <img
        src={require("assets/img/Dashboard.png").default}

        alt="..."
      />
      <div className="color-back">
        <Container fluid>
          <Row>
            <Col lg="3" sm="6">
              <Card className="card-stats border-control">
                <Card.Body>
                  <Row>
                    <Col xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-chart text-warning"></i>
                      </div>
                    </Col>
                    <Col xs="7">
                      <div className="numbers">
                        <p className="card-category">Number</p>
                        <Card.Title as="h4">150GB</Card.Title>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>

              </Card>
            </Col>
            <Col lg="3" sm="6">
              <Card className="card-stats border-control" >
                <Card.Body>
                  <Row>
                    <Col xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-light-3 text-success"></i>
                      </div>
                    </Col>
                    <Col xs="7">
                      <div className="numbers">
                        <p className="card-category">Revenue</p>
                        <Card.Title as="h4">$ 1,345</Card.Title>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>

              </Card>
            </Col>
            <Col lg="3" sm="6">
              <Card className="card-stats border-control">
                <Card.Body>
                  <Row>
                    <Col xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-vector text-danger"></i>
                      </div>
                    </Col>
                    <Col xs="7">
                      <div className="numbers">
                        <p className="card-category">Errors</p>
                        <Card.Title as="h4">23</Card.Title>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>

              </Card>
            </Col>
            <Col lg="3" sm="6">
              <Card className="card-stats border-control">
                <Card.Body>
                  <Row>
                    <Col xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-favourite-28 text-primary"></i>
                      </div>
                    </Col>
                    <Col xs="7">
                      <div className="numbers">
                        <p className="card-category">Followers</p>
                        <Card.Title as="h4">+45K</Card.Title>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>

              </Card>
            </Col>
          </Row>
          <Row>
            <Col md="6">
              <Card className="border-control">
                <CardTitle className="text-control">User Behavior</CardTitle>
                <p className="text-control-subtitle">24 Hours performance</p>
                <Card.Body>
                  <div className="ct-chart" id="chartHours">
                    <ChartistGraph
                      data={{
                        labels: [
                          "Jan",
                          "Feb",
                          "Mar",
                          "Apr",
                          "Mai",
                          "Jun",
                          "Jul",
                          "Aug",
                          
                        ],
                        series: [
                          [287, 385, 490, 492, 554, 586, 698, 695],
                          [67, 152, 143, 240, 287, 335, 435, 437],
                          [23, 113, 67, 108, 190, 239, 307, 308],
                        ],
                      }}
                      type="Line"
                      options={{
                        low: 0,
                        high: 800,
                        showArea: false,
                        height: "245px",
                        axisX: {
                          showGrid: false,
                        },
                        lineSmooth: true,
                        showLine: true,
                        showPoint: true,
                        fullWidth: true,
                        chartPadding: {
                          right: 50,
                        },
                      }}
                      responsiveOptions={[
                        [
                          "screen and (max-width: 650px)",
                          {
                            axisX: {
                              labelInterpolationFnc: function (value) {
                                return value[0];
                              },
                            },
                          },
                        ],
                      ]}
                    />
                  </div>
                </Card.Body>
                <Card.Footer>
                  <div className="legend">
                    <i className="fas fa-circle text-info"></i>
                    Open <i className="fas fa-circle text-danger"></i>
                    Click <i className="fas fa-circle text-warning"></i>
                    Click Second Time
                  </div>

                </Card.Footer>
              </Card>
            </Col>
            <Col md="5">
              <Card className="border-control">

                <CardTitle className="text-control">Email Statistics</CardTitle>
                <p className="text-control-subtitle">Last Campaign Performance</p>

                <Card.Body>
                <ReactECharts option={optionPie} className="pie-chart"/>
                </Card.Body>
              </Card>
            </Col>
            <Col md="6" >
              <Card className="border-control">
                <CardTitle className="text-control">2017 Sales</CardTitle>
                <p className="text-control-subtitle">All products including Taxes</p>
                <Card.Body>
                  <div className="ct-chart" id="chartActivity">
                    <ChartistGraph
                      data={{
                        labels: [
                          "Jan",
                          "Feb",
                          "Mar",
                          "Apr",
                          "Mai",
                          "Jun",
                          "Jul",
                          "Aug",
                          "Sep",
                          "Oct",
                          "Nov",
                          "Dec",
                        ],
                        series: [
                          [
                            542,
                            443,
                            320,
                            780,
                            553,
                            453,
                            326,
                            434,
                            568,
                            610,
                            756,
                            895,
                          ],
                          [
                            412,
                            243,
                            280,
                            580,
                            453,
                            353,
                            300,
                            364,
                            368,
                            410,
                            636,
                            695,
                          ],
                        ],
                      }}
                      type="Bar"
                      options={{
                        seriesBarDistance: 10,
                        axisX: {
                          showGrid: false,
                        },
                        height: "245px",
                      }}
                      responsiveOptions={[
                        [
                          "screen and (max-width: 640px)",
                          {
                            seriesBarDistance: 5,
                            axisX: {
                              labelInterpolationFnc: function (value) {
                                return value[0];
                              },
                            },
                          },
                        ],
                      ]}
                    />
                  </div>
                </Card.Body>
                <Card.Footer>
                  <div className="legend">
                    <i className="fas fa-circle text-info"></i>
                    Tesla Model S <i className="fas fa-circle text-danger"></i>
                    BMW 5 Series
                  </div>

                </Card.Footer>
              </Card>
            </Col>
            <Col md="5">
              <Card className="border-control">
              <CardTitle className="text-control">Teste de Chart de Rosca</CardTitle>
                <p className="text-control-subtitle">Como encontrou o magister</p>
                <Card.Body>
                  <ReactECharts option={option} className="pie-chart"/>
                  </Card.Body>
                  </Card>
            </Col>
            <Col md="11">
              <Card className="border-control">
              <CardTitle className="text-control">Teste de Chart de Barra horizontal</CardTitle>
                <p className="text-control-subtitle">Como encontrou o magister</p>
                <Card.Body>
                  <ReactECharts option={horizontalBoption} />
                  </Card.Body>
                  </Card>
            </Col>


          </Row>
        </Container>
      </div>

    </>
  );
}

export default Dashboard;
