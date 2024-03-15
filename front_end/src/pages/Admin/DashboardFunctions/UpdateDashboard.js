import React from 'react'
import '../../style/FunctionsDashboard.css'

const UpdateDashboard = () => {
  return (
    <div className="updateDash min-h-screen p-6">
      <div className="header mb-2 mt-1">
              <h4 className="text-center text-[#d1d5db] text-5xl font-bold">Update Data</h4>       
      </div>
      
       <div class="h-full">
	<div class="mx-auto">
		<div class="flex justify-center px-6 py-12">
			
			<div class="w-full xl:w-3/5 flex">
				
				<div class="w-full lg:w-7/12 mx-auto bg-white dark:bg-gray-700 p-5 rounded-lg">

              
              <form class="px-8 pt-6 pb-8 mb-4 bg-white dark:bg-gray-800 rounded">
                
						<div class="mb-3 md:flex md:justify-between">
							<div class="mb-4 md:mr-2 md:mb-0">
								<label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white text-start" for="firstName">
                                    First Name
                                </label>
								<input
                      class="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white font-semibold border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="firstName"
                      type="text"
                      placeholder="First Name"
                      required
                                />
							</div>
							<div class="md:ml-2">
								<label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white text-start" for="lastName">
                                    Last Name
                                </label>
								<input
                                    class="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white font-semibold border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="lastName"
                                    type="text"
                      placeholder="Last Name" required
                                />
							</div>
                </div>
                
						<div class="mb-2">
							<label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white text-start" for="email">
                                Email
                            </label>
							<input
                                class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white font-semibold border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                    placeholder="Email" required
                            />
                </div>
						<div class="mb-3">
							<label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white text-start" for="email">
                                Phone Number
                            </label>
							<input
                                class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white font-semibold border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                id="phoneNumber"
                                type="text"
                    placeholder="Phone Number" required
                            />
                </div>
                
                
						<div class="mb-3">
							
								<label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white text-start" for="password">
                                    Password
                                  </label>

								<input
                                    class="w-full px-3 py-2 mb-2 text-sm leading-tight text-gray-700 dark:text-white font-semibold border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="password"
                                    type="password"
                                      placeholder="New Password"
                                      required
                                />
							
							
						</div>
						<div class="mb-2 text-center">
							<button
                                class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-900 focus:outline-none focus:shadow-outline"
                    type="submit"
                            >
                                Update
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

export default UpdateDashboard