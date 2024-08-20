import React from 'react'
import { FaRocketchat } from "react-icons/fa";

const testimonials = [

  {
    name: 'Jane Doe',
    location: 'New York, NY',
    review: 'The service has been life-changing for me. the mental wellness resources and personalized support have made a hige difference in my daily life. highiy recommended! ',
    image: "https://static.vecteezy.com/system/resources/thumbnails/007/421/587/small/happy-young-businessman-wearing-headphones-with-mic-talking-with-clients-indoors-photo.jpg"
  },
  
  {
    name: 'John Smith',
    location: 'New York, NY',
    review: 'John Smith did an exceptional job on our project. The website was delivered on time and exceeded our expectations. The design is modern, responsive, and user-friendly, with smooth functionality. ',
    image: "https://us.123rf.com/450wm/peopleimages12/peopleimages122306/peopleimages12230616658/206514775-call-center-computer-and-happy-man-virtual-consultant-or-advisor-in-customer-support-online-advice.jpg?ver=6"
  },
  

] 


const Testimonial = () => {
  return (
    <div id='testimonial' className="bg-[#f7f8fc] py-12">
      <div className="container mx-auto pb-40">
        <div className="text-center mb-12">
          <h2 className=" text-4xl capitalize font-bold font-secondary mb-3"> What Our Clients Say </h2>
          <p className="text-lg mb-12 md:w-1/2 mx-auto"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, hic! Distinctio suscipit molestias ullam nesciunt saepe voluptas hic reprehenderit laborum voluptatibus magni magnam, maiores provident totam explicabo facere officia veritatis.</p>
        </div>
         <div className="flex flex-col md:w-4/5 mx-auto md:flex-row md:gap-12 gap-8">
            {
              testimonials.map((testimonal, index) =>(
                 <div key={index} className=" relative bg-white rounded-lg p-6 flex-1">
                   <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2">
                      <FaRocketchat className="size-12 text-primary"/>
                   </div>
                   <div className="flex flex-col space-y-3 mb-4">
                      <p className="text-lg mb-2">{testimonal.review} </p>
                      <div className="flex gap-1">
                         <img src={testimonal.image} alt="" className="size-14 rounded-full object-cover mr-4" />
                         <div> 
                            <p className="font-semibold">{testimonal.name} </p>
                            <p className="text-gray-500">{testimonal.location} </p>
                         </div>
                      </div>
                   </div>
                 </div>
              ))
            }
         </div>
      </div>
    </div>
  )
}

export default Testimonial