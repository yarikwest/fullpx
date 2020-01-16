export interface LoginDataObject {
  email: string;
  password: string;
}

export interface AuthResponse {
  username: string;
  token: string;
  expiresIn: string;
}

export interface MsgResponse {
  object: string;
  code: number;
}

export interface SignUpDataObject {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
}

export interface User {
  id: bigint;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  phone: string;
  description: string;
  backgroundPhotoUrl: string;
  city: string;
}

export interface Photo {
  categories: Array<string>;
  description: string;
  imageUrl: string;
  created: string;
  album: string;
  user: User;

}

export interface Album {
  name: string;
  description: string;
  photos: Photo[];
}

export interface Feedback {
  author: string;
  text: string;
  username: string;
  created?: Date;
}

export interface Message {
  to: string;
  text: string;
  clientEmail: string;
  clientPhone: string;
}
