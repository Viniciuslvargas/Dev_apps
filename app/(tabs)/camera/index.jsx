import {useState, useRef} from 'react'
import {View, StyleSheet, Text, Image, Button} from 'react-native'
import {CameraView, cameraView, useCameraPermissions} from 'expo-camera'

export default function Camera() {
    const [permissao, pedirPermissao] = useCameraPermissions()
    const [foto, setfoto] = useState(null)
    const cameraRef = useRef(null)
    if(!permissao){
        return(
            <View></View>
        )
    }

    if(!permissao.granted) {
        return(
            <View style={styles.container}>
                <Text style={styles.textopermissao}>Voce precisa dar permissao para utilizar a camera
                </Text>
                <Button title='pedir permissao' onPress={pedirPermissao} ></Button>
            </View>
        )
    }
    const tirarFoto = async () => {
        const foto = await camertaRef.current?.takePictureAsync({
            quality: 0.5,
            base64: true,

        })
        setfoto(foto)
        console.log(foto)
    }   
    return(
         <CameraView style={styles.camera} facing='front' ref={cameraRef} >
            <View style={styles.container}>
            <Button title='tirar foto' onPress={tirarFoto}></Button>
            </View>
         </CameraView>
    )
}

const styles = StyleSheet.create ({
    container:{
       flex: 1,
        justifyContent:'center',
    },
    textopermissao:{
textAlign: 'Center',
    },
    camera:{
        flex: 1,
    }
})