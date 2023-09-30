import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.view1}>
                <Image style={{ width: 100, height: 100}} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFHiqHxMsqkjpwaMbbcgdtYbV-UF8pi5G8NQ&usqp=CAU' }}></Image>


            </View>
            <View style={styles.view2}>
                <View style={{flexDirection:'row', width: 350, height: 50, backgroundColor: 'white', fontSize: 18, marginTop: 20, borderBottom: '1px solid rgba(196, 196, 196, 1)', color: 'rgba(196, 196, 196, 1)' }} placeholder='   Please input user name'>
                    <Image style={{width:45,height:45}} source={{uri:'data:image/png;base64,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'}}></Image>
                    <TextInput style={{ width: 300, height: 50, fontSize: 18, color: 'rgba(196, 196, 196, 1)' }} placeholder='   Please input user name'></TextInput>
                </View>
                <View style={{flexDirection:'row', width: 350, height: 50, backgroundColor: 'white', fontSize: 18, marginTop: 20, borderBottom: '1px solid rgba(196, 196, 196, 1)', color: 'rgba(196, 196, 196, 1)' }} placeholder='   Please input user name'>
                    <Image style={{width:40,height:40}} source={{uri:'https://cdn-icons-png.flaticon.com/512/2889/2889676.png'}}></Image>
                    <TextInput style={{ width: 300, height: 50, fontSize: 18, color: 'rgba(196, 196, 196, 1)' }} placeholder='   Please input password'></TextInput>
                </View>
                <TouchableOpacity style={{ marginTop: 60, width: 350, height: 45, backgroundColor: 'blue', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }} onPress={() => alert('Button clicked')}>
                    <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>LOGIN</Text>
                </TouchableOpacity>

            </View>
            <View style={styles.view3}>
                <Text style={{ fontSize: 16, marginTop: 10}}>Register</Text>
                <Text style={{ fontSize: 16, marginTop: 10}}>Forgot Password</Text>
            </View>
            <View style={styles.view4}>
                <Text style={{ fontSize: 16, marginTop: 0, color:'blue'}}>______________</Text>
                <Text style={{ fontSize: 16, marginTop: 6}}>Other Login Methods</Text>
                <Text style={{ fontSize: 16, marginTop: 0, color:'blue'}}>______________</Text>
                <Image style={{width:85,height:85, marginTop:20}} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4pBwneobqn2crGyrX7HWfvR6eUyBse3yowg&usqp=CAU'}}></Image>
                <Image style={{width:85,height:85, marginTop:20}} source={{uri:'https://scr.vn/wp-content/uploads/2020/08/bi%E1%BB%83u-t%C6%B0%E1%BB%A3ng-wifi-%C4%91%E1%BA%B9p.png'}}></Image>
                <Image style={{width:85,height:85, marginTop:20}} source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Facebook-icon-1.png/640px-Facebook-icon-1.png'}}></Image>
            </View>
            

        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    view1: {
        height: 180,
        alignItems: 'flex-start',
        justifyContent: 'center',
        alignItems: 'center',
    },
    view2: {
        alignItems: 'center',
    },
    view3: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        margin: 20,
    },
    view4: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginLeft: 20,
        marginRight: 20,
        flexWrap: 'wrap',   
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
        border: 2,
    },
});