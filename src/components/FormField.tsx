import React from "react";
import {
    KeyboardTypeOptions,
    Pressable,
    Text,
    TextInput,
    TextInputProps,
    View,
} from "react-native";
import { styles } from "../styles/userPanel.styles";

type FormFieldProps = {
  label: string;
  value: string;
  placeholder: string;
  darkMode: boolean;
  error?: boolean;
  multiline?: boolean;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
  autoCapitalize?: TextInputProps["autoCapitalize"];
  rightActionLabel?: string;
  onRightAction?: () => void;
  onChangeText: (text: string) => void;
};

export function FormField({
  label,
  value,
  placeholder,
  darkMode,
  error,
  multiline,
  secureTextEntry,
  keyboardType = "default",
  autoCapitalize = "sentences",
  rightActionLabel,
  onRightAction,
  onChangeText,
}: FormFieldProps) {
  return (
    <View style={styles.field}>
      <View style={styles.fieldTop}>
        <Text style={[styles.label, darkMode && styles.textSoftDark]}>
          {label}
        </Text>

        {rightActionLabel && onRightAction && (
          <Pressable onPress={onRightAction} hitSlop={8}>
            <Text
              style={[styles.fieldAction, darkMode && styles.fieldActionDark]}
            >
              {rightActionLabel}
            </Text>
          </Pressable>
        )}
      </View>

      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={darkMode ? "#7f8a99" : "#9a8f84"}
        multiline={multiline}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        style={[
          styles.input,
          multiline && styles.inputMultiline,
          darkMode && styles.inputDark,
          error && styles.inputError,
        ]}
      />
    </View>
  );
}
