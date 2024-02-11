function Professions() {
  return (
    <div className="bg-gray-100 h-full w-full px-7 pt-6">
        <h1 className="text-gray-600 text-2xl">Profesiones</h1>
        <ul className="w-[1000px] bg-white rounded-lg">
            <li className="text-center text-white bg-blue-600 rounded-t-lg font-bold text-lg py-2 mt-2">Listado de profesiones</li>
            <li className="text-center text-gray-700 border-b border-x text-lg py-2 cursor-pointer hover:bg-gray-50">Abogado</li>
            <li className="text-center text-gray-700 border-b border-x text-lg py-2 cursor-pointer hover:bg-gray-50">Arquitecto</li>
            <li className="text-center text-gray-700 border-b border-x text-lg py-2 cursor-pointer hover:bg-gray-50">Botánico</li>
            <li className="text-center text-gray-700 border-b border-x text-lg py-2 cursor-pointer hover:bg-gray-50">Computista</li>
            <li className="text-center text-gray-700 border-b border-x text-lg py-2 cursor-pointer hover:bg-gray-50">Economista</li>
            <li className="text-center text-gray-700 border-b border-x text-lg py-2 cursor-pointer hover:bg-gray-50">Técnico de sonido</li>
            <li className="text-center text-gray-700 border-b border-x text-lg py-2 cursor-pointer hover:bg-gray-50">Profesor</li>
            <li className="text-center text-gray-700 border-b border-x text-lg py-2 cursor-pointer rounded-b-lg hover:bg-gray-50">Lingüista</li>
        </ul>
    </div>
  )
}

export default Professions