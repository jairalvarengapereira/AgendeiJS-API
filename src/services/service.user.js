import repositoryUsers from "../repositories/repository.users.js";
import bcrypt from "bcrypt"
import jwt from "../token.js"

// Método Inserir
async function Inserir(name, email, password){  
  // Aqui é gerado o hash para a criptografia da senha
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await repositoryUsers.Inserir(name, email, hashedPassword);
  user.token = jwt.CreateToken(user.id_user);
  return user; 
}

async function AddUser(name, email, fone, logr, num, compl, bairro, cidade, uf){  
  // Aqui é gerado o hash para a criptografia da senha
  const user = await repositoryUsers.AddUser(name, email, fone, logr, num, compl, bairro, cidade, uf);
  user.token = jwt.CreateToken(user.id_user);
  return user; 
}

AddUser

// Método Editar User
async function EditUser(name, email, fone, cep, logr, num, compl, bairro, cidade, uf, id_user){
  const updatedUser = await repositoryUsers.EditUser(name, email, fone, cep, logr, num, compl, bairro, cidade, uf, id_user);
  return updatedUser; 
}

// Método Listar Users
async function Listar(){
  const users = await repositoryUsers.Listar();
  return users; 
}

// Método Listar User By ID
async function ListarUser(id_user){
  const user = await repositoryUsers.ListarUser(id_user);
  return user; 
}

// Método Login
async function Login(email, password){
  const user = await repositoryUsers.ListarByEmail(email);
  // Se o email não existir, retorna null
  if(user.length == 0) 
    return []
  else {
    // Se a senha conferir com o hash criptografado, retorna o usuário
    if (await bcrypt.compare(password, user.password)){
      delete user.password;

      user.token = jwt.CreateToken(user.id_user);

      return user;
    }else
      return [];  // Senha não confere, retorna null
  }
  return user; 
}

// Método InserirAdmin
async function InserirAdmin(name, email, password){  
  // Aqui é gerado o hash para a criptografia da senha
  const hashedPassword = await bcrypt.hash(password, 10);
  const admin = await repositoryUsers.InserirAdmin(name, email, hashedPassword);

  admin.token = jwt.CreateToken(admin.id_user);
  
  return admin; 
}

// Método LoginAdmin
async function LoginAdmin(email, password){
  const admin = await repositoryUsers.ListarByEmailAdmin(email);
  // Se o email não existir, retorna null
  if(admin.length == 0) 
    return []
  else {
    // Se a senha conferir com o hash criptografado, retorna o usuário
    if (await bcrypt.compare(password, admin.password)){
      delete admin.password;

      admin.token = jwt.CreateToken(admin.id_user);

      return admin;
    }else
      return [];  // Senha não confere, retorna null
  }
  return admin; 
}

// Método Profile
async function Profile(id_user){
  const user = await repositoryUsers.Profile(id_user);
  return user; 
}

// Método Excluir
async function DelUser(id_user){
  await repositoryUsers.DelUser(id_user);
}


// Exportando os Métodos
export default { AddUser, DelUser, Inserir, Login, Profile, LoginAdmin, InserirAdmin, Listar, ListarUser, EditUser };

