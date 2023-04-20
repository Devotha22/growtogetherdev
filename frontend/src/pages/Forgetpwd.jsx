import React from 'react'
import Header from '../components/Header';
import { useState } from 'react';
const Forgetpwd = () => {
    const [email, setEmail] = useState("");
    return (
        <div>
            <Header />

            <div className="rounded-3xl p-10 
                 h-80 w-1/4 m-32 items-center justify-items-center bg-gray-400">
                <p className="py-6">You forget password Don't worry we recover it for you</p>
                <input className="my-4"
                    type="email"
                    placeholder="Please Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} /><br/>
                <a className="my-12 underline" href=""> Send Instruction</a>
            </div>

        </div>
    )
}

export default Forgetpwd
