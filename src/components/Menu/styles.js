import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    containerCard: {
        padding: 15,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    card: {
        width: 100,
        height: 100,
        display: 'flex',
        backgroundColor: 'rgba(251, 140, 0, 0.8)',
        borderRadius: 5,
        flexDirection: 'row',
        marginRight: 7,
        padding: 7
    },
    title: { paddingLeft: 15, fontSize: 19, color: '#fb8c00' },
    name: {
        fontSize: 17,
        color: '#fff',
        fontWeight: 'bold'
    }
})