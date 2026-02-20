
export const formatearPrecio = (precio) => {
    return new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(precio);
};

export const validate = () => {
    const errores = {};
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRe.test(usuario.correo)) errores.correo = "Correo inválido";
    if (!usuario.contraseña || usuario.contraseña.length < 6) errores.contraseña = "La contraseña debe tener al menos 6 caracteres";
    return errores;
};
