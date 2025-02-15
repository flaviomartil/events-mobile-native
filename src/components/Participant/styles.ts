import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#1F1E25',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    name: {
        flex: 1,
        fontSize: 16,
        marginLeft: 16,
        color: '#FFF',
    },
    buttonText: {
        color:'#FFF',
        fontSize: 24
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#E23C44',
        alignItems: 'center',
        justifyContent: 'center',
    },
    form: {
        marginTop: 36,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 42,
    }
})

