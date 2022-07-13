import styled from 'styled-components'

export const Wrapper = styled.section`
  margin: 0 auto;

  textarea {
    width: 100%;
    border: none;
    margin: 10px 0;
    pointer-events: none;
  }
  .btn-calc {
    font-size: 20px;
    text-transform: uppercase;
    border: none;
    font-weight: bold;
    border-radius: 5px;
    background-color: #7a55fd;
    color: #fff;
    padding: 11px 0;
  }
  .container-btn {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    margin: 10px auto;
    gap: 2px;
    padding-bottom: 40px;
  }
`
export const Title = styled.h1`
  font-size: 20px;
  color: #3d3f66;
  text-transform: uppercase;
  padding-top: 40px;

  &::after {
    content: '';
    width: 40%;
    height: 0.1em;
    background-color: #7a55fd;
    display: flex;
    margin: 0.1em auto;
  }
`
export const Paragraph = styled.p`
  font-size: 16px;
  color: #3d3f66;
  text-transform: uppercase;
  padding-bottom: 1em;
`

export const Input = styled.input`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  text-transform: uppercase;
  border: none;
  padding: 10px 12px;
  margin-top: 5px;
  border-radius: 5px;
`

export const Button = styled.button`
  width: 49.5%;
  font-size: 18px;
  text-transform: uppercase;
  font-weight: bold;
  padding: 12px 0;
  border-radius: 5px;
  border: none;
  color: #fff;
  cursor: pointer;
  margin-top: 2px;
`
