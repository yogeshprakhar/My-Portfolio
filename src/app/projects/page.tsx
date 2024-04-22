import ProjectCard from '@/components/ProjectCard'

const page = () => {
  return (
    <div className=' mt-28 mb-14 flex flex-col'>
      <h1 className='font-semibold text-4xl pl-9' > All Projects </h1>
      <div className='ml-10 mr-10 mt-10 flex flex-grow'>
        <ProjectCard />
        
      </div>
    </div>
  )
}

export default page
