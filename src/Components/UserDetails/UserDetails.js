import React, {Component} from "react";
import "./userDetails.css";
import "font-awesome/css/font-awesome.min.css";
import PropTypes from "prop-types";

export default class UserDetails extends Component{
    render(){
        const {avatar,first,username,phone,cell,datereg,postcode,email,city,birthday,bgcolor,address,gender} = this.props;
        return(
            <div className={bgcolor ? "details__wrapper details__gray" : "details__wrapper"}>
                <h5 className="info__label info__first">{first}<i className={gender === "male" ? "fa fa-male" :"fa fa-female"}></i></h5>
                <div className="users__info">
                    <div className="info__block">
                        
                        <p className="info__label info__username">Username <span className="info__label__span">{username}</span></p>
                        <p className="info__label registration__date">Registred <span className="info__label__span">{datereg}</span></p>
                        <p className="info__label info__email">Email <span className="info__label__span">{email}</span></p>
                    </div>
                    <div className="info__block">
                        <p className="info__label info__adress">Address <span className="info__label__span">{address}</span></p>
                        <p className="info__label info__city">City <span className="info__label__span">{city}</span></p>
                        <p className="info__label info__zip__code">Zip code <span className="info__label__span">{postcode}</span></p>
                    </div>
                    <div className="info__block ">
                        <p className="info__label info__birthday">Birthday <span className="info__label__span">{birthday}</span></p>
                        <p className="info__label info__phone">Phone <span className="info__label__span">{phone}</span></p>
                        <p className="info__label info__cell">Cell <span className="info__label__span">{cell}</span></p>
                    </div>
                    <div className="info__block">
                        <img src={avatar} alt="no-avatar" className="info__img "/>
                    </div>
                </div>
            </div>
        );
    }
}

UserDetails.propTypes = {
    avatar : PropTypes.any,
    cell : PropTypes.any,
    first : PropTypes.any,
    username : PropTypes.any,
    phone : PropTypes.any,
    datereg : PropTypes.any,
    bgcolor : PropTypes.any,
    postcode : PropTypes.any,
    email : PropTypes.any,
    city : PropTypes.any,
    birthday : PropTypes.any,
    address : PropTypes.any,
    gender : PropTypes.any
};