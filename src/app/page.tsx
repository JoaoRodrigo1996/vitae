import { Header } from "@/components/header"
import { createClient } from "@/utils/supabase/server"
import { Link } from "lucide-react"

export default async function Home() {
  const supabase = createClient()
  const { data, error, status } = await supabase.from('project').select()

  return (
    <div className='space-y-16'>
      <Header />

      <div className="max-w-4xl mx-auto space-y-10 pb-10">
        <section className="flex gap-10">
          <div className="w-52">
            <span className="font-semibold">Sobre</span>
          </div>
          <div className="flex-1">
            <p className="leading-relaxed text-balance text-zinc-700">
              Meu nome é João Rodrigo e tenho 27 anos. Sou um programador front-end e back-end
              com experiência em tecnologias como Javascript, Python, Csharp, React.js, Next.js, TailwindCSS, 
              Node.js, Express, Fastify, Nest.js, git e github e entre outras.
            </p>
            <br/>
            <p className="leading-relaxed text-zinc-700">
              Estou disposto a aprender e a contribuir com meus conhecimentos para a sua empresa.
            </p>
          </div>
        </section>

        <section className="flex gap-10">
          <div className="w-52">
            <span className="font-semibold">Projetos</span>
          </div>
          <div className="flex-1 flex items-center gap-4 overflow-hidden overflow-x-auto">
            {
              data?.map((item) => (
                <div key={item.id} className="">
                  <div className="border w-80 rounded-xl">
                    <img 
                      src={`${item.image_url}`} 
                      alt="Imagem do projeto" 
                      className="h-52 w-full object-cover rounded-xl"
                    />
                    <div className="p-4 flex items-start justify-between">
                      <div className="">
                        <p className='text-sm font-semibold'>{item.title}</p>
                        <span className="text-sm text-zinc-600">Front-end</span>
                      </div>
                      <a href={item.link} target="_blank">
                        <Link className='size-4' />
                      </a>
                    </div>
                  </div>

                </div>
              ))
            }
          </div>
        </section>

        <section className="flex gap-10">
          <div className="w-52">
            <span className="font-semibold">Tecnologias</span>
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-5">
              <p className='text-sm font-semibold border px-3 py-1 rounded-lg'>HTML</p>
              <p className='text-sm font-semibold border px-3 py-1 rounded-lg'>CSS</p>
              <p className='text-sm font-semibold border px-3 py-1 rounded-lg'>Javascript</p>
              <p className='text-sm font-semibold border px-3 py-1 rounded-lg'>React.js</p>
              <p className='text-sm font-semibold border px-3 py-1 rounded-lg'>Next.js</p>
              <p className='text-sm font-semibold border px-3 py-1 rounded-lg'>TailwindCSS</p>
              <p className='text-sm font-semibold border px-3 py-1 rounded-lg'>Styled Components</p>
              <p className='text-sm font-semibold border px-3 py-1 rounded-lg'>Node.js</p>
              <p className='text-sm font-semibold border px-3 py-1 rounded-lg'>Express</p>
              <p className='text-sm font-semibold border px-3 py-1 rounded-lg'>Fastify</p>
              <p className='text-sm font-semibold border px-3 py-1 rounded-lg'>Nest.js</p>
              <p className='text-sm font-semibold border px-3 py-1 rounded-lg'>Python</p>
              <p className='text-sm font-semibold border px-3 py-1 rounded-lg'>Csharp</p>
              <p className='text-sm font-semibold border px-3 py-1 rounded-lg'>Git</p>
              <p className='text-sm font-semibold border px-3 py-1 rounded-lg'>Github</p>
            </div>
          </div>
        </section>

        <section className="flex gap-10">
          <div className="w-52">
            <span className="font-semibold">Academico e certificados</span>
          </div>
          <div className="flex flex-1 flex-col gap-4">
            <div className="flex flex-col border rounded-xl p-4">
              <span className="text-sm text-zinc-600">Universidade Estácio de Sá</span>
              <h4 className='font-semibold mb-2'>Sistemas de Informação</h4>
              <span className="text-sm text-zinc-600">2019 - cursando</span>
            </div>
            <div className="flex flex-col border rounded-xl p-4">
              <span className="text-sm text-zinc-600">Rocketseat</span>
              <h4 className='font-semibold  mb-2'>React.js</h4>
              <p className="text-sm text-zinc-600 text-balance">Fundamentos do ReactJS, Hooks, Context API, Comunicação com API, Fundamentos do Next.js, BFF, CMS, Styled Components, Chakra UI, React Query, Performance e otimização, Testes unitários e deploy</p>
            </div>
            <div className="flex flex-col border rounded-xl p-4">
              <span className="text-sm text-zinc-600">Rocketseat</span>
              <h4 className='font-semibold  mb-2'>Node.js</h4>
              <p className="text-sm text-zinc-600 text-balance">Fundamentos do NodeJS, API REST, Documentação do com Swagger, SOLID, DDD, Docker, TypeORM, JWT, CI/CD e Serverless.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
