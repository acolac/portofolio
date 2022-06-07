import React from 'react';
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {HiOutlineBriefcase, HiScale} from 'react-icons/hi'

function Experience() {
  return (
    <div name='studies' className='bg-[#a03022]  text-gray-300 flex justify-center w-full ms:h-screen items-center p-4'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-600'>Experience</p>
            <div className='w-full grid grid-col-2 sm:grid-cols-1 gap-4'>
                <div>
                    <VerticalTimeline className='bg-[#a03022]' 
                                        lineColor="#565656">
                            <VerticalTimelineElement
                                    className="vertical-timeline-element--education my-4 text-black"
                                    date="2011 - 2015"
                                    iconStyle={{ background: 'rgb(255, 239, 101)', color: '#190100' }}
                                    icon={<HiScale />}
                            >
                                <h3 className="vertical-timeline-element-title">
                                    Colegiul Național ”Mihai Eminescu”, Botosani
                                </h3>
                                <p> High School Diploma, Informatics and PC Science</p>

                            </VerticalTimelineElement>

                            <VerticalTimelineElement
                                    className="vertical-timeline-element--education my-4 text-black"
                                    date="2015 - 2019"
                                    iconStyle={{ background: 'rgb(255, 239, 101)', color: '#190100' }}
                                    icon={<HiScale />}
                            >
                                <h3 className="vertical-timeline-element-title">
                                    Gheorghe Asachi​ Technical University of Iasi
                                </h3>

                                <h4 className="vertical-timeline-element-subtitle">
                                Faculty of Electrical Engineering, Energetics and Applied Informatics
                                </h4>

                                <p> Bachelor's degree, Economic engineering in the electrical, electronic and energy fields</p>
                            </VerticalTimelineElement>

                            <VerticalTimelineElement
                                    className="vertical-timeline-element--work my-4 text-black"
                                    date="2017 - 2017"
                                    iconStyle={{ background: 'rgb(131, 200, 255)', color: '#190100' }}
                                    icon={<HiOutlineBriefcase />}
                            >
                                <h3 className="vertical-timeline-element-title">
                                    Electroalfa
                                </h3>
                                <h4 className="vertical-timeline-element-subtitle">
                                Low/Medium Voltage Division
                                </h4>
                                <p>Summer Internship</p>
                            </VerticalTimelineElement>

                            <VerticalTimelineElement
                                    className="vertical-timeline-element--work my-4 text-black"
                                    date="2019 - 2021"
                                    iconStyle={{ background: 'rgb(255, 239, 101)', color: '#190100' }}
                                    icon={<HiScale />}
                            >
                                <h3 className="vertical-timeline-element-title">
                                    Gheorghe Asachi​ Technical University of Iasi
                                </h3>
                                <h4 className="vertical-timeline-element-subtitle">
                                    Faculty of Electrical Engineering, Energetics and Applied Informatics
                                </h4>
                                <p>
                                    Master's degree, Energy Management and Systems Technology
                                </p>
                            </VerticalTimelineElement>

                            <VerticalTimelineElement
                                    className="vertical-timeline-element--work my-4 text-black"
                                    date="2019 - 2020"
                                    iconStyle={{ background: 'rgb(131, 200, 255)', color: '#190100' }}
                                    icon={<HiOutlineBriefcase />}
                            >
                                <h3 className="vertical-timeline-element-title">
                                    ALTEN Delivery Center Romania
                                </h3>
                                <h4 className="vertical-timeline-element-subtitle">
                                    EE (Electric Electronic) Department
                                </h4>
                                <p>
                                    System Test Engineer - Manual Testing for Automotive Project
                                </p>
                            </VerticalTimelineElement>

                            <VerticalTimelineElement
                                    className="vertical-timeline-element--work my-4 text-black"
                                    date="2020 - 2021"
                                    iconStyle={{ background: 'rgb(131, 200, 255)', color: '#190100' }}
                                    icon={<HiOutlineBriefcase />}
                            >
                                <h3 className="vertical-timeline-element-title">
                                    ALTEN Delivery Center Romania
                                </h3>
                                <h4 className="vertical-timeline-element-subtitle">
                                 EE (Electric Electronic) Department
                                </h4>
                                <p>
                                Quality Coordinator - Technical Reviewer of deliveries to project supplier
                                </p>
                            </VerticalTimelineElement>

                            <VerticalTimelineElement
                                    className="vertical-timeline-element--work my-4 text-black"
                                    date="2021 - 2021"
                                    iconStyle={{ background: 'rgb(255, 239, 101)', color: '#190100' }}
                                    icon={<HiScale />}
                            >
                                <h3 className="vertical-timeline-element-title">
                                    AlgoFlow Academy
                                </h3>
                                <h4 className="vertical-timeline-element-subtitle">
                                    Introduction to Programming Using JavaScript
                                </h4>
                                <p>
                                    JavaScript/HTML/CSS Certification
                                </p>
                            </VerticalTimelineElement>

                            <VerticalTimelineElement
                                    className="vertical-timeline-element--work my-4 text-black"
                                    date="2021 - 2022"
                                    iconStyle={{ background: 'rgb(131, 200, 255)', color: '#190100' }}
                                    icon={<HiOutlineBriefcase />}
                            >
                                <h3 className="vertical-timeline-element-title">
                                    Amazon Development Center
                                </h3>
                                <h4 className="vertical-timeline-element-subtitle">
                                    Compliance Operations Department
                                </h4>
                                <p>
                                    Data Analyst - Development of data collection processes and data management systems
                                </p>
                            </VerticalTimelineElement>

                            <VerticalTimelineElement
                                    className="vertical-timeline-element--work my-4 text-black"
                                    date="2021 - 2022"
                                    iconStyle={{ background: 'rgb(255, 239, 101)', color: '#190100' }}
                                    icon={<HiScale />}
                            >
                                <h3 className="vertical-timeline-element-title">
                                    Wantsome Academy
                                </h3>
                                <h4 className="vertical-timeline-element-subtitle">
                                    Java Programming Accredited Course, Software & Web Development
                                </h4>
                                <p>
                                    Java/OOP/SQL/JDBC/JUnit Certification
                                </p>
                            </VerticalTimelineElement>

                            <VerticalTimelineElement
                                    className="vertical-timeline-element--work my-4 text-black"
                                    date="2022 - present"
                                    iconStyle={{ background: 'rgb(131, 200, 255)', color: '#190100' }}
                                    icon={<HiOutlineBriefcase />}
                            >
                                <h3 className="vertical-timeline-element-title">
                                    HCL Technologies
                                </h3>
                                <h4 className="vertical-timeline-element-subtitle">
                                    Engineering and R&D Services 
                                </h4>
                                <p>
                                    Senior Test Engineer - Desktop/Mobile application testing
                                </p>
                            </VerticalTimelineElement>
                        
                        </VerticalTimeline>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience