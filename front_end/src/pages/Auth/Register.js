import React,{useState, useEffect}  from "react";
import child from '../../assets/child.jpg'
import '../style/Register.css'
import {  useNavigate } from "react-router-dom";
import axios from 'axios'
import { setAuthUser, getAuthUser } from "../../helper/Storage";

const Register = () => {
  const Navigate = useNavigate();
  const Auth = getAuthUser();
  const [register, setRegister] = useState({
    firstName: "",
    lastName:"",
   email:"",
   password : "",
    phone: "",
   role: "",
   loading : false,
    err: null,
   status: "",
  });

const RegisterFun = (e)=>{
    e.preventDefault();
    console.log(register);
    setRegister({...register,loading:true})
  axios.post(`${process.env.REACT_APP_API_URL}/users/register`, {
    firstName: register.firstName,
      lastName: register.lastName,
      email : register.email,
      password : register.password,
    phone: register.phone,
    role: register.role,
  }, {  
      headers :{
        Authorization: `Bearer ${Auth.token}`,
      },
    })
    .then((resp)=>{
      setRegister({...register,loading:true, status:"Success"})
    })
    .catch((errors)=>{
      setRegister({...register,loading:false,err:errors.response.data.msg});
    })
  };

    
  return (
    <div class="h-full registerContainer">
	
    <div class="wave"></div>
     <div class="wave"></div>
     <div class="wave"></div>

	<div class="mx-auto">
		<div class="flex justify-center px-6 py-12">
			
			<div class="w-full xl:w-3/5 lg:w-11/12 flex">
				
				<div class="w-full lg:w-7/12 bg-white dark:bg-gray-700 p-5 rounded-l-lg">
              <h3 class="py-4 text-4xl font-bold text-center text-gray-800 dark:text-white">Create an Account!</h3>

              {(register.err!== null)?<div class="p-3 mb-4 text-lg font-semibold text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
          <p className="text-red-500">Something is wrong</p>
        </div>:""}
              {(register.status === "Success")?<div class="p-3 mb-4 text-lg font-semibold text-red-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-red-400" role="alert">
          <p className="text-green-500">Registered Successfully </p>
        </div>:""}
              
              <form onSubmit={RegisterFun} class="px-8 pt-6 pb-8 mb-4 bg-white dark:bg-gray-800 rounded">
                
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
                      value={register.firstName}
                      onChange={(e) => setRegister({ ...register, firstName: e.target.value })}
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
                      value={register.lastName}
                      onChange={(e) => setRegister({ ...register, lastName: e.target.value })}
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
                    value = {register.email}
         onChange={(e)=>
         setRegister({...register, email:e.target.value}) 
        }
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
                    value = {register.phone}
         onChange={(e)=>
         setRegister({...register, phone:e.target.value}) 
        }
                            />
                </div>

                <div className="flex mb-4">
                  
<h3 class="mb-1 float-left font-semibold text-gray-900 dark:text-white">Role:</h3>
<ul class="float-right items-center w-9/12 mx-auto text-sm font-medium text-gray-900 bg-transparent border border-gray-200 rounded-lg sm:flex dark:bg-transparent dark:border-gray-600 dark:text-white">
    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div class="flex items-center ps-3">
                        <input id="STUDENT" type="radio" value="STUDENT"
                          onChange={(e) =>
         setRegister({...register, role:e.target.value}) 
                        }
                          name="role" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
            <label for="STUDENT" class="ml-2 py-2 text-base font-medium text-gray-900 dark:text-gray-300">Student</label>
        </div>
    </li>
    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div class="flex items-center ps-3">
                        <input id="PARENT" type="radio" value="PARENT"
           onChange={(e) =>
         setRegister({...register, role:e.target.value}) 
                          }
                          name="role" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
            <label for="PARENT" class="ml-2 py-2 text-base font-medium text-gray-900 dark:text-gray-300">Parent</label>
        </div>
    </li>
     <li class="w-full dark:border-gray-600">
        <div class="flex items-center ps-3">
                        <input id="TEACHER" type="radio" value="TEACHER"
         onChange={(e) =>
         setRegister({...register, role:e.target.value}) 
                          }
                          name="role" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
            <label for="TEACHER" class="ml-2 py-2 text-base font-medium text-gray-900 dark:text-gray-300">Teacher</label>
        </div>
    </li>
</ul>

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
                                       value = {register.password}
         onChange={(e)=>
         setRegister({...register, password :e.target.value}) 
        }
                                />
							
							
						</div>
						<div class="mb-2 text-center">
							<button
                                class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-900 focus:outline-none focus:shadow-outline"
                    type="submit"
                    disabled={register.loading===true}
                            >
                                Register Account
                            </button>
						</div>
					</form>
                      </div>
                      <div class="w-full h-auto bg-gray-400 dark:bg-gray-800 hidden lg:block lg:w-2/5 bg-cover rounded-r-lg bg-center"
					style={{ backgroundImage: `url(${child})` }}></div>

			</div>
		</div>
	</div>
</div>
  )
}

export default Register;