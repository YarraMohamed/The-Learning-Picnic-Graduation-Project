import React,  { useEffect, useState } from 'react'
import '../../style/FunctionsDashboard.css'
import axios from 'axios';
import { getAuthUser } from '../../../helper/Storage';
import {  useParams } from "react-router-dom";

const UpdateDashboard = () => {


  let { updateId } = useParams();
  const Auth = getAuthUser();

  const [user, setUser] = useState({
    firstName: "",
    lastName:"",
    email:"",
    password : "",
    phone: "",
    loading: false,
    err: "",
    success : "",
    reload : 0
  });

  const updateData = (e) => {
    e.preventDefault();
    setUser({ ...user, loading: true });

    const formData = new FormData();
    formData.append("firstName", user.firstName);
    formData.append("lastName", user.lastName);
    formData.append("email", user.email);
    formData.append("password", user.password);
    formData.append("phone", user.phone);

    axios.put(`${process.env.REACT_APP_API_URL}/users/` + updateId, formData,{
        headers: {
        Authorization: `Bearer ${Auth.data.token}`,
        "Content-Type": "application/json",
      },
      })
      .then((resp) => {
        setUser({
          ...user,
          success: "User updated successfully !",
          reload: user.reload + 1,
        });
      })
      .catch((err) => {
        setUser({
          ...user,
          loading: false,
          success: "",
          err: "Something went wrong, please try again later !",
        });
      });
  }


   useEffect(() => {
     axios.get(`${process.env.REACT_APP_API_URL}/users/` + updateId, {
       headers: {
         Authorization: `Bearer ${Auth.data.token}`,
       }
     })
       .then((resp) => {
         setUser(prevUser => ({
           ...prevUser,
           firstName: resp.data.data.firstName,
           lastName: resp.data.data.lastName,
           email: resp.data.data.email,
           password: resp.data.data.password,
           phone: resp.data.data.phone,
           loading: false,
           err: ""
         }))
       })
       .catch((err) => {
         setUser(prevUser => ({ ...prevUser, loading: false, err: "Something went wrong, please try again later !"}));
     })
     ;
     
  }, [user.reload]);

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
                
                {
                  user.err && (
                    <div class="p-4 mb-2 mx-auto text-lg text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                      <span class="font-medium">{user.err}</span>
               </div>
                  )
                }

                {
                  user.success && (
                    <div class="p-4 mb-2 text-lg text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
                      <span class="font-medium">{user.success}</span>
              </div>
                  )
                }              
              
              <form class="px-8 pt-6 pb-8 mb-4 bg-white dark:bg-gray-800 rounded" onSubmit={updateData}>
                
						<div class="mb-3 md:flex md:justify-between">
							<div class="mb-4 md:mr-2 md:mb-0">
								<label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white text-start" for="firstName">
                                    First Name
                                </label>
								<input
                      class="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white font-semibold border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="firstName"
                      type="text"
                      value={user.firstName}
                      onChange={(e)=>setUser({...user, firstName: e.target.value})} 
                      
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
                        value={user.lastName}
                        onChange={(e)=>setUser({...user, lastName: e.target.value})} 
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
                      value={user.email} 
                      onChange={(e)=>setUser({...user, email: e.target.value})} 
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
                      value={user.phone}
                      onChange={(e) => setUser({ ...user, phone: e.target.value })} 
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
                      value={user.password}
                                      
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