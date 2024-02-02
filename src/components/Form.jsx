const Form = ({ variant }) => {
    if (variant === 'teacher') {
        return (
            <form>
                <label>
                    Usuario:
                    <input type="Identificación" name="Identificación" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Identificación" />
                </label>
                <label>
                    Contraseña:
                    <input type="Fecha de expedicion" name="Fecha de expedición" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Fecha de expedición" />
                </label>
            </form>
        )
    }
    //Formulario estudiante
    return (
    
        <form>
            <label>
                Identificación:
                <input type="Identificación" name="Identificación" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Identificación" />
            </label>
            <label>
                Fecha de expedición de tú documento:
                <input type="Fecha de expedicion" name="Fecha de expedición" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Fecha de expedición" />
            </label>
        </form>
    )
}

export default Form