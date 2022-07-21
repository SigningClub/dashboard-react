<h1 align="center">Dashboard com React</h1>
Um parágrafo da descrição do projeto vai aqui

## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

Consulte **Implantação** para saber como implantar o projeto.

### 📋 Pré-requisitos

De que coisas você precisa para instalar o software e como instalá-lo?

```
Dar exemplos
```

### 🔧 Instalação

Uma série de exemplos passo-a-passo que informam o que você deve executar para ter um ambiente de desenvolvimento em execução.

Diga como essa etapa será:
```
Dar exemplos
```


# Gráfico de Barra
## Dados do gráfico
 Os dados que serão devem ser declarados em um "let" antes das declarações do react, nesse array serão armazenados os dados do chart e suas características
 ```javascript
  let horizontalBoption = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      // Use axis to trigger tooltip
      type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
    }
  },
  legend: {},
  grid: {//Esses valores controlam as proporções do gráfico
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {//O que será mostrado no eixo x
    type: 'value'
  },
  yAxis: {//O que será mostrado no eixo y
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  series: [
    {//A variavel series carrega e nomeia os dados que serão mostrados no gráfico
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
  ```
## Carregando no react
No react as declarações são bem simples já que quem esta armazenando as características do gráfico é o array acima, No react precisamos apenas definir tamanhos, títulos/sub-títulos e o tamanho do card
```javascript
//Aqui é um exemplo de como estamos utilizando os gráficos dentro de cards e como carregar o chart
            <Col md="12">
              <Card className="border-control">
                <CardTitle className="text-control">Chart de Barra horizontal</CardTitle>
                <p className="text-control-subtitle">Como encontrou o magister</p>
                <Card.Body>
                  <ReactECharts option={horizontalBoption} />
                </Card.Body>
              </Card>
            </Col>
```
