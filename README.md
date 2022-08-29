## API para cadastros de usuários, utilizando o prisma como ORM para conectar com o SQLite.

## Endpoint para buscar todos os usuários

```shell
https://api-user-authenticate-production.up.railway.app/users
```

#### Retorno para esse endpoint

```javascript
[
  {
    "name": "John Doe",
    "email": "JohnDoe@gmail.com"
  },
]
```

## Endpoint para cadastro de usuários

```shell
https://api-user-authenticate-production.up.railway.app/user
```

#### Requisição esperada para esse endpoint

```javascript
{
  name: John Doe,
  password: 1234,
  email: JohnDoe@gmail.com
}
```

## Lidando com erros

### caso o email não seja preenchido, será retornado um erro 400 e um json

```javascript
{
  message: "Os dados inseridos estão inválidos"
}
```

### caso a senha não seja preenchida, será retornado um erro 400 e um json

```javascript
{
  message: "Os dados inseridos estão inválidos"
}
```
### caso a senha possua menos que 3 carácteres, será retornado um erro 400 e um json

```javascript
{
  message: "Os dados inseridos estão inválidos"
}
```
### caso o email esteja inválido, será retornado um erro 400 e um json

```javascript
{
  message: "Os dados inseridos estão inválidos"
}
```
### caso o email já esteja cadastrado, será retornado um erro 402 e um json

```javascript
{
  message: "Email já está em uso"
}
