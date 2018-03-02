/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { NativeModules } from 'react-native'

//const Volume = NativeModules.Volume;
//Volume.getSystemVolume((error, volume) => window.alert(volume))/* 
var AES = require('react-native-aes')
import b64 from 'base-64'
import ReactotronReactNative from 'reactotron-react-native';
var Buffer = require('buffer').Buffer

var stringInput = '123'; //QjW7lwmiblWdlpMnJLx3Hg==
var bufferInput = new Buffer(stringInput)
// sample key
var key = new Buffer('QkBzM0MwZDNQdXR6bDAxbDJvMTdCQDVlQzBkZVB1dHo=', 'base64')
var cipherName = 'AES-256-CBC'
AES.encryptWithCipher(
  cipherName,   // String
  bufferInput,  // Buffer (input data)
  key,          // AES key, e.g. 32 bytes of random data
  function (err, encrypted) {

    ReactotronReactNative.log(b64.encode(encrypted))
//  "encrypted" is of the form
//  {
//    ciphertext: Buffer,
//    iv: Buffer
//  }
//
//  you'll need both parts to decrypt

    AES.decryptWithCipher(
      cipherName,             // String
      encrypted.ciphertext,   // Buffer (input data)
      key,
      encrypted.iv,           // Buffer
      function (err, plaintext) {
        // plaintext is a Buffer
        if (plaintext.toString() !== stringInput) {
          throw new Error('time to report an issue!')
        }else{
          console.log(plaintext.toString())
        }
      }
    )
  }
)

export default class App extends Component {
  render() {
    return (
      <View>
        <Text>
          Welcome to React Native!
        </Text>
      </View>
    );
  }
}

