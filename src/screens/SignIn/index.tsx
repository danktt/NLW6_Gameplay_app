import React from "react";
import illustrationImg from "../../assets/illustration.png";

import { View, Text, Image } from "react-native";
import { ButtonIcon } from "../../components/ButtonIcon";


import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";

export function SignIn() {
  const navigation = useNavigation();

  function handlerSignIn() {
    navigation.navigate('Home')
  }

  return (
    <View style={styles.container}>
      <Image
        source={illustrationImg}
        style={styles.image}
        resizeMode="stretch"
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se{"\n"}e organize suas{"\n"}
          jogatinas
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games{"\n"}
          favoritos com seus amigos
        </Text>

        <ButtonIcon 
        title="Entre com Discord" 
        onPress={handlerSignIn}
        />
      </View>
    </View>
  );
}
