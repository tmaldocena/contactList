export class Contact{
    name = '';
    phone_number = '';
    email = '';
    online = false;

    constructor(name, phone, mail, online){
        this.name = name;
        this.phone_number = phone;
        this.email = mail;
        this.online = online;
    }

}