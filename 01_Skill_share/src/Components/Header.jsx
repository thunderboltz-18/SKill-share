import React from 'react'

function Header() {
  return (
    <div>
    
<header class='flex border-b py-4 px-4 sm:px-10 bg-white font-sans min-h-[70px] tracking-wide relative z-50'>
      <div class='flex flex-wrap items-center gap-4 w-full'>
        <a href="https://readymadeui.com">
          <h3 class="text-2xl font-semibold">Logo</h3>
        </a>

        <div
          class='lg:!flex lg:flex-auto lg:ml-12 max-lg:hidden max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50'>
          <button class='lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3'>
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 fill-black" viewBox="0 0 320.591 320.591">
              <path
                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                data-original="#000000"></path>
              <path
                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                data-original="#000000"></path>
            </svg>
          </button>

          <div
            class="lg:!flex lg:flex-auto max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">

            <ul class='lg:flex lg:gap-x-8 max-lg:space-y-2'>
              <li class='mb-6 hidden max-lg:block'>
                <a href="javascript:void(0)"><img src="https://readymadeui.com/readymadeui.svg" alt="logo" class='w-36' />
                </a>
              </li>
              <li class='max-lg:border-b max-lg:py-3'>
                <a href='javascript:void(0)'
                  class='hover:text-[#007bff] text-[#007bff] block font-bold text-[15px]'>Home</a>
              </li>
              <li class='max-lg:border-b max-lg:py-3'><a href='javascript:void(0)'
                class='hover:text-[#007bff] text-gray-600 block font-bold text-[15px]'>Shop</a>
              </li>
              <li class='max-lg:border-b max-lg:py-3'><a href='javascript:void(0)'
                class='hover:text-[#007bff] text-gray-600 block font-bold text-[15px]'>Sale</a>
              </li>
              <li class='max-lg:border-b max-lg:py-3'><a href='javascript:void(0)'
                class='hover:text-[#007bff] text-gray-600 block font-bold text-[15px]'>Manage</a>
              </li>
            </ul>

            <ul class='lg:flex lg:items-center ml-auto max-lg:block lg:space-x-8 ml-auto'>
              <li class='max-lg:border-b max-lg:py-3 max-lg:mt-2'>
                <a href='javascript:void(0)'
                  class='hover:text-[#007bff] text-gray-600 block font-bold text-[15px]'>Pricing</a>
              </li>
              <li class='max-lg:border-b max-lg:py-3 max-lg:mt-2'><a href='javascript:void(0)'
                class='hover:text-[#007bff] text-gray-600 block font-bold text-[15px]'>Learn</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="border-l border-[#333] h-6 max-lg:hidden"></div>

        <div class='flex items-center ml-auto space-x-6'>
          <a href='javascript:void(0)' class='hover:text-[#007bff] text-gray-600 block font-bold text-[15px]'>Log
            in</a>
          <button
            class='px-4 py-2.5 text-sm rounded font-bold text-white border-2 border-[#1d294f] bg-[#1d294f] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#1d294f]'>Start
            free trial</button>

          <button class='lg:hidden'>
            <svg class="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
    </div>
  )
}

export default Header
