import React from "react"
import Skeleton from "./Skeleton.module.css"
import Shimmer from "./Shimmer"
import SkeletonElement from "./SkeletonElement"


const SkeletonProfile = ({ theme }) => {
    const themeClass = theme || "light"
    return (
        <div className={Skeleton[`skeleton-wrapper ${themeClass}`]}>
            <div className={Skeleton["skeleton-profile"]}>
                <div>
                    <SkeletonElement type="avatar" />
                </div>
                <div>
                    <SkeletonElement type="title" />
                    <SkeletonElement type="text" />
                    <SkeletonElement type="text" />
                </div>
            </div>
            <Shimmer />
        </div>

    )
}

export default SkeletonProfile