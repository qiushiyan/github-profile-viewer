import React from "react"
import Skeleton from "./Skeleton.module.css"

const Shimmer = () => {
    return (
        <div className={Skeleton['shimmer-wrapper']}>
            <div className={Skeleton.shimmer}></div>
        </div>
    )
}

export default Shimmer