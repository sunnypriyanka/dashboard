import React from "react";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import ErrorOutlineRoundedIcon from "@material-ui/icons/ErrorOutlineRounded";
import DehazeIcon from "@material-ui/icons/Dehaze";
import SearchIcon from "@material-ui/icons/Search";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import NotificationsIcon from "@material-ui/icons/Notifications";
import DraftsIcon from "@material-ui/icons/Drafts";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import InsertDriveFileOutlinedIcon from "@material-ui/icons/InsertDriveFileOutlined";
import ArrowDropDownOutlinedIcon from "@material-ui/icons/ArrowDropDownOutlined";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import DateRangeIcon from "@material-ui/icons/DateRange";
import CloudDownloadOutlinedIcon from "@material-ui/icons/CloudDownloadOutlined";
import HourglassEmptyOutlinedIcon from "@material-ui/icons/HourglassEmptyOutlined";
import ArrowBackOutlinedIcon from "@material-ui/icons/ArrowBackOutlined";
import ArrowForwardOutlinedIcon from "@material-ui/icons/ArrowForwardOutlined";
import ArrowBackIosOutlinedIcon from "@material-ui/icons/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@material-ui/icons/ArrowForwardIosOutlined";
import Badge from "@material-ui/core/Badge";

const useStyles = makeStyles({
  cont: {
    justifyContent: "center",
  },
  main: {
    width: 1200,
    marginTop: "20px",
    borderRadius: "20px",
  },
  topbar: {
    display: "flex",
  },
  rightside: {
    height: 805,
  },
  badge: {
    fontSize: 7,
    backgroundColor: "#00a1ff",
    height: "16px",
    marginTop: "-30px",
    borderRadius: "70%",
    width: "14px",
  },
  progress: {
    colorPrimary: {
      backgroundColor: "red",
    },
    barColorPrimary: {
      backgroundColor: "green",
    },
  },
  timeline: {},
});

export default function Sidebar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Grid container className={classes.cont}>
      <Grid container className={classes.main}>
        <Grid container>
          <Grid item xs={12}>
            <Paper
              className={classes.topbar}
              style={{ backgroundColor: "white" }}
            >
              <DehazeIcon
                style={{
                  padding: "20px",
                  backgroundColor: "#00a1ff",
                  borderTopLeftRadius: "7px",
                  color: "white",
                }}
              ></DehazeIcon>
              <Grid
                style={{
                  display: "flex",
                  padding: "20px",
                  marginLeft: "10px",
                  marginTop: "5px",
                }}
              >
                <SearchIcon
                  style={{ fontSize: "17px", color: "#b6b0b0" }}
                ></SearchIcon>
                <Typography
                  style={{
                    marginLeft: "10px",
                    fontSize: "10px",
                    color: "#b6b0b0",
                    fontWeight: "500",
                  }}
                >
                  Search for any Document or
                </Typography>
                <Typography
                  style={{
                    marginLeft: "5px",
                    fontSize: "10px",
                    color: "#00a1ff",
                    fontWeight: "500",
                  }}
                >
                  Employee (wayne Enterprise)
                </Typography>
                <ErrorOutlineRoundedIcon
                  style={{
                    color: "#b6b0b0",
                    fontSize: "14px",
                    marginLeft: "15px",
                    marginTop: "2px",
                  }}
                ></ErrorOutlineRoundedIcon>
              </Grid>
              <Grid style={{ marginLeft: "370px", marginTop: "5px" }}>
                <QuestionAnswerIcon
                  style={{
                    color: "#dfdada",
                    marginTop: "15px",
                    padding: "10px",
                    fontSize: "20px",
                  }}
                ></QuestionAnswerIcon>
                <Badge
                  badgeContent={4}
                  color="primary"
                  classes={{
                    badge: classes.badge,
                  }}
                >
                  <NotificationsIcon
                    style={{
                      color: "#dfdada",
                      padding: "3px",
                      fontSize: "20px",
                      marginTop: "-30px",
                      marginLeft: "20px",
                    }}
                  ></NotificationsIcon>
                </Badge>
                <Badge
                  badgeContent={3}
                  color="primary"
                  classes={{
                    badge: classes.badge,
                  }}
                >
                  <DraftsIcon
                    style={{
                      color: "#dfdada",
                      padding: "4px",
                      fontSize: "20px",
                      marginTop: "-30px",
                      marginLeft: "25px",
                    }}
                  ></DraftsIcon>
                </Badge>
              </Grid>

              <Grid
                className={classes.topbar}
                style={{
                  backgroundColor: "white",
                  marginLeft: "50px",
                  padding: "5px",
                }}
              >
                <Typography
                  style={{
                    fontSize: "13px",
                    fontWeight: "800",
                    marginLeft: "50px",
                    color: "grey",
                    marginTop: "20px",
                  }}
                >
                  HI, ALEX
                </Typography>
                <ExpandMoreOutlinedIcon
                  style={{
                    color: "grey",
                    marginLeft: "10px",
                    marginTop: "20px",
                    fontSize: "15px",
                  }}
                ></ExpandMoreOutlinedIcon>
                <Avatar
                  src="https://www.pikpng.com/pngl/m/4-46401_business-man-png-free-image-download-businessman-png.png"
                  style={{
                    height: "35px",
                    width: "35px",
                    marginTop: "13px",
                    marginLeft: "15px",
                  }}
                ></Avatar>
              </Grid>
            </Paper>
          </Grid>

          <Grid item xs={12} style={{ display: "flex" }}>
            <Grid item xs={4}>
              <Grid item xs={12}>
                <Paper
                  className={classes.rightside}
                  style={{ backgroundColor: "#fafafa", padding: "60px" }}
                >
                  <Typography
                    style={{
                      fontWeight: "900",
                      fontSize: "30px",
                      marginTop: "20px",
                    }}
                  >
                    Welcome back to your dashboard Alex
                  </Typography>
                  <Grid style={{ display: "", marginTop: "40px" }}>
                    <Typography style={{ fontSize: "13px" }}>
                      We recommended you complete{" "}
                      <u style={{ fontWeight: "bold" }}>
                        Certificates of Employment{" "}
                      </u>{" "}
                      and upload{" "}
                      <u style={{ fontWeight: "bold" }}>New Regestration </u> to
                      system from last week.
                    </Typography>
                  </Grid>
                  <Grid
                    style={{
                      display: "flex",
                      padding: "10px",
                      marginTop: "80px",
                    }}
                  >
                    <Grid>
                      <Typography
                        style={{
                          fontWeight: "600",
                          fontSize: "15px",
                          marginLeft: "5px",
                        }}
                      >
                        Tasks to do{" "}
                      </Typography>

                      <img
                        style={{
                          height: "120px",
                          width: "130px",
                          marginTop: "15px",
                        }}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9t-6gsZqgK39PtG09cPsDRPYNGPwmxkraTUwaD5rCt4ceO6LmKyVPsE1ddYi5QOTJqsU&usqp=CAU"
                      ></img>
                    </Grid>
                    <Grid style={{ marginLeft: "25px" }}>
                      <Typography
                        style={{
                          fontWeight: "600",
                          fontSize: "15px",
                          marginLeft: "48px",
                        }}
                      >
                        Cases
                      </Typography>
                      <Grid style={{ display: "flex", marginTop: "25px" }}>
                        <Typography
                          style={{
                            fontWeight: "700",
                            fontSize: "30px",
                            marginTop: "-5px",
                          }}
                        >
                          12
                        </Typography>
                        <Typography
                          style={{
                            marginLeft: "20px",
                            fontSize: "11px",
                            color: "#a49c9c",
                            fontWeight: "450",
                          }}
                        >
                          open <br /> documents
                        </Typography>
                      </Grid>

                      <Grid style={{ display: "flex", marginTop: "10px" }}>
                        <Typography
                          style={{
                            marginLeft: "18px",
                            fontWeight: "800",
                            fontSize: "30px",
                            marginTop: "-5px",
                          }}
                        >
                          3
                        </Typography>
                        <Typography
                          style={{
                            marginLeft: "20px",
                            fontSize: "11px",
                            color: "#a49c9c",
                            fontWeight: "450",
                          }}
                        >
                          New <br />
                          tickets
                        </Typography>
                      </Grid>

                      <Grid style={{ display: "flex", marginTop: "10px" }}>
                        <Typography
                          style={{
                            marginLeft: "18px",
                            fontWeight: "800",
                            fontSize: "30px",
                            marginTop: "-5px",
                          }}
                        >
                          3
                        </Typography>
                        <Typography
                          style={{
                            marginLeft: "20px",
                            fontSize: "11px",
                            color: "#a49c9c",
                            fontWeight: "450",
                          }}
                        >
                          New <br /> documents
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Button
                    style={{
                      backgroundColor: "white",
                      padding: "15px",
                      fontWeight: "600",
                      fontSize: "12px",
                      width: "160px",
                      marginTop: "50px",
                      marginLeft: "50px",
                      boxShadow: "inherit",
                      color: "#312e2e",
                    }}
                  >
                    SEE FULL REPORTS
                  </Button>
                </Paper>
              </Grid>
            </Grid>
            <Grid item xs={8} >
              <Grid
                item
                xs={12}
                style={{ backgroundColor: "#f0eeee", padding: "10px" }}
              >
                <Button
                  style={{
                    backgroundColor: "#00a1ff",
                    color: "whitesmoke",
                    marginLeft: "520px",
                    width: "240px",
                    padding: "10px",
                    fontWeight: "lighter",
                    textTransform: "capitalize",
                    borderRadius: "5px",
                    marginTop: "13px",
                  }}
                >
                  Start new case
                </Button>
              </Grid>
              <Grid
                item
                xs={12}
                style={{ padding: "30px", backgroundColor: "#f0eeee" }}
              >
                <Paper
                  className={classes.root}
                  style={{
                    backgroundColor: "#f0eeee",
                    boxShadow: "none",
                    marginBottom: "170px",
                  }}
                >
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    TabIndicatorProps={{
                      style: {
                        width: "80px",
                        marginLeft: "40px",
                        height: "3px",
                        backgroundColor: "#13a6ec",
                      },
                    }}
                  >
                    <Tab
                      label="Documents"
                      style={{
                        color: "#13a6ec",
                        textTransform: "capitalize",
                        fontSize: "15px",
                      }}
                    />
                    <Tab
                      label="People"
                      style={{
                        textTransform: "capitalize",
                        fontSize: "15px",
                        marginLeft: "-50px",
                        color: "#1a1010f0",
                      }}
                    />
                    <Tab
                      label="Tickets"
                      style={{
                        textTransform: "capitalize",
                        fontSize: "15px",
                        marginLeft: "-70px",
                        color: "#1a1010f0",
                      }}
                    />
                  </Tabs>
                  <Grid
                    style={{
                      display: "flex",
                      padding: "5px",
                      marginTop: "40px",
                      marginLeft: "25px",
                    }}
                  >
                    <InsertDriveFileOutlinedIcon
                      style={{
                        color: "grey",
                        marginLeft: "10px",
                        fontSize: "15px",
                      }}
                    ></InsertDriveFileOutlinedIcon>
                    <Typography
                      style={{
                        marginLeft: "5px",
                        fontSize: "12px",
                        fontWeight: "500",
                      }}
                    >
                      8/12
                    </Typography>
                  </Grid>
                  <Grid
                    style={{
                      display: "flex",
                      padding: "3px",
                      marginLeft: "40px",
                    }}
                  >
                    <Typography
                      style={{
                        fontWeight: "500",
                        fontSize: "11px",
                        color: "#353030",
                      }}
                    >
                      OPEN DOCUMENTS
                    </Typography>
                    <Typography
                      style={{
                        fontWeight: "500",
                        fontSize: "12px",
                        color: "#353030",
                        marginLeft: "480px",
                      }}
                    >
                      All Documents
                    </Typography>
                    <ArrowDropDownOutlinedIcon
                      style={{ fontSize: "15px", marginLeft: "10px" }}
                    ></ArrowDropDownOutlinedIcon>
                  </Grid>

                  <Grid item xs={12}>
                    <Paper
                      style={{
                        backgroundColor: "#f0eeee",
                        padding: "1px",
                        boxShadow: "none",
                        marginTop: "20px",
                      }}
                    >
                      <Grid item xs={12} style={{ display: "flex" }}>
                        <div
                          style={{
                            display: "flex",
                            marginLeft: "40px",
                            width: "680px",
                          }}
                        >
                          <Grid item xs={3} style={{ padding: "5px" }}>
                            <Grid item xs={12}>
                              <Card
                                style={{
                                  padding: "3px",
                                  height: "140px",
                                  width: "154px",
                                  border: "1px solid #00a1ff",
                                  boxShadow: "0 0 2px 0px #00a1ff",
                                }}
                              >
                                <CardMedia
                                  style={{
                                    display: "flex",
                                    padding: "3px",
                                    marginTop: "18px",
                                  }}
                                >
                                  <DateRangeIcon
                                    style={{
                                      color: "#aca7a7de",
                                      fontSize: "14px",
                                    }}
                                  ></DateRangeIcon>
                                  <Typography
                                    style={{
                                      color: "#6e6d72",
                                      marginLeft: "5px",
                                      fontSize: "11px",
                                      marginTop: "1px",
                                      fontWeight: "500",
                                    }}
                                  >
                                    08-04-2019
                                  </Typography>
                                  <CloudDownloadOutlinedIcon
                                    style={{
                                      color: "#00adff",
                                      marginLeft: "45px",
                                      fontSize: "17px",
                                      marginTop: "-3px",
                                    }}
                                  ></CloudDownloadOutlinedIcon>
                                </CardMedia>
                                <CardContent>
                                  <Typography
                                    style={{
                                      fontWeight: "550",
                                      color: "#373535de",
                                      marginTop: "20px",
                                      fontSize: "14px",
                                      marginLeft: "-7px",
                                    }}
                                  >
                                    Mark Thompson
                                  </Typography>
                                  <Typography
                                    style={{
                                      color: "#0095ff",
                                      fontSize: "11px",
                                      fontWeight: "500",
                                      marginTop: "5px",
                                      marginLeft: "-7px",
                                    }}
                                  >
                                    Holiday request
                                  </Typography>
                                </CardContent>
                              </Card>
                            </Grid>
                          </Grid>

                          <Grid
                            item
                            xs={3}
                            style={{ padding: "3px", marginLeft: "10px" }}
                          >
                            <Grid item xs={12}>
                              <Card
                                style={{
                                  padding: "3px",
                                  height: "140px",
                                  width: "154px",
                                  boxShadow: "none",
                                  border: "1.2px solid #cdc9c9",
                                }}
                              >
                                <CardMedia
                                  style={{
                                    display: "flex",
                                    padding: "3px",
                                    marginTop: "18px",
                                  }}
                                >
                                  <DateRangeIcon
                                    style={{
                                      color: "#aca7a7de",
                                      fontSize: "14px",
                                    }}
                                  ></DateRangeIcon>
                                  <Typography
                                    style={{
                                      color: "#6e6d72",
                                      marginLeft: "5px",
                                      fontSize: "11px",
                                      marginTop: "1px",
                                      fontWeight: "500",
                                    }}
                                  >
                                    07-03-2019
                                  </Typography>
                                  <CheckCircleIcon
                                    style={{
                                      color: "#0dd10d",
                                      marginLeft: "45px",
                                      fontSize: "18px",
                                      marginTop: "-3px",
                                      padding: "3px",
                                    }}
                                  ></CheckCircleIcon>
                                </CardMedia>
                                <CardContent>
                                  <Typography
                                    style={{
                                      fontWeight: "550",
                                      color: "#373535de",
                                      marginTop: "20px",
                                      fontSize: "14px",
                                      marginLeft: "-7px",
                                    }}
                                  >
                                    Tillie Carlson
                                  </Typography>
                                  <Typography
                                    style={{
                                      color: "#0095ff",
                                      fontSize: "10px",
                                      fontWeight: "500",
                                      marginTop: "5px",
                                      marginLeft: "-7px",
                                    }}
                                  >
                                    Certificate of employment
                                  </Typography>
                                </CardContent>
                              </Card>
                            </Grid>
                          </Grid>

                          <Grid
                            item
                            xs={3}
                            style={{ padding: "3px", marginLeft: "10px" }}
                          >
                            <Grid item xs={12}>
                              <Card
                                style={{
                                  padding: "3px",
                                  height: "140px",
                                  width: "154px",
                                  boxShadow: "none",
                                  border: "1.2px solid #cdc9c9",
                                }}
                              >
                                <CardMedia
                                  style={{
                                    display: "flex",
                                    padding: "8px",
                                    marginTop: "10px",
                                  }}
                                >
                                  <DateRangeIcon
                                    style={{
                                      color: "#aca7a7de",
                                      fontSize: "14px",
                                    }}
                                  ></DateRangeIcon>
                                  <Typography
                                    style={{
                                      color: "#6e6d72",
                                      marginLeft: "5px",
                                      fontSize: "11px",
                                      marginTop: "1px",
                                      fontWeight: "500",
                                    }}
                                  >
                                    04-17-2019
                                  </Typography>
                                  <HourglassEmptyOutlinedIcon
                                    style={{
                                      color: "#00adff",
                                      marginLeft: "43px",
                                      fontSize: "17px",
                                      marginTop: "3px",
                                    }}
                                  ></HourglassEmptyOutlinedIcon>
                                </CardMedia>
                                <CardContent>
                                  <Typography
                                    style={{
                                      fontWeight: "550",
                                      color: "#373535de",
                                      marginTop: "20px",
                                      fontSize: "14px",
                                      marginLeft: "-7px",
                                    }}
                                  >
                                    Corey Gross
                                  </Typography>
                                  <Typography
                                    style={{
                                      color: "#0095ff",
                                      fontSize: "11px",
                                      fontWeight: "500",
                                      marginTop: "5px",
                                      marginLeft: "-7px",
                                    }}
                                  >
                                    Half-time application
                                  </Typography>
                                </CardContent>
                              </Card>
                            </Grid>
                          </Grid>
                          <Grid
                            item
                            xs={3}
                            style={{ padding: "3px", marginLeft: "10px" }}
                          >
                            <Grid item xs={12}>
                              <Card
                                style={{
                                  padding: "3px",
                                  height: "140px",
                                  width: "154px",
                                  boxShadow: "none",
                                  border: "1.2px solid #cdc9c9",
                                }}
                              >
                                <CardMedia
                                  style={{
                                    display: "flex",
                                    padding: "8px",
                                    marginTop: "10px",
                                  }}
                                >
                                  <DateRangeIcon
                                    style={{
                                      color: "#aca7a7de",
                                      fontSize: "14px",
                                    }}
                                  ></DateRangeIcon>
                                  <Typography
                                    style={{
                                      color: "#6e6d72",
                                      marginLeft: "5px",
                                      fontSize: "11px",
                                      marginTop: "1px",
                                      fontWeight: "500",
                                    }}
                                  >
                                    07-07-2019
                                  </Typography>
                                  <CloudDownloadOutlinedIcon
                                    style={{
                                      color: "#00adff",
                                      marginLeft: "43px",
                                      fontSize: "17px",
                                      marginTop: "3px",
                                    }}
                                  ></CloudDownloadOutlinedIcon>
                                </CardMedia>
                                <CardContent>
                                  <Typography
                                    style={{
                                      fontWeight: "550",
                                      color: "#373535de",
                                      marginTop: "20px",
                                      fontSize: "14px",
                                      marginLeft: "-7px",
                                    }}
                                  >
                                    Harriett McGuire
                                  </Typography>
                                  <Typography
                                    style={{
                                      color: "#0095ff",
                                      fontSize: "11px",
                                      fontWeight: "500",
                                      marginTop: "5px",
                                      marginLeft: "-7px",
                                    }}
                                  >
                                    Holiday request
                                  </Typography>
                                </CardContent>
                              </Card>
                            </Grid>
                          </Grid>
                        </div>
                      </Grid>

                      <Grid item xs={12} style={{ display: "flex" }}>
                        <div
                          style={{
                            display: "flex",
                            width: "680px",
                            marginLeft: "35px",
                            marginTop: "1px",
                          }}
                        >
                          <Grid item xs={3} style={{ padding: "10px" }}>
                            <Grid item xs={12}>
                              <Card
                                style={{
                                  padding: "3px",
                                  height: "140px",
                                  width: "154px",
                                  boxShadow: "none",
                                  border: "1.2px solid #cdc9c9",
                                }}
                              >
                                <CardMedia
                                  style={{
                                    display: "flex",
                                    padding: "8px",
                                    marginTop: "10px",
                                  }}
                                >
                                  <DateRangeIcon
                                    style={{
                                      color: "#aca7a7de",
                                      fontSize: "14px",
                                    }}
                                  ></DateRangeIcon>
                                  <Typography
                                    style={{
                                      color: "#6e6d72",
                                      marginLeft: "5px",
                                      fontSize: "11px",
                                      marginTop: "1px",
                                      fontWeight: "500",
                                    }}
                                  >
                                    04-18-2019
                                  </Typography>
                                </CardMedia>
                                <CardContent>
                                  <Typography
                                    style={{
                                      fontWeight: "550",
                                      color: "#373535de",
                                      marginTop: "20px",
                                      fontSize: "14px",
                                      marginLeft: "-7px",
                                    }}
                                  >
                                    Larry Christensen
                                  </Typography>
                                  <Typography
                                    style={{
                                      color: "#0095ff",
                                      fontSize: "11px",
                                      fontWeight: "500",
                                      marginTop: "5px",
                                      marginLeft: "-7px",
                                    }}
                                  >
                                    Sick Leave
                                  </Typography>
                                </CardContent>
                              </Card>
                            </Grid>
                          </Grid>

                          <Grid
                            item
                            xs={3}
                            style={{ padding: "10px", marginLeft: "10px" }}
                          >
                            <Grid item xs={12}>
                              <Card
                                style={{
                                  padding: "3px",
                                  height: "140px",
                                  width: "154px",
                                  boxShadow: "none",
                                  border: "1.2px solid #cdc9c9",
                                }}
                              >
                                <CardMedia
                                  style={{
                                    display: "flex",
                                    padding: "8px",
                                    marginTop: "10px",
                                  }}
                                >
                                  <DateRangeIcon
                                    style={{
                                      color: "#aca7a7de",
                                      fontSize: "14px",
                                    }}
                                  ></DateRangeIcon>
                                  <Typography
                                    style={{
                                      color: "#6e6d72",
                                      marginLeft: "5px",
                                      fontSize: "11px",
                                      marginTop: "1px",
                                      fontWeight: "500",
                                    }}
                                  >
                                    04-25-2019
                                  </Typography>
                                  <CheckCircleIcon
                                    style={{
                                      color: "#0dd10d",
                                      marginLeft: "43px",
                                      fontSize: "17px",
                                    }}
                                  ></CheckCircleIcon>
                                </CardMedia>
                                <CardContent>
                                  <Typography
                                    style={{
                                      fontWeight: "550",
                                      color: "#373535de",
                                      marginTop: "20px",
                                      fontSize: "14px",
                                      marginLeft: "-7px",
                                    }}
                                  >
                                    Elnora Poole
                                  </Typography>
                                  <Typography
                                    style={{
                                      color: "#0095ff",
                                      fontSize: "10px",
                                      fontWeight: "500",
                                      marginTop: "5px",
                                      marginLeft: "-7px",
                                    }}
                                  >
                                    Certificate of employment
                                  </Typography>
                                </CardContent>
                              </Card>
                            </Grid>
                          </Grid>

                          <Grid
                            item
                            xs={3}
                            style={{ padding: "10px", marginLeft: "10px" }}
                          >
                            <Grid item xs={12}>
                              <Card
                                style={{
                                  padding: "3px",
                                  height: "140px",
                                  width: "154px",
                                  boxShadow: "none",
                                  border: "1.2px solid #cdc9c9",
                                }}
                              >
                                <CardMedia
                                  style={{
                                    display: "flex",
                                    padding: "8px",
                                    marginTop: "10px",
                                  }}
                                >
                                  <DateRangeIcon
                                    style={{
                                      color: "#aca7a7de",
                                      fontSize: "14px",
                                    }}
                                  ></DateRangeIcon>
                                  <Typography
                                    style={{
                                      color: "#6e6d72",
                                      marginLeft: "5px",
                                      fontSize: "11px",
                                      marginTop: "1px",
                                      fontWeight: "500",
                                    }}
                                  >
                                    03-11-2019
                                  </Typography>
                                  <CheckCircleIcon
                                    style={{
                                      color: "#0dd10d",
                                      marginLeft: "43px",
                                      fontSize: "17px",
                                      marginTop: "3px",
                                    }}
                                  ></CheckCircleIcon>
                                </CardMedia>
                                <CardContent>
                                  <Typography
                                    style={{
                                      fontWeight: "550",
                                      color: "#373535de",
                                      marginTop: "20px",
                                      fontSize: "14px",
                                      marginLeft: "-7px",
                                    }}
                                  >
                                    Sally Rhodes
                                  </Typography>
                                  <Typography
                                    style={{
                                      color: "#0095ff",
                                      fontSize: "11px",
                                      fontWeight: "500",
                                      marginTop: "5px",
                                      marginLeft: "-7px",
                                    }}
                                  >
                                    Holiday request
                                  </Typography>
                                </CardContent>
                              </Card>
                            </Grid>
                          </Grid>

                          <Grid
                            item
                            xs={3}
                            style={{ padding: "10px", marginLeft: "10px" }}
                          >
                            <Grid item xs={12}>
                              <Card
                                style={{
                                  padding: "3px",
                                  height: "140px",
                                  width: "154px",
                                  boxShadow: "none",
                                  border: "1.2px solid #cdc9c9",
                                }}
                              >
                                <CardMedia
                                  style={{
                                    display: "flex",
                                    padding: "8px",
                                    marginTop: "10px",
                                  }}
                                >
                                  <DateRangeIcon
                                    style={{
                                      color: "#aca7a7de",
                                      fontSize: "14px",
                                    }}
                                  ></DateRangeIcon>
                                  <Typography
                                    style={{
                                      color: "#6e6d72",
                                      marginLeft: "5px",
                                      fontSize: "11px",
                                      marginTop: "1px",
                                      fontWeight: "500",
                                    }}
                                  >
                                    02-25-2019
                                  </Typography>
                                  <CheckCircleIcon
                                    style={{
                                      color: "#0dd10d",
                                      marginLeft: "43px",
                                      marginTop: "3px",
                                      fontSize: "17px",
                                    }}
                                  ></CheckCircleIcon>
                                </CardMedia>
                                <CardContent>
                                  <Typography
                                    style={{
                                      fontWeight: "550",
                                      color: "#373535de",
                                      marginTop: "20px",
                                      fontSize: "14px",
                                      marginLeft: "-7px",
                                    }}
                                  >
                                    Philip Ryan
                                  </Typography>
                                  <Typography
                                    style={{
                                      color: "#0095ff",
                                      fontSize: "11px",
                                      fontWeight: "500",
                                      marginTop: "5px",
                                      marginLeft: "-7px",
                                    }}
                                  >
                                    New Born
                                  </Typography>
                                </CardContent>
                              </Card>
                            </Grid>
                          </Grid>
                        </div>
                      </Grid>
                    </Paper>
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    style={{
                      display: "flex",
                      padding: "10px",
                      marginTop: "60px",
                    }}
                  >
                    <Grid style={{ display: "flex" }}>
                      <ArrowBackOutlinedIcon
                        style={{
                          color: "grey",
                          fontSize: "13px",
                          marginLeft: "40px",
                        }}
                      ></ArrowBackOutlinedIcon>
                      <Typography
                        style={{
                          color: "grey",
                          fontSize: "11px",
                          fontWeight: "600",
                          marginLeft: "15px",
                        }}
                      >
                        Previous
                      </Typography>
                    </Grid>
                    <Grid
                      style={{
                        display: "flex",
                        marginBottom: "20px",
                        marginLeft: "65px",
                        marginTop: "-16px",
                        backgroundColor: "#009aff",
                        padding: "14px",
                        width: "170px",
                        borderRadius: "5px",
                      }}
                    >
                      <Typography
                        style={{
                          color: "whitesmoke",
                          fontSize: "13px",
                          fontWeight: "400",
                          color: "white",
                        }}
                      >
                        Next
                      </Typography>
                      <ArrowForwardOutlinedIcon
                        style={{
                          color: "white",
                          fontSize: "15px",
                          marginLeft: "95px",
                        }}
                      ></ArrowForwardOutlinedIcon>
                    </Grid>

                    <Grid style={{ display: "flex", marginLeft: "118px" }}>
                      <ArrowBackIosOutlinedIcon
                        style={{
                          fontSize: "8px",
                          color: "grey",
                          marginTop: "-1px",
                          backgroundColor: "white",
                          padding: "5px",
                          borderRadius: "5px",
                        }}
                      ></ArrowBackIosOutlinedIcon>
                      <Typography
                        style={{
                          marginLeft: "10px",
                          color: "#312e2e",
                          fontSize: "10px",
                          fontWeight: "600",
                        }}
                      >
                        Previous
                      </Typography>
                      <Typography
                        style={{
                          marginLeft: "30px",
                          color: "#312e2e",
                          fontSize: "10px",
                          fontWeight: "600",
                        }}
                      >
                        Next
                      </Typography>
                      <ArrowForwardIosOutlinedIcon
                        style={{
                          marginLeft: "10px",
                          marginTop: "-1px",
                          fontSize: "8px",
                          color: "grey",
                          backgroundColor: "white",
                          padding: "5px",
                          borderRadius: "5px",
                        }}
                      ></ArrowForwardIosOutlinedIcon>
                      <Button
                        style={{
                          marginLeft: "20px",
                          backgroundColor: "white",
                          width: "10px",
                          height: "20px",
                          padding: "1px",
                          fontSize: "8px",
                          color: "grey",
                          marginTop: "-3px",
                        }}
                      >
                        ENTER
                      </Button>
                      <Typography
                        style={{
                          marginLeft: "5px",
                          color: "#312e2e",
                          fontSize: "10px",
                          fontWeight: "600",
                        }}
                      >
                        Confirm
                      </Typography>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
