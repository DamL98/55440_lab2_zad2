import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#efe7dc",
  },

  safeAreaDark: {
    backgroundColor: "#10151f",
  },
  keyboardView: {
    flex: 1,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 18,
    paddingTop: 18,
    paddingBottom: 34,
  },
  header: {
    marginBottom: 16,
  },
  kicker: {
    fontSize: 12,
    fontWeight: "800",
    color: "#776958",
    textTransform: "uppercase",
    letterSpacing: 1.2,
    marginBottom: 6,
  },
  title: {
    fontSize: 29,
    fontWeight: "900",
    color: "#201915",
  },
  subtitle: {
    marginTop: 8,
    fontSize: 14,
    lineHeight: 20,
    color: "#6f6255",
  },
  profileCard: {
    flexDirection: "row",
    backgroundColor: "#fff9ef",
    borderRadius: 24,
    padding: 16,
    borderWidth: 1,
    borderColor: "#d5c8b5",
    marginBottom: 16,
  },
  profileCardDark: {
    backgroundColor: "#182131",
    borderColor: "#2b394d",
  },
  avatar: {
    width: 66,
    height: 66,
    borderRadius: 20,
    backgroundColor: "#473325",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },
  avatarText: {
    color: "#fff5e7",
    fontSize: 22,
    fontWeight: "900",
  },
  profileContent: {
    flex: 1,
  },
  profileName: {
    fontSize: 20,
    fontWeight: "900",
    color: "#231a14",
  },
  profileCity: {
    fontSize: 14,
    color: "#75685a",
    marginTop: 3,
    fontWeight: "700",
  },
  profileBio: {
    marginTop: 8,
    fontSize: 14,
    lineHeight: 20,
    color: "#62564a",
  },
  section: {
    backgroundColor: "#fff9ef",
    borderRadius: 24,
    padding: 16,
    borderWidth: 1,
    borderColor: "#d5c8b5",
    marginBottom: 16,
  },
  sectionDark: {
    backgroundColor: "#182131",
    borderColor: "#2b394d",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "900",
    color: "#201915",
    marginBottom: 14,
  },
  field: {
    marginBottom: 13,
  },
  fieldTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  label: {
    fontSize: 13,
    fontWeight: "800",
    color: "#655849",
    marginBottom: 6,
  },
  fieldAction: {
    fontSize: 13,
    fontWeight: "900",
    color: "#7a3d1d",
    marginBottom: 6,
  },
  fieldActionDark: {
    color: "#f6bc6b",
  },
  input: {
    minHeight: 46,
    borderRadius: 15,
    paddingHorizontal: 13,
    borderWidth: 1,
    borderColor: "#d4c5b3",
    backgroundColor: "#f7efe4",
    color: "#211a15",
    fontSize: 15,
  },
  inputDark: {
    backgroundColor: "#111827",
    borderColor: "#34445c",
    color: "#f4f7fb",
  },
  inputMultiline: {
    minHeight: 96,
    paddingTop: 12,
    textAlignVertical: "top",
  },
  inputError: {
    borderColor: "#c24131",
  },
  counter: {
    alignSelf: "flex-end",
    marginTop: -6,
    marginBottom: 12,
    fontSize: 12,
    fontWeight: "800",
    color: "#776958",
  },
  counterError: {
    color: "#c24131",
  },
  messageBox: {
    borderRadius: 15,
    paddingVertical: 11,
    paddingHorizontal: 12,
    marginBottom: 13,
  },
  messageSuccess: {
    backgroundColor: "#2f6d45",
  },
  messageError: {
    backgroundColor: "#a83f32",
  },
  messageInfo: {
    backgroundColor: "#365f82",
  },
  messageText: {
    color: "#ffffff",
    fontSize: 13,
    lineHeight: 18,
    fontWeight: "700",
  },
  saveButton: {
    minHeight: 48,
    borderRadius: 16,
    backgroundColor: "#2a211b",
    alignItems: "center",
    justifyContent: "center",
  },
  saveButtonText: {
    color: "#fff4e5",
    fontWeight: "900",
    fontSize: 15,
  },
  settingsRow: {
    minHeight: 66,
    borderRadius: 17,
    paddingHorizontal: 13,
    paddingVertical: 11,
    backgroundColor: "#f4eadc",
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  settingsRowDark: {
    backgroundColor: "#111827",
  },
  settingsRowDanger: {
    backgroundColor: "#fff0eb",
    borderWidth: 1,
    borderColor: "#e8a192",
  },
  settingsTextBox: {
    flex: 1,
    paddingRight: 12,
  },
  settingsTitle: {
    fontSize: 15,
    fontWeight: "900",
    color: "#251c17",
  },
  settingsDescription: {
    marginTop: 3,
    fontSize: 12,
    lineHeight: 17,
    color: "#75685a",
    fontWeight: "600",
  },
  fakeSwitch: {
    width: 48,
    height: 28,
    borderRadius: 999,
    backgroundColor: "#c8b9a7",
    padding: 4,
    justifyContent: "center",
  },
  fakeSwitchDark: {
    backgroundColor: "#2c3a50",
  },
  fakeSwitchActive: {
    backgroundColor: "#2f6d45",
  },
  fakeSwitchActiveDark: {
    backgroundColor: "#e0a536",
  },
  fakeSwitchDot: {
    width: 20,
    height: 20,
    borderRadius: 999,
    backgroundColor: "#ffffff",
  },
  fakeSwitchDotActive: {
    alignSelf: "flex-end",
  },
  logoutBox: {
    backgroundColor: "#f7e3dc",
    borderColor: "#ddb4a9",
    borderWidth: 1,
    borderRadius: 24,
    padding: 16,
  },
  logoutBoxDark: {
    backgroundColor: "#251b22",
    borderColor: "#553040",
  },
  logoutTitle: {
    fontSize: 17,
    fontWeight: "900",
    color: "#221814",
  },
  logoutText: {
    marginTop: 5,
    marginBottom: 12,
    fontSize: 13,
    lineHeight: 18,
    color: "#706056",
  },
  logoutButton: {
    minHeight: 45,
    borderRadius: 15,
    backgroundColor: "#9f3129",
    alignItems: "center",
    justifyContent: "center",
  },
  logoutButtonText: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "900",
  },
  dangerText: {
    color: "#a43128",
  },
  textLight: {
    color: "#f4f7fb",
  },
  textSoftDark: {
    color: "#a8b3c4",
  },
  pressed: {
    opacity: 0.72,
    transform: [{ scale: 0.99 }],
  },
});
