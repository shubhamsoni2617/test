import React, { Component } from "react";

export default class LoadMoreOnScroll extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataLength:this.props.dataLength,
            totalRecords:this.props.totalRecords
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.loadMoreOnScroll, false);
    }

    componentWillReceiveProps(props){
        this.setState({dataLength:props.dataLength, totalRecords:props.totalRecords})
    }

    loadMoreOnScroll = () => {
        let evetdatalength = this.state.dataLength;
        let totalRecords = this.state.totalRecords;
        if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 300) && evetdatalength < totalRecords) {
            this.props.loadMore();
        }
    }

    render(){
        return null;
    }
}