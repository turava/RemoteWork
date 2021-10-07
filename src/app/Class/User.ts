export class User  {
  user: {
    //uid: string;
    name: string;
    surname: string;
    phone: string;
    email: string;
    adress: string;
    pc: number;
    city: string;
    country: string;
    birthday: string;
  };
  token: string;
  constructor() {
    this.user = {
      //uid: '',
      name : '',
      surname : '',
      phone : '',
      email : '',
      adress : '',
      pc: 0,
      city: '',
      country: '',
      birthday: '',
    };
    this.token = '';
  }
}

