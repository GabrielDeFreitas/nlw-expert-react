export function NoteCard() {
    return (
    <button className='rounded-md text-left bg-slate-800 flex flex-col p-5 gap-3 overflow-hidden relative hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400 outline-none'>
        <span className='text-sm font-medium text-slate-300'>
            Há 2 dias
        </span>
        <p className='text-sn leading-6 text-slate-400'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam sapiente porro non cum libero cupiditate. Saepe vel ipsum voluptatum, natus dolorum quas, voluptatem id facere nostrum sunt harum, doloremque nisi!
        </p>

        <div className='absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none'/>
    </button>
    )
}