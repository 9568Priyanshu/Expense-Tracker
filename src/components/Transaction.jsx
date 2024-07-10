import { Divider, Typography,Box ,List} from "@mui/material"





const Transaction = (Transaction) => {

    return (
        <Box>
            <Typography variant="h5"> Transaction History</Typography>
            <Divider/>
            <List>
                {
                    Transaction.map(Transaction=>(
                        <p>hello</p>


                    ))
                }
            </List>
        </Box>

    )
}
export default Transaction;