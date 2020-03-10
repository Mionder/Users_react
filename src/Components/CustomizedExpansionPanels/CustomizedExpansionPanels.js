import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiExpansionPanel from "@material-ui/core/ExpansionPanel";
import MuiExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import MuiExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import moment from "moment";
import "./panel.css";
import PropTypes from "prop-types";

import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import UserDetails from "../UserDetails/UserDetails";
import User from "../User/User";

const ExpansionPanel = withStyles({
    root: {
        boxShadow: "none",
        backgroundColor: "#eeeeee",
        "&:not(:last-child)": {
            borderBottom: 0,
        },
        "&:before": {
            display: "none",
        },
        "&$expanded": {
            margin: "auto",
        },
    },
    expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
    root: {
        borderBottom: "1px solid rgba(0, 0, 0, .125)",
        marginBottom: -1,
        minHeight: 56,
        "&$expanded": {
            minHeight: 56,
        },
    },
    content: {
        margin: 0,
        "&$expanded": {
            margin: 0,
        },
    },
    expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles(({
    root: {
        padding: "0px 60px 0px 24px",
    },
}))(MuiExpansionPanelDetails);

export default function CustomizedExpansionPanels(props) {
    const { id, users, value } = props;
    const [expanded, setExpanded] = React.useState(`panel${id}`);
    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };


    const renderUsers = (arr, myValue) => arr.map((item, i) => {
        const {
            name, gender, cell, location, picture, login, registered, email, phone, dob,
        } = item;
        const bgColor = !!(i % 2);
        const idUser = i;
        dob.date = moment(dob.date).format("L");
        registered.date = moment(registered.date).format("L");
        if ((myValue !== undefined) && (name.first.toLowerCase().includes(myValue))) {
            return (
                <ExpansionPanel square key={idUser} expanded={expanded === `panel${idUser}`} onChange={handleChange(`panel${idUser}`)}>
                    <ExpansionPanelSummary aria-controls={`panel${idUser}d-content`} id={`panel${idUser}d-header`}
                        expandIcon={expanded === `panel${idUser}` ? <RemoveIcon /> : <AddIcon/>}>
                        <User
                            picture = {picture.medium}
                            last = {name.last}
                            first = {name.first}
                            username = {login.username}
                            phone = {phone}
                            country = {location.country}
                            bgcolor = {bgColor}
                            users = {users}
                        />
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <UserDetails
                            username = {login.username}
                            first = {name.first}
                            cell = {cell}
                            country = {location.country}
                            datereg = {registered.date}
                            email = {email}
                            city = {location.city}
                            postcode = {location.postcode}
                            phone = {phone}
                            birthday = {dob.date}
                            avatar = {picture.large}
                            address = {location.street.name}
                            bgcolor = {bgColor}
                            gender = {gender}
                        />
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            );
        }
        if (myValue === undefined) {
            return (
                <ExpansionPanel square key={idUser} expanded={expanded === `panel${idUser}`} onChange={handleChange(`panel${idUser}`)}>
                    <ExpansionPanelSummary aria-controls={`panel${idUser}d-content`} id={`panel${idUser}d-header`}
                        expandIcon={expanded === `panel${idUser}` ? <RemoveIcon /> : <AddIcon/>}>
                        <User
                            picture = {picture.medium}
                            last = {name.last}
                            first = {name.first}
                            username = {login.username}
                            phone = {phone}
                            country = {location.country}
                            bgcolor = {bgColor}
                        />
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <UserDetails
                            username = {login.username}
                            first = {name.first}
                            cell = {cell}
                            country = {location.country}
                            datereg = {registered.date}
                            email = {email}
                            city = {location.city}
                            postcode = {location.postcode}
                            phone = {phone}
                            birthday = {dob.date}
                            avatar = {picture.large}
                            address = {location.street.name}
                            bgcolor = {bgColor}
                            gender = {gender}
                        />
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            );
        }
        return null;
    });

    const fiterFunction = (myValue) => {
        if (myValue === "") {
            return renderUsers(users);
        }

        return renderUsers(users, value);
    };

    const item = fiterFunction(value);
    return (
        <div>
            {item}
        </div>
    );
}

CustomizedExpansionPanels.propTypes = {
    id: PropTypes.any,
    users: PropTypes.any,
    value: PropTypes.any,
};
