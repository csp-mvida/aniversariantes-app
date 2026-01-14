
export interface BirthdayEntry {
  day: number;
  name: string;
  department: string;
}

export interface AppState {
  month: number;
  year: number;
  rawList: string;
  parsedBirthdays: BirthdayEntry[];
}
