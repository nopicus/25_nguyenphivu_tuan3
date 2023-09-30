import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity , Animated, LogBox} from 'react-native';
//import { Animatable } from "react-native-animatable";
export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.style1}>

                <Image source={{
                    uri: "https://i.pinimg.com/originals/d5/c2/2e/d5c22e0b497a5dcc20272426c61bd03a.gif",
                }} style={styles.image} />
            </View>
            <View style={styles.style2}>
                <Text style={{ fontSize: 30, fontWeight: 'bold', fontFamily: 'Arial' }}>WELLCOME</Text>
                <Text style={{ fontSize: 30, fontWeight: 'bold' ,fontVariant: ''}}>GALAXY</Text>
            </View>
            <View style={styles.style3}>
                <Image style={{ height: 30, width: 30, backgroundColor: '#BEBEBE' }} source={{ uri: "https://cdn-icons-png.flaticon.com/512/542/542638.png" }}></Image>
                <TextInput style={styles.input} placeholder='  Email'></TextInput>
            </View>
            <View style={styles.style4}>
                <Image style={{ height: 30, width: 30, backgroundColor: '#BEBEBE' }} source={{url: "https://img.icons8.com/ios-filled/100/lock-2.png"}}></Image>
                <TextInput style={styles.input} placeholder=' Password'></TextInput>
            </View>

            <View style={styles.style5}>
                <TouchableOpacity style={styles.button} onPress={() => ('đăng nhập')}>
                    <Text style={{ color: 'black', fontSize: 15,fontWeight:'bold' }}> Đăng nhập </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.view1}>
                <Text style={{ fontSize: 16, marginTop: 0, color:'blue'}}>______________</Text>
                <Text style={{ fontSize: 16, marginTop: 6, color:'blue'}}> Cách đăng nhập khác </Text>
                <Text style={{ fontSize: 16, marginTop: 0, color:'blue'}}>______________</Text>
                <Image style={{width:85,height:85, marginTop:20}} source={{uri:'https://img.icons8.com/color/48/gmail--v1.png'}}></Image>
                <Image style={{width:85,height:85, marginTop:20}} source={{uri:'https://img.icons8.com/color/48/facebook-new.png'}}></Image>
                <Image style={{width:85,height:85, marginTop:20}} source={{uri:'https://img.icons8.com/ios-filled/50/twitterx--v1.png'}}></Image>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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

        height: 50,
        backgroundColor: '#BEBEBE',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 35,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 10,
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
        borderRadius: 10,
    },
    style5: {
        height: 100,
        background: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 414,
        height: 1480,
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
        borderRadius: 10,
    },
    view1: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginLeft: 20,
        marginRight: 20,
        flexWrap: 'wrap', 
    }
});

  
  