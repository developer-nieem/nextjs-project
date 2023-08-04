import React from 'react';
import style from './page.module.css';
import Button from '@/components/Button/Button';

const AboutPage = () => {
    return (
        <div className='mt-12'>
            <div className={`${style.about_hero} flex flex-col justify-end p-6`}>
                <h3 className='text-4xl font-bold'>About us</h3>
                <h4 className='text-2xl font-medium'> Lorem ipsum dolor sit amet.</h4>
            </div>

            <div className="row my-6">
                <div className="md:col-6">
                    <h1 className='text-2xl'>Who are we</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti distinctio error doloremque quam, officia magnam, enim, fuga dolor autem placeat in! Cupiditate, ratione blanditiis quia soluta magni veniam fugiat quasi iure. Labore, laudantium, a est modi corrupti mollitia inventore facilis quibusdam recusandae dolorem maxime ipsum odio atque cum tenetur quos?</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti distinctio error doloremque quam, officia magnam, enim, fuga dolor autem placeat in! Cupiditate, ratione blanditiis quia soluta magni veniam fugiat quasi iure. Labore, laudantium, a est modi corrupti mollitia inventore facilis quibusdam recusandae dolorem maxime ipsum odio atque cum tenetur quos?</p>
                </div>
                <div className="md:col-6 space-y-4">
                    <h1 className='text-2xl'>What We do?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex assumenda quibusdam quos molestiae ipsa velit ad necessitatibus nobis id totam?

                        <br />
                        <br />
                        --Lorem, ipsum dolor.
                        <br />
                        <br />
                        --Lorem, ipsum dolor.
                        <br />
                        <br />
                        --Lorem, ipsum dolor.
                    </p>
                    <Button  url='/about' text='About'></Button>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;