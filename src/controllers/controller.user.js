import serviceUser from "../services/service.user.js";

// Método Inserir
async function AddUser(req, res){
  const {name, email, fone, cep, logr, num, compl, bairro, cidade, uf } = req.body;
  const user = await serviceUser.AddUser(name, email, fone, cep, logr, num, compl, bairro, cidade, uf);
  res.status(201).json(user);
}

// Método Listar Users By ID
async function ListarUser(req, res){
  const id_user = req.params.id_user;
  const user = await serviceUser.ListarUser(id_user);
  res.status(200).json(user);
}

// Metodo Editar User
async function EditUser(req, res){
  const id_user = req.params.id_user;
  const {name, email, fone, cep, logr, num, compl, bairro, cidade, uf} = req.body;
  const updatedUser = await serviceUser.EditUser(name, email, fone, cep, logr, num, compl, bairro, cidade, uf, id_user);
  res.status(200).json(updatedUser);
}

// Método Login
async function Login(req, res){
  const {email, password } = req.body;
  const user = await serviceUser.Login(email, password);

  if (user == 0)
    res.status(401).json({ error: "E-mail ou senha inválida" });
  else
    res.status(201).json(user);
}

// Método InserirAdmin
async function InserirAdmin(req, res){
  const {name, email, password } = req.body;
  const admin = await serviceUser.InserirAdmin(name, email, password);
  res.status(201).json(admin);
}

// Método Logindmin
async function LoginAdmin(req, res){
  const {email, password } = req.body;
  const admin = await serviceUser.LoginAdmin(email, password);

  if (admin == 0)
    res.status(401).json({ error: "E-mail ou senha inválida" });
  else
    res.status(201).json(admin);
}

// Método Listar Users
async function Profile(req, res){
  const id_user = req.id_user;
  const users = await serviceUser.Profile(id_user);
  res.status(200).json(users);
}

// Método Listar Users
async function Listar(req, res){
  const users = await serviceUser.Listar();
  res.status(200).json(users);
}

// Método Excluir
async function DelUser(req, res){
  const id_user = req.params.id_user;
  await serviceUser.DelUser(id_user);
  res.status(204).send();
}

// Métodos relacionados ao nome do médico
export default { AddUser, DelUser, Login, Profile, InserirAdmin, LoginAdmin, Listar, ListarUser, EditUser };