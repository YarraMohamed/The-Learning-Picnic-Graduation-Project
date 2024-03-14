import React from 'react'
import '../../style/FunctionsDashboard.css'

const AddChild = () => {
  return (   
    <div className="addChild min-h-screen p-6">
      <div className="header mb-2 mt-1">
              <h4 className="text-center text-[#d1d5db] text-5xl font-bold">Add Child</h4>       
      </div>
      
       <div class="h-full">
	<div class="mx-auto">
		<div class="flex justify-center px-6 py-12">
			
			<div class="w-full xl:w-3/5 flex">
				
				<div class="w-full lg:w-7/12 mx-auto bg-white dark:bg-gray-700 p-5 rounded-lg">
                 <h3 class="pb-4 text-base font-medium text-left text-[#d1d5db] dark:text-[#d1d5db]">
                  The maximum number of emails to add is <span className='font-extrabold'>three</span> at each time.
                </h3>
              <form class="px-8 pt-6 pb-8 mb-4 bg-white dark:bg-gray-800 rounded">     
                
						<div class="mb-3">
							<label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white text-start" for="email1">
                               First Child
                            </label>
							<input
                                class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white font-semibold border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                id="email1"
                                type="email"
                    placeholder="Email" required
                            />
                  </div>
                  

						<div class="mb-3">
							<label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white text-start" for="email2">
                                Second Child
                            </label>
							<input
                                class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white font-semibold border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                id="email2"
                                type="email"
                    placeholder="Email" 
                            />
                  </div>
                  

						<div class="mb-3">
							<label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white text-start" for="email3">
                                Third Child
                            </label>
							<input
                                class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white font-semibold border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                id="email3"
                                type="email"
                    placeholder="Email" 
                            />
                </div>
						
                
                
					
						<div class="mb-2 text-center">
							<button
                                class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-900 focus:outline-none focus:shadow-outline"
                    type="submit"
                            >
                                Add 
                            </button>
						</div>
						
					</form>
                      </div>
		</div>
	</div>
</div>
      </div>
    </div>     
  )
}

export default AddChild