// Each message will have a unique id,
// a username, the message text itself,
// and a timestamp to show when the message was sent.
// To make sure the id is unique, we will install the UUID type

export interface Chat {
    id?: string;
    username: string;
    message: string;
    timestamp: Date;
}