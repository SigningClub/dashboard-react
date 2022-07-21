import React from "react";
import ChartistGraph from "react-chartist";
// react-bootstrap components teste de commitasdasdasdasdadasda
import './Style.css';
import ReactECharts from 'echarts-for-react';
import '@foo-software/react-charts-donut/dist/DonutChart.css';
import {
  Card,
  Container,
  Row,
  Col,
  Table,
  Navbar,
  Alert
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
      avoidLabelOverlap: true,
      label: {
        show: false,
        position: 'center',
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
  responsiveOptions: [
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
  responsiveOptions: [
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
  responsiveOptions: [
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
let lineOption = {

  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '4%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: 'Email',
      type: 'line',
      stack: 'Total',
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: 'Union Ads',
      type: 'line',
      stack: 'Total',
      data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      name: 'Video Ads',
      type: 'line',
      stack: 'Total',
      data: [150, 232, 201, 154, 190, 330, 410]
    },
    {
      name: 'Direct',
      type: 'line',
      stack: 'Total',
      data: [320, 332, 301, 334, 390, 330, 320]
    },
    {
      name: 'Search Engine',
      type: 'line',
      stack: 'Total',
      data: [820, 932, 901, 934, 1290, 1330, 1320]
    }
  ]
};
let newBaroption = {
  legend: {},
  tooltip: {},
  dataset: {
    source: [
      ['product', '2012', '2013', '2014', '2015'],
      ['Matcha Latte', 41.1, 30.4, 65.1, 53.3],
      ['Milk Tea', 86.5, 92.1, 85.7, 83.1],
      ['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4],
      ['Walnut Brownie', 55.2, 67.1, 69.2, 72.4],
      ['Matcha Green Tea', 24.1, 67.2, 79.5, 86.4],
    ]
  },
  xAxis: [
    { type: 'category', gridIndex: 0 }
  ],
  yAxis: [{ gridIndex: 0 }],

  series: [
    { type: 'bar', seriesLayoutBy: 'row' },
    { type: 'bar', seriesLayoutBy: 'row' },
    { type: 'bar', seriesLayoutBy: 'row' },
    { type: 'bar', seriesLayoutBy: 'row' },
    { type: 'bar', seriesLayoutBy: 'row' },
  ]
};
let gaugeOption = {
  tooltip: {
    formatter: '{a} <br/>{b} : {c}%'
  },
  series: [
    {
      name: 'Nota do Aluno',
      type: 'gauge',
      progress: {
        show: true
      },
      detail: {
        valueAnimation: true,
        formatter: '{value}'
      },
      data: [
        {
          value: 85,
          name: 'Média'
        }
      ]
    }
  ]
};
function Dashboard() {
  return (
    <>
      <Navbar className="navbar-adjust" variant="dark">
      </Navbar>
      <div className="navbar-title">
        <img
          src={require("assets/img/marca_gt.png").default}
          height="55"
          
          alt="..."
        />
      </div>
      <div className="navbar-text">
        Dashboard react
      </div>
<div>
  <Container>
    <Col lg="3" sm="6">
      <Alert>
        
      </Alert>
      </Col>
      </Container>


</div>



      <div className="color-back">
        <Container fluid>

          <Row>
            <Col lg="3" sm="6">
              <Card className="card-stats border-control">
                <Card.Body>
                  <Row>
                    <Col xs="3">
                      <div className="icon-big text-center icon-warning icon-control">
                        <img src={require("assets/img/icone_atividades_complementares.png").default}
                          alt="icone de atividade" />
                      </div>
                    </Col>
                    <Col xs="3">


                      <Card.Title ><div className="card-numbers">5</div></Card.Title>

                    </Col>
                    <Col xs="5">
                      <p className="card-subtitle subtitle-help">Atividades Complementares</p>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="3" sm="6">
              <Card className="card-stats border-control" >
                <Card.Body>
                  <Row>
                    <Col xs="3">
                      <div className="icon-big text-center icon-warning icon-control">
                        <img src={require("assets/img/icone_carga_horaria_curso.png").default}
                          alt="icone de atividade" />
                      </div>
                    </Col>
                    <Col xs="3">

                      <Card.Title><div className="card-numbers">80</div></Card.Title>


                    </Col>
                    <Col xs="4">
                      <p className="card-subtitle">Carga horária</p>
                    </Col>
                  </Row>
                </Card.Body>

              </Card>
            </Col>
            <Col lg="3" sm="6">
              <Card className="card-stats border-control">
                <Card.Body>
                  <Row>
                    <Col xs="3">
                      <div className="icon-big text-center icon-warning icon-control">
                        <img src={require("assets/img/icone_carga_horaria_pendente.png").default} />
                      </div>
                    </Col>
                    <Col xs="3">
                      <Card.Title><div className="card-numbers">80</div></Card.Title>

                    </Col>
                    <Col xs="5">
                      <p className="card-subtitle">Carga Horária Pendente</p>
                    </Col>
                  </Row>
                </Card.Body>

              </Card>
            </Col>
            <Col lg="3" sm="6">
              <Card className="card-stats border-control">
                <Card.Body>
                  <Row>
                    <Col xs="3">
                      <div className="icon-big text-center icon-warning icon-control">
                        <img src={require("assets/img/icone_mgp.png").default} />
                      </div>
                    </Col>
                    <Col xs="3">

                      <Card.Title ><div className="card-numbers">8.5</div></Card.Title>

                    </Col>
                    <Col xs="5">
                      <p className="card-subtitle">Média Geral Ponderada</p>
                    </Col>
                  </Row>
                </Card.Body>

              </Card>
            </Col>
          </Row>
          <Row>
            <Col md="6">
              <Card className="border-control">
                <CardTitle className="text-control">Chart de Linha</CardTitle>
                <p className="text-control-subtitle">Como encontrou o magister</p>
                <Card.Body>
                  <ReactECharts option={lineOption} />
                </Card.Body>
              </Card>
            </Col>
            <Col md="6">
              <Card className="border-control">

                <CardTitle className="text-control">Email Statistics</CardTitle>
                <p className="text-control-subtitle">Last Campaign Performance</p>

                <Card.Body>
                  <ReactECharts option={optionPie} className="pie-chart" />
                </Card.Body>
              </Card>
            </Col>
            <Col md="6" >
              <Card className="border-control">
                <CardTitle className="text-control">Chart de Barra Vertical</CardTitle>
                <p className="text-control-subtitle">Como encontrou o magister</p>
                <Card.Body>
                  <ReactECharts option={newBaroption} />
                </Card.Body>
              </Card>
            </Col>
            <Col md="6">
              <Card className="border-control">
                <CardTitle className="text-control">Chart de Rosca</CardTitle>
                <p className="text-control-subtitle">Como encontrou o magister</p>
                <Card.Body>
                  <ReactECharts option={option} className="pie-chart" />
                </Card.Body>
              </Card>
            </Col>
            <Col md="12">
              <Card className="border-control">
                <CardTitle className="text-control">Chart de Barra horizontal</CardTitle>
                <p className="text-control-subtitle">Como encontrou o magister</p>
                <Card.Body>
                  <ReactECharts option={horizontalBoption} />
                </Card.Body>
              </Card>
            </Col>
            <Col md="12">
              <Card className="border-control">
                <Card.Body>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@twitter</td>
                      </tr>
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </Col>
            <Col md="6">
              <Card className="border-control">
                <CardTitle className="text-control">Média Geral Ponderada</CardTitle>
                <p className="text-control-subtitle">MGP</p>
                <Card.Body>
                  <ReactECharts option={gaugeOption} />
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
