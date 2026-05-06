import React from "react";
import { Pressable, Text, View } from "react-native";
import { styles } from "../styles/userPanel.styles";

type SettingsRowProps = {
  title: string;
  description: string;
  active?: boolean;
  danger?: boolean;
  darkMode: boolean;
  onPress: () => void;
};

export function SettingsRow({
  title,
  description,
  active,
  danger,
  darkMode,
  onPress,
}: SettingsRowProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.settingsRow,
        darkMode && styles.settingsRowDark,
        danger && styles.settingsRowDanger,
        pressed && styles.pressed,
      ]}
    >
      <View style={styles.settingsTextBox}>
        <Text
          style={[
            styles.settingsTitle,
            darkMode && styles.textLight,
            danger && styles.dangerText,
          ]}
        >
          {title}
        </Text>

        <Text
          style={[styles.settingsDescription, darkMode && styles.textSoftDark]}
        >
          {description}
        </Text>
      </View>

      {!danger && (
        <View
          style={[
            styles.fakeSwitch,
            active && styles.fakeSwitchActive,
            darkMode && styles.fakeSwitchDark,
            active && darkMode && styles.fakeSwitchActiveDark,
          ]}
        >
          <View
            style={[styles.fakeSwitchDot, active && styles.fakeSwitchDotActive]}
          />
        </View>
      )}
    </Pressable>
  );
}
