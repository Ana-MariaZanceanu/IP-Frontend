import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Carousel from 'react-bootstrap/Carousel'

export class Content extends Component {

    constructor(props) {
        super(props)
        this.state = {
           providerName: props.providerName,
           images: props.providerImages
        }
    }

    render() {
        return (
            
            <div id="content" class="shadow p-3 mb-5 bg-F3F3F3 rounded">
                <div className="header">
                    <h2 className="text-center restauranttitle" >{this.state.providerName}</h2>
                    <Carousel>
                        {this.state.images.map(item => ( <Carousel.Item>
                        <img
                            height={600}
                            className="d-block w-100"
                            src={item}
                            alt="First slide"
                        />
                        </Carousel.Item>) )}
                    </Carousel>
                </div>
            </div>
           
           
        );
    }
}

export default Content;