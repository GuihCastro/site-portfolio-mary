import styled from "styled-components";

export const Container = styled.div`
    grid-area: content;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    text-align: center;
    width: 100%;
    height: 100%;

    p {
        max-width: 70rem;
        text-indent: 4rem;
        letter-spacing: .1rem;
        line-height: 1.2;
        /* text-align: justify; */
    }
`;

export const ImgWrapper = styled.div`
    width: 20rem;
    height: 20rem;
    border-radius: 50%;
    overflow: hidden;
    margin-bottom: 4rem;

    
    > img {
        width: 100%;
        object-fit: cover;
    }
`;