import React from 'react'
import Header from '../../components/Header';
import Footer from '../../components/Footer'
const ResetInstruction = () => {
    return (
        <div >

            <div><Header /></div>

            <div className="text-xl font-bold text-center rounded-3xl p-10 absolute inset-x-1/4 my-10
         h-3/4 w-1/2  bg-gray-200 content-center justify-center" >
                <div className="bg-white w-10 rounded-full my-12  inset-x-2/4 justify-center ">
                    {/* <AiFillLock size={32} height={34} color="#306844" /> */}
                </div>
                <p className="py-24 text-center">You forget password Don't worry; we got you covered!! </p>
                <label className="text-center">Please Enter your email for password recovery</label>

                <a className="my-12 underline" href=""> Send Instruction</a>
            </div>
            <div className="sticky bottom-0"><Footer /></div>
        </div>
    )
}

export default ResetInstruction
