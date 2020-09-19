import React, { Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal } from 'react-native';
import {RNCamera} from 'react-native-camera';
import RNFetchBlob from 'rn-fetch-blob';

export default class ScanQR extends Component {
    state= {
        barcode: 'Silahkan Scan'
    }

    // constructor(props) {
    //     super(props);     
    //     this.state = {
    //         modalVisible: false,
    //         barcode: ''
    //     } 
    // }

    // setModalVisible = (visible) => {
    //     this.setState({ modalVisible: visible });
    // }
    
    takePicture = async function(camera) {
        const options = { quality: 0.5, base64: true };
        const data = await camera.takePictureAsync(options);
        //  eslint-disable-next-line
        console.log(data.uri);
      };
    render() {
        // const { modalVisible } = this.state.modalVisible;
        return (
            <View style={styles.container}>
                <RNCamera
                    ref ={ref => {
                        this.camera=ref;
                    }}
                    style={styles.preview}
                    type={RNCamera.Constants.Type.back}
                    flashMode={RNCamera.Constants.FlashMode.off}
                    onBarCodeRead={( barcode ) => {
                        console.log(barcode);
                        this.setState({
                            barcode: barcode.data
                        })
                    }}
                    >
                </RNCamera>
                <View>
                <Text style={{color: 'white',fontSize: 18, alignSelf: 'center', marginTop: 20}}>{`${this.state.barcode}`}</Text>
                </View>
                <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center'}}>
                    <TouchableOpacity 
                        onPress={this.takePicture.bind(true)} style={styles.capture}>
                        <Text style={{fontSize: 14}}>
                            Jelajahi Link
                        </Text>
                    </TouchableOpacity>
                </View>

                {/* Modal */}
                {/* <View style={styles.centeredView}>
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
                    <Text style={styles.modalText}>{`${this.state.barcode}`}</Text>

                            <TouchableOpacity
                            style={{ ...styles.openButton, backgroundColor: "#00bfff", width: 200 }}
                            onPress={() => {
                                setModalVisible(!modalVisible)
                            }}
                            >
                            <Text style={styles.textStyle}>Jelajahi Link</Text>
                            </TouchableOpacity>
                        </View>
                        </View>
                    </Modal>
                </View> */}
                {/* Akhir Modal */}
            </View>
        );
        

    };
};


const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black'
    },
    preview:{
        flex:1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    capture:{
        flex:0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding:13,
        paddingHorizontal:20,
        alignSelf: 'center',
        margin: 20
    },
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
