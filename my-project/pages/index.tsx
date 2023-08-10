import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div>
        {/* <Typography /> */}
        {/* <Padding /> */}
        {/* <Spacing /> */}
        {/* <Flex /> */}
        {/* <Grid /> */}
        {/* <Layout /> */}
        <Border />
      </div>
    </>
  );
}

const Typography = () => {
  return(
    <>
      <p className='text-xs sm:text-2xl md:text-xl lg:text-lg xl:text-base 2xl:text-sm '>This tailwind styles</p>
      <p className='text-sm'>This tailwind styles</p>
      <p className='text-base'>This tailwind styles</p>
      <p className='text-lg'>This tailwind styles</p>
      <p className='text-xl font-mono'>This tailwind styles</p>
      <p className='text-2xl font-serif'>This tailwind styles</p>
      <p className='text-3xl font-sans'>This tailwind styles</p>
      <br />
      <hr></hr>
      <br />
      <p className='text-xs hover:text-lg'>This tailwind styles</p>
      <p className='text-sm  hover:text-xl'>This tailwind styles</p>
      <p className='text-base  hover:text-2xl'>This tailwind styles</p>
      <p className='text-lg  hover:text-3xl'>This tailwind styles</p>
      <p className='text-xl font-mono  hover:text-4xl'>This tailwind styles</p>
      <p className='text-2xl font-serif  hover:text-5xl' >This tailwind styles</p>
      <p className='text-3xl font-sans  hover:text-6xl'>This tailwind styles</p>


    </>
  )
}

const Padding = () => {
  return (
    <>
      <p className='p-2 bg-yellow-200'>this is para</p>
    </>
  )
}

const Spacing = () => {
  return (
    <>
      <div className="flex w-full min-h-screen space-x-2 ">
        <div className="w-1/5 bg-red-500">Sidebar</div>
        <div className="w-4/5 bg-green-500">
          <div className="flex space-x-3">
            <div className="bg-sky-500 w-1/3 h-24"></div>
            <div className="bg-slate-500 w-1/3 h-24"></div>
            <div className="bg-sky-500 w-1/3 h-24"></div>
          </div>
        </div>
      </div>
      
    </>
  )
}

const Flex = () => {
  return (
    <>
      <div className="Parent">
        <div className="bg-sky-400">Header</div>
        <div className="flex">
          <div className="bg-green-200 grow">Main Content</div>
          <div className="bg-red-200">Sidebar</div>
        </div>
        <div className="bg-yellow-50">footer</div>

        <div className="md:flex">
          <div className="bg-red-200 grow">Sidebar</div>
          <div className="bg-green-200 grow">Main</div>
        </div>

        <div className="flex flex-wrap">
          <div className="bg-green-400 w-32 grow">Sidebar</div>
          <div className="bg-yellow-400 w-32 grow">Sidebar</div>
          <div className="bg-pink-400 w-32 grow">Sidebar</div>
          <div className="bg-blue-400 w-32 grow">Sidebar</div>
          <div className="bg-orange-400 w-32 grow">Sidebar</div>
        </div>
      </div>
    </>
  )
}

const Grid = () => {
  return(
    <>
      {/* <div className="p">
        <div className="grid grid-cols-5 gap-4">
          <div className="bg-pink-500 p-4 text-center rounded-md">1</div>
          <div className="bg-pink-500 p-4 text-center rounded-md">1</div>
          <div className="bg-pink-500 p-4 text-center rounded-md">1</div>
          <div className="bg-pink-500 p-4 text-center rounded-md">1</div>
          <div className="bg-pink-500 p-4 text-center rounded-md">1</div>
          <div className="bg-pink-500 p-4 text-center rounded-md">1</div>
          <div className="bg-pink-500 p-4 text-center rounded-md">1</div>
        </div>
      </div> */}

      {/* <div className="p">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          <div className="bg-blue-500 p-4 text-center rounded-md">1</div>
          <div className="bg-blue-500 p-4 text-center rounded-md">1</div>
          <div className="bg-blue-500 p-4 text-center rounded-md">1</div>
          <div className="bg-blue-500 p-4 text-center rounded-md">1</div>
          <div className="bg-blue-500 p-4 text-center rounded-md">1</div>
          <div className="bg-blue-500 p-4 text-center rounded-md">1</div>
          <div className="bg-blue-500 p-4 text-center rounded-md">1</div>
        </div>
      </div> */}

      {/* <div className="p">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          <div className="bg-blue-500 p-4 text-center rounded-md">1</div>
          <div className="bg-blue-500 p-4 text-center rounded-md">1</div>
          <div className="bg-blue-500 p-4 text-center rounded-md xl:col-span-2">1</div>
          <div className="bg-blue-500 p-4 text-center rounded-md">1</div>
          <div className="bg-blue-500 p-4 text-center rounded-md">1</div>
          <div className="bg-blue-500 p-4 text-center rounded-md xl:col-span-2">1</div>
          <div className="bg-blue-500 p-4 text-center rounded-md">1</div>
        </div>
      </div> */}

      <div className="pt-10">
        <div className="grid grid-flow-row-dense grid-cols-5 grid-rows-5 gap-4">
          <div className="col-span-2 bg-blue-500 p-4 text-center rounded-lg">1</div>
          <div className="row-span-3 col-span-4 bg-blue-500 p-4 text-center rounded-lg">2</div>
          <div className="col-span-5 bg-blue-500 p-4 text-center rounded-lg">3</div>
          <div className="bg-blue-500 p-4 text-center rounded-lg">4</div>
          <div className="row-span-2 bg-blue-500 p-4 text-center rounded-lg">5</div>
          <div className=" bg-blue-500 p-4 text-center rounded-lg">6</div>
          <div className="bg-blue-500 p-4 text-center rounded-lg">7</div>
          <div className="bg-blue-500 p-4 text-center rounded-lg">8</div>
          <div className="bg-blue-500 p-4 text-center rounded-lg">9</div>
        </div>
      </div>
    </>
  )
}

const Layout = () => {
  return(
    <>
      {/* <div className="bg-slate-900 h-screen text-white mx-auto">
        <div className="container bg-red-500 h-24 font-bold">Tailwind</div>
      </div> */}

      <div className="bg-slate-900 h-screen text-white mx-auto">
        <div className="container columns-4">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, perspiciatis culpa aliquam incidunt delectus maxime unde sit quos voluptatem sunt, ratione nisi sed aut, necessitatibus a quis! Eum, voluptas amet? Tempore dolorem neque est labore assumenda. Nihil repellendus consectetur, hic deleniti debitis quam. Molestiae, vitae.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, perspiciatis culpa aliquam incidunt delectus maxime unde sit quos voluptatem sunt, ratione nisi sed aut, necessitatibus a quis! Eum, voluptas amet? Tempore dolorem neque est labore assumenda. Nihil repellendus consectetur, hic deleniti debitis quam. Molestiae, vitae.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, perspiciatis culpa aliquam incidunt delectus maxime unde sit quos voluptatem sunt, ratione nisi sed aut, necessitatibus a quis! Eum, voluptas amet? Tempore dolorem neque est labore assumenda. Nihil repellendus consectetur, hic deleniti debitis quam. Molestiae, vitae.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, perspiciatis culpa aliquam incidunt delectus maxime unde sit quos voluptatem sunt, ratione nisi sed aut, necessitatibus a quis! Eum, voluptas amet? Tempore dolorem neque est labore assumenda. Nihil repellendus consectetur, hic deleniti debitis quam. Molestiae, vitae.</p>
        </div>
      </div>

      {/* to test this : change the screen window scroll it to mobile */}
      <div className="bg-slate-900 h-screen text-white mx-auto">
        <div className="container columns-md">
        <img alt="d" src="https://images.unsplash.com/photo-1434394354979-a235cd36269d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;q=80" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, perspiciatis culpa aliquam incidunt delectus maxime unde sit quos voluptatem sunt, ratione nisi sed aut, necessitatibus a quis! Eum, voluptas amet? Tempore dolorem neque est labore assumenda. Nihil repellendus consectetur, hic deleniti debitis quam. Molestiae, vitae.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, perspiciatis culpa aliquam incidunt delectus maxime unde sit quos voluptatem sunt, ratione nisi sed aut, necessitatibus a quis! Eum, voluptas amet? Tempore dolorem neque est labore assumenda. Nihil repellendus consectetur, hic deleniti debitis quam. Molestiae, vitae.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, perspiciatis culpa aliquam incidunt delectus maxime unde sit quos voluptatem sunt, ratione nisi sed aut, necessitatibus a quis! Eum, voluptas amet? Tempore dolorem neque est labore assumenda. Nihil repellendus consectetur, hic deleniti debitis quam. Molestiae, vitae.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, perspiciatis culpa aliquam incidunt delectus maxime unde sit quos voluptatem sunt, ratione nisi sed aut, necessitatibus a quis! Eum, voluptas amet? Tempore dolorem neque est labore assumenda. Nihil repellendus consectetur, hic deleniti debitis quam. Molestiae, vitae.</p>
        </div>
      </div>
    </>
  )
}

const Border = () => {
  return (
    <>
      <div className="bg-slate-900 h-screen text-white">
          <div className="border">Hello</div>
      </div>
    </>
  )
}