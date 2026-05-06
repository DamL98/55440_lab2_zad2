import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
    KeyboardAvoidingView,
    Platform,
    Pressable,
    ScrollView,
    Text,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { FormField } from "../components/FormField";
import { ProfileCard } from "../components/ProfileCard";
import { SettingsRow } from "../components/SettingsRow";

import { BIO_LIMIT } from "../constants/userPanel";
import { defaultUser } from "../data/userData";
import { styles } from "../styles/userPanel.styles";

import type { Message, ThemeMode, UserData } from "../types/user";

export default function UserPanelScreen() {
  const [darkMode, setDarkMode] = useState(false);
  const [savedUser, setSavedUser] = useState<UserData>(defaultUser);
  const [form, setForm] = useState<UserData>(defaultUser);

  const [message, setMessage] = useState<Message>(null);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [bioError, setBioError] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [privateProfile, setPrivateProfile] = useState(false);

  const theme: ThemeMode = darkMode ? "dark" : "light";
  const bioCharactersLeft = BIO_LIMIT - form.bio.length;

  const updateForm = (field: keyof UserData, value: string) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));

    setMessage(null);
  };

  const validateForm = () => {
    const invalidName = form.name.trim().length === 0;
    const invalidEmail = !form.email.includes("@");
    const invalidBio = form.bio.length > BIO_LIMIT;

    setNameError(invalidName);
    setEmailError(invalidEmail);
    setBioError(invalidBio);

    if (invalidName || invalidEmail || invalidBio) {
      const errors = [];

      if (invalidName) {
        errors.push("imię nie może być puste");
      }

      if (invalidEmail) {
        errors.push("e-mail musi zawierać znak @");
      }

      if (invalidBio) {
        errors.push(`bio może mieć max ${BIO_LIMIT} znaków`);
      }

      setMessage({
        type: "error",
        text: `Popraw formularz: ${errors.join(", ")}.`,
      });

      return false;
    }

    return true;
  };

  const handleSave = () => {
    const isValid = validateForm();

    if (!isValid) {
      return;
    }

    setSavedUser({
      ...form,
      name: form.name.trim(),
      email: form.email.trim(),
      city: form.city.trim(),
      bio: form.bio.trim(),
    });

    setMessage({
      type: "success",
      text: "Dane profilu zapisane.",
    });
  };

  const handleLogout = () => {
    setMessage({
      type: "info",
      text: "Wyloguj clicked",
    });
  };

  return (
    <SafeAreaView
      style={[styles.safeArea, darkMode && styles.safeAreaDark]}
      edges={["top", "left", "right"]}
    >
      <StatusBar style={darkMode ? "light" : "dark"} />

      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.header}>
            <Text style={[styles.kicker, darkMode && styles.textSoftDark]}>
              Panel usera
            </Text>

            <Text style={[styles.title, darkMode && styles.textLight]}>
              Ustawienia profilu
            </Text>
          </View>

          <ProfileCard user={savedUser} darkMode={darkMode} />

          <View style={[styles.section, darkMode && styles.sectionDark]}>
            <Text style={[styles.sectionTitle, darkMode && styles.textLight]}>
              Edycja danych
            </Text>

            <FormField
              label="Imię"
              value={form.name}
              placeholder="Wpisz imię"
              darkMode={darkMode}
              error={nameError}
              onChangeText={(text) => updateForm("name", text)}
            />

            <FormField
              label="E-mail"
              value={form.email}
              placeholder="np. osoba@example.com"
              darkMode={darkMode}
              error={emailError}
              keyboardType="email-address"
              autoCapitalize="none"
              onChangeText={(text) => updateForm("email", text)}
            />

            <FormField
              label="Miasto"
              value={form.city}
              placeholder="Wpisz miasto"
              darkMode={darkMode}
              onChangeText={(text) => updateForm("city", text)}
            />

            <FormField
              label="Bio"
              value={form.bio}
              placeholder="Krótki opis profilu"
              darkMode={darkMode}
              error={bioError}
              multiline
              onChangeText={(text) => updateForm("bio", text)}
            />

            <Text
              style={[
                styles.counter,
                darkMode && styles.textSoftDark,
                bioCharactersLeft < 0 && styles.counterError,
              ]}
            >
              {form.bio.length}/{BIO_LIMIT} znaków
            </Text>

            <FormField
              label="Hasło"
              value={form.password}
              placeholder="Wpisz nowe hasło"
              darkMode={darkMode}
              secureTextEntry={!showPassword}
              autoCapitalize="none"
              rightActionLabel={showPassword ? "Ukryj" : "Pokaż"}
              onRightAction={() => setShowPassword((value) => !value)}
              onChangeText={(text) => updateForm("password", text)}
            />

            {message && (
              <View
                style={[
                  styles.messageBox,
                  message.type === "success" && styles.messageSuccess,
                  message.type === "error" && styles.messageError,
                  message.type === "info" && styles.messageInfo,
                ]}
              >
                <Text style={styles.messageText}>{message.text}</Text>
              </View>
            )}

            <Pressable
              onPress={handleSave}
              style={({ pressed }) => [
                styles.saveButton,
                pressed && styles.pressed,
              ]}
            >
              <Text style={styles.saveButtonText}>Zapisz zmiany</Text>
            </Pressable>
          </View>

          <View style={[styles.section, darkMode && styles.sectionDark]}>
            <Text style={[styles.sectionTitle, darkMode && styles.textLight]}>
              Ustawienia
            </Text>

            <SettingsRow
              title="Powiadomienia"
              description={notifications ? "Włączone" : "Wyłączone"}
              active={notifications}
              darkMode={darkMode}
              onPress={() => setNotifications((value) => !value)}
            />

            <SettingsRow
              title="Prywatność"
              description={
                privateProfile ? "Profil prywatny" : "Profil publiczny"
              }
              active={privateProfile}
              darkMode={darkMode}
              onPress={() => setPrivateProfile((value) => !value)}
            />

            <SettingsRow
              title="Ciemny motyw"
              description={theme === "dark" ? "Aktywny" : "Nieaktywny"}
              active={darkMode}
              darkMode={darkMode}
              onPress={() => setDarkMode((value) => !value)}
            />
          </View>

          <View style={[styles.logoutBox, darkMode && styles.logoutBoxDark]}>
            <Pressable
              onPress={handleLogout}
              style={({ pressed }) => [
                styles.logoutButton,
                pressed && styles.pressed,
              ]}
            >
              <Text style={styles.logoutButtonText}>Wyloguj</Text>
            </Pressable>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
