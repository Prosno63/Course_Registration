import { useState } from "react";
import React, { useEffect } from "react";

import "./Courses.css";
import Navbar from './Navbar/Navbar';

import Cart from "../Cart/cart";




const Courses = () => {

    const [courses, setCourses] = useState([]);
    const [selectedCourses, setSelectedCourses] = useState([]);
    const [remainingCredit, setRemainingCredit] = useState(0);
    const [totalCredit, setTotalCredit] = useState(0);
    const [totalPrice, setPrice] = useState(0);

    useEffect(() => {

        fetch('courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])


    const handleSelectCourse = (course) => {

        const isExist = selectedCourses.find((item) => item.id == course.id);
        let count = course.course_credit;
        let price = course.course_price;
        if (isExist) {
            return alert("Already Selected ");
        }
        else {

            selectedCourses.forEach((item) => {
                count = count + item.course_credit;
                price = price + item.course_price;
            });


            const remaining = 20 - count;
            if (count > 20) {
                return alert("Maximum Credit limit Will Cross")
            }
            setRemainingCredit(remaining);
            setTotalCredit(count);
            setPrice(price);

            setSelectedCourses([...selectedCourses, course]);


        }


    }

    return (



        <div className="flex justify-center m-4 gap-6" >

            <div className="w-3/4 h-full grid grid-cols-3 gap-x-2 gap-y-2">

                {
                    courses.map((course) => (

                        <div key={course.id} className=" bg-white border border-black-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="w-full p-2" src={course.cover_img} alt="" />
                            </a>
                            <div className="p-2">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{course.course_title}</h5>
                                </a>
                                <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">{course.course_description}</p>

                            </div>

                            <div className="flex justify-evenly gap-5 ml-4 mb-2 items-center flex-row-reverse" >
                                <div className="flex items-center" >
                                    <div>
                                        <img className="w-6" src="Asset\icons8-bookmark-32.png" alt="" />
                                    </div>
                                    <div><h1 className="text-sm text-black">Credit Hour: {course.course_credit} hr</h1></div>
                                </div>
                                <div><h1 className="text-sm text-black" > <span className="text-xl font-semibold" >$</span> Price: {course.course_price}</h1></div>
                            </div>

                            <div className="text-center p-4 " >
                                <button onClick={() => handleSelectCourse(course)} className="bg-blue-600 text-white rounded-lg pt-2 pb-2 pl-20 pr-20 text-xl">
                                    select

                                </button>
                            </div>




                        </div>



                    ))
                }






            </div>

            <div>

                <Cart selectedCourses={selectedCourses} remainingCredit={remainingCredit} totalCredit={totalCredit} totalPrice={totalPrice}></Cart>



            </div>




        </div>



    );
};

export default Courses;