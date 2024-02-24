function Inscribe() {
  return (
    <div className="px-8 pt-5">
      <h1 className="font-bold text-blue-900 text-lg">Añade un aspirante aquí...</h1>
      {/* <div className="w-100 h-[1px] bg-gray-300 my-4"></div> */}
      <form action="" className="flex flex-col justify-s w-full space-y-2 font- text-sm text-slate-600">
        <h2 className="mt-2 font-medium text-slate-600 text-md">Datos personales</h2>
        <div className="w-100 h-[0.5px] bg-gray-300 my-2 "></div>
        <div className="flex flex-row w-full">
          <label htmlFor="dni" className="w-1/5">D.N.I.</label>
          <input type="text" placeholder="Ingresa un DNI..." className="w-1/2 border px-1 rounded-sm py-1 placeholder:ml-5 hover:border-gray-400" />
        </div>
        <div className="flex flex-row w-full">
          <label htmlFor="lastname" className="w-1/5">Apellido</label>
          <input type="text" placeholder="Ingresa tu apellido..." className="w-1/2 border px-1 rounded-sm py-1 placeholder:ml-5 hover:border-gray-400" />
        </div>
        <div className="flex flex-row w-full">
          <label htmlFor="name" className="w-1/5">Nombre/s</label>
          <input type="text" placeholder="Ingresa tu nombre..." className="w-1/2 border px-1 rounded-sm py-1 placeholder:ml-5 hover:border-gray-400" />
        </div>
        <div className="flex flex-row w-full">
          <label htmlFor="gender" className="w-1/5">Género</label>
          <select id="alternativas" className="w-1/2 border px-1 rounded-sm px-2 py-1 placeholder:ml-5 hover:border-gray-400" name="alternativas">
            <option value="masculino">Masculino</option>
            <option value="femenino">Femenino</option>
            <option value="otro">Otro</option>
          </select><br></br>
        </div>
        <div className="flex flex-row w-full">
          <label htmlFor="fecha" className="w-1/5">Fecha de nacimiento</label>
          <input type="date" id="fecha" name="fecha" className="w-1/2 border px-1 rounded-sm px-2 py-1 placeholder:ml-5 hover:border-gray-400" />
        </div>
        <div className="flex flex-row w-full">
          <label htmlFor="email" className="w-1/5">Correo electrónico</label>
          <input type="text" placeholder="Ingresa tu email..." className="w-1/2 border px-1 rounded-sm py-1 placeholder:ml-5 hover:border-gray-400" />
        </div>
        <h2 className="pt-4 font-medium text-slate-600 text-md">Datos profesionales</h2>
        <div className="w-100 h-[0.5px] bg-gray-300 my-2 "></div>
        <div className="flex flex-row w-full">
          <label htmlFor="linkedin" className="w-1/5">Perfil de LinkedIn</label>
          <input type="text" placeholder="Ingresa tu perfil de LinkedIn..." className="w-1/2 border px-1 rounded-sm py-1 placeholder:ml-5 hover:border-gray-400" />
        </div>
        <div className="flex flex-row w-full">
          <label htmlFor="imagen" className="w-1/5">Imagen</label>
          <input type="file" placeholder="Ingresa tu fotografía..." className="w-1/2 pl-2 border px-1 rounded-sm py-1 placeholder:ml-5 hover:border-gray-400 
          file:mr-4 file:py-1 file:px-2
          file:border-0
          file:text-xs file:font-md
          file:bg-violet-50 file:text-slate-700
          hover:file:bg-blue-100 file:cursor-pointer cursor-pointer
          text-xs" />
        </div>
        <div className="flex flex-row w-full pb-4">
          <label htmlFor="profesion" className="w-1/5">Profesión</label>
          <select id="alternativas" className="w-1/2 border px-1 rounded-sm py-1 placeholder:ml-5 hover:border-gray-400" name="alternativas">
            <option value="Abogado">Abogado</option>
            <option value="arquitecto">Arquitecto</option>
            <option value="otro">Otro</option>
          </select><br></br>
        </div>
        <input type="submit" className="flex justify-center w-1/4 h-8 bg-blue-700 rounded text-white cursor-pointer transition-all duration-500 hover:bg-blue-900"/>
      </form>
    </div>
  )
}

export default Inscribe