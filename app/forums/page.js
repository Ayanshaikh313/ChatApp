import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Topics = [
  {
    Text: "Python-new",
    img: "/python.png",
    alt: "Python programming language logo",
    desc: "Python is an interpreted high-level general-purpose programming language. Python's design philosophy emphasizes code readability with its notable use of significant indentation.",
    slug: "python"
  },
  {
    Text: "JavaScript-new",
    img: "/js.png",
    alt: "JavaScript programming language logo",
    desc: "JavaScript is a high-level, interpreted programming language that conforms to the ECMAScript specification. JavaScript is best known for its worldwide use in web browsers, enabling programmatic access to computing objects within a host environment.",
    slug: "JS"
  },
  {
    Text: "Java-new",
    img: "/JAVA.png",
    alt: "Java programming language logo",
    desc: "Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let application developers 'write once, run anywhere' (WORA), meaning that compiled Java code can run on all platforms that support Java without the need for recompilation.",
    slug: "Java"
  },
  {
    Text: "C++-new",
    img: "/cpp.png",
    alt: "C++ programming language logo",
    desc: "C++ is a general-purpose programming language. It has imperative, object-oriented, and generic programming features, while also providing facilities for low-level memory manipulation. It is widely used for system software, application software, device drivers, and high-performance computing.",
    slug: "C++"
  },
  {
    Text: "React-new",
    img: "/react.png",
    alt: "React JavaScript library logo",
    desc: "React is a JavaScript library for building user interfaces. It's used to create single-page applications and is known for its component-based architecture, virtual DOM, and efficient rendering.",
    slug: "React"
  },
  {
    Text: "Next.js-new",
    img: "/nextjs.png",
    alt: "Next.js framework logo",
    desc: "Next.js is a React framework that gives you the best developer experience with all the advantages of React. It provides features like server-side rendering, static site generation, and file-system routing, making it easier to build fast and scalable web applications.",
    slug: "Nextjs"
  }
];

const Forums = () => {
  return (
    <div className='container mx-auto p-5'>
      <h1 className='text-center p-10 font-semibold text-4xl '>Discussion Forums</h1>
      <div className="flex flex-wrap justify-center rounded-sm">
        {Topics.map((Topic)=>{
          return(
            <div key={Topic.img} className=" w-full shadow-lg rounded-md  md:w-1/4 m-4 flex flex-col  items-center p-8">
            <Image alt='A learning platform' src={Topic.img} width={45} height={45} className='rounded-full'></Image>
            <h2 className=' text-2xl'>{Topic.Text}</h2>
            <p className='flex-col pb-5 h-72 '>{Topic.desc}</p>
            <Link href={`/forum/${Topic.slug}`} >
            <button className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear">
              Discuss Now
            </button>
            </Link>
            </div>
            )
        })}
      </div>
    </div>
    
  )
}

export default Forums
