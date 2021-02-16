import SkeletonElement from "./SkeletonElement"
import Shimmer from "./Shimmer"
import Skeleton from "./Skeleton.module.css"
import React from "react"

const SkeletonArticle = ({ theme }) => {
    const themeClass = theme || "light"

    return (

        <div className={Skeleton[`skeleton-wrapper ${themeClass}`]} >
            <div className={Skeleton["skeleton-article"]}>
                <SkeletonElement type="text" />
                <SkeletonElement type="text" />
                <SkeletonElement type="text" />
            </div>
            <Shimmer />
        </div >

    )
}

export default SkeletonArticle