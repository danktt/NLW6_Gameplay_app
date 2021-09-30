import React from 'react';

import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { styles } from './styles';



const CategorySelect: React.FC = () => {
  return(
    <ScrollView
     style={styles.container}
     horizontal
     showsHorizontalScrollIndicator={false}
     contentContainerStyle={{paddingRight: 40}} 
    />



  )
}

export default CategorySelect