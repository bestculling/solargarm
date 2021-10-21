import { Link } from 'react-router-dom'
import styled from 'styled-components'
import avatar from '../../src/avatar.png'
import story from '../../src/story.png'
import profileTest from '../../src/test_profile.jpg'
import Layout from './Layout'

import './Profile.css'

const Profile = () => (
    <Layout>
        <div>
            <div className="flex flex-col lg:flex-row items-center">
                <div className="w-1/2 lg:w-2/6 relative">
                    <img src={avatar} alt="" />
                    <div className="avatar">
                        <img
                            src={profileTest}
                            alt=""
                        />
                    </div>
                </div>
                <div className="name w-full md:w-1/2">
                    <div className="arrow_top">
                        <h1 className="username">
                            BESTCULLING
                        </h1>
                        <h2>Akkrapol kanpong</h2>
                        <p className="text-sm text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa maxime accusantium et autem deleniti enim delectus! Illo magni, </p>
                        <div className="arrow_botton"></div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center space-x-20 md:space-x-36">
                <button className="option mt-5 text-white tracking-widest">[ Edit Profile ]</button>
                <Link className="mt-5 text-white" to="/importData">
                    <button className="option tracking-widest">[ Import Data ]</button>
                </Link>
            </div>
            <div className="story flex justify-center lg:justify-start">
                <img className="circle" src={story} alt="" />
                <img className="circle" src={story} alt="" />
                <img className="circle" src={story} alt="" />
            </div>
        </div>
    </Layout>
)
export default Profile