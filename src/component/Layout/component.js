import React from "react";
import PropTypes from "prop-types";
import Navbar from "../../partial/Navbar"
import Footer from "../../partial/footer"

const propTypes = {
    children: PropTypes.node.isRequired,
};

const defaultProps = {};

export default function Component(props) {
    const { children } = props;

    return (
        <div>
            <img className="mb-3" alt="" src="https://www.jimdo.com/static/7f58e83e14a16db25da8e56995f710b8/62acc/hero.jpg" style={{height: "400px", width: "100%"}}/>
            <Navbar />
            <div className="sb-site"></div>

            <div className="container">
                <div className="container__wrapper">{children}</div>
            </div>
            <Footer />
        </div>
    );
}

Component.propTypes = propTypes;
Component.defaultProps = defaultProps;