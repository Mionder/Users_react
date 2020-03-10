import React, { Component } from "react";
import "./user.css";
import "font-awesome/css/font-awesome.min.css";
import PropTypes from "prop-types";

export default class User extends Component {
    state = {
        icon: true,
    }

    changeIcon = () => {
        if (this.state.icon === false) {
            this.setState({
                icon: true,
            });
        } else {
            this.setState({
                icon: false,
            });
        }
    }

    render() {
        const {
            picture, last, first, username, phone, country, bgcolor,
        } = this.props;
        return (
            <div className={bgcolor ? "users__wrapper wrapper__gray" : "users__wrapper"} onClick={this.changeIcon}>
                <img src={picture} className="user__photo" alt="no img"/>
                <p className="label__user last_name">{last}</p>
                <p className="label__user first_name">{first}</p>
                <p className="label__user username">{username}</p>
                <p className="label__user phone_user">{phone}</p>
                <p className="label__user location_user">{country}</p>
            </div>
        );
    }
}
User.propTypes = {
    picture: PropTypes.any,
    last: PropTypes.any,
    first: PropTypes.any,
    username: PropTypes.any,
    phone: PropTypes.any,
    country: PropTypes.any,
    bgcolor: PropTypes.any,
};
