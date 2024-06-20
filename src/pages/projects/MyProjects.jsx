import React, { useContext, useEffect } from 'react'
import { StoreContext } from '../../context/StoreContext';
import Loading from '../../components/Loading';

function MyProjects() {
  const {projectlist,loading,setLoading}=useContext(StoreContext);
  useEffect(()=>{
    window.scrollTo({top:0});
  })
  return (
    loading == true ?<Loading></Loading>:<div className='min-h-screen h-fit bg-black w-full  relative py-10'>
    <div className="h-fit overflow-hidden columns-4 max-[1024px]:columns-2 max-[500px]:columns-1 gap-2">
        {projectlist.map((item, idx) => (
          <div
            key={`${idx}projectsSection${item.title}`}
            className="w-full h-full break-inside-avoid-column text-white border border-zinc-700 rounded-sm p-2 mb-2"
          >
            <div className="img">
              <img src={item.image} alt={item.title} />
            </div>
            <h1 className="title font-semibold text-green-600">
              {item.title}
            </h1>
            <div className="flex flex-col justify-between h-fit">
              <p className="disc text-sm text-zinc-400 py-3">
                {item.description}
              </p>
              <div className="btns flex item-center gap-2 ">
                <a
                  href={item.github}
                  target="_blank"
                  className="border rounded-lg  border-zinc-700 overflow-hidden"
                >
                  <button className="h-[35px] w-[100px] flex flex-col">
                    <div
                      className="w-full h-full"
                    >
                      <div className=" w-full h-full flex items-center justify-center">
                        Git Repo
                      </div>
                      <div className=" w-full h-full">Git Repo</div>
                    </div>
                  </button>
                </a>
                <a
                href={item.live}
                  target="_blank"
                  className="border rounded-lg  border-zinc-700 overflow-hidden"
                >
                  <button className=" h-[35px] w-[100px] flex flex-col">
                    <div
                      className="w-full h-full"
                    >
                      <div className=" w-full h-full flex items-center justify-center">
                        Live link
                      </div>
                      <div className=" w-full h-full">Live link</div>
                    </div>
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
  </div>
  )
}

export default MyProjects