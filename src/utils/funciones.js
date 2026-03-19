export const formatearPrecio = (precio) => {
    return new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(precio);
};

export const validate = (usuario) => {
    const errores = {};
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRe.test(usuario.correo)) errores.correo = "Correo inválido";
    if (!usuario.contraseña || usuario.contraseña.length < 6) errores.contraseña = "La contraseña debe tener al menos 6 caracteres";
    if (usuario.contraseñaDos && usuario.contraseña !== usuario.contraseñaDos) errores.contraseñaDos = "Las contraseñas no coinciden";
    return errores;
};
