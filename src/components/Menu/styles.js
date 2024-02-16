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

export const Container = styled.aside`
    grid-area: menu;

    height: 100%;

    padding: 4rem 9rem 0 3rem;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 8rem;

    > nav {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 8rem;
    
    }
`;

export const InternalLinks = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    > li {
        letter-spacing: .1rem;

        a {
            color: ${({ theme }) => theme.COLORS.TEXT};
            cursor: pointer;
            transition: filter .2s;
        }

        a:hover {
            filter: brightness(.9);
        }

        a:hover {
            color: ${({ theme }) => theme.COLORS.SELECTION};
        }
    }
`;

export const ExternalLinks = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    > li {
        font-size: 2rem;

        a {
            color: ${({ theme }) => theme.COLORS.TEXT};
            cursor: pointer;
            transition: filter .2s;
        }

        a:hover {
            filter: brightness(.9);
        }

        a:hover {
            color: ${({ theme }) => theme.COLORS.SELECTION};
        }
    }
`;

export const ShareModal = styled.div`
    display: none;

    &.onShare {
        display: flex;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 10;
        overflow: hidden;
        width: 100%;
        height: 100vh;
        background-color: #00000050;
        backdrop-filter: blur(2px);
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export const ShareCard = styled.div`
    position: relative;
    padding: 3rem;
    background-color: ${({ theme }) => theme.COLORS.BG};
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    animation: ${modalOpenAnimation} .5s ease-in-out;

    > h3 {
        color: ${({ theme }) => theme.COLORS.TEXT};
        letter-spacing: .1rem;
        font-size: 1.6rem;
        /* align-self: flex-start; */
    }

    > button.close {
        position: absolute;
        top: .5rem;
        right: .5rem;
        padding: 1rem;
        border: none;
        background: none;
        color: ${({ theme }) => theme.COLORS.TEXT};
        font-size: 2.2rem;
        cursor: pointer;
    }

    > div.icons {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2rem;
    }

    > div.link {
        padding: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: .5rem;
        border: 1px solid ${({ theme }) => theme.COLORS.SELECTION};

        input {
            width: fit-content;
            background: none;
            border: none;
            color: ${({ theme }) => theme.COLORS.TEXT};
            letter-spacing: .1rem;
        }

        label {
            button {
                padding: .6rem;
                border-radius: .5rem;
                border: none;
                background-color: ${({ theme }) => theme.COLORS.SELECTION};
                color: ${({ theme }) => theme.COLORS.BG};
                font-size: 1.4rem;
                letter-spacing: .1rem;
                font-weight: bold;
            }
        }
    }
`;