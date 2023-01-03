import React from 'react'
import { FaCalendarAlt } from 'react-icons/fa'

const Home = () => {
  return (
    <div className="w-full mx-auto">
      <section className="flex justify-between items-center m-2 bg-slate-700 rounded-lg p-3">
        <div className=" flex items-center text-xl">
          <FaCalendarAlt className="text-white" />

          <h1 className="text-lg text-white mx-3">TodoApp</h1>
        </div>
        <div className="flex items-center justify-center">
          <nav className="p-3">
            <div className="flex items-center justify-center">
              <a
                href="/login"
                className="text-white mx-3 opacity-100 hover:opacity-50"
              >
                Login
              </a>

              <a
                href="/sobre"
                className="text-white mx-3 opacity-100 hover:opacity-50"
              >
                Sobre
              </a>
            </div>
          </nav>
        </div>
      </section>
    </div>
  )
}

export default Home
