import { Header } from "@/components/header"
import { createClient } from "@/utils/supabase/server"
import { Link } from "lucide-react"

export default async function Home() {
  const supabase = createClient()
  const { data, error, status } = await supabase.from('project').select()

  return (
    <div className='space-y-16'>
      <Header />

      <div className="max-w-4xl mx-auto space-y-10">
        <section className="flex gap-10">
          <div className="w-52">
            <span className="font-semibold">Sobre</span>
          </div>
          <div className="flex-1">
            <p className="leading-relaxed text-balance text-zinc-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Aperiam, laboriosam unde inventore vitae harum, repellendus 
              consectetur ipsum corrupti sunt iusto illo! Atque, vel.
              Laborum nulla necessitatibus iste, error rem debitis! Lorem ipsum, 
              dolor sit amet consectetur adipisicing elit. Cupiditate architecto 
              commodi nostrum officiis nobis ea sed, aliquam laborum atque inventore dolor, 
              at esse delectus. Recusandae quidem commodi asperiores minus magni?
            </p>
          </div>
        </section>

        <section className="flex gap-10">
          <div className="w-52">
            <span className="font-semibold">Projetos</span>
          </div>
          <div className="flex-1">
            {
              data?.map((item) => (
                <div key={item.id} className="border w-80 rounded-xl">
                  <img 
                    src={`${item.image_url}`} 
                    alt="Imagem do projeto" 
                    className="w-80 object-cover rounded-xl"
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
              <p className='text-sm font-semibold'>HTML</p>
              <p className='text-sm font-semibold'>CSS</p>
              <p className='text-sm font-semibold'>Javascript</p>
              <p className='text-sm font-semibold'>React.js</p>
              <p className='text-sm font-semibold'>Next.js</p>
              <p className='text-sm font-semibold'>TailwindCSS</p>
              <p className='text-sm font-semibold'>Styled Components</p>
              <p className='text-sm font-semibold'>Node.js</p>
              <p className='text-sm font-semibold'>Express</p>
              <p className='text-sm font-semibold'>Fastify</p>
              <p className='text-sm font-semibold'>Nest.js</p>
              <p className='text-sm font-semibold'>Python</p>
              <p className='text-sm font-semibold'>Csharp</p>
              <p className='text-sm font-semibold'>Git</p>
              <p className='text-sm font-semibold'>Github</p>
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
              <h4 className='text-sm font-semibold'>Sistemas de Informação</h4>
              <span className="text-sm text-zinc-600">2019 - cursando</span>
            </div>
            <div className="flex flex-col border rounded-xl p-4">
              <span className="text-sm text-zinc-600">Rocketseat</span>
              <h4 className='text-sm font-semibold'>React.js</h4>
              <p className="text-sm text-zinc-600 text-balance">Fundamentos do ReactJS, Hooks, Context API, Comunicação com API, Fundamentos do Next.js, BFF, CMS, Styled Components, Chakra UI, React Query, Performance e otimização, Testes unitários e deploy</p>
            </div>
            <div className="flex flex-col border rounded-xl p-4">
              <span className="text-sm text-zinc-600">Rocketseat</span>
              <h4 className='text-sm font-semibold'>Node.js</h4>
              <p className="text-sm text-zinc-600 text-balance">Fundamentos do NodeJS, API REST, Documentação do com Swagger, SOLID, DDD, Docker, TypeORM, JWT, CI/CD e Serverless.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
