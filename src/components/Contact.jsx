import React from 'react'

const Contact = () => {
     const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "2a8190dd-3c1c-401c-af40-8925901f7b72");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
        
      setResult("Form Submitted Successfully");
      alert("email sent success!")
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='flex flex-col  items-center  min-h-screen'>
      <div className='flex flex-col max-w-[700px] '>
        <h1 className='text-xl text-center mt-10 text-gray-900 font-doto font-semibold'>connect with me</h1>
      <p className='text-4xl text-center mt-2 '>Get in Touch</p>
      <p className='mt-[20px] text-center'>I'd love to here from you! If you have any queries, comments or feedback , please use the form below</p>
      </div>

      <form onSubmit={onSubmit} className='flex flex-col items-center'>
        <div className='flex space-x-4 mt-10'>
             <input className='px-2 py-2 border border-gray-700 w-[290px] rounded-md' type="text" placeholder='Enter your name' name='name' />
             <input className='px-2 py-2 border border-gray-700 w-[290px] rounded-md' type="text" placeholder='Enter your email' name='email'/>
        </div>
       
        <textarea className='mt-10 border border-gray-700 w-[594px] h-[250px] rounded-md placeholder:align-top p-4' type="text" placeholder='write your message here...' name='message'></textarea>
        <button type='submit' className='px-2 py-2 rounded-[50px]  mt-5 border border-gray-600 bg-gray-900 text-white'>submit now</button>

      </form>
    </div>
  )
}

export default Contact
