import React from 'react';
import { Card, CardBody, CardImg, CardTitle, CardText } from 'reactstrap';
import LoadComments from './LoadComments';

const DishDetail = props => {
    // console.log(props);
    return (
        <div>
            <Card style={{ marginTop: "20px" }}>
                <CardImg top src={props.dish.image} alt={props.dish.name} />
                <CardBody style={{ textAlign: "left" }}>
                    <CardTitle>{props.dish.name}</CardTitle>
                    <CardText>{props.dish.description}</CardText>
                    <CardText>{props.dish.price} /=</CardText>
                    <hr />
                    <LoadComments comments={props.dish.comments} />
                </CardBody>

            </Card>
        </div>
    );
}

export default DishDetail;