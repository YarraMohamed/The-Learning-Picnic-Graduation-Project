import React, {useState} from "react"
import "../style/Login.css"
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import { setAuthUser } from "../../helper/Storage";
import child from '../../assets/child.jpg'
import kid from '../../assets/kid_transparent.png'
import { TEInput } from "tw-elements-react";
import close from './close.png'



const Login = () => {

  const Navigate = useNavigate();
  const [login,setLogin]=useState({
   email:"",
   password : "",
   loading : false,
   err : null,
  });

  const LoginFun = (e)=>{
    e.preventDefault();
    setLogin({...login, loading:true})
    axios.post(`${process.env.REACT_APP_API_URL}/users/login`,{
      email : login.email,
      password : login.password,
    }).then((resp)=>{
      setLogin({...login, loading: true, err: ""})
      setAuthUser(resp.data.data);
      if (resp.data.data.role === "ADMIN") {
        Navigate("/registration")
      } else {
        Navigate("/home")
      }

    }).catch((errors) => {
      setLogin({...login, loading: false, err: errors.response.data.error.message, });
    });
  };

  return (
    <div class="h-full loginContainer">
      
	<div class="mx-auto">
		<div class="flex justify-center px-6 py-12">
			
			<div class="w-full justify-center xl:w-3/5 lg:w-11/12 flex">
				
				<div class="w-full lg:w-7/12 bg-white dark:bg-white-700 p-5 rounded-lg">
              <h3 class="py-4 text-4xl font-bold text-center text-gray-800 dark:text-white mb-2">Sign In</h3>

              
        
   {(login.err!== null)?<div class="p-4 mb-4 text-lg font-semibold text-red-800 rounded-lg bg-red-50 dark:bg-white-800 dark:text-red-400" role="alert">
          {login.err}
        </div>:""}
              
					<form onSubmit={LoginFun} class="px-8 pt-6 pb-8 mb-4 bg-white dark:bg-white-800 rounded">
						<div class="mb-4 md:flex md:justify-between">		
						</div>
						<div class="mb-4">
							<label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white text-start" for="email">
                                Email
                            </label>
							<input
                                class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white font-semibold border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                    placeholder="Email" required
                    value = {login.email}
        onChange={(e)=>
        setLogin({...login, email:e.target.value}) }
                            />
						</div>
						<div class="mb-5">
							
								<label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white text-start" for="password">
                      Password
                </label>

								<input
                                    class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white font-semibold border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="password"
                                    type="password"
                                      placeholder="Enter Password"
                    required  
                    value = {login.password}
        onChange={(e)=>
        setLogin({...login, password:e.target.value}) }
                                />

                  
						</div>
						<div class="mb-7 text-center">
							<button
                                class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-900 focus:outline-none focus:shadow-outline hover:cursor-pointer"
                    type="submit"
                    disabled={login.loading===true}
                            >
                                Log In
                            </button>
						</div>
						<hr class="mb-6 border-t" />
              </form>
                      </div>
                      
          </div>
          
		</div>
	</div>
</div>
  )
}

export default Login