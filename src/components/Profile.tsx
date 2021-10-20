import { Link } from 'react-router-dom'
import styled from 'styled-components'
import img from '../../src/space2.jpg'
import Header from './Header'
import './Profile.css'
import avatar from '../../src/avatar.png'
import story from '../../src/story.png'

const Space = styled.div`
        font-family: 'Oswald', sans-serif;
        background-image: url(${img});
        background-size: cover;
        background-position: center;
    `

const Profile = () => (
    <>
        <Space className="h-screen">
            <div className="container">
            <Header />
                <div className="flex flex-col lg:flex-row items-center">
                    <div className="w-1/2 lg:w-2/6 relative">
                        <img src={avatar} alt="" />
                        <div className="avatar">
                            <img
                                src="https://scontent.fbkk6-2.fna.fbcdn.net/v/t39.30808-6/217910614_194400585960670_3135595596284436252_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGTfob6zzWf4T0xxUS5atEwrFIds5YubVKsUh2zli5tUiBt4N0faVjVgqnaQhHc0UtV4939Qf8RkehCTTovqFwH&_nc_ohc=HDpv-QD-knEAX_NiUhU&_nc_ht=scontent.fbkk6-2.fna&oh=ee19743d4b2c3d9119c772ab8c504bc4&oe=6173B867"
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
                <button className="mt-5 w-full text-white tracking-widest">[ Edit Profile ]</button>
                <div className="story flex justify-center lg:justify-start">
                    <img className="circle" src={story} alt="" />
                    <img className="circle" src={story} alt="" />
                    <img className="circle" src={story} alt="" />
                </div>
            </div>
        </Space>
    </>
)
export default Profile