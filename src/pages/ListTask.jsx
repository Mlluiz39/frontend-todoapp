import React from 'react'
import { useState, useEffect } from 'react'
import HomeTask from '@/pages/HomeTask'

const ListTask = () => {
  const [tasks, setTasks] = useState([{ id: '', title: '', description: '' }])
  // useEffect(() => {
  //   ;(async () => {
  //     const response = await listTasks()
  //     setTasks(response.data)
  //   })()
  // }, [])

  return (
    <>
      <HomeTask />
      <div className="p-6 mt-10 max-w-xs w-xs grid grid-cols-1 cursor-default select-none rounded bg-white dark:bg-gray-900 shadow-lg transform hover:scale-125 mx-auto">
        <div className="font-semibold text-xl mb-2 ml-2">
          <h3 className="font-semibold text-lg">Tarefa</h3>

          <p className="text-gray-500 text-sm">{tasks.title}</p>
        </div>

        <div>
          <div className="mb-2 ml-2">
            <h3 className="font-semibold text-lg">Descrição:</h3>
            <p className="text-gray-500 text-sm">{tasks.description}</p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <button className="transform transition-all duration-150 inline-block bg-red-600 bg-opacity-100 rounded p-2  text-xs font-normal text-white  hover:shadow-sm  hover:scale-105">
            Excluir
          </button>
          <button className="transform transition-all duration-150 inline-block bg-blue-600 bg-opacity-75 rounded p-2 text-xs font-normal text-white hover:shadow-sm  hover:scale-105">
            Finalizada
          </button>
        </div>
      </div>
    </>
  )
}

export default ListTask
