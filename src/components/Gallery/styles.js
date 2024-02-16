import styled, {keyframes} from "styled-components";

const modalOpenAnimation = keyframes`
    0% {
        transform: translate3d(0, -100px, 0);
        transform-origin: 0% 0%;
        opacity: 0;
    }

    10% {
		opacity: 0;
	}

    100% {
        transform: translate3d(0, 0, 0);
        transform-origin: 0% 0%;
        opacity: 1;
    }
`;

export const Container = styled.main`
    grid-area: content;

    padding: 1rem;

    overflow: auto;

    &::-webkit-scrollbar {
        width: 10px; 
    }

    &::-webkit-scrollbar-track {
        background: none; 
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background: ${({ theme }) => theme.COLORS.TEXT}; 
    }

    &::-webkit-scrollbar-thumb:hover {
        background: ${({ theme }) => theme.COLORS.SELECTION};
    }

    @media (max-width: 426px) {
        padding: 2rem;

        &::-webkit-scrollbar {
            display: none; 
        }
    }
`;

export const GalleryItem = styled.img`
    width: 100%; 
    display: block; 
    border-radius: 4px; 
    transition: filter .3s;
    transition: transform .3s;

    &:hover {
        cursor: pointer;
        transform: scale(1.02);
        filter: brightness(110%);
    }

    &.clicked {
        cursor: default;
        transform: none;
        filter: none;
        transition: none;
    }
`;

export const ImageModal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    /* z-index: 999; */
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: #00000050;
    backdrop-filter: blur(2px);
    overflow: hidden;

    > button.close {
        position: absolute;
        top: 1rem;
        right: 1rem;
        background-color: transparent;
        border: none;
        font-size: 3rem;
        color: ${({ theme }) => theme.COLORS.SELECTION};
        cursor: pointer;
    }

    > button.previous, > button.next {
        position: absolute;
        top: 50%;
        background-color: transparent;
        border: none;
        font-size: 3rem;
        color: ${({ theme }) => theme.COLORS.SELECTION};
        cursor: pointer;

        &:disabled {
            display: none;
        }
    }

    > button.previous {
        left: 3rem;
    }

    > button.next {
        right: 3rem;
    }
`;

export const ModalBody = styled.img`
    width: auto;
    max-width: 90%;
    max-height: 90%;
    animation: ${modalOpenAnimation} .5s ease-in-out;
`;

export const ImageDescription = styled.p`
    opacity: 0; 

    &.show {
        opacity: 1;
    }
    position: absolute;
    bottom: 2rem;
    padding: .5rem;
    background-color: ${({ theme }) => theme.COLORS.BG};
    color: ${({ theme }) => theme.COLORS.SELECTION};
    font-size: 2rem;
    text-align: center;
    letter-spacing: .1rem;
    line-height: 1.2;
    z-index: 1;
    transition: opacity .3s;
`;