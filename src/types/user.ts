export interface IUserInformation {
  session: ISession;
  user: IUser2;
}

interface ISession {
  access_token: string;
  token_type: string;
  expires_in: number;
  refresh_token: string;
  user: IUser;
  expires_at: number;
}

interface IUser {
  id: string;
  aud: string;
  role: string;
  email: string;
  email_confirmed_at: string;
  phone: string;
  confirmation_sent_at: string;
  confirmed_at: string;
  last_sign_in_at: string;
  app_metadata: IAppMetadata;
  user_metadata: IUserMetadata;
  identities: IIdentity[];
  created_at: string;
  updated_at: string;
}

interface IAppMetadata {
  provider: string;
  providers: string[];
}

interface IUserMetadata {}

interface IIdentity {
  id: string;
  user_id: string;
  identity_data: IIdentityData;
  provider: string;
  last_sign_in_at: string;
  created_at: string;
  updated_at: string;
}

interface IIdentityData {
  email: string;
  sub: string;
}

interface IUser2 {
  id: string;
  aud: string;
  role: string;
  email: string;
  email_confirmed_at: string;
  phone: string;
  confirmation_sent_at: string;
  confirmed_at: string;
  last_sign_in_at: string;
  app_metadata: IAppMetadata2;
  user_metadata: IUserMetadata2;
  identities: IIdentity2[];
  created_at: string;
  updated_at: string;
}

interface IAppMetadata2 {
  provider: string;
  providers: string[];
}

interface IUserMetadata2 {}

interface IIdentity2 {
  id: string;
  user_id: string;
  identity_data: IIdentityData2;
  provider: string;
  last_sign_in_at: string;
  created_at: string;
  updated_at: string;
}

interface IIdentityData2 {
  email: string;
  sub: string;
}
