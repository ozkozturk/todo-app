import React from 'react';
import {
  StyledApp,
  StyledAppContainer
} from './styled';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import Footer from './components/Footer';
import DataProvider from './components/DataProvider';

function App() {
  return (
    <DataProvider>
      <StyledAppContainer>
        <h1>Oh My Task!!</h1>
        <StyledApp>
          <TaskInput />
          <TaskList />
          <Footer />
        </StyledApp>
      </StyledAppContainer>
    </DataProvider>
  );
}

export default App;
