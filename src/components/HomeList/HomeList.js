import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { blockStatement } from '@babel/types';

const SectionGroup = styled.div`
    background-color: #ffffff;
    height: 1.1rem;
    border-bottom: .02rem solid #f7f7f7;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 .2rem;
    color: #333333;
`;
const SectionLeft = styled.div`
    width: 6.5rem;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    text-align: left;
`;
const SectionRight = styled.div`
    width: .28rem;
    height: .28rem;
    background: url(${props => props.image});
    background-size: cover;
`;
const SectionTitle = styled.h3`
    font-size: .3rem;
    line-height: 1;
    margin-bottom: .1rem;
    width: 6.5rem;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
`;
const SectionInfo = styled.p`
    display: flex;
`;
const SectionCommend = styled.span`
    display: inline-block;
    font-size: .2rem;
    width: .8rem;
    height: .3rem;
    border-radius: .15rem;
    background-color: #ff6c00;
    color: #fff;
    line-height: .3rem;
    margin-right: .14rem;
    text-align: center;
`;
const SectionHot = styled.span`
    display: inline-block;
    font-size: .2rem;
    width: .8rem;
    height: .3rem;
    border-radius: .15rem;
    background-color: #ff0000;
    color: #fff;
    line-height: .3rem;
    margin-right: .14rem;
    text-align: center;
`;
const SectionView = styled.span`
    font-size: .22rem;
    color: #b9b9b9;
`;

const Section = props => (
	<SectionGroup>
        <SectionLeft>
            <SectionTitle>{props.title}</SectionTitle>
            <SectionInfo>
                <SectionCommend className={ props.commend=="1" ? "" : "hidden" }>推荐</SectionCommend>
                <SectionHot className={ props.hot=="1" ? "" : "hidden" }>热门</SectionHot>
                <SectionView>阅读：{props.view}</SectionView>
            </SectionInfo>
        </SectionLeft>
        <SectionRight image={props.image}></SectionRight>
	</SectionGroup>
)

export class HomeList extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
        }
    }
    componentWillMount() {
        // console.log(this.state.list)
    }
    render() {
        return (
            <div style={{"overflowY":"scroll"}}>
                {this.props.list.map(item => (
                    <Link to={`/show/${this.props.cat}/${item.id}`} key={item.id}>
                        <Section 
                            image={require('../../images/icon-arrow.png')}
                            title={item.title}
                            view={item.view}
                            hot={item.hot}
                            commend={item.commend}
                        />
                    </Link>
                ))}
            </div>
        )
    }
}