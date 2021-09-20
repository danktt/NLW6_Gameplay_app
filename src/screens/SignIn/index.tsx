import React from "react";

import { 
  View, 
  Text, 
  Image,
  StatusBar,
} from "react-native";

import illustrationImg from '../../assets/illustration.png'
import { ButtonIcon } from "../../components/ButtonIcon";

import { styles } from "./styles";

export function SignIn() {
  return (
    <View style={styles.container}>
      <StatusBar 
      barStyle="light-content"
      backgroundColor="transparent"
      translucent
      />
      <Image
        source={illustrationImg}
        style={styles.image} 
        resizeMode="stretch"
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se{`\n`}
          e organize suas{`\n`}
          jogatinas     
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games
          favoritos com seus amigos
        </Text>

        
        <ButtonIcon
         title="Entre com Discord" 
         activeOpacity={.9}
         />
        
        

      </View>
    </View>
  );
}
