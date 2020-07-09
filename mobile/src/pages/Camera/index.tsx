import React, { useState, useEffect, useRef } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Camera } from 'expo-camera'
import { useNavigation } from '@react-navigation/native'

import {
  Container,
  ViewButtons,
  ButtonsCamera,
  Flip,
  Take,
  Circle,
  Gallery,
  NotAuth
} from './styles'

const CameraStatus = () => {
  const [hasPermission, setHasPermission] = useState(null)
  const [type, setType] = useState(Camera.Constants.Type.back)
  const cameraRef = useRef(null)

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })()
  }, [])

  if (hasPermission === null) {
    return <Container />;
  }
  if (hasPermission === false) {
    return <NotAuth>No access to camera</NotAuth>;
  }

  async function takePicture() {
    if(cameraRef) {
      const data = await cameraRef.current.takePictureAsync()
    }
  }

  return (
    <Container>
      <Camera
        accessibilityElementsHidden={true} 
        style={{ flex: 1 }}
        type={type}
        ref={cameraRef}
      >
        <ViewButtons>
          <ButtonsCamera>
            <Gallery>
              <MaterialCommunityIcons
                name="image"
                size={40}
                color="#eeeeee"
              />
            </Gallery>

            <Circle>
              <Take onPress={takePicture}/>
            </Circle>

            <Flip
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}>
              <MaterialCommunityIcons
                name="camera-retake"
                size={40}
                color="#eeeeee"
              />
            </Flip>
          </ButtonsCamera>
        </ViewButtons>
      </Camera>
    </Container>
  );
}

export default CameraStatus
