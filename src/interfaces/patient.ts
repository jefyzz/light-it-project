export interface Patient {
  name: string;
  id: number;
  avatar: string;
  details: {
    label: string;
    value: string;
  }[];
}
