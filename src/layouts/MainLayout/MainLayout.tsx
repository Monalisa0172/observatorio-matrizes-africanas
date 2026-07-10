import { ReactNode } from 'react';

import Header from '../../components/Header/Header';

import Footer from '../../components/Footer/Footer';

import { Layout, Overlay } from './MainLayout.styles';

interface Props{
    children:ReactNode;
}

const MainLayout = ({children}:Props)=>{

    return(

        <Layout>

            <Overlay>

                <Header/>

                {children}

                <Footer/>

            </Overlay>

        </Layout>

    );

}

export default MainLayout;