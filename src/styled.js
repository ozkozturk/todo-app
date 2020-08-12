import styled from 'styled-components';

export const StyledAppContainer = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  h1 {
    text-align: center;
    padding: 30px;
    font-family: 'Josefin Sans', sans-serif;
  }
`;

export const StyledApp = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap');
  
  max-width: 550px;
  width: 100%;
  min-height: 400px;
  margin: 40px auto;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0 0 5px 0 rgba(0,0,0,0.4);
  font-family: 'Josefin Sans', sans-serif;
  
  form {
    width: 100%;
    height: 40px;
    margin: 20px 0 50px 0;
    display: flex;
    
    input, button {
      border: none;
      outline: none;
      margin: 0 5px;
    }
    
    input {
      flex: 3;
      border-bottom: 1px solid red;
      font-size: 1.2em;
      font-family: monospace;
    }
    
    button {
      width: 40px;
      height: 40px;
      font-size: 40px;
      color: red;
      background: transparent;
      border-radius: 50%;
      cursor: pointer;
      transform: translateY(3px);
      
      &:hover {
        background-color: red;
        color: white;
      }
    }
  }
  
  ul li {
    list-style: none;
    border: 1px solid #cccccc;
    border-radius: 5px;
    margin: 10px 0;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Josefin Sans', sans-serif;
    
    .active{
      opacity: 0.5;
      text-decoration: line-through;
      font-family: 'Shadows Into Light', cursive;
    }
    
    .edit-input {
      flex: 2;
      padding: 3px;
      color: red;
      font-size: 1.1em;
    }
  }
  
  ul li input, 
  .row input {
    margin-right: 5px;
    transform: translateY(1px);
  }
  
  ul li button,
  .row button {
    border: none;
    outline: none;
    color: #E33946;
    background-color: transparent;
    padding: 5px;
    cursor: pointer;
    font-size: 1.3em;
    
    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
  
  .row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    font-size: 1.3em;
    font-family: 'Josefin Sans', sans-serif;
    font-style: italic;
    font-weight: bold;
    
    #delete {
      font-size: 1.3em;
      padding-right: 13px;
    }
  }
`;


