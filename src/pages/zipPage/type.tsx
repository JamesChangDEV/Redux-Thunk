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

export type ZipType = {
  zip: {
    data: DataType;
    errors: string;
    loading: boolean;
  };
  router: any;
};
