import React from "react";
import "./../styles/mindmap.css"

export default function Mindmap () {
    return (
        <section className="mindmap">
            <div className="mm-top">
                <div className="subheader">
                    <h1 className="mm-header">Psykologia tutkii ja selittää ihmisen toimintaa</h1>
                </div>
                <div className="subheader">
                    <h1 className="mm-header">Sosiaaliset ja kulttuuriset tekijät</h1>
                </div>
            </div>


            <div className="mm-center">
                <div className="header">
                    <h1 className="mm-header">PS01 - Toimiva ja oppiva ihminen</h1>
                </div>
            </div>


            <div className="mm-bottom">
                <div className="subheader">
                    <h1 className="mm-header">Psykologia tieteenalana</h1>
                </div>
                <div className="subheader">
                    <h1 className="mm-header">Biologiset tekijät</h1>
                </div>
            </div>
        


        </section>
    );
}