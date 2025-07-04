"use client"

import { useState } from "react"
import Titulo from "@/components/Titulo/Titulo"
import Button from "@/components/Button/Button"
import { motion } from "framer-motion"
import { api } from "@/services/api"

export default function ContatoPage() {
  const [form, setForm] = useState({
    name: "",
    email_contact: "",
    subject: "",
    message: "",
  })

  const [enviando, setEnviando] = useState(false)
  const [enviado, setEnviado] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEnviando(true);
    console.log(form)
    api.post('/email',form)
    .then((response)=>{
      setForm({ name: "", email_contact: "", subject: "", message: "" });
      if(!response.data.sucess){
        setEnviado(false);
        alert(response.data.message)
      }else{
        setEnviado(true);
        console.log("Mensagem enviada com sucesso!");
      }
      console.log(response.data)
      })
    .catch((error)=>{
      console.error(`Erro ao enviar: ${error.message}`)
    })
    .finally(()=>{
      setEnviando(false);
      setTimeout(() => setEnviado(false), 3000);
    })
  }

  return (
    <section className="min-h-[100dvh] w-full flex flex-col px-[10%]">
      <article className="flex justify-around items-center gap-[10%] w-full h-[80vh] flex-wrap md:flex-nowrap">
        <div className="w-full md:w-[50%] flex gap-[25px] flex-col">
          <Titulo as="h1" className="text-amber-500 text-left">
            Contato
          </Titulo>

          <p className="font-medium text-[24px] ff-NunitoSans">
            Estamos sempre prontos para ouvir você. Se deseja tirar dúvidas, fazer uma doação,
            propor uma parceria ou simplesmente nos conhecer melhor, preencha o formulário ao lado.
            Nossa equipe responderá o mais rápido possível.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="w-full md:w-[50%] bg-white p-8 rounded-xl shadow-lg flex flex-col gap-4"
        >
          <label className="text-sm font-semibold ff-NunitoSans">Nome</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Seu nome"
            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
            required
          />

          <label className="text-sm font-semibold ff-NunitoSans">Email</label>
          <input
            type="email"
            name="email_contact"
            value={form.email_contact}
            onChange={handleChange}
            placeholder="seu@email.com"
            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
            required
          />

          <label className="text-sm font-semibold ff-NunitoSans">Assunto</label>
          <input
            type="text"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            placeholder="Ex: Quero ser voluntário"
            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
            required
          />

          <label className="text-sm font-semibold ff-NunitoSans">Mensagem</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Escreva sua mensagem..."
            rows={5}
            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
          />

          <motion.div
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="w-fit"
          >
            <Button
              type="submit"
              disabled={enviando}
              className={`bg-[#866AFF] text-white mt-2 transition-all duration-300 ${
                enviado ? "bg-green-600" : ""
              }`}
            >
              {enviando
                ? "Enviando..."
                : enviado
                ? "Mensagem enviada!"
                : "Enviar"}
            </Button>
          </motion.div>
        </form>
      </article>
    </section>
  )
}
