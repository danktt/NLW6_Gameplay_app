import React from 'react';

import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { categories } from '../../utils/categories';
import Category from '../Category';
import { styles } from './styles';

type Props = {
  categorySelected : string,
}

const CategorySelect: React.FC<Props> = ({categorySelected}) => {
  return(
    <ScrollView
     style={styles.container}
     horizontal
     showsHorizontalScrollIndicator={false}
     contentContainerStyle={{paddingRight: 40}} 
    >

      {
        categories.map(category =>(
          <Category
            key={category.id}
            title={category.title}
            icon={category.icon}
            checked={category.id === categorySelected} 

          />
        ))
      }
    </ScrollView>



  )
}

export default CategorySelect