import { Box, FormControlLabel, Grid, Switch } from "@mui/material";
 
function InvoiceExpOption() {
    return (
       
          <Grid  container>
            <Grid item xs={12} sm={12} alignContent={'center'}>
            <span className="text-m"> خيارات الاستعراض </span>

            </Grid>
            <Grid item xs={12} sm={2} alignContent={'center'}>
            {[
              'رمز الصنف',
              'اسم الصنف',
              'باركود الصنف',
              'الكمية',
              'التكلفة',
              'التكلفة الإجمالية',
              'القيمة الإجمالية',
              'المجموعة',
              'المستودع'
            ].map(option => (
              <FormControlLabel
                key={option}
                disabled={true}
                control={<Switch name={option} size='medium' checked={true} />}
                label={option}
                sx={{
                  '& .MuiFormControlLabel-label': {
                    fontSize: '0.8rem'
                  }
                }}
              />
            ))}
              </Grid>     
                 
             
            </Grid>
      
    )
  }
  
  export default InvoiceExpOption;
