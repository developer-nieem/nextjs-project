import React from 'react';
import style from './page.module.css';
import Image from 'next/image';

const ContactPage = () => {
    return (
        <div className='my-24'>
            <h1 className='text-center text-4xl font-bold mb-6 text-gray-400'>Let's Keep in the touch</h1>
       
            <div className='row'>
                    <div className="md:col-6">
                        <Image className={`w-full img`} src='https://images.pexels.com/photos/33153/raisting-sattelit-reception-signal.jpg?auto=compress&cs=tinysrgb&w=600' width={500}  height={500} alt='contact'></Image>
                    </div>
                    <div className="md:col-6">
                            <form className=' space-y-4'>
                                <input className='w-full p-3 bg-transparent border border-1 rounded-xl' type="text"  placeholder='Name' name='name'/>
                                <input className='w-full p-3 bg-transparent border border-1 rounded-xl' type="email"  placeholder='Email ' name='email'/>
                                <textarea className='w-full p-3 bg-transparent border border-1 rounded-xl' type="textarea"  rows='8'  placeholder='Message' name='message'/>
                                <button className='p-2 bg-zinc-500'>Submit</button>
                            </form>
                    </div>
            </div>
        </div>
    );
};

export default ContactPage;