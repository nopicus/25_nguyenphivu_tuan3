
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.view1}>
                <Text style={{ fontSize: 30, fontWeight: 'bold', marginTop: 50 }}>LOGIN</Text>
                <TextInput style={{ width: 350, height: 50, backgroundColor: 'rgba(196, 196, 196, 0.3)', fontSize: 18, marginTop: 80 }} placeholder='   Email'></TextInput>
                <TextInput style={{ width: 350, height: 50, backgroundColor: 'rgba(196, 196, 196, 0.3)', fontSize: 18, marginTop: 40 }} placeholder='   Password' secureTextEntry></TextInput>
                <TouchableOpacity style={{ marginTop: 70, width: 350, height: 45, backgroundColor: 'rgba(229, 57, 53, 1)', borderRadius: 2, alignItems: 'center', justifyContent: 'center' }} onPress={() => alert('Button clicked')}>
                    <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>LOGIN</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.view2}>
                <Text style={{ fontSize: 16, marginTop: 20 }}>When you agree to terms and conditions</Text>
                <Text style={{ fontSize: 16, marginTop: 15, color:'blue' }}>For got your password?</Text>
                <Text style={{ fontSize: 16, marginTop: 15 }}>Or login with</Text>
            </View>
            <View style={styles.view3}>
                <img src="https://www.brandsketer.com/upload/category/facebook-cap-nhat-thuat-toan-moi-thang-5-2017-1495618649.jpg" style={{width:110,height:45,borderRadius:2}} />
                <img src="https://marketingtrips.com/wp-content/uploads/2020/06/zalo.jpg" style={{width:110,height:45,borderRadius:2}} />
                <img src="https://genk.mediacdn.vn/2017/google-1491681053193.jpg" style={{width:110,height:45,borderRadius:2}} />

            </View>
            
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(49, 170, 82, 0.19)',
        alignItems: 'center',
    },
    view1: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    view2: {
        alignItems: 'center',
    },
    view3: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 20,
    },
});
