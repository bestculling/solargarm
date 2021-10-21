import Header from './Header'
import styled from 'styled-components'

import img from '../../src/space2.jpg'

type Props = {
    children: JSX.Element
}

const Section = styled.div`
    font-family: 'Oswald', sans-serif;
    background-image: url(${img});
    background-size: cover;
    background-position: center;
`

const Layout = ({ children }: Props) => {
    return (
        <Section className="h-screen w-screen">
            <div className="container">
                <Header />
                {children}
            </div>
        </Section>
    )
}

export default Layout