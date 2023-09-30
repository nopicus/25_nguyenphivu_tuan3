import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.view1}>
                <Text style={{ fontSize: 30, fontWeight: 'bold', marginTop: 40 , marginLeft:20}}>LOGIN</Text>


            </View>
            <View style={styles.view2}>
                <TextInput style={{ width: 350, height: 50, backgroundColor: 'rgba(196, 196, 196, 0.3)', fontSize: 18, marginTop: 30, border: '1px solid rgba(242, 242, 242, 1)' }} placeholder='   Name'></TextInput>
                <TextInput style={{ width: 350, height: 50, backgroundColor: 'rgba(196, 196, 196, 0.3)', fontSize: 18, marginTop: 20, border: '1px solid rgba(242, 242, 242, 1)' }} placeholder='   Phone' secureTextEntry></TextInput>
                <TouchableOpacity style={{ marginTop: 60, width: 350, height: 45, backgroundColor: 'black', borderRadius: 2, alignItems: 'center', justifyContent: 'center' }} onPress={() => alert('Button clicked')}>
                    <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>LOGIN</Text>
                </TouchableOpacity>
                
                <Text style={{ fontSize: 18, marginTop: 30, fontWeight: 'bold'  }}>CREATE ACCOUNT</Text>
            </View>
            <View style={styles.view3}>

                

            </View>

        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundImage: 'linear-gradient(to bottom, rgba(251, 203, 0, 1), rgba(191, 154, 0, 1))',
    },
    view1: {
        height: 180,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    view2: {
        alignItems: 'center',
        marginTop: 20,
    },
    view3: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
        border: 2,
    },
});