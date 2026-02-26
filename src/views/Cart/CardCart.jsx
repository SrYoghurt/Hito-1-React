
export default function CardCart({img, nombre, precio, cantidad, aumentar, disminuir}) {
    return (
        <div className="flex items-center gap-4 bg-white border-2 border-black rounded-sm p-4 hover:shadow-md transition-shadow">
            <img 
                src={img} 
                alt="imagen de pizza del carrito"
                className="w-24 h-24 object-cover"
            />
            <div className="flex-1">
                <h2 className="text-lg font-semibold text-black mb-1">
                    {nombre.toUpperCase()}
                </h2>
                <p className="text-lg font-bold text-black">
                    {precio}
                </p>
            </div>
            <div className="flex items-center gap-2">
                <button 
                    onClick={disminuir}
                    className="bg-amber rounded-sm hover:bg-gray-500 hover:text-amber-50 text-black font-bold py-2 px-3 transition-colors"
                >
                    −
                </button>
                <span className="text-lg font-bold text-black min-w-10 text-center">
                    {cantidad}
                </span>
                <button 
                    onClick={aumentar}
                    className="bg-amber rounded-sm hover:bg-gray-500 hover:text-amber-50 text-black font-bold py-2 px-3 transition-colors"
                >
                    +
                </button>
            </div>
        </div>
    )
}
