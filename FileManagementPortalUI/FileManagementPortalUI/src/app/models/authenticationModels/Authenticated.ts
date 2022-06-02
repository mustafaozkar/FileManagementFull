export interface Authenticated{
    userFirstName:string;
    userLastName:string;
    userEmail:string;
    token:string;
    expiration:Date;
}