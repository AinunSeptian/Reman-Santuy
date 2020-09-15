import React, {useState} from 'react'
import { StyleSheet, Text, View, Modal, TouchableHighlight, TouchableOpacity} from 'react-native'
import { Kembali } from '../../assets'
import { Input, ButtonBlue } from '../../components';

const Register = ({navigation}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const handleGoTo = (screen) => {
        navigation.navigate(screen)
    };

    // const RegisterReducer = useSelector((state) => state.RegisterReducer);
    const [form, setForm] = useState({
        fullname: '',
        email: '',
        password: '',
    });

    const sendUserData = () => {
        console.log('Berhasil! Data Pendaftar', form);
    };

    const onInputChange = (value, input) => {
        setForm({
            ...form,
            [input]: value,
        });
    };

    return (
        <View>
            <TouchableOpacity>
                <Kembali width={30} height={30} style={{marginTop: 5, marginLeft: 5 }} onPress={() => handleGoTo('Welcome')} />
            </TouchableOpacity>
            <View style={{flexDirection: 'column', alignItems: 'center'}}>
                <Text style={{alignSelf: 'center', marginTop: 40, fontSize: 35, marginBottom: 70}}>Sign Up</Text>
                <Text style={{fontSize: 13}}>Buat akun anda dengan mengisi form berikut</Text>
            </View>
            <View style={{padding: 37}}>
                <Input 
                    placeholder="Full Name" 
                    value={form.fullname}
                    onChangeText={(value) => onInputChange(value, 'fullname')}/>
                <View style={{paddingBottom: 20}}/>
                <Input
                    placeholder="Email" 
                    value={form.email}
                    onChangeText={(value) => onInputChange(value, 'email')}/>
                <View style={{paddingBottom: 20}}/>
                <Input 
                    placeholder="Password" 
                    vaalue={form.password}
                    onChangeText={(value) => onInputChange(value, 'password')}
                    secureTextEntry={true}/>
            </View>
                <ButtonBlue title="Daftar" 
                    onPress={() => {
                        setModalVisible(true);
                        }}
                    />
            {/* Modal */}
            <View style={styles.centeredView}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        }}
                    >
                        <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Apakah Anda setuju dengan semua peraturan yang ada
                                dan Yakin ingin tetap mendaftar?</Text>

                            <TouchableOpacity
                            style={{ ...styles.openButton, backgroundColor: "#00bfff", width: 200 }}
                            onPress={() => {
                                setModalVisible(!modalVisible)
                                handleGoTo('SuccesLogin')
                                sendUserData();
                            }}
                            >
                            <Text style={styles.textStyle}>Tetap Mendaftar</Text>
                            </TouchableOpacity>
                        </View>
                        </View>
                    </Modal>
                    </View>
            {/* Akhir Modal */}
        </View>
    );
};

export default Register;

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5
    },
    openButton: {
      backgroundColor: "#F194FF",
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
  });

