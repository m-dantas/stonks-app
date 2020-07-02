import React from 'react'
import {
    View,
    Text
} from 'react-native'

import styles from './styles'

export default function Menu () {
    return (
        <View style={{flex: 1, marginTop: 10}}>
            <Text style={styles.title}>Atalhos</Text>
            <View style={styles.containerCard}>        
                <View style={styles.card}>
                    <Text style={styles.name}>Estoque</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.name}>Vendas</Text>
                </View>
            </View>
        </View>
    )
}