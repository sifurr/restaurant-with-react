import React, { Component } from 'react';
import DISHES from '../../data/dishes';
import MenuItem from './MenuItem';
import DishDetail from './DishDetail';

class Menu extends Component {
    state = {
        dishes: DISHES,
        selectedDish: null,
    }

    onDishSelected = fullDish => {
        // console.log(fullDish);
        this.setState({
            selectedDish: fullDish
        })
    }

    render() {
        // console.log("From Menu: ", this.state.dishes);
        const menu = this.state.dishes.map(item => {
            return (
                <MenuItem dish={item} key={item.id} dishSelect={() => this.onDishSelected(item)} />
            );
        })
        let dishDetail = null;
        if (this.state.selectedDish != null) {
            dishDetail = <DishDetail dish={this.state.selectedDish} />

        }
        // console.log("My dish Detail", dishDetail);
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        {menu}
                    </div>
                    <div className="col-6">
                        {dishDetail}
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;