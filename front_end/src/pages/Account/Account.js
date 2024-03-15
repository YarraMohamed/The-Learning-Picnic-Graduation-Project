import React from 'react'
import '../../pages/style/Profile.css'

// const Account = () => {
//   return (
//     <div>
// 	  <section class="sectionAccount bg-light">
//       <div class="accountContainer">
//         <div class="row">
//             <div class="cardAccount mb-4 mx-auto w-auto">
//                 <div class="border-2">
//                     <div class="card-body p-8">
//                         <div class="row items-center">
//                         <div class="mb-4">
//                                 <img className='imageAccount' src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="..."/>
//                             </div>
//                             <div>
//                                 <div class="backgroundCard inline-block py-8 px-8 mb-8 rounded-md">
//                                     <h3 class="text-white mb-0">AAAAAAAAAAAA</h3>
//                                     <p class="mt-0.5 text-yellow-300 font-medium">STUDENT</p>
//                                 </div>
//                                 <ul class="mb-8">
//                                     <li class="mb-2"><span class="text-xl me-2 font-semibold">Role:</span> Student</li>
//                                     <li class="mb-2"><span class="text-xl me-2 font-semibold">Name:</span> aaaaaaaaaaaaaaa</li>
//                                     <li class="mb-2"><span class="text-xl me-2 font-semibold">Email:</span> aaa@mail.com</li>
//                                     <li class="mb-2"><span class="text-xl me-2 font-semibold">ID:</span> 22222222</li>
//                                     <li class="mb-2"><span class="text-xl me-2 font-semibold">Phone:</span> 123456</li>
//                                 </ul> 
//                                 </div>
//                             </div>
//                         </div>
//                    </div>
//             </div>
//         </div>
//     </div>    
//     </section>
// 		</div>

//   )
// }

// export default Account

const Account = () =>{
    return (
        <div className="bg-blue-900 bg-opacity-50 backdrop-filter backdrop-blur-lg text-black min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-xl max-w-xl w-full h-auto xl:h-120">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-semibold">John Doe</h2>
            <p className="text-lg text-gray-600">Software Engineer</p>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div className="flex justify-between items-center border-b pb-2">
              <span className="text-gray-700">First Name:</span>
              <span>John</span>
            </div>
            <div className="flex justify-between items-center border-b pb-2">
              <span className="text-gray-700">Last Name:</span>
              <span>Doe</span>
            </div>
            <div className="flex justify-between items-center border-b pb-2">
              <span className="text-gray-700">Email:</span>
              <span>john.doe@example.com</span>
            </div>
            <div className="flex justify-between items-center border-b pb-2">
              <span className="text-gray-700">Phone:</span>
              <span>555-123-4567</span>
            </div>
            <div className="flex justify-between items-center border-b pb-2">
              <span className="text-gray-700">ID:</span>
              <span>12345</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700">Role:</span>
              <span>Software Engineer</span>
            </div>
          </div>
        </div>
      </div>

    )
}

export default Account

