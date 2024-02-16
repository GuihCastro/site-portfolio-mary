import styled from "styled-components";

export const Container = styled.div`
    grid-area: header;

    width: 100%;
    height: fit-content;

    padding: 4rem 3rem;

    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: fit-content;

    > h1 {
        font-size: 2.4rem;
        font-weight: 400;
        text-transform: uppercase;
        text-align: justify;
        letter-spacing: .3rem;
    }

    > h2 {
        font-size: 1.4rem;
        font-weight: 300;
        text-transform: uppercase;
        font-style: italic;
        text-align: justify;
        letter-spacing: 1rem;
    }

    @media (max-width: 426px) {
        > h1 {
            font-size: 2rem;
        }

        > h2 {
            font-size: 1rem;
        }
    }
`;