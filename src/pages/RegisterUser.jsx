import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'
import Home from '../pages/Home'

const RegisterUser = () => {
  const [user, setUser] = useState('')
  const navigate = useNavigate()

  function handleChange(event) {
    setUser({ ...user, [event.target.name]: event.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()

    try {
      await createUser(user.name, user.email, user.password)
      toast.success('Usuário criado com sucesso!')
      navigate('/login')
    } catch (error) {
      if (user === '') {
        toast.error('Preencha todos os campos!')
      }
    }
  }

  return (
    <>
      <Home />
      <div>
        <div className="relative mt-32 flex flex-col sm:justify-center items-center">
          <div className="relative sm:max-w-sm w-full">
            <div className="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
            <div className="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
            <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
              <label
                htmlFor="email"
                className="block mt-3 text-sm text-gray-700 text-center font-semibold"
              >
                Cadastrar
              </label>
              <form className="mt-10">
                <div>
                  <input
                    type="text"
                    placeholder="Nome"
                    className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 placeholder:pl-[14px] outline-none"
                  />
                </div>

                <div className="mt-7">
                  <input
                    type="email"
                    placeholder="Email"
                    className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 placeholder:pl-[14px] outline-none"
                  />
                </div>

                <div className="mt-7">
                  <input
                    type="password"
                    placeholder="Senha"
                    className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 placeholder:pl-[14px] outline-none"
                  />
                </div>

                <div className="mt-7">
                  <input
                    type="password"
                    placeholder="Confirmar Senha"
                    className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 placeholder:pl-[14px] outline-none"
                  />
                </div>

                <div className="mt-7">
                  <button className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                    Registrar
                  </button>
                </div>

                <div className="mt-7">
                  <div className="flex justify-center items-center">
                    <label className="mr-2">Ja tem conta?</label>
                    <Link
                      to="/login"
                      className=" text-blue-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
                    >
                      Iniciar sessão
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default RegisterUser
