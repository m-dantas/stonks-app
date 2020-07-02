import React from 'react'
import {
    View, 
    Text,
    Dimensions
  } from 'react-native'
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph
} from 'react-native-chart-kit'

export default function Chart () {
    return (
        <View style={{paddingTop: 30}}>
        <Text style={{ paddingLeft: 15, fontSize: 19, color: '#fb8c00' }}>Vendas na última semana</Text>
            <View style={{
                alignItems: 'center'
            }}>
            <LineChart
                data={{
                labels: ['29/06', '30/06', '01/07', '02/07', '03/07', '04/04'],
                datasets: [{
                    data: [
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100
                    ]
                }]
                }}
                    width={Dimensions.get('window').width - 15} // from react-native
                    height={220}
                    chartConfig={{
                        backgroundColor: '#e26a00',
                        backgroundGradientFrom: '#fb8c00',
                        backgroundGradientTo: '#ffa726',
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: (opacity = 0.5) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            borderRadius: 16
                        }
                    }}
                    bezier
                    style={{
                        marginVertical: 8,
                        borderRadius: 16
                    }}
                />
            </View>
        </View>
    )
}