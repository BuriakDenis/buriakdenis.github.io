import React from 'react'
import "./AboutSkills.scss"
import BtnOpenModal from "../../../../components/Button/ButtonOpenModal/BtnOpenModal"
import Logo from "../../../../components/Logo/Logo"
export default function AboutSkills() {
    
    return (
        <section className='aboutSkills'>
            <div className='aboutSkills__container'>
                <h1 className='aboutSkills__title'>
                    Skills
                </h1>
                <div className='aboutSkills__content'>
                    <div className='aboutSkills__content-box'>
                        <div className='aboutSkills__box-content'>
                            <h2 className='aboutSkills__box-title'>Tech</h2>
                            <ul className='aboutSkills__box-info'>
                                <li>- HTML, CSS, Less, Sass</li>
                                <li>- CSS, Less, Sass</li>
                                <li>- React, React-route, Redux</li>
                                <li> -Storybook, Tailwind, Webpack</li>
                            </ul>
                        </div>
                        <div className='aboutSkills__box-content'>
                            <h2 className='aboutSkills__box-title'>Version control system</h2>
                            <ul className='aboutSkills__box-info'>
                                <li>- Git</li>
                                <li>- Github</li>
                            </ul>
                        </div>
                    </div>
                    <div className='aboutSkills__content-box'>
                        <div className='aboutSkills__box-content'>
                            <h3 className='aboutSkills__box-title'>Education</h3>
                            <ul className='aboutSkills__box-info'>
                                <li>Bachelor's degree </li>
                                <small>Feb 2022</small>
                            </ul>
                        </div>
                        <div className='aboutSkills__box-content'>
                            <h3 className='aboutSkills__box-title'>Languages</h3>
                            <ul className='aboutSkills__box-info'>
                                <li>Ukrainian / Russian - Native
                                </li>
                                <li>English - B1</li>
                            </ul>
                        </div>
                    </div>
                    <div className='aboutSkills__content-box'>
                        <div className='aboutSkills__box-content'>
                            <h4 className='aboutSkills__box-title'>Additional</h4>
                            <ul className='aboutSkills__box-info'>
                                <li>- Time managment</li>
                                <li>- Responsibility</li>
                                <li>- Сommunication</li>
                                <li>- Team management</li>
                            </ul>
                        </div>
                        <div className='aboutSkills__box-content'>
                            <h4 className='aboutSkills__box-title'>Courses</h4>
                            <ul className='aboutSkills__box-info'>
                                <small>Udemy </small>
                                <li>JavaScript - The Complete JavaScript Course (Includes 80 Tasks)</li>
                                <small>October 2022</small>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='aboutSkills__buttons'>
                    <Logo className='aboutSkills__logo' class="aboutSkills__logo-img" />
                    <BtnOpenModal title="GET IN TOUCH" />
                </div>
            </div >
        </section >
    )
}
