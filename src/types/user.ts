export type ThemeMode = "light" | "dark";

export type UserData = {
  name: string;
  email: string;
  city: string;
  bio: string;
  password: string;
};

export type Message = {
  type: "success" | "error" | "info";
  text: string;
} | null;
