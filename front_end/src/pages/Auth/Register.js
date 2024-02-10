import React,{useState, useEffect}  from "react";
import child from '../../assets/child.jpg'
import '../style/Register.css'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import { setAuthUser } from "../../helper/Storage";

const Register = () => {
   const Navigate = useNavigate();
  const [register, setRegister] = useState({
    firstName: "",
    lastName:"",
   email:"",
   password : "",
   phone : "",
   loading : false,
   err : null,
  });

const RegisterFun = (e)=>{
    e.preventDefault();
    console.log(register);
    setRegister({...register,loading:true})
  axios.post("http://localhost:4000/users/register", {
      firstName: register.firstName,
      lastName: register.lastName,
      email : register.email,
      password : register.password,
      phone : register.phone,
    })
    .then((resp)=>{
      setRegister({...register,loading:true, err: ""})
      setAuthUser(resp.data);
      Navigate("/");

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

              {(register.err!== null)?<div class="p-4 mb-4 text-lg font-semibold text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
          {register.err}
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
						<div class="mb-2">
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
						<div class="mb-6 text-center">
							<button
                                class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-900 focus:outline-none focus:shadow-outline"
                    type="submit"
                    disabled={register.loading===true}
                            >
                                Register Account
                            </button>
						</div>
						<hr class="mb-6 border-t" />
						<div class="text-center">
							<a class="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800"
								href="/login">
								Already have an account? Login!
							</a>
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