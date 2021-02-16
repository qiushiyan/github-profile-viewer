import React from 'react';
import styled from "styled-components"

const Wrapper = styled.div`
    .skeleton {
    background: #ddd;
    overflow: hidden;
    margin: 10px 0;
    border-radius: 4px;
    }
    .skeleton.text {
    width: 100%;
    height: 20px;
    }
    .skeleton.title {
    width: 50%;
    height: 30px;
    margin-bottom: 15px;
    }
    .skeleton.avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin: 0 auto;
    }
    .skeleton.thumbnail {
    width: 100px;
    height: 100px;
    }
`


const SkeletonElement = ({ type, height }) => {
    if (!height && type === "text") {
        height = "20px"
    }
    return (
        <Wrapper>
            <div className={`skeleton ${type}`} style={{ height: height }}></div>
        </Wrapper>
    )
}

export default SkeletonElement