import React, { useEffect, useState } from 'react';

import { StyleSheet, Text, View } from 'react-native';

import { getContents } from './src/lib/firebase';
import { Content } from './src/lib/types/content';

export default function App() {
  const [contents, setContents] = useState<Content[]>([]);

  useEffect(() => {
    getFirebaseItems();
  }, []);

  const getFirebaseItems = async () => {
    // firebaseが該当しないので書き換え
    // const snapshot = await firebase.firestore().collection("contents").get();
    // const dataCol = collection(db, 'contents');
    // const snapshot = await getDocs(dataCol);
    // const contents = snapshot.docs.map(doc => doc.data() as Content);
    const contents = await getContents();
    setContents(contents);
    // console.log(contents);
  }

  const contentsItems = contents.map((content, index) => (
    <View style={{ margin: 10 }} key={index.toString()}>
      <Text>{content.age_fb}</Text>
      <Text>{content.pref_fb}</Text>
      <Text>{content.title_fb}</Text>
    </View>
  ));

  return (
    <View style={styles.container}>
      <Text>conico コンテンツ登録画面です</Text>
      {contentsItems}
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
