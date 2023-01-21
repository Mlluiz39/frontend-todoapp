import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'

import { api } from '@/shared/services/api'

import HomeTask from './HomeTask'

const ListTask = () => {
  const [tasks, setTasks] = useState([])
  const userId = JSON.parse(localStorage.getItem('user')).id

  useEffect(() => {
    (async () => {
      try {
        const data = await api.get(`users/${userId}/tasks`).then((response) => response.data)
        setTasks(data.tasks)
      } catch (error) {
        toast.error('Erro ao carregar tarefas')
      }
    })()
  }, [userId])

  const toggleDone = (id) => {
    const index = tasks.findIndex((task) => task.id === id)

    const newTasks = [...tasks]
    newTasks[index].done = !newTasks[index].done
    setTasks(newTasks)
    api.get(`done/${id}`, newTasks[index])
  }

  const handleDelete = async (id) => {
    try {
      await api.delete(`tasks/${id}`)
      toast.success('Tarefa excluída com sucesso')
      setTasks(tasks.filter((task) => task.id !== id))
    } catch (error) {
      toast.error('Erro ao excluir tarefa')
    }
  }

  return (
    <>
    <HomeTask />

    {tasks.length > 0
      ? (
          tasks.map(task => (
            task.done === false
              ? (
        <ul key={task.id}>
          <li>
    <div>
    <div className="p-6 mt-10 max-w-xs w-xs grid grid-cols-1 cursor-default select-none rounded bg-white dark:bg-gray-900 shadow-lg transform hover:scale-125 mx-auto">
    <div className="font-semibold text-xl mb-2 ml-2">
      <h3 className="font-semibold text-lg">Tarefa</h3>

      <p className="text-gray-500 text-sm">{task.title}</p>
    </div>

    <div>
      <div className="mb-2 ml-2">
        <h3 className="font-semibold text-lg">Descrição:</h3>
        <p className="text-gray-500 text-sm">{task.description}</p>
      </div>
    </div>
    <div className="flex justify-between items-center">
      <button className="transform transition-all duration-150 inline-block bg-red-600 bg-opacity-100 rounded p-2  text-xs font-normal text-white  hover:shadow-sm  hover:scale-105" onClick={() => handleDelete(task.id)}>
        Excluir
      </button>

      <button className="transform transition-all duration-150 inline-block bg-cyan-600 bg-opacity-75 rounded p-2 text-xs font-normal text-white hover:shadow-sm  hover:scale-105" onClick={() => toggleDone(task.id)}>
        Concluir
      </button>
    </div>
  </div>
  </div>
</li>
</ul>
                )
              : (

                   <ul key={task.id}>
        <li>
  <div>
  <div className="p-6 mt-10 max-w-xs w-xs grid grid-cols-1 cursor-default select-none rounded bg-orange-100 dark:bg-gray-900 shadow-lg transform hover:scale-125 mx-auto">
  <div className="font-semibold text-xl mb-2 ml-2">
    <h3 className="font-light text-lg line-through">Tarefa</h3>

    <p className="font-light text-gray-500 text-sm line-through">{task.title}</p>
  </div>

  <div>
  </div>
  <div className="flex justify-between items-center">
    <button className="transform transition-all duration-150 inline-block bg-red-600 bg-opacity-100 rounded p-2  text-xs font-normal text-white  hover:shadow-sm  hover:scale-105" onClick={() => handleDelete(task.id)}>
      Excluir
    </button>
    <div>

    </div>
    <button className="transform transition-all duration-150 inline-block bg-orange-500 bg-opacity-75 rounded p-2 text-xs font-normal text-white hover:shadow-sm  hover:scale-105" onClick={() => toggleDone(task.id)}>
      Não Concluída
    </button>
  </div>
</div>
</div>
</li>
</ul>
                ))
          ))
      : (
        <div className="flex justify-center items-center h-screen">
          <h1 className="text-2xl font-semibold text-sky-600">Nenhuma tarefa cadastrada</h1>
        </div>
        )}

<ToastContainer />
    </>
  )
}

export default ListTask
