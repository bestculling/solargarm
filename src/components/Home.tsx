import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import img from '../../src/space2.jpg'

const Home = () => {

    const Space = styled.div`
        font-family: 'Oswald', sans-serif;
        background-image: url(${img});
        background-size: cover;
        background-position: left;
    `

    const BrandAnimation = keyframes`
        0% { text-shadow: 0 0 10px #EE8C54, 0 0 20px #EE8C54, 0 0 30px #F9D332, 0 0 40px #F9D332, 0 0 50px #F9D332, 0 0 60px #F9D332, 0 0 70px #F9D332; }
        30% { text-shadow: 0 0 20px #EE8C54, 0 0 30px #A565053, 0 0 40px #A565053, 0 0 50px #A565053, 0 0 60px #A565053, 0 0 70px #A565053, 0 0 80px #A565053; }
        40% { text-shadow: 0 0 10px #EE8C54, 0 0 20px #EE8C54, 0 0 30px #F9D332, 0 0 40px #F9D332, 0 0 50px #F9D332, 0 0 60px #F9D332, 0 0 70px #F9D332; }
        100% { text-shadow: 0 0 20px #EE8C54, 0 0 30px #A565053, 0 0 40px #A565053, 0 0 50px #A565053, 0 0 60px #A565053, 0 0 70px #A565053, 0 0 80px #A565053; }`

    const Brand = styled.h1`
        animation: ${BrandAnimation} 2s ease-in-out infinite alternate;
    `

    return (
        <Space className="h-screen relative">
            <div className="container flex flex-col pt-32 md:text-center">
                <Brand className="text-8xl mb-10 text-purple-200"><strong>Solar</strong><br />
                    <p className="text-left md:text-center">Gram</p></Brand>
                <div className="flex justify-center">
                    <button className="absolute justify-center space-x-4 bottom-20 bg-white hover:bg-gray-100 text-gray-600 text-xl md:text-4xl font-semibold py-6 px-16 border border-gray-400 rounded-full shadow">
                        <Link to='/profile'>
                            To infinity
                        </Link>
                    </button>
                </div>
            </div>
        </Space>
    )
}

export default Home