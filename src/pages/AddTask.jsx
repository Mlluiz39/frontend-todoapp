import React, { useState } from 'react'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import HomeTask from '../pages/HomeTask'

const AddTask = () => {
  const [title, setTitle] = useState({
    title: '',
  })
  const [description, setDescription] = useState({
    title: '',
  })

  const handleSubmit = async e => {
    e.preventDefault()

    createNewTask(title, description)
  }

  return (
    <>
      <HomeTask />
      <section>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
              <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
                <div className="max-w-md mx-auto">
                  <div className="flex items-center space-x-5">
                    <div className="h-14 w-14 bg-yellow-200 rounded-full flex flex-shrink-0 justify-center items-center text-yellow-500 text-2xl font-mono">
                      i
                    </div>
                    <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                      <h2 className="leading-relaxed">Criar tarefa</h2>
                      <p className="text-sm text-gray-500 font-normal leading-relaxed">
                        Crie sua tarefa agora!
                      </p>
                    </div>
                  </div>
                  <div className="divide-y divide-gray-200">
                    <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                      <div className="flex flex-col">
                        <label className="leading-loose">Titulo</label>
                        <input
                          type="text"
                          className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-400 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                          name="title"
                          onChange={({ target }) => setTitle(target.value)}
                        />
                      </div>

                      <div className="flex flex-col">
                        <label className="leading-loose">Descrição</label>
                        <textarea
                          type="text"
                          className="border h-32 focus:ring-gray-500 focus:border-gray-400 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600 resize-none"
                          name="description"
                          onChange={({ target }) =>
                            setDescription(target.value)
                          }
                        />
                      </div>
                    </div>

                    <div className="pt-4 flex items-center space-x-4">
                      <button className="flex justify-center items-center w-full bg-red-600 text-white px-4 py-3 rounded-md focus:outline-none">
                        <svg
                          className="w-6 h-6 mr-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          ></path>
                        </svg>{' '}
                        Cancel
                      </button>
                      <button
                        className="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none"
                        type="submit"
                      >
                        Criar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
      <ToastContainer />
    </>
  )
}

export default AddTask