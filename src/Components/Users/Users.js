import React, { Component } from "react";
import axios from "axios";
import CustomizedExpansionPanels from "../CustomizedExpansionPanels/CustomizedExpansionPanels";
import CaptionBar from "../CaptionBar/CaptionBar";
import ModalWindow from "../ModalWindow/ModalWindow";
import "./users.css";

export default class Users extends Component {
    state = {
        users: [],
        error: false,
        value: "",
    }

    componentDidMount() {
        this.renderUsers();
        this.handleChange = this.handleChange.bind(this);
    }

    renderUsers = () => {
        axios.get("https://randomuser.me/api/?results=30")
            .then((res) => {
                this.setState({
                    users: res.data.results,
                });
            })
            .catch(this.onError);
    }

    onError() {
        this.setState({
            error: true,
        });
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        const { users, value } = this.state;
        return (
            <div>
                <div className="header__panel">
                    <div className="search__block">
                        <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Enter user first name" className="search__input"/>
                    </div>
                    <ModalWindow
                        users={users}
                    />
                </div>
                <CaptionBar />
                <CustomizedExpansionPanels
                    users={users}
                    value={value}
                />
            </div>
        );
    }
}
