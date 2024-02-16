import styled from "styled-components";

export const Container = styled.div`
    grid-area: content;

    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > h2 {
        font-size: 3rem;
        letter-spacing: .2rem;
        margin-bottom: 2rem;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    max-width: 70rem;
    padding: 2rem;

    > input, textarea {
        width: 100%;
        padding: 1rem;
        border: 1px solid #000;
        border-radius: .5rem;
        font-size: 1.6rem;
        font-weight: bold;
        letter-spacing: .2rem;
        line-height: 1.5;
    }

    > textarea {
        resize: none;
        height: 25rem;
    }

    > button {
        width: 100%;
        padding: 1rem;
        border: none;
        border-radius: .5rem;
        background-color: ${({ theme }) => theme.COLORS.TEXT};
        color: ${({ theme }) => theme.COLORS.BACKGROUND};
        font-size: 2rem;
        letter-spacing: .2rem;
        font-weight: bold;
        text-transform: uppercase;
        cursor: pointer;
        transition: .3s;

        &:hover {
            background-color: ${({ theme }) => theme.COLORS.SELECTION};
        }
    }
`;