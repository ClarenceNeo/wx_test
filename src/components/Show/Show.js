import React from 'react';
import subjectList from '../../data/subjectList';
import style from './Show.css';

export class Show extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            article: {}
        }
    }
    componentWillMount() {
        const params = this.props.location.pathname.substring(6).split("/");
        const article = subjectList[params[0]].articleList.filter(item => item.id == params[1])[0];
        this.setState({
            article: article
        })
        // console.log(window.scrollY)
    }
    render() {
        return (
            <div style={{"overflow-y":"scroll","height":"100%"}}>
                <div className="show-area">
                    <h2 className="show-area-title">{this.state.article.title}</h2>
                    <span className="show-area-read">阅读：{this.state.article.view}</span>
                    <div className="show-area-content" dangerouslySetInnerHTML={{__html: this.state.article.html}}>
                    </div>
                </div>
            </div>
        )
    }
}