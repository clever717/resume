import React, {Component} from 'react';

class BasicInformation extends Component {
    render() {
        return (
            <aside className="info aside section">
                <div className="section-inner">
                    <h2 className="heading sr-only">Basic Information</h2>
                    <div className="content">
                        <ul className="list-unstyled">
                            <li>
                                <i className="fas fa-map-marker-alt"></i>
                                <span className="sr-only">Location:</span>
                                Seoul, KR
                            </li>
                            <li>
                                <i className="fas fa-envelope"></i>
                                <span className="sr-only">Email:</span>
                                <a href="#">clever717@gmail.com</a>
                            </li>
                            <li>
                                <i className="fas fa-link"></i>
                                <span className="sr-only">Website:</span>
                                <a href="#">https://www.website.com</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </aside>
        );
    }
}

export default BasicInformation;
