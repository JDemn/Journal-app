import React from 'react'

export const JournalEntry = () => {
    return (
        <div className = "journal__entry pointer"> 
            <div
            className = "journal__entry-picture"
            style = {{
                backgroundSize : 'cover',
                backgroundImage : 'url(https://cdn.businessinsider.es/sites/navi.axelspringer.es/public/styles/bi_570/public/media/image/2021/08/lactea-perseidas-2444713.jpg?itok=Vv39j5VT)'
            }}
            ></div>
            <div className = "journal__entry-body">
                <p className = "journal__entry-title">
                    Un nuevo día
                </p>
                <p className = "journal__entry-content">
                    Et Lorem ullamco adipisicing nisi. Velit et sunt est do. Velit ullamco id voluptate non exercitation est pariatur.
                </p>
            </div>
            <div className ="journal__entry-date-box">
                <span>
                    Monday
                </span>
                <h4>28</h4>
            </div>
        </div>
    )
}
