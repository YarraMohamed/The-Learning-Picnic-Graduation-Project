import React from 'react'
import '../../pages/style/Profile.css'

const Account = () => {
  return (
    <div>
	  <section class="sectionAccount bg-light">
      <div class="accountContainer">
        <div class="row">
            <div class="cardAccount mb-4 mx-auto w-auto">
                <div class="border-2">
                    <div class="card-body p-8">
                        <div class="row items-center">
                        <div class="mb-4">
                                <img className='imageAccount' src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="..."/>
                            </div>
                            <div>
                                <div class="backgroundCard inline-block py-8 px-8 mb-8 rounded-md">
                                    <h3 class="text-white mb-0">AAAAAAAAAAAA</h3>
                                    <p class="mt-0.5 text-yellow-300 font-medium">STUDENT</p>
                                </div>
                                <ul class="mb-8">
                                    <li class="mb-2"><span class="text-xl me-2 font-semibold">Role:</span> Student</li>
                                    <li class="mb-2"><span class="text-xl me-2 font-semibold">Name:</span> aaaaaaaaaaaaaaa</li>
                                    <li class="mb-2"><span class="text-xl me-2 font-semibold">Email:</span> aaa@mail.com</li>
                                    <li class="mb-2"><span class="text-xl me-2 font-semibold">ID:</span> 22222222</li>
                                    <li class="mb-2"><span class="text-xl me-2 font-semibold">Phone:</span> 123456</li>
                                </ul> 
                                </div>
                            </div>
                        </div>
                   </div>
            </div>
        </div>
    </div>    
    </section>
		</div>
  )
}

export default Account