import { useState } from "react";
import React, { useEffect } from "react"

const Cart = ({ selectedCourses, remainingCredit, totalCredit, totalPrice }) => {
    
    return (
   
        <div>

            <div className="bg-slate-200 rounded-2xl p-5" >
                <h1 className="text-blue-400 font-extrabold mb-4 bg-slate-50 rounded text-center" >Registration Info.</h1>
                <h1 className="text-yellow-900 font-bold mb-4 underline">Credit Remaining: {remainingCredit} hr</h1>

                <hr />
                <h1 className="text-black font-bold mb-4">Course Name</h1>
                

                {selectedCourses.map((course, index) => (




                    <ol className="text-black">{index + 1}. {course.course_title}</ol>
                ))}

                <hr className="underline"  />

                <h1 className="text-yellow-900 font-bold mt-4"> Total Credit: {totalCredit} hr</h1>
                <h1 className="text-yellow-900 font-bold mt-4"> Total Price: ${totalPrice.toFixed(2)} </h1>

            </div>



        </div>
    );
};

export default Cart;