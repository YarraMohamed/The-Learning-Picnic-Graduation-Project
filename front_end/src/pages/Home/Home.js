import React,{useState, useEffect} from 'react'
import '../style/Home.css'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import kids from '../../assets/kids.jpg'
import kids2 from '../../assets/kids2.jpg'
import kids3 from '../../assets/kids3.jpg'
import kids4 from '../../assets/kids4.jpg'
import kids5 from '../../assets/girl.jpg'
import forestPhoto from '../../assets/forest.png'
import rocksPhoto from '../../assets/rocks.png'
import waterPhoto from '../../assets/water.png'
import bird1 from '../../assets/bird1.png'
import bird2 from '../../assets/bird2.png'



const Home = () => {


  useEffect(() => {
    const bird1 = document.getElementById('bird1');
    const bird2 = document.getElementById('bird2');
    const forest = document.getElementById('forest');
    const rocks = document.getElementById('rocks');
  
    window.addEventListener('scroll', () => {
     const value = window.scrollY;
     bird1.style.top = value * -1.5 + 'px';
     bird1.style.left =value * 2 + 'px';
     bird2.style.top = value * -1.5 + 'px';
     bird2.style.left = value * -5 + 'px';
     rocks.style.top = value * -0.12 + 'px';
     forest.style.top = value * 0.25 + 'px';
    })
    
  })



const slides = [
    {
      url: kids,
    },
    {
      url: kids2,
    },
    {
      url:kids3,
    },
    {
      url: kids4
    },
    {
      url: kids5
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div style={{ backgroundColor: "white",overflowX:"hidden" }}>
      <h2 className='animate__animated animate__rubberBand' id="text">Learning Picnic</h2>

      <section class="home">
        <img src={bird1} id="bird1" alt='bird'/>
        <img src={bird2} id="bird2" alt='bird'/>
          <img src={forestPhoto} id="forest" alt='forest'/>
          <img src={rocksPhoto} id="rocks" alt='rocks'/>
          <img src={waterPhoto} id="water" alt='water'/>
      </section>
      
      
      <section className='sea'>
        
<section id="hero" class="flex items-center">
    <div class="container relative" >
      <div class="row icon-boxes">
        <div class="flex items-stretch mb-5">
          <div class="icon-box">
            <div class="icon"><i class="fas fa-book-open"></i></div>
            <h4 class="title"><a href="/lessons">Lessons</a></h4>
            <p class="description">You can see your lessons and summarize them as well.</p>
          </div>
        </div>

        <div class="flex items-stretch mb-5">
          <div class="icon-box">
            <div class="icon"><i class="fas fa-edit"></i></div>
            <h4 class="title"><a href="/quizzes">Quizzes</a></h4>
            <p class="description">You can take your own quizzes on your lessons here.</p>
          </div>
        </div>

        <div class="flex items-stretch mb-5">
          <div class="icon-box">
            <div class="icon"><i class="fa-solid fa-file"></i></div>
            <h4 class="title"><a href="/report">Report</a></h4>
            <p class="description">You can explore your own grades through here.</p>
          </div>
        </div>

        <div class="flex items-stretch mb-5">
          <div class="icon-box">
            <div class="icon"><i class="fa fa-address-book"></i></div>
            <h4 class="title"><a href="/contact">Contact Us</a></h4>
            <p class="description">Don't hesitate to contact your teacher.</p>
          </div>
        </div>

      </div>
    </div>
      </section>
        

        <div id='imgSlider' className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
      >
      </div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>

      
       {/* <main id='main'>
       <section id="about" class="about">
       <div class="container" data-aos="fade-up">

         <div class="section-title">
           <h2>About Us</h2>
         </div>

         <div class="row content">
           <div class="">
             <p style={{fontSize:"19px"}}>
               The learning picnic website helps the students to study and summarize the lessons of their subject taking them to a journey of learning the new aspects and discovering new things,
                   that kids actually enjoy using can be a challenge, in addtion that it generates quizzes and offering reports for the parents<br/><b>Keep studying</b>
             </p>
             <ul>
               <li><i class="fa fa-check-square-o"></i>The lessons provide you a summarize for each lesson.</li>
               <li><i class="fa fa-check-square-o"></i>The quizzes are set to have single quiz for each lesson.</li>
               <li><i class="fa fa-check-square-o"></i>The report is set to display your grades and progress.</li>
                 </ul>
                 <a href="#" class="btn-learn-more">Learn More</a>
           </div>
         </div>

       </div>
     </section>
       </main> */}
       

    <section id="features"
        class="relative block px-6 py-10 md:py-20 md:px-10  border-b border-neutral-900 bg-neutral-900/30">


        <div class="relative mx-auto max-w-5xl text-center">
            <h2
                class="block w-full bg-gradient-to-b from-white to-gray-400 bg-clip-text font-bold text-transparent text-5xl sm:text-5xl">
                About Us
            </h2>
            <p
                class="mx-auto my-4 w-full max-w-xl bg-transparent text-center leading-relaxed tracking-wide text-gray-400 text-lg">
                The website helps students to study and summarize lessons of their subject taking them to a journey of learning the new aspects and discovering new things.<br/><b className='font-black'>Keep studying</b>
            </p>
        </div>

        <div class="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
            <div class="rounded-md border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow">
                <div class="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border "
                  style={{ backgroundImage: "linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%)",  borderColor:"rgb(93, 79, 240)"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-color-swatch" width="24"
                        height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M19 3h-4a2 2 0 0 0 -2 2v12a4 4 0 0 0 8 0v-12a2 2 0 0 0 -2 -2"></path>
                        <path d="M13 7.35l-2 -2a2 2 0 0 0 -2.828 0l-2.828 2.828a2 2 0 0 0 0 2.828l9 9"></path>
                        <path d="M7.3 13h-2.3a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h12"></path>
                        <line x1="17" y1="17" x2="17" y2="17.01"></line>
                    </svg>
                </div>
                <h3 class="mt-6 text-gray-400">Customizable</h3>
                <p class="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">The website is able to be modified to suit a particular individual or task.
                </p>
            </div>

            <div class="rounded-md border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow">
                <div class="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border "
                    style={{background:"linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%)", borderColor:"rgb(93,79,240)"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bolt" width="24"
                        height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <polyline points="13 3 13 10 19 10 11 21 11 14 5 14 13 3"></polyline>
                    </svg>
                </div>
                <h3 class="mt-6 text-gray-400">Fast Performance</h3>
                <p class="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">Our models are designed to support your study at various level. 
                </p>
            </div>

            <div class="rounded-md border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow">
                <div class="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border "
                    style={{background:"linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%)", borderColor:"rgb(93, 79, 240)"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-tools" width="24"
                        height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4"></path>
                        <line x1="14.5" y1="5.5" x2="18.5" y2="9.5"></line>
                        <polyline points="12 8 7 3 3 7 8 12"></polyline>
                        <line x1="7" y1="8" x2="5.5" y2="9.5"></line>
                        <polyline points="16 12 21 17 17 21 12 16"></polyline>
                        <line x1="16" y1="17" x2="14.5" y2="18.5"></line>
                    </svg>
                </div>
                <h3 class="mt-6 text-gray-400">Multifunctionality</h3>
                <p class="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
                    Our website is capable of performing more than one function to apply your need.
                </p>
            </div>
            </div>
            
        <div class="absolute bottom-0 left-0 z-0 h-1/3 w-full border-b"
            style={{background:"linear-gradient(to right top, rgba(79, 70, 229, 0.2) 0%, transparent 50%, transparent 100%)", borderColor:"rgba(92, 79, 240, 0.2)"}}>
        </div>
        <div class="absolute bottom-0 right-0 z-0 h-1/3 w-full"
            style={{background:"linear-gradient(to left top, rgba(220, 38, 38, 0.2) 0%, transparent 50%, transparent 100%)", borderColor:"rgba(92, 79, 240, 0.2)"}}>
        </div>

    </section>

      </section>
     
    </div>
   
  )
}

export default Home;