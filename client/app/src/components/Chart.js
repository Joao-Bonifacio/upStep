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
            //stage
            x: 'Trade',
            //stage
            y: 6,
            goals: [{
                name: 'Expected',
                //stage
                value: 9,
                strokeHeight: 5,
                strokeColor: '#775DD0'
            }]
        },
        {
            //stage
            x: 'Porogramação',
            //stage
            y: 4,
            goals: [{
                name: 'Expected',
                value: 7,
                strokeHeight: 5,
                strokeColor: '#775DD0'
            }]
        },
        {
            x: 'Hack',
            y: 4,            
            goals: [{
                name: 'Expected',
                value: 7,
                strokeHeight: 5,
                strokeColor: '#775DD0'
            }]
        },
        {
            x: 'Idioma',
            y: 6,            
            goals: [{
                name: 'Expected',
                value: 8,
                strokeHeight: 5,
                strokeColor: '#775DD0'
            }]
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