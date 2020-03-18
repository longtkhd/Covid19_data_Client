import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { compose } from 'redux';
import GitHubIcon from '@material-ui/icons/GitHub';
import {
  getAllCase,
  getAllCaseSuccess,
  getAllCaseFailed,
  getGlobalCase,
  getGlobalCaseSuccess,
  getGlobalCaseFailed,



} from '../actions/index';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));
// const dataCase = props.AllCase.user;





export  function AllCase(props) {

  const [cases,setCases] = useState();
  var stt = undefined;
  var caseVn = '';
  var deathsVn = '';
  var recoveredVn = '';
  var todayCasesVn = '';
  var todayDeathsVn = '';
  for (var i = 0; i < props.AllCase.length; i++) {
    if (props.AllCase[i].country === 'Vietnam') {

          caseVn = props.AllCase[i].cases;
          deathsVn = props.AllCase[i].deaths;
          recoveredVn = props.AllCase[i].recovered;
      todayCasesVn = props.AllCase[i].todayCases;
          todayDeathsVn = props.AllCase[i].todayDeaths;

   

    }
  }
  
  // console.log(props.AllCase[stt].cases)
  // console.log(props.AllCase[61]);
  // console.log(props.AllCase[stt];
 
 
  const tiers = [
    {
      title: 'Viet Nam',
      price: `${caseVn} `,
      description: [
        `${todayCasesVn} Today Cases`,
        `${deathsVn} Deaths`,
        `${todayDeathsVn} Today Deaths`,
        `${recoveredVn} Recovered`,
         
            

      ],
      buttonText: 'More',
      buttonVariant: 'contained',
    },
    {
      title: 'Global',
      subheader: 'Most popular',
      price: `${props.AllCaseGlobal.cases}`,
      description: [
        `${props.AllCaseGlobal.deaths} Deaths`
        ,
        `${props.AllCaseGlobal.recovered} Recovered`,
        <span>Global</span>

        
       
      ],
      buttonText: ' More',
      buttonVariant: 'contained',
    },
    // {
    //   title: 'Hai Duong',
    //   price: '30',
    //   description: [
    //     '50 users included',
    //     '30 GB of storage',
    //     'Help center access',
    //     'Phone & email support',
    //   ],
    //   buttonText: 'Contact us',
    //   buttonVariant: 'outlined',
    // },
  ];
  const classes = useStyles();
  useEffect(() => {
    props.dispatch(getGlobalCase());
    
  }, []);
//  console.log(props.AllCaseGlobal);
  // console.log(props.AllCase[62]);

  // const [stt,setStt] = useState('')
  

  

 
 


  return (
    
   
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
           COVID-19 CORONAVIRUS OUTBREAK
           
          </Typography>
          
         
          <GitHubIcon href="https://github.com/longtkhd"></GitHubIcon>
        </Toolbar>
      </AppBar>
      {/* Hero unit */}
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
       
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map(tier => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={6}>
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? <StarIcon /> : null}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography component="h2" variant="h3" color="textPrimary">
                      {tier.price}
                    </Typography>
                    <Typography variant="h6" color="textSecondary">

                    </Typography>
                  </div>
                  <ul>
                    {tier.description.map(line => (
                      <Typography component="li" variant="subtitle1" align="center" key={line}>
                        
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant} color="primary">
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* Footer */}
      
      {/* End footer */}
    </React.Fragment>
  );
}
 const mapStateToProps = (state, ownProps) => {
  return {
     AllCaseGlobal: state.global,
     AllCase : state.users,
  }
}
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
   mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  
  withConnect,
)(AllCase);
