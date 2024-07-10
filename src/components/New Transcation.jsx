import { Box , Card, CardContent, Typography, styled, TextField, Button} from '@mui/material';

const Container = styled(Box)`
display: flex;
flex-direction: column;
& > h5, & > div ,& > Button{
    margin-top: 30px;

}
`

const NewTransaction =( ) => {

    return(
        <Container>
            <Typography variant = "h5">New Transaction</Typography>
            <TextField label = "Enter Expense"/>
            <TextField label = "Enter Amount"/>
            <Button variant ="contained"> Add Transaction</Button>
        </Container>
    )
}
export default NewTransaction