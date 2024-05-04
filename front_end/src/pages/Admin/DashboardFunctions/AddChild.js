import React, { useEffect, useState } from 'react'
import '../../style/FunctionsDashboard.css'
import axios from 'axios';
import { getAuthUser } from '../../../helper/Storage';
import { useParams } from "react-router-dom";

const AddChild = () => {

  const { id } = useParams();
  const Auth = getAuthUser();

  const [child, setChild] = useState({
    childrenEmails: [], 
    loading: false,
    err: "",
    success: "",
    reload: 0
  });
  

  const [childEmails, setChildEmails] = useState([]);
  const [newEmail, setNewEmail] = useState('');

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/users/` + id, {
      headers: {
        Authorization: `Bearer ${Auth.token}`,
      }
    })
      .then((resp) => {
        setChildEmails(resp.data.data.childernEmails || []);
        setChild(prevUser => ({
          ...prevUser,
          loading: false,
          err: ""
        }));
      })
      .catch((err) => {
        setChild(prevUser => ({ ...prevUser, loading: false, err: "Something went wrong, please try again later !" }));
      });
  }, [id, Auth.token]);

  const childAddition = (e) => {
  e.preventDefault();
  setChild({ ...child, loading: true });

  axios.put(
    `${process.env.REACT_APP_API_URL}/users/parent/${id}`,
    { childernEmails: [newEmail] }, 
    {
      headers: {
        Authorization: `Bearer ${Auth.token}`,
      },
    }
  )
    .then((resp) => {
      const newEmails = [...childEmails, newEmail];
      setChild({
        ...child,
        childernEmails: newEmails,
        success: "Child added successfully!",
        reload: child.reload + 1,
      });
      setChildEmails(newEmails);
      setNewEmail('');
    })
    .catch((err) => {
      setChild({
        ...child,
        loading: false,
        success: "",
        err: "Something went wrong, please try again later!",
      });
    });
};


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
                {childEmails.map((email, index) => (
                    <div key={index} class="mb-3">
                      <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white text-start" for={`email${index}`}>
                        {`Child ${index + 1}`}
                      </label>
                      <input
                        class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white font-semibold border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id={`email${index}`}
                        type="email"
                        placeholder="Email"
                        value={email}
                        readOnly
                      />
                    </div>
                  ))}

                  <div class="mb-3">
                    <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white text-start" for="newEmail">
                      Add New Email
                    </label>
                    <input
                      class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white font-semibold border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="newEmail"
                      type="email"
                      placeholder="Email"
                      value={newEmail}
                      onChange={(e) => setNewEmail(e.target.value)}
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

export default AddChild;
