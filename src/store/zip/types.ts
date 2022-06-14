export type DataType = {
  "post code": string;
  country: string;
  "country abbreviation": string;
  places: [
    {
      "place name": string;
      longitude: string;
      state: string;
      "state abbreviation": string;
      latitude: string;
    }
  ];
};

export enum ZipActionTypes {
  FETCH_REQUEST = "@@zip/FETCH_REQUEST",
  FETCH_SUCCESS = "@@zip/FETCH_SUCCESS",
  FETCH_ERROR = "@@zip/FETCH_ERROR"
}

export interface ZipState {
  readonly loading: boolean;
  readonly data: DataType[];
  readonly errors?: string;
}
