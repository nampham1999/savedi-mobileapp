interface IRegex {
  key: string;
  data: RegExp;
}

export const regexMap = {
  userName: /^[a-zA-Z0-9]{6,}$/,
  fullName: /^[a-zA-Z\u0E00-\u0E7F]+ [a-zA-Z\u0E00-\u0E7F]+$/,
  text: /^[a-zA-Z0-9\u0E00-\u0E7F]{6,}$/,
  email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
  phone: /^0[689]\d{8}$/,
  notBlank: /\S/,
  trueOnly: /^(true)$/i,
  password:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{}|;:'",.<>?/]).{8,}$/,
  date: /^\d{4}-\d{2}-\d{2}$/,
  idCard: /^[0-9]{13}$/,
  backNumber: /^\d{10,14}$/,
};
