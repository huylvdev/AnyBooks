import React, { Component } from 'react';
import { View, Text } from 'react-native';
import IconT from 'react-native-vector-icons/AntDesign';
import RNFS from "react-native-fs";
import { zip, unzipWithPassword, DocumentDirectoryPath } from 'react-native-zip-archive'
class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  async componentDidMount() {
    await this._write();
    await this._archive();
  }

  _write() {
    // console.log(RNFS.DocumentDirectoryPath);
    var path = RNFS.DocumentDirectoryPath + '/myFile.zip';
    RNFS.writeFile(path, 'Lorem ipsum dolor sit amet', 'utf8')
      .then((success) => {
        console.log('FILE WRITTEN!');
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  _archive() {
    const targetPath = `${DocumentDirectoryPath}/myFile.zip`
    const sourcePath = DocumentDirectoryPath
    
    zip(sourcePath, targetPath)
    .then((path) => {
      console.log(`zip completed at ${path}`)
    })
    .catch((error) => {
      console.error(error)
    })

  }


  render() {
    return (
      <View>
        <IconT name='downcircleo'> </IconT>
      </View>
    );
  }
}

export default HomeScreen;
