export interface UserReadDto {
  id: number;
  username: string;
  email: string;
  name?: string;
  address: AddressReadDto;
  phone: string;
  website: string;
  company: CompanyReadDto;
}

export interface AddressReadDto {
  id: number;
  street: string;
  suite: string;
  city: string;
  zipcode: string;
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
