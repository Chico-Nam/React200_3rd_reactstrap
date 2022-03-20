import React from "react";
import {Breadcrumb, BreadcrumbItem} from 'reactstrap';

class R036_ReactstrapBreadcrumbs extends React.Component {
    render() {
        return (
            <div id="top">
                <Breadcrumb tag="nav" listTag="div">
                    <BreadcrumbItem tag="a" href="#top">Go Top</BreadcrumbItem>
                    <BreadcrumbItem tag="a" href="#bottom">Go BOTTOM</BreadcrumbItem>
                </Breadcrumb>
                <div id="bottom" style={{marginTop : "1000px"}}> 
                    <span>bottom</span>
                </div>
            </div>
        );
    }
}

export default R036_ReactstrapBreadcrumbs;
