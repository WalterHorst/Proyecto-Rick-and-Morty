const validation=(userData)=>{
const errors = {};
if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(userData.email)){
    errors.email="Email invalido"
}
if(!userData.email){
    errors.email="Debe ingresar un email"};
if(userData.email.length > 35){
    errors.email="El email no debe superar los 35 caracteres"};
if(!/^(?=.*\d).+$/.test(userData.password)){
  errors.password="Debe contener al menos 1 numero "
}
if(userData.password.length < 6 || userData.password.length > 10 ){
    errors.password="Debe contener entre 6 y 10 caracteres"
}



    return errors;
};

export default validation;