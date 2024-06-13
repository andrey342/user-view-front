export interface UserReadDto {
  id: number;
  username: string;
  email: string;
  name?: string;
  addressId: number;
  address: AddressReadDto;
  phone: string;
  website: string;
  companyId: number;
  company: CompanyReadDto;
}

export interface AddressReadDto {
  id: number;
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geoId: number;
  geo: GeoReadDto;
}

export interface GeoReadDto {
  id: number;
  lat: string;
  lng: string;
}

export interface CompanyReadDto {
  id: number;
  name: string;
  catchPhrase: string;
  bs: string;
}
