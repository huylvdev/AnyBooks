import React, { Component } from 'react';
import { View, Text } from 'react-native';
import IconT from 'react-native-vector-icons/AntDesign';
import { DocumentDirectoryPath, downloadFile, readDir, RNFS } from "react-native-fs";
import { unzip, unzipWithPassword, } from 'react-native-zip-archive'
// const url = 'https://drive.google.com/file/d/1fufdM_kuY6B5cuoouwzMKrvzI8vqOzxt/view?usp=sharing'
// const url = 'https://drive.google.com/file/d/10O5FakpSFU24yHh6uPDfPepkPM8ATPlT/view?usp=sharing'
const url = 'https://drive.google.com/file/d/10O5FakpSFU24yHh6uPDfPepkPM8ATPlT/view?usp=sharing'
class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  async componentDidMount() {
    // await this._write();
    await this._download();
     await this._read();
    // await this._unzip()
  }

  async _download() {
    console.log('downloadd')
    const toPath = DocumentDirectoryPath + '/'
    const filename = 'test.zip'
    let Option = {
      fromUrl: encodeURI(url),
      toFile: toPath + filename,
    }

    await downloadFile(Option).promise.then((result) => {

      unzip(toPath + filename, toPath)
      console.log('downloadddone', result);
    })
    // console.log('', toPath)
  }

  async _read() {
    readDir(DocumentDirectoryPath)
      .then((result) => {
        console.log('GOTRESULT', result);
        return Promise.all([RNFS.stat(result[0].path), result[0].path]);
      })
      .then((statResult) => {
        if (statResult[0].isFile()) {
          // if we have a file, read it
          return RNFS.readFile(statResult[1], 'utf8');
        }

        return 'no file';
      })
      .then((contents) => {
        // log the file contents
        console.log(contents);
      })
      .catch((err) => {
        console.log(err.message, err.code);
      });
  }

  async _write() {
    var path = DocumentDirectoryPath + '/sach.epub';
    // write the file
    RNFS.writeFile(path, 'Lorem ipsum dolor sit amet', 'utf8')
      .then((success) => {
        console.log('FILE WRITTEN!');
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  _unzip() {
    const sourcePath = `${DocumentDirectoryPath}/sach.zip`
    const targetPath = `${DocumentDirectoryPath}/huydev`
    console.log('sourcePath', sourcePath)
    unzip(sourcePath, targetPath,)
      .then((path) => {
        console.log(`unzipcompletedat ${path}`)
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
