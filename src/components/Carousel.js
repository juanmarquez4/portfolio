import React from "react";
import { Container} from "react-bootstrap";

import Card from "./Card";

import image1 from '../assets/images/DSC04273.JPG'


class Carousel extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Stock Manager',
                    subTitle: 'Keep your wine in stock',
                    imgSrc: image1,
                    link: '',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Laboratorio Clinico',
                    subTitle: 'Health Page',
                    imgSrc: image1,
                    link: '',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Vynil app',
                    subTitle: 'Records I got',
                    imgSrc: image1,
                    link: '',
                    selected: false
                },
            ]
        }
    }

    handleCardClick = (id) => {
        let items =[...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render() {
        return(
            <Container  className="d-flex flex-wrap justify-content-around px-5">
                
                    {this.makeItems(this.state.items)}
                
            </Container>
        );
    }
}

export default Carousel;