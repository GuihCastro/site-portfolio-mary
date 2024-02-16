import styled from "styled-components";

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