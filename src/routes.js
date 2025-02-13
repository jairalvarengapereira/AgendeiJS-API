import { Router } from "express";
import controllerServices from './controllers/controller.services.js';
import controllerDoctor from './controllers/controller.doctor.js';
import controllerUser from './controllers/controller.user.js'
import controllerAppointment from "./controllers/controller.appointment.js";
import jwt from './token.js'

const router = Router(); // Instanciando o Router corretamente

// Doctors
router.get('/doctors', jwt.ValidateToken, controllerDoctor.Listar); 
router.get('/doctors/:id_doctor', jwt.ValidateToken, controllerDoctor.ListarDoctor); 
router.post('/doctors', jwt.ValidateToken, controllerDoctor.Inserir);
router.put('/doctors/:id_doctor', jwt.ValidateToken, controllerDoctor.Editar); 
router.delete('/doctors/:id_doctor', jwt.ValidateToken, controllerDoctor.Excluir); 
router.get('/doctors/:id_doctor/services',  controllerDoctor.ListarServicos); 

// Users
router.post('/users', controllerUser.AddUser); 
router.post('/users/login', controllerUser.Login); 
router.delete('/users/:id_user', jwt.ValidateToken, controllerUser.DelUser); 
router.get('/users/profile', jwt.ValidateToken, controllerUser.Profile); 
router.get('/users/:id_user', jwt.ValidateToken, controllerUser.ListarUser); 
router.put('/users/:id_user', jwt.ValidateToken, controllerUser.EditUser); 

// Rotas Services
router.get('/services', controllerServices.Listar); 
// router.post('/services', jwt.ValidateToken, controllerService.Inserir); 
// router.put('/services/:id_service', jwt.ValidateToken, controllerService.Editar); 
// router.delete('/services/:id_service', jwt.ValidateToken, controllerService.Excluir); 
// router.get('/services/:id_service/doctors',  controllerService.ListarDoctors);

// Reservas (appointments)
router.get('/appointments', jwt.ValidateToken, controllerAppointment.ListarByUser); 
router.post('/appointments', jwt.ValidateToken, controllerAppointment.Inserir); 
router.delete('/appointments/:id_appointment', jwt.ValidateToken, controllerAppointment.Excluir); 

// Rotas Admin
router.post('/admin/register', controllerUser.InserirAdmin); 
router.post('/admin/login', controllerUser.LoginAdmin); 
router.get('/admin/appointments', jwt.ValidateToken, controllerAppointment.Listar); 
router.get('/admin/users', jwt.ValidateToken, controllerUser.Listar); 
router.get('/admin/appointments/:id_appointment', jwt.ValidateToken, controllerAppointment.ListarId); 
router.post('/admin/appointments', jwt.ValidateToken, controllerAppointment.InserirAdmin); 
router.put('/admin/appointments/:id_appointment', jwt.ValidateToken, controllerAppointment.EditarAdmin); 

export default router;