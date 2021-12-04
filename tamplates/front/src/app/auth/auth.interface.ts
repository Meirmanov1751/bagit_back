export class Login {
  username: string;
  password: string;
}

export class Registration {
  username: string;
  password: string;
}

export class Token {
  refresh: string;
  access: string;
}

export class Verify {
  uid: string;
  token: string;
}
