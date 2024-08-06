import { Button, Grid, Input, Typography } from '@mui/material'
import React from 'react'

const UserForm = (props) => {
    return (
        <Grid container spacing={2} sx={{ backgroundColor: "#ffffff", marginBottom: "30px", display: 'block', }}>
            <Grid item xs={12}>
                <Typography component={'h1'} sx={{ color: '#000000' }}>User Form</Typography>
            </Grid>

            <Grid item xs={12} sm={6} sx={{ display: 'flex' }}>
                <Typography component={'label'} htmlFor='id'
                    sx={{ color: '#000000', marginRight: '20px', fontSize: '16px', width: '100px', display: 'block', }}>
                    ID
                </Typography>
                <Input type='number' id='id' name='id' sx={{ width: '400px' }} value={''} onChange={e => { }} />
            </Grid>

            <Grid item xs={12} sm={6} sx={{ display: 'flex' }}>
                <Typography component={'label'} htmlFor='id'
                    sx={{ color: '#000000', marginRight: '20px', fontSize: '16px', width: '100px', display: 'block', }}>
                    NAME
                </Typography>
                <Input type='text' id='name' name='name' sx={{ width: '400px' }} value={''} onChange={e => { }} />
            </Grid>
            <Button
                sx={{
                    margin: 'auto', marginBottom: '20px', backgroundColor: '#00c6e6', color: '#000000',
                    marginLeft: '15px', marginTop: '20px', '&:hover': {
                        opacity: '0.7', backgroundColor: '#00c6e6'
                    }
                }}>
                Add
            </Button>
        </Grid>
    )
}

export default UserForm


// ******************************************************************************************
// Grid eka use Karanne html wala div eka wage . e wnuwata mUI wala grid thiyenne.
// xs={12} kiyanne extra smoal sampurna ida use karanna. sm kiyanne smole
// Typography Kiyanne mUi wala thiyena ekak. eka <P> eka wage. h1 dhila thiyenne eka h1 ekak weno.
// onChange eka kiyanne data input karaddi monadha wenna one kiyala dhanne eke.
// e kiyanne event ekak. eka nativ api wala argiument ekak.
