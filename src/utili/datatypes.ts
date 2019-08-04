export interface credentials{
    username: string, 
    password: string,
}

export interface fullcredentials extends credentials{
    email: string
}