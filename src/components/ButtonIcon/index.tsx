import React from "react";

import { RectButton, RectButtonProps } from "react-native-gesture-handler";

import { Text, Image, View } from "react-native";

import discordImg from "../../assets/discord.png";
import { styles } from "./styles";

type Props = RectButtonProps & {
  title: string,
}

export function ButtonIcon({ title, ...res }: Props) {
  return (
    <RectButton {...res} style={styles.container}>
      <View style={styles.iconWrapper}>
        <Image style={styles.icon} source={discordImg} />
      </View>

      <Text style={styles.title}>
        {title}
      </Text>
    </RectButton>
  );
}
