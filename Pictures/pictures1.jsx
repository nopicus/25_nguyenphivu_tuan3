
import { StyleSheet, Text, View, Button} from 'react-native';
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.style1}>
        <View style={styles.donut}></View>
      </View>
      <View style={styles.style2}>
        <Text style={{ fontSize: 30, fontWeight: 'bold' }}>GROW</Text>
        <Text style={{ fontSize: 30, fontWeight: 'bold' }}>YOUR BUSINESS</Text>
      </View>
      <View style={styles.style3}>
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>We will help you to grow your business using </Text>
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>online server</Text>
      </View>
      <View style={styles.style4}>
        <View style={styles.stylebutton}><Text style={{fontSize:20,fontWeight:'bold'}}>LOGIN</Text></View>
        <View style={styles.stylebutton}><Text style={{fontSize:20,fontWeight:'bold'}}>SIGN UP</Text></View>
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
    height: 280,
    background: 'transparent',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  style2: {

    height: 160,
    background: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  style3: {
    height: 80,
    background: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  style4: {
    height: 100,
    background: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  donut: {
    width: 170,
    height: 170,
    borderRadius: 100,
    backgroundColor: 'transparent',
    borderWidth: 20,
    borderColor: 'black',
  },
  stylebutton: {
    width: 130,
    height: 55,
    borderRadius: 15,
    backgroundColor: '#FFCC00',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },

});