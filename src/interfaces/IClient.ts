interface IClient {
  method: string;
  name: string;
  value: string;
  city: string;
  region?: string;
  description: string;
  street?: string;
  district?: string;
  number?: number;
};

export { IClient };