export interface User {
  id: number;
  username: string;
  email: string;
  name?: string;
  addressId: number;
  address: Address;
  phone: string;
  website: string;
  companyId: number;
  company: Company;
}

export interface Address {
  id: number;
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geoId: number;
  geo: Geo;
}

export interface Geo {
  id: number;
  lat: string;
  lng: string;
}

export interface Company {
  id: number;
  name: string;
  catchPhrase: string;
  bs: string;
}
