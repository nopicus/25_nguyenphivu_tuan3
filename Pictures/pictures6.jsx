import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.view1}>
                <Text style={{ fontSize: 30, fontWeight: 'bold', marginTop: 40 }}>REGISTER</Text>
                <TextInput style={{ width: 350, height: 50, backgroundColor: 'rgba(196, 196, 196, 0.3)', fontSize: 18, marginTop: 30 }} placeholder='   Name'></TextInput>
                <TextInput style={{ width: 350, height: 50, backgroundColor: 'rgba(196, 196, 196, 0.3)', fontSize: 18, marginTop: 20 }} placeholder='   Phone' secureTextEntry></TextInput>
                <TextInput style={{ width: 350, height: 50, backgroundColor: 'rgba(196, 196, 196, 0.3)', fontSize: 18, marginTop: 20 }} placeholder='   Email'></TextInput>
                <TextInput style={{ width: 350, height: 50, backgroundColor: 'rgba(196, 196, 196, 0.3)', fontSize: 18, marginTop: 20 }} placeholder='   Password' secureTextEntry></TextInput>
                <TextInput style={{ width: 350, height: 50, backgroundColor: 'rgba(196, 196, 196, 0.3)', fontSize: 18, marginTop: 20 }} placeholder='   Brithday'></TextInput>
                
            </View>
            <View style={styles.view2}>
                <input type='radio' style={{marginRight:15,marginLeft:30,width:20,height:20}}></input>
                <label style={{fontSize:18,marginTop:3}}>   Male</label>
                <input type='radio' style={{marginRight:15,marginLeft:30,width:20,height:20}}></input>
                <label style={{fontSize:18,marginTop:3}}>   Female</label>
            </View>
            <View style={styles.view3}>
                <TouchableOpacity style={{ marginTop: 5, width: 350, height: 45, backgroundColor: 'rgba(229, 57, 53, 1)', borderRadius: 2, alignItems: 'center', justifyContent: 'center' }} onPress={() => alert('Button clicked')}>
                    <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>REGISTER</Text>
                </TouchableOpacity>
                <Text style={{ fontSize: 15, marginTop: 15 }}>When you agree to terms and conditions</Text> 

            </View>
            
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(49, 170, 82, 0.19)',
    },
    view1: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    view2: {
        // flex: 1,
        flexDirection: 'row',
        marginTop: 20,
    },
    view3: {
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
        border:2,
      },
});