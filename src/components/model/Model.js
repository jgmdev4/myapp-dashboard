import React, { Component } from 'react';
import { Form, Button, FormControl } from 'react-bootstrap';
import Modal from 'react-awesome-modal';
// import Chart from '../charts/Chart';
import Bar from '../charts/Bar';
import Line from '../charts/Line';
import Pie from '../charts/Pie';
import "./model.css";

export default class Examples extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }

    openModal() {
        this.setState({
            visible: true
        });
    }

    closeModal() {
        this.setState({
            visible: false
        });
    }

    render() {
        return (
            <section className="model-sec">
                <input type="button" className="btn-widget" value="Widget Bar" onClick={() => this.openModal()} />
                <Modal
                    visible={this.state.visible}
                    width="1000"
                    height="400"
                    overflow="scrolled"
                    effect="fadeInRight"
                    onClickAway={() => this.closeModal()}
                >
                    <div className="outter-sec">
                        <div className="inner-sec">
                            <Line />
                            <div className="search-sec">
                                <Form inline className="inline">
                                    <i className="fa fa-search icn" aria-hidden="true"></i>
                                    <FormControl type="text" placeholder="Search" className="search" />
                                </Form>
                            </div>

                            <Bar />
                            <Pie />
                            <i className="fa fa-times close" onClick={() => this.closeModal()}></i>
                            {/* <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a> */}
                        </div>
                    </div>
                </Modal>
            </section>
        );
    }
}