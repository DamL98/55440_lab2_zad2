import React from "react";
import { Text, View } from "react-native";
import { styles } from "../styles/userPanel.styles";
import type { UserData } from "../types/user";

type ProfileCardProps = {
  user: UserData;
  darkMode: boolean;
};

export function ProfileCard({ user, darkMode }: ProfileCardProps) {
  // const initials = useMemo(() => {
  //   const parts = user.name.trim().split(" ").filter(Boolean);

  //   if (parts.length === 0) {
  //     return "?";
  //   }

  //   if (parts.length === 1) {
  //     return parts[0].slice(0, 2).toUpperCase();
  //   }

  //   return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
  // }, [user.name]);

  return (
    <View style={[styles.profileCard, darkMode && styles.profileCardDark]}>
      {/* <View style={styles.avatar}>
        <Text style={styles.avatarText}>{initials}</Text>
      </View> */}

      <View style={styles.profileContent}>
        <Text style={[styles.profileName, darkMode && styles.textLight]}>
          {user.name || "Brak imienia"}
        </Text>

        <Text style={[styles.profileCity, darkMode && styles.textSoftDark]}>
          {user.city || "Brak miasta"}
        </Text>

        <Text style={[styles.profileBio, darkMode && styles.textSoftDark]}>
          {user.bio || "Brak opisu"}
        </Text>
      </View>
    </View>
  );
}
