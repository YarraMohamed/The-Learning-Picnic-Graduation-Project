import React,  { useEffect, useState } from 'react'
import '../../style/FunctionsDashboard.css'
import axios from 'axios';
import { getAuthUser } from '../../../helper/Storage';
import {  useParams } from "react-router-dom";

const AddChild = () => {

  const { addChild } = useParams();
  const Auth = getAuthUser();


  const [child, setChild] = useState({
      childernEmails:[],
      loading: false,
      err: "",
      success: "",
      reload: 0
  });


  const [email, setEmail] = useState('');
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const childAddition = (e) => {
    e.preventDefault();
    setChild({ ...child, loading: true });

    const formData = new FormData();
    formData.append("childernEmails", child.childernEmails[email]);

    axios.put(`${process.env.REACT_APP_API_URL}/users/parent/` + addChild, formData,{
        headers: {
        Authorization: `Bearer ${Auth.data.token}`,
      },
      })
      .then((resp) => {
        setChild({
          ...child,
          success: "Child added successfully !",
          reload: child.reload + 1,
        });
        console.log(resp);
      })
      .catch((err) => {
        setChild({
          ...child,
          loading: false,
          success: "",
          err: "Something went wrong, please try again later !",
        });
      });
  }

  useEffect(() => {
     axios.get(`${process.env.REACT_APP_API_URL}/users/` + addChild, {
       headers: {
         Authorization: `Bearer ${Auth.data.token}`,
       }
     })
       .then((resp) => {
         setChild(prevUser => ({
           ...prevUser,
           childernEmails: resp.data.data.childernEmails,
           loading: false,
           err: ""
         }))

         console.log(resp.data.data.childernEmails);
       })
       .catch((err) => {
         setChild(prevUser => ({ ...prevUser, loading: false, err: "Something went wrong, please try again later !"}));
     })
     ;
     
  }, [child.reload]);


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
                 <h3 class="pb-2 text-base font-semibold text-left text-[#b5b7ba] dark:text-[#b5b7ba]">
                  The maximum number of emails to add is <span className='font-extrabold'>three</span> at each time.
                </h3>

                {
                  child.err && (
                    <div class="p-4 mb-2 mx-auto text-lg text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                      <span class="font-medium">{child.err}</span>
               </div>
                  )
                }

                {
                  child.success && (
                    <div class="p-4 mb-2 text-lg text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
                      <span class="font-medium">{child.success}</span>
              </div>
                  )
                } 

              <form class="px-8 pt-6 pb-8 mb-4 bg-white dark:bg-gray-800 rounded" onSubmit={childAddition}>     
                
						<div class="mb-3">
							<label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white text-start" for="email1">
                               First Child
                            </label>
							<input
                                class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white font-semibold border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                id="email1"
                                type="email"
                      placeholder="Email" required
                      value={email}
                      // onChange={(e)=>setChild({...child, childernEmails: e.target.value})}
                     onChange={handleEmailChange} 
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
                      onChange={(e)=>setChild({...child, childernEmails: e.target.value})} 
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
                      onChange={(e)=>setChild({...child, childernEmails: e.target.value})} 
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