export interface ICliente {
   
    id : number,
    nome: string,
    telefone: string,
    email: string,
    observacoes :  string,
    enderecos: [
        {
            rua: string,
            cidade: string,
            travessa: string
        }
    ]
}

