/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import Home from '../pages/Home'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = e => {
    e.preventDefault()

    console.log('submit', { email, password })
  }

  return (
    <>
      <Home />
      <form onSubmit={handleSubmit}>
        <section className="w-80 mx-auto md:w-auto flex justify-center xl:w-auto">
          <div className="text-gray-800">
            <div className="flex xl:justify-center lg:flex-col justify-center items-center flex-wrap">
              <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:m-0">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                  className="w-full"
                  alt="Sample image"
                />
              </div>
              <p></p>
              <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                <section>
                  <div className="mb-6">
                    <input
                      type="email"
                      className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleFormControlInput3"
                      name="email"
                      placeholder="Email"
                      value={email}
                      onChange={({ target }) => setEmail(target.value)}
                    />
                  </div>
                  <div className="flex items-center">
                    <input
                      type="password"
                      className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleFormControlInput4"
                      name="password"
                      placeholder="Senha"
                      value={password}
                      onChange={({ target }) => setPassword(target.value)}
                    />
                  </div>
                  <div className="flex justify-center items-center gap-8 my-4 ">
                    <div className="flex items-center justify-center">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck3"
                      />
                      <label
                        className="px-2 form-check-label inline-block text-gray-800 text-sm leading-snug font-normal align-center"
                        htmlFor="exampleCheck3"
                      >
                        Lembrar de mim
                      </label>
                    </div>
                    <div className="flex justify-center items-center">
                      <a
                        href=""
                        className="text-gray-800
                    text-sm leading-snug font-normal align-center transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105"
                      >
                        Esqueceu sua senha?
                      </a>
                    </div>
                  </div>

                  <div className="text-center lg:text-center">
                    <button
                      type="submit"
                      className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    >
                      Login
                    </button>
                    <div className="flex justify-center items-center">
                      <p className="text-sm font-semibold mt-2 pt-1">
                        Não tem uma conta?
                      </p>
                      <Link
                        to="/registrar"
                        className="mx-2 pt-3 text-red-600 font-medium hover:text-red-700
                      focus:text-red-700 transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105"
                      >
                        Cadastre-se
                      </Link>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
      </form>
      <ToastContainer />
    </>
  )
}

export default LoginPage
