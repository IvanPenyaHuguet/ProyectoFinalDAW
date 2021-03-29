import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';



const AllColumnMenuSelector = React.forwardRef(
    ({ indeterminate, toggleHideAllColumns, ...rest }, ref) => {
      const defaultRef = React.useRef();
      const resolvedRef = ref || defaultRef;
  
      React.useEffect(() => {
        resolvedRef.current.indeterminate = indeterminate;
      }, [resolvedRef, indeterminate]);
  
      return (
        <ListItem key="all" role={undefined} dense button onClick={() => toggleHideAllColumns()}>
            <ListItemIcon>                                
            <Checkbox
                edge="start"                               
                disableRipple
                inputProps={{ 'aria-labelledby': "all"}}
                ref={resolvedRef} 
                {...rest}
            />
            </ListItemIcon>
            <ListItemText id="all" primary="All" />                        
        </ListItem> 
      ) 
    }
);
export default AllColumnMenuSelector;