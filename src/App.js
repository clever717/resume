import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Header from './components/layout/Header'
import Contents from './components/layout/Contents'
import Footer from './components/layout/Footer'

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Contents/>
                <Footer/>
            </div>
        );
    }
}

export default App;
