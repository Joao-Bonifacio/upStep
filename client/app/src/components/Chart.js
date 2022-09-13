import ApexCharts from 'react-apexcharts'

export default function Chart(){
    const options = {
        xaxis: {
            type: 'number'
        },
        yaxis:{
            tooltip: {
                enable: true
            }
        },
        legend: {
            show: true,
            showForSingleSeries: true,
            customLegendItems: ['Actual', 'Expected'],
            markers: {
              fillColors: ['#00E396', '#775DD0']
            }
        }
    }
    const series = [{
        name: 'Actual',
        data: [{
            x: 'con1',
            y: 1,
            goals: [
                {
                  name: 'Expected',
                  value: 4,
                  strokeHeight: 5,
                  strokeColor: '#775DD0'
                }
              ]
        },
        {
            x: 'con2',
            y: 5,
            goals: [
                {
                  name: 'Expected',
                  value: 7,
                  strokeHeight: 5,
                  strokeColor: '#775DD0'
                }
              ]
        },
        {
            x: 'con3',
            y: 3,            goals: [
                {
                  name: 'Expected',
                  value: 5,
                  strokeHeight: 5,
                  strokeColor: '#775DD0'
                }
              ]
        }]
    }]
    return(
        <ApexCharts
            options={options}
            series={series}
            type="bar"
            //width={640}
            height={480}
        />
    )
}