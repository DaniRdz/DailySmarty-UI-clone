import React, { Component } from 'react';
import AnimateHeight from 'react-animate-height';

export default class Post extends Component {

    constructor(props) {
        super(props);

        this.state = {
            height: 0
        }
    }

    renderTopics() {
        let topics = this.props.associated_topics.map((topic, index) => {
            return (<span className='post-topic' key={index}>{topic}</span>)
        })
        return topics;
    }

    renderLinks() {
        let links = this.props.post_links.map((link, index) => {
            return (
                <div key={index} className='post-link'>
                    <div className='post-link-box'></div>
                    <div className='link'>
                        <a href={link.link_url}>Useful Link #{index + 1}</a>
                    </div>
                </div>
            )
        })
        return links;
    }

    render() {
        if (this.props.type === 'recent') {
            return (
                <li className='recent-post'>
                    <div className='recent-post-title'>
                        {this.props.title}
                    </div>
                    <div className='recent-post-topics'>
                        {this.renderTopics()}
                    </div>
                </li>
            );
        } else if (this.props.type === 'result') {
            return (
                <li className='result-post'
                    onMouseEnter={() => { this.setState({ height: 70 }) }}
                    onMouseLeave={() => { this.setState({ height: 0 }) }}
                >
                    <div className='result-post-topics'>
                        {this.renderTopics()}
                    </div>
                    <div className='result-post-title'>
                        <a
                            href={this.props.url_for_post}
                        >
                            {this.props.title}</a>
                    </div>
                    <AnimateHeight
                        duration={500}
                        height={this.state.height}
                    >
                        <div className='result-post-links'>
                            {this.renderLinks()}
                        </div>
                    </AnimateHeight>
                </li>
            );
        }
    }
}