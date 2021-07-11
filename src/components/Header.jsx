import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundColor:'black',
    color:'Orange'
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    backgroundColor:'black',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
    backgroundColor:'black',
    color:'Orange',
    cursor:"pointer"
  },
}));




export default function Header(props) {
  const classes = useStyles();
  const { sections, title} = props;


  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        
        <Typography
          component="h1"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
          
          
        >
          {title}
        </Typography>
        
       
      </Toolbar>
      <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
        {sections.map((section) => (
         
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            onClick={(event) => props.handleAC(section.url)}
            className={classes.toolbarLink}
          >
            
            {section.title}
          </Link>
        ))}
        <IconButton >
          <SearchIcon className={classes.toolbar}/>
        </IconButton>
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};