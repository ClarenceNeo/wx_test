import React from 'react';
import subjectList from '../../data/subjectList';
import './Show.css';
import { Button, WhiteSpace, Modal } from 'antd-mobile';
import { HomeList } from '../HomeList/HomeList';
import { withRouter } from 'react-router'

function closest(el, selector) {
const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
    while (el) {
        if (matchesSelector.call(el, selector)) {
        return el;
        }
        el = el.parentElement;
    }
    return null;
}

class Show extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            modal1: false,
            block: true,
            article: {},
            list: [],
            cat: ""
        }
    }
    fetchData(pathname) {
        const params = pathname.substring(6).split("/");
        const article = subjectList[params[0]].articleList.filter(item => item.id == params[1])[0];
        let list = [];
        if(article.best == '1') {
            list = subjectList[params[0]].articleList.filter(item => item.best == "1").sort(function(){return Math.random() > 0.5});
        } else {
            list = subjectList[params[0]].articleList.sort(function(){return Math.random() > 0.5});
        }
        this.setState({
            article: article,
            list: list,
            cat: params[0]
        })
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.location.pathname != this.props.location.pathname) {
            this.fetchData(nextProps.location.pathname);
            document.getElementById('showPage').scroll(0, 0);
        }
    }
    componentWillMount() {
        this.fetchData(this.props.location.pathname);
    }
    showModal = key => (e) => {
        e.preventDefault(); // 修复 Android 上点击穿透
        this.setState({
            [key]: true,
        });
    }
    onWrapTouchStart = (e) => {
        // fix touch to scroll background page on iOS
        if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
            return;
        }
        const pNode = closest(e.target, '.am-modal-content');
        if (!pNode) {
            e.preventDefault();
        }
    }
    onClose = key => () => {
        this.setState({
            [key]: false,
            block: false
        });
    }
    render() {
        return (
            <div style={{"overflowY":"scroll","height":"100%"}} id="showPage">
                <div className="show-area">
                    <h2 className="show-area-title">{this.state.article.title}</h2>
                    <span className="show-area-read">阅读：{this.state.article.view}</span>
                    <div className="show-area-content" dangerouslySetInnerHTML={{__html: this.state.article.html}}>
                    </div>
                </div>
                <WhiteSpace />
                <div className="show-other-title">相关阅读</div>
                <div className="show-other">
                    <HomeList list={this.state.list} cat={this.state.cat} />
                </div>
                <div className={this.state.block ? "show-block" : "show-block hidden"}>
                    <div className="show-block-wrapper">
                        <WhiteSpace />
                        <Button className="show-all" onClick={this.showModal('modal1')}>查看全文</Button>
                        <WhiteSpace />
                        <div className="show-other-title">相关阅读</div>
                        <div className="show-other">
                            <HomeList list={this.state.list} cat={this.state.cat} />
                        </div>
                    </div>
                </div>
                <Modal
                    visible={this.state.modal1}
                    transparent
                    maskClosable={false}
                    // onClose={this.onClose('modal1')}
                    title="继续阅读，请先关注公众号"
                    footer={[{ text: '已关注', onPress: () => { this.onClose('modal1')(); } }]}
                    wrapProps={{ onTouchStart: this.onWrapTouchStart }}
                    >
                    <div>
                        <span style={{ "color": "#ff8400"}}>请长按此指纹,</span>识别二维码并关注
                        <WhiteSpace />
                        <img style={{"display":"inline-block",width: "4.7rem",height:"2rem"}} src="http://www.cyikao.com/zg/webapp_kd19/images/ys-wx.png" alt="二维码"/>
                    </div>
                </Modal>
            </div>
        )
    }
}

export default withRouter(Show)