import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import {Typography , styled , Box} from '@mui/material';
import Balance from './components/Balance';
import ExpenseCard from './components/ExpenseCard';
import NewTransaction from './components/New Transcation';
import Transaction from './components/Transaction';


const Header = styled(Typography)`
margin: 10px 0;
font-size: 36px;
color:blue;
text-transform:uppercase;
`

function App() {

  const [Transaction, setTransaction] = useState([
    {id:1, text: 'Momos', amount : -20},
    {id:2, text: 'Salary', amount : 30000},
    {id:3, text: 'Burger', amount : -10},
    {id:4, text: 'Bonus', amount : 4000},
  ])



  return (
    <Box className="App">
      <Header>Expense Tracker</Header>
      <Box>
        <Box>
        <Balance/>
        <ExpenseCard/>
        <NewTransaction/>
        
        </Box>
        <Box>
          <Transaction Transaction = {Transaction}/>
        </Box>

      </Box>    
      </Box>
  );
}

export default App;
