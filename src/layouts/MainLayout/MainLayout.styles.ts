import styled from 'styled-components';
import headerBg from '../../assets/backgrounds/HeaderBackground.png';

export const Layout = styled.div`
    min-height: 100vh;

    background-image: url(${headerBg});

    background-size: cover;

    background-position: center top;

    background-repeat: no-repeat;

    background-attachment: fixed;

    position: relative;
`;

export const Overlay = styled.div`
    min-height: 100vh;

    background: linear-gradient(
        rgba(20,15,10,.72),
        rgba(20,15,10,.55),
        rgba(20,15,10,.72)
    );
`;