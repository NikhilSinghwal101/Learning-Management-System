import React, { useState } from 'react'
import Layout from '../Layout/Layout'

const Contact1 = () => {
    const [userInput, setUserInput] = useState({
        name: "",
    })

    const handleInputChange = (e) => {
        // const { name, value } = e.target;
        // setUserInput({
        //     ...userInput, 
        //     [name]: value
        // })
        setUserInput({
            name: name,
        })
    }


    function handleFormSubmit(e) {
        e.preventDefault();
        if(!userInput.name) {
            
        }

    }

  return (
    <Layout>
        <div className='flex items-center justify-center h-[100vh]'>
            <form className='' onSubmit={handleFormSubmit}>
                <h1>Contact From</h1>
                <div>
                    <label htmlFor="name">Name</label>
                    <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    placeholder='Enter your name'
                    value={userInput.name}
                    onChange={(e) => handleInputChange(e.target.value)}
                    />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    </Layout>
  )
}

export default Contact1
