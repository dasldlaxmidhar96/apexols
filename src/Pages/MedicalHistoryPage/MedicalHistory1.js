import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import HistoryOfPreill from "./HistoryOfPreIill";
import PastHistory from "./PastHistory"

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="History of Present Illness" {...a11yProps(0)} />
          <Tab label="Past History" {...a11yProps(1)} />
          <Tab label="Diabetes and its complications" {...a11yProps(2)} />
          <Tab label="Tayer Organ Involvement" {...a11yProps(3)} />
          <Tab label="Rental History" {...a11yProps(4)} />
          <Tab label="Personal History" {...a11yProps(5)} />
          <Tab label="Family History" {...a11yProps(6)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <HistoryOfPreill />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <PastHistory />
      </TabPanel>
      <TabPanel value={value} index={2}>
        Diabetes and its complications
      </TabPanel>
      <TabPanel value={value} index={3}>
        Tayer Organ Involvement
      </TabPanel><TabPanel value={value} index={4}>
        Rental History
      </TabPanel><TabPanel value={value} index={5}>
        Personal History
      </TabPanel><TabPanel value={value} index={6}>
        Family History
      </TabPanel>
    </Box>
  );
}
