import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import CardHeader from "@mui/material/CardHeader";
import { makeStyles } from "@mui/styles";
import SaveIcon from "@mui/icons-material/Save";
import ButtonGroup from "@mui/material/ButtonGroup";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import TextField from "@mui/material/TextField";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Autocomplete from "@mui/material/Autocomplete";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import MedicalHistory from "./MedicalHistory";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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
  value: PropTypes.number.isRequired
};

const symptoms = [
  { label: "Appetite Increased" },
  { label: "Appetite Decreased" },
  { label: "Thirst Increased" },
  { label: "Thirst Decreased" },
  { label: "Weakness" },
  { label: "Weight Loss" },
  { label: "Weight Gain" },
  { label: "Urine Frequency Increased" },
  { label: "Urine Frequency Decreased" }
];



function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`
  };
}

const useStyles = makeStyles({
  tabPanelRoot: {
    width: "80%"
  },
  header: {
    backgroundColor: "#1976d2",
    color: "white"
  },
  buttons: {
    ":hover": {
      bgcolor: "#1967d2",
      color: "white"
    }
  }
});

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  }
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0
  }
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9)
];

const data = [{}]

export default function DoctorSettings() {
  const [tabIndex, setTabIndex] = React.useState(0);
  const [numberOfComplaints, setNoOfComplaints] = React.useState(1);
  const [BMI, setBMI] = React.useState(0);
  const [height, setHeight] = React.useState(0);
  const [weight, setWeight] = React.useState(0);

  const handleHeight = (e) => {
    calculateBMI()
  }

  const handleWeight = (e) => {
    calculateBMI()
  }

  const calculateBMI = () => {
    setBMI(((height / 100) ** 2) + weight)
  }

  const addComplaint = (tmp) => {
    setNoOfComplaints(numberOfComplaints + tmp);
  };

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  const [value, setValue] = React.useState(dayjs(new Date()));

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const classes = useStyles();

  return (
    <Box sx={{ flexGrow: 1, bgcolor: "background.paper", display: "flex" }}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={tabIndex}
        onChange={handleTabChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        <Tab position="left" label="Chief Complaints" {...a11yProps(0)} />
        <Tab position="left" label="Vitals" {...a11yProps(1)} />
        <Tab label="Allergies" {...a11yProps(2)} />
        <Tab label="Medical History" {...a11yProps(3)} />
        <Tab label="Examination" {...a11yProps(4)} />
        <Tab label="Prescribed Tests" {...a11yProps(5)} />
        <Tab label="Lab Results" {...a11yProps(6)} />
        <Tab label="Diagnosis" {...a11yProps(7)} />
        <Tab label="Prescriptions" {...a11yProps(8)} />
        <Tab label="IP Admission" {...a11yProps(9)} />
        <Tab label="Attachment" {...a11yProps(10)} />
        <Tab label="Summary and Print" {...a11yProps(11)} />
      </Tabs>
      <TabPanel value={tabIndex} index={0} className={classes.tabPanelRoot}>
        <Card sx={{ width: "auto" }}>
          <CardHeader
            className={classes.header}
            title="Chief Complaints"
            action={
              <ButtonGroup variant="text" aria-label="text button group">
                <Button
                  variant="outlined"
                  sx={{ bgcolor: "white" }}
                  size="small"
                  className={classes.buttons}
                >
                  Import from Previous
                </Button>
                <Button
                  variant="outlined"
                  sx={{ bgcolor: "white" }}
                  startIcon={<SaveIcon />}
                  size="small"
                >
                  Save
                </Button>
              </ButtonGroup>
            }
          ></CardHeader>
          <CardContent>
            <Box>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end"
                }}
              >
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DesktopDatePicker
                    label="Visit Dates"
                    inputFormat="MM/DD/YYYY"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </div>
              <div>
                <TableContainer component={Paper}>
                  <Table
                    sx={{
                      marginTop: "10px"
                    }}
                    aria-label="customized table"
                  >
                    <TableHead>
                      <TableRow>
                        <StyledTableCell>Complaints</StyledTableCell>
                        <StyledTableCell>Since</StyledTableCell>
                        <StyledTableCell>
                          Where(Body Part)
                        </StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {/* [...Array(n)].map( */}
                      {[...Array(numberOfComplaints)].map((row) => (
                        <StyledTableRow key={row}>
                          <StyledTableCell component="th" scope="row">
                            <Autocomplete
                              disablePortal
                              id="combo-box-demo"
                              options={symptoms}
                              sx={{ width: 300 }}
                              renderInput={(params) => (
                                <TextField {...params} label="Symptom" />
                              )}
                            />
                          </StyledTableCell>
                          <StyledTableCell>
                            <div>
                              <div
                                style={{ display: "flex" }}
                              >
                                <div
                                  style={{
                                    display: "flex",
                                    flexDirection: "column"
                                  }}
                                  className="mb-2"
                                >
                                  <span>Yrs</span>
                                  <TextField
                                    id="outlined-basic"
                                    label=""
                                    size="small"
                                    variant="outlined"
                                    sx={{ width: 50 }}
                                  />
                                </div>
                                <div
                                  style={{
                                    display: "flex",
                                    flexDirection: "column"
                                  }}
                                  className="mb-2"
                                >
                                  <span>Mths</span>
                                  <TextField
                                    id="outlined-basic"
                                    label=""
                                    size="small"
                                    variant="outlined"
                                    sx={{ width: 50 }}
                                  />
                                </div>
                                <div
                                  style={{
                                    display: "flex",
                                    flexDirection: "column"
                                  }}
                                >
                                  <span>Weeks</span>
                                  <TextField
                                    id="outlined-basic"
                                    label=""
                                    size="small"
                                    variant="outlined"
                                    sx={{ width: 50 }}
                                  />
                                </div>
                                <div
                                  style={{
                                    display: "flex",
                                    flexDirection: "column"
                                  }}
                                >
                                  <span>Days</span>
                                  <TextField
                                    id="outlined-basic"
                                    label=""
                                    size="small"
                                    variant="outlined"
                                    sx={{ width: 50 }}
                                  />
                                </div>
                              </div>
                              <div style={{ display: "flex", alignItems: "center" }}>
                                Or Since the year(eg: 2005)
                                <TextField
                                  id="outlined-basic"
                                  label=""
                                  size="small"
                                  variant="outlined"
                                  sx={{ width: 50 }}
                                />
                              </div>
                              <Button
                                size="small"
                                variant="contained"
                                onClick={() => addComplaint(-1)}
                              >
                                Done
                              </Button>
                            </div>
                          </StyledTableCell>
                          <StyledTableCell>
                            <div>
                              <div align="right"
                                className="mb-2">
                                <span
                                  style={{ textDecoration: "underline", color: "blue" }}
                                  onClick={() => addComplaint(-1)}
                                > Delete
                                </span>
                              </div>
                              <div>
                                <TextField
                                  id="outlined-basic"
                                  label=""
                                  size="small"
                                  variant="outlined"
                                  fullWidth
                                />
                              </div>
                            </div>
                          </StyledTableCell>
                        </StyledTableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </Box>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              variant="contained"
              onClick={() => addComplaint(1)}
            >
              Add Complaint
            </Button>
          </CardActions>
        </Card>{" "}
        {/* <h2 style={{ backgroundColor: "red" }}>Chief Complaints</h2> */}
      </TabPanel>
      <TabPanel value={tabIndex} index={1}>
        <Card sx={{ width: "auto" }}>
          <CardHeader
            className={classes.header}
            title="Vitals"
            action={
              <ButtonGroup variant="text" aria-label="text button group">
                {/* <Button
                  variant="outlined"
                  sx={{ bgcolor: "white" }}
                  size="small"
                  className={classes.buttons}
                >
                  Import from Previous
                </Button>
                <Button
                  variant="outlined"
                  sx={{ bgcolor: "white" }}
                  startIcon={<SaveIcon />}
                  size="small"
                >
                  Save
                </Button> */}
              </ButtonGroup>
            }
          ></CardHeader>
          <CardContent>
            <Box>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end"
                }}
              >
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DesktopDatePicker
                    label="Visit Dates"
                    inputFormat="MM/DD/YYYY"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </div>
              <div>
                <TableContainer component={Paper}>
                  <Table
                    sx={{
                      marginTop: "10px"
                    }}
                    aria-label="customized table"
                  >
                    <TableBody>
                      <StyledTableRow>
                        <StyledTableCell>
                          Height
                        </StyledTableCell>
                        <StyledTableCell>
                          <div>
                            <TextField
                              id="outlined-basic"
                              label=""
                              size="small"
                              variant="outlined"
                              fullWidth
                              value={height}
                              onKeyPress={handleHeight}
                            />
                          </div>
                        </StyledTableCell>
                      </StyledTableRow>
                      <StyledTableRow>
                        <StyledTableCell>
                          Weight
                        </StyledTableCell>
                        <StyledTableCell>
                          <div>
                            <TextField
                              id="outlined-basic"
                              label=""
                              size="small"
                              variant="outlined"
                              fullWidth
                              value={weight}
                              onKeyPress={handleWeight}
                            />      
                          </div>
                        </StyledTableCell>
                      </StyledTableRow>
                      <StyledTableRow>
                        <StyledTableCell>
                          BMI
                        </StyledTableCell>
                        <StyledTableCell>
                          <div>
                            {BMI === 0 ? '-' : BMI}
                          </div>
                        </StyledTableCell>
                      </StyledTableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </Box>
          </CardContent>
        </Card>
      </TabPanel>
      <TabPanel value={tabIndex} index={2}>
        Allergies
      </TabPanel>
      <TabPanel value={tabIndex} index={3}>
        <MedicalHistory />
      </TabPanel>
      <TabPanel value={tabIndex} index={4}>
        Examination
      </TabPanel>
      <TabPanel value={tabIndex} index={5}>
        Prescribed Tests
      </TabPanel>
      <TabPanel value={tabIndex} index={6}>
        Lab Results
      </TabPanel>
      <TabPanel value={tabIndex} index={7}>
        Diagnosis
      </TabPanel>
      <TabPanel value={tabIndex} index={8}>
        Prescriptions
      </TabPanel>
      <TabPanel value={tabIndex} index={9}>
        IP Admission
      </TabPanel>
      <TabPanel value={tabIndex} index={10}>
        Attachment
      </TabPanel>
      <TabPanel value={tabIndex} index={11}>
        Summary and Print
      </TabPanel>
    </Box>
  );
}
