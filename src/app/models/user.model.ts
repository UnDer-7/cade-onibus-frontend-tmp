import { SocialUser } from 'angularx-social-login';
import { Base } from './base.model';
import { Bus } from './bus.model';

export interface User extends Base {
  google_id?: string;
  name?: string;
  email?: string;
  password?: string;
  bus?: Bus[];
}

export function ObjectToUser(user: any): User {
  return Object.assign({}, {
    _id: user.id,
    google_id: user.google_id,
    name: user.name,
    email: user.email,
    password: user.password,
    bus: user.bus,
    createdAt: user.createdAt,
  });
}

export function SocialUserToUser(socialUser: SocialUser): User {
  return Object.assign({}, {
    google_id: socialUser.id,
    name: socialUser.name,
    email: socialUser.email,
    bus: [],
  });
}
