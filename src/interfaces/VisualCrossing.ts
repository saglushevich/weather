interface IHours {
  datetime: string;
  temp: number;
  icon: string;
}

export interface ITransformedVisualCrossing {
  datetime: string;
  hours: IHours[];
}
