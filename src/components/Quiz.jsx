import React from 'react';
import {useLoaderData} from 'react-router-dom'
import EachQuiz from './EachQuiz';


const Quiz = () => {
    const quizTopic = useLoaderData();
    const {data} = quizTopic;
   const eachQuiz = data.questions;
    // console.log(data)
    
    return (
        <div className=' w-100 md:w-3/4 lg:w-6/12 mx-4 md:mx-auto'>
            <h1 className='text-center p-6 text-4xl font-semibold text-cyan-400'>Quiz for {data.name}</h1>
           <div className=''>
           {
                eachQuiz.map((item, idx) => <EachQuiz
                    idx={idx}
                    key={item.id}
                    item={item}
                ></EachQuiz>)
            }
           </div>
             
        </div>
    );
};

export default Quiz;