import { FaceFrownIcon } from "@heroicons/react/24/outline";
// componente se muestra cuando el usuario intenta acceder a una ruta que no existe.
export default function NotFound() {
    return (
        <div className="bg-amber-50">
            <div className="flex justify-center py-4">
                <FaceFrownIcon className="size-50 text-gray-900" />
            </div>
            <h1 className="text-4xl font-bold text-center py-8 text-gray-900">404 - Not Found</h1>
            <p className="text-center py-4 text-gray-900">La página que estás buscando no existe.</p>
        </div>
    )
}
