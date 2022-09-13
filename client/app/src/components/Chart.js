import ApexCharts from 'react-apexcharts'

export default function Chart(){
    const options = {
        xaxis: {
            type: 'numeric'
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
        },
        {
            x: 'Análise metaforando',
            y: 0,            
            goals: [{
                name: 'Expected',
                value: 3,
                strokeHeight: 5,
                strokeColor: '#775DD0'
            }]
        }]
    }]

    //valores a serem setados por state
    //console.log( series[0].data[0].x )
    //console.log( series[0].data[0].y )
    //console.log( series[0].data[0].goals[0].value )

    return(
        <ApexCharts
            options={options}
            series={series}
            type="bar"
            //width={640}
            height={480}
            className="bg-light p-3 mb-5"
            style={{borderRadius:'8px'}}
        />
    )
}