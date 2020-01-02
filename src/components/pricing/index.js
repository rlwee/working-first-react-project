import React, { Component } from 'react';

import Button from '../utils/button';

import Zoom from 'react-reveal/Zoom';

class Pricing extends Component {

    state = {
        prices: [1,2,3],
        positions: ['Carbonara', 'Samgyupsal', 'KFC chicken bucket'],
        desc:[
            'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.',
            'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.',
            'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.'
        ],
        linkto:['http://sales/b','http://sales/m','http://sales/s'],

        delay: [500,0,500]

    }

    showBoxes = () => (
        this.state.prices.map((box,i)=>(
            <Zoom delay={this.state.delay[i]} key={i}>
            <div className="pricing_item">
                <div className="pricing_inner_wrapper">
                    <div className="pricing_title">
                        <span>{this.state.prices[i]}</span>
                        <span>{this.state.positions[i]}</span>
                    </div>
                    <div className="pricing_description">
                        <span>{this.state.desc[i]}</span>
                    </div>
                    <div className="pricing_buttons">
                        <Button
                                text="Purchase"
                                bck="#ffa800"
                                color="#ffffff"
                                link={this.state.linkto[i]}
                            />
                    </div>
                </div> 
            </div>
            </Zoom>
        ))
    )


    render() {
        return (
            <div className="bck_black">
                <div className="center_wrapper pricing_section">
                    <h2>Must bring</h2>

                    <div className="pricing_wrapper">
                        
                        {this.showBoxes()}

                    </div>
                </div>
            </div>
        );
    }
}

export default Pricing;