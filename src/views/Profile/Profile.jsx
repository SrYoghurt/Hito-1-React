import { useState, useEffect } from 'react';

export default function Profile() {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        avatar: '',
        loading: true,
    });

    // Carga datos del cliente, por ahora estaticos, pero se simula una consulta a una API con un setTimeout
    useEffect(() => {
        setTimeout(() => {
            setUserData({
                name: 'Milton Javier Monsalves Veas',
                email: 'milton@example.com',
                phone: '',
                address: 'Av. Siempre Viva 123, Springfield',
                avatar: 'https://media.licdn.com/dms/image/v2/D4E03AQEBBMxDlvu4Rw/profile-displayphoto-scale_400_400/B4EZh32jpMGUAg-/0/1754357447965?e=1773878400&v=beta&t=4SJ__yFCimi-S8EMPD3Ofp-r9H0GyXvvl5Hasz4TCtE',
                loading: false,
            });
        }, 800);
    }, []);

    if (userData.loading) {
        return (
            <div className="min-h-screen bg-amber-50 flex items-center justify-center">
                <div className="text-xl font-bold text-amber-600 animate-pulse">Cargando perfil...</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-amber-50 py-12 px-4">
            <div className="max-w-md mx-auto">
                <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="text-center mb-6">
                        <img
                            src={userData.avatar}
                            alt="Avatar"
                            className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-amber-200"
                        />
                        <h1 className="text-2xl font-bold text-gray-800">{userData.name}</h1>
                        <p className="text-amber-600">{userData.email}</p>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-600">Teléfono</label>
                            <p className="text-gray-800">{userData.phone || 'No especificado'}</p>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-600">Dirección</label>
                            <p className="text-gray-800">{userData.address}</p>
                        </div>
                    </div>

                    <div className="mt-6 space-y-2">
                        <button className="w-full bg-amber-500 text-white py-2 px-4 rounded-md hover:bg-amber-600 transition-colors">
                            Editar Perfil
                        </button>
                        <button className="w-full bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300 transition-colors">
                            Cerrar Sesión
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
