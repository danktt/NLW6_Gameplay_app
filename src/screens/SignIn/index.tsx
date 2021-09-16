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
          Organize{`\n`}
          suas jogatinas{`\n`}
          facilmente
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games
          favoritos com seus amigos
        </Text>

        <ButtonIcon 
          activeOpacity={0.7}
          title="Entrar com Discord" 
        />
        

      </View>
    </View>
  );
}
