import React from 'react'

const packages = [
{
  name: "Bronze Package",
  price: "$99",
  description: "Ideal for individuals or small business looking to get started with mental wellness.",
  features: [
    'Access to basic wellness resources',
    'Weekly mental wellness tips',
    'Community support group access',
  ],
},
{
  name: "Silver Package",
  price: "$199",
  description: "A great choice for growing businesses with additional featuures and support for mental wellness.",
  features: [
    'All Bronze PAckage features',
    'Monthlyguided meditiation sessions',
    'Personalized wellness plan',
    'Access ti expert webinars',
  ],
},
{
  name: "Gold Package",
  price: "$269",
  description: "A great choice for growing businesses with additional featuures and support for mental wellness.",
  features: [
    'All Bronze PAckage features',
    'Monthlyguided meditiation sessions',
    'Personalized wellness plan',
    'Access ti expert webinars',
  ],
},


]


const Pricing = () => {
  const handleScrollToContact =()=>{
    const targetElement = document.getElementById('contact');
    if(targetElement){
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      })
    }
  }
  return (
    <div id='pricing' className="bg-[#f7f8fc] pt-32">
      <div className="container mx-auto px-8">
        <div className="text-center mb-12">
           <h2 className="text-4xl font-bold font-secondary mb-3"> Perfect for Small & Lear Brands</h2>
            <p className="text-lg mb-12 md:w-2/3 mx-auto ">
            Our platform is designed with small and lean brands in mind. Get the tools you need to compete and thrive without the overhead of large-scale solutions. Whether you’re a startup or an emerging brand, we offer cost-effective and scalable options to support your growth.
            </p>

        </div>
         <div className="flex flex-col md:w-5/6 mx-auto md:flex-row gap-8 pb-12">
           {
            packages.map((pkg, index) => (
              <div key={index} className="bg-white rounded-lg p-6 flex-1 shadow-lg">
                 <h3 className="text-2xl font-semibold mb-4">{pkg.name} </h3>
                  <hr className="w-24 border text-primary border-primary"/>
                  <p className="text-3xl font-bold mb-4">{pkg.price} <span className="text-lg font-normal"> /mo</span> </p>
                  <p className="text-lg mb-4">{pkg.description} </p>
                   <ul className="list-disc list-inside space-y-2 mb-6">
                     {
                      pkg.features.map((feature, idx) => (
                        <li key={idx}> {feature}</li>
                      ))
                     }
                   </ul>
                   <button onClick={handleScrollToContact} className="bg-primary text-white px-4 py-2 rounded"> Get Started</button>
              </div>
            ))
           }
         </div>
      </div>
    </div>
  )
}

export default Pricing