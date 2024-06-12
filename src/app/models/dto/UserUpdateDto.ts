export interface UserUpdateDto {
  id: number;
  username: string;
  email: string;
  name?: string;
  address: AddressUpdateDto;
  phone: string;
  website: string;
  company: CompanyUpdateDto;
}

export interface AddressUpdateDto {
  id: number;
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoUpdateDto;
}

export interface GeoUpdateDto {
  id: number;
  lat: string;
  lng: string;
}

export interface CompanyUpdateDto {
  id: number;
  name: string;
  catchPhrase: string;
  bs: string;
}
