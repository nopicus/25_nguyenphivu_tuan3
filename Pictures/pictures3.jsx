
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.style1}>

                <Image source={{
                    uri: "https://www.svgrepo.com/show/99424/lock.svg",
                }} style={styles.image} />
            </View>
            <View style={styles.style2}>
                <Text style={{ fontSize: 30, fontWeight: 'bold' }}>FORGET</Text>
                <Text style={{ fontSize: 30, fontWeight: 'bold' }}>PASSWORD</Text>
            </View>
            <View style={styles.style3}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Provide your account's email for which you</Text>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>want to reset your password</Text>
            </View>
            <View style={styles.style4}>
                <Image style={{ height: 30, width: 30, backgroundColor: '#BEBEBE' }} source={{ uri: "https://cdn-icons-png.flaticon.com/512/542/542638.png" }}></Image>
                <TextInput style={styles.input} placeholder='  Email'></TextInput>
            </View>

            <View style={styles.style5}>
                <TouchableOpacity style={styles.button} onPress={() => alert('Button clicked')}>
                    <Text style={{ color: 'black', fontSize: 15,fontWeight:'bold' }}>NEXT</Text>
                </TouchableOpacity>
            </View>



        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundImage: 'linear-gradient(to bottom, #66FFFF, #00CCFF)',
    },
    style1: {
        height: 200,
        background: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
    },
    style2: {

        height: 130,
        background: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
    },
    style3: {
        height: 60,
        background: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
    },
    style4: {
        height: 50,
        backgroundColor: '#BEBEBE',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 35,
        marginLeft: 20,
        marginRight: 20,
    },
    style5: {
        height: 100,
        background: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 150,
        height: 150,
    },
    input: {
        width: 300,
        height: 40,
        backgroundColor: '#BEBEBE',

    },
    button: {
        backgroundColor: '#FFCC00',
        width: 350,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
});