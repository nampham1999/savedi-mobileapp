export interface LoginPayload {
  username: string;
  password: string;
  remember_me: boolean;
}

export interface RegisterPayload extends FormRegister {
  username: string;
  password: string;
  confirm_password: string;
  writer_type: string;
}

export interface DataLogin {
  access_token: string;
  expires_at: string;
  permissions: [];
  payload: {
    id: string;
  };
}

export interface AuthResponse<T> {
  data: T;
  statusCode: number;
}

export interface FormRegister {
  full_name: string;
  display_name: string;
  email: string;
  phone_no: string;
  birth_date: string;
}



export interface UserInfo {
  birth_date: string;
  created_at: string;
  created_by_uid: string | null;
  display_name: string;
  email: string;
  full_name: string;
  id: string;
  is_active: boolean;
  permissions: [];
  phone_no: string;
  updated_at: string;
  updated_by_uid: string | null;
  username: string;
  verified_at: null;
  image_path: [];
}
