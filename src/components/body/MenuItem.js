import React from 'react';
import { Card, CardBody, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

const MenuItem = props => {
    // console.log("From Menu Items", props);
    return (
        <div>
            <Card style={{ margin: "10px" }}>
                <CardBody>
                    <CardImg
                        width="100%"
                        src={props.dish.image}
                        alt={props.dish.name}
                        style={{ opacity: "0.5" }}
                    />
                    <CardImgOverlay>
                        <CardTitle onClick={props.dishSelect} style={{ cursor: "pointer" }}>{props.dish.name}</CardTitle>
                    </CardImgOverlay>
                </CardBody>
            </Card>
        </div>
    );
}

export default MenuItem;