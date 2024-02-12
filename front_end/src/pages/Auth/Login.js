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
    axios.post("http://localhost:2222/users/login",{
      email : login.email,
      password : login.password,
    }).then((resp)=>{
      setLogin({...login, loading: true, err: ""})
      setAuthUser(resp.data.data);
      Navigate("/");

    }).catch((errors) => {
      setLogin({...login, loading: false, err: errors.response.data.error.message, });
    });
  };

// function eyeVisible() {
//   var x = document.getElementById("password");
//   var y = document.getElementById("hide1");
//   var z = document.getElementById("hide2");

//   if (x.type === 'password') {
//     x.type = "text";
//     y.style.display = "block";
//     z.style.display = "none";
    
//   } else {
//     x.type = "password";
//     y.style.display = "none";
//     z.style.display = "block";
//   }
// }

  return (
    // <div className="back">
    //   <div className="form-box">
    
    //   <form className="formLogin animate__animated animate__heartBeat">
    //   <h1 className="loginHeader animate__animated animate__swing">Login</h1>
    //   <div className="input-box">
    //     <i class="fa-solid fa-envelope"></i>
    //         <input type="email" placeholder="Email address" required id="username" />
    //     </div>
    //   <div className="input-box">
    //     <i class="fa-solid fa-key"></i>
    //         <input type="password" placeholder="Password" required id="password" />
    //     <span className="eye" onClick={eyeVisible}>
    //       <i id="hide1" class="fa-solid fa-eye"></i>
    //       <i id="hide2" class="fa-solid fa-eye-slash"></i>
    //     </span>
    //   </div>
    //   <button type="submit" className="login-btn" >Log in</button>
    //     </form>
      


    //    <div className="forgot-password animate__animated animate__heartBeat">
    //     <Link to="/forgetPassword">Forgotten Password?</Link>
    //   </div>
    //     <hr className="mastra" />
    //     <Link to="/registration">
    //        <button type='button' className="register-btn animate__animated animate__heartBeat" href="/registration" id="signup">Create new account</button>
    //     </Link>
    //   </div>
    //   </div>


    // <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    //     <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    //       <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
    //         Sign in to your account
    //       </h2>
    //     </div>

    //     <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    //       <form className="space-y-6" action="#" method="POST">
    //         <div>
    //           {/* <label htmlFor="exampleFormControlInputEmail" className="block text-sm font-medium leading-6 text-gray-900">
    //             Email address
    //           </label> */}
    //           <div className="mt-2">
    //             <TEInput type="email" id="exampleFormControlInputEmail" label="Email Address"></TEInput>
    //           </div>
    //         </div>

    //         <div>
    //           <div className="flex items-center justify-between">
    //             {/* <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
    //               Password
    //             </label> */}
                
    //           </div>
    //           <div className="mt-2">
    //             <TEInput type="password" id="exampleFormControlInputPassword" label="Password" className="border-white"></TEInput>
    //           </div>
    //         </div>
    //             <div className="text-sm">
    //               <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
    //                 Forgot password?
    //               </a>
    //             </div>
    //         <div>
    //           <button
    //             type="submit"
    //             className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
    //             Sign in
    //           </button>
    //         </div>
    //       </form>

    //       <p className="mt-10 text-center text-sm text-gray-500">
    //         Not a member?{' '}
    //         <a href="/registration" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
    //           Sign Up and register now.
    //         </a>
    //       </p>
    //     </div>
    //   </div>

    <div class="h-full loginContainer">
      
	<div class="mx-auto">
		<div class="flex justify-center px-6 py-12">
			
			<div class="w-full justify-center xl:w-3/5 lg:w-11/12 flex">
				
				<div class="w-full lg:w-7/12 bg-white dark:bg-gray-700 p-5 rounded-lg">
              <h3 class="py-4 text-4xl font-bold text-center text-gray-800 dark:text-white mb-2">Sign In</h3>

              
        
   {(login.err!== null)?<div class="p-4 mb-4 text-lg font-semibold text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
          {login.err}
        </div>:login.err}
              
					<form onSubmit={LoginFun} class="px-8 pt-6 pb-8 mb-4 bg-white dark:bg-gray-800 rounded">
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
						<div class="text-center">
							<p className="mt-10 text-center text-sm text-gray-500">
               Not a member?{' '}
             <Link to={"/registration"} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 hover:underline">
               Sign Up and register now.
            </Link>
          </p>
						</div>
              </form>
                      </div>
                      
          </div>
          
		</div>
	</div>
</div>
  )
}

export default Login