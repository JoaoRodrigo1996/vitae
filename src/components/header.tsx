'use client'

import { Copy, Download, Laptop, MapPin, Phone } from "lucide-react"

export function Header(){
  async function copyEmailToClipboard(email: string){
    try {
      await navigator.clipboard.writeText(email)
      alert(`E-mail "${email}" foi copiado com sucesso`)
    } catch (error) {
      alert(error)
    }
  }

  return (
    <header className="pt-24 bg-pattern bg-no-repeat bg-center">
      <div className="max-w-4xl mx-auto flex items-center gap-3 z-10">
        <img 
          src="https://github.com/JoaoRodrigo1996.png" 
          alt="Foto de perfil" 
          className="size-20 medium:size-36 rounded-full object-cover"
        />
        <div className="flex flex-col justify-between items-start gap-1">
          <p className="text-2xl font-semibold">Rodrigo Mesquita</p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 text-sm font-medium text-zinc-700">
              <Laptop className="size-4" />
              Desenvolvedor de software
            </span>
            <span className="flex items-center gap-2 text-sm font-medium text-zinc-700">
              <MapPin className='size-4' />
              Barra Mansa - RJ
            </span>
            <button type='button' onClick={event => copyEmailToClipboard(event.currentTarget.value)} value='dev.rodrigomesquita@gmail.com' className="flex items-center gap-2 text-sm font-medium text-zinc-700">
              <Copy className="size-4" />
              E-mail
            </button>
            <a href='https://wa.me/5524998769562' target="_blank" className="flex items-center gap-2 text-sm font-medium text-zinc-700">
              <Phone className="size-4" />
              WhatsApp
            </a>
            <a href='./curriculum.pdf' download className="flex items-center gap-2 text-sm font-medium text-zinc-700">
              <Download className="size-4" />
              Curriculo
            </a>
          </div>
        </div>
      </div>
      <div className="w-full h-px bg-zinc-200 medium:-mt-8 large:-mt-8 mt-8 -z-10" />
    </header>
  )
}
