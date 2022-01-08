import styles from "/styles/Home.module.css";
import Navbar from "/components/Navbar";
import Image from "next/image";
/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  const colors = require('tailwindcss/colors')
  
  module.exports = {
    // ...
    theme: {
      extend: {
        colors: {
          sky: colors.sky,
          teal: colors.teal,
          rose: colors.rose,
        },
      },
    },
  }
  ```
*/
import {
    AcademicCapIcon,
    BadgeCheckIcon,
    CashIcon,
    ClockIcon,
    ReceiptRefundIcon,
    UsersIcon,
  } from '@heroicons/react/outline'
  
  const actions = [
    {
      title: 'Contentful API',
      longText: 'Use the content management API to update inventory after a purchase.',
      href: '#',
      image: '/contentful.png',
      icon: ClockIcon,
      iconForeground: 'text-teal-700',
      iconBackground: 'bg-teal-50',
    },
    {
      title: 'Firebase',
      longText: 'Get all documents from a db and filter by a field condition.',
      href: '#',
      image: '/firebase.png',
      icon: BadgeCheckIcon,
      iconForeground: 'text-purple-700',
      iconBackground: 'bg-purple-50',
    },
    {
      title: 'React Hooks',
      longText: 'How to use useEffect and useState to check the new value of a state variable after a state change without creating an infinite loop',
      href: '#',
      image: '/react.png',
      icon: UsersIcon,
      iconForeground: 'text-sky-700',
      iconBackground: 'bg-sky-50',
    },
    { title: 'React Hooks', 
    longText: 'How to use useQuery to make a call to the Contentful GraphQL endpoint',
    href: '#', 
    icon: CashIcon, 
    image: '/react.png',
    iconForeground: 'text-yellow-700', 
    iconBackground: 'bg-yellow-50' },
    {
      title: 'Javascript',
      longText: 'How to use Array.reduce to calculate a total. Reduce an array of objects, which has a value property to get the total of items in the cart array.',
      href: '#',
      image: '/js.png',
      icon: ReceiptRefundIcon,
      iconForeground: 'text-rose-700',
      iconBackground: 'bg-rose-50',
    },
    {
      title: 'Firebase',
      longText: 'Write to the database to store your users selections and persiste them to the db.',
      href: '#',
      image: '/firebase.png',
      icon: AcademicCapIcon,
      iconForeground: 'text-indigo-700',
      iconBackground: 'bg-indigo-50',
    },
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  export default function Snippets() {
    return (
    <div className = {styles.container}>
        <Navbar/>
        <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          Code Snippets
        </h1>
        <p className="text-lg mb-4 text-gray-600 dark:text-gray-400 pb-8">
          These are a collection of code snippets I've used in the past and
          saved. Some are Serverless Functions, which include set up
          instructions. Others are anything from random CSS snippets to Node.js
          scripts.
        </p>
      <div className="rounded-lg text-white overflow-hidden shadow sm:grid sm:grid-cols-2 sm:gap-px">
        {actions.map((action, actionIdx) => (
          <div
            key={action.title}
            className={classNames(
              actionIdx === 0 ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none' : '',
              actionIdx === 1 ? 'sm:rounded-tr-lg' : '',
              actionIdx === actions.length - 2 ? 'sm:rounded-bl-lg' : '',
              actionIdx === actions.length - 1 ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none' : '',
              'border-2 relative group bg-black p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500'
            )}
          >
            <div>
              {/* <span
                className={classNames(
                  action.iconBackground,
                  action.iconForeground,
                  'rounded-lg inline-flex p-3 ring-4 ring-white'
                )}
              >
                <action.icon className="h-6 w-6" aria-hidden="true" />
              </span> */}
              <Image width='45px' src={action.image} height='40px'></Image>
            </div>
            <div className="mt-8">
              <h3 className="text-lg font-medium">
                <a href={action.href} className="focus:outline-none">
                  {/* Extend touch target to entire panel */}
                  <span className="absolute inset-0" aria-hidden="true" />
                  {action.title}
                </a>
              </h3>
              <p className="mt-2 text-lg text-gray-400">
                {action.longText}
              </p>
            </div>
            <span
              className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
              aria-hidden="true"
            >
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
              </svg>
            </span>
          </div>
        ))}
      </div>
      </div>
      </div>
    )
  }
  


// export default function Snippets(){
// return (
//     <div className={styles.container} >
//         <Navbar/>
//         <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
//         <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
//           Code Snippets
//         </h1>
//         <p className="mb-4 text-gray-600 dark:text-gray-400">
//           Here I'll be compiling code snippets for performing tasks I've found to be common enough to 
//           store them somewhere! Each one includes instructions for set up and a short summary of how it works.
//           This also lives as a github repo where you can suggest a code snippet by creating a PR.
//         </p>
//         <div className="grid w-full grid-cols-1 gap-4 my-2 mt-4 sm:grid-cols-2">
//           {/* {snippets.map((snippet) => (
//             <FunctionCard
//               key={snippet.slug}
//               title={snippet.title}
//               slug={snippet.slug}
//               logo={snippet.logo}
//               description={snippet.description}
//             />
//           ))} */}
//         </div>
//       </div>
//     </div>
// )
// }