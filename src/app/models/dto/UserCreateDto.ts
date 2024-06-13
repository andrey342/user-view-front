export interface UserCreateDto {
  username: string;
  email: string;
  name?: string;
  address: AddressCreateDto;
  phone: string;
  website: string;
  company: CompanyCreateDto;
}

export interface AddressCreateDto {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoCreateDto;
}

export interface GeoCreateDto {
  lat: string;
  lng: string;
}

export interface CompanyCreateDto {
  name: string;
  catchPhrase: string;
  bs: string;
}
