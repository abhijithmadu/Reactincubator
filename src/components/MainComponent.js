import React, { Component } from 'react'
import GoogleFontLoader from 'react-google-font-loader';
import Overlay from './Overlay'
import PageLoader from './PageLoader'
import Navbar from './Navbar'
import HomeComponent from './HomeComponent'
import Sidebar from './Sidebar'
import "adminbsb-materialdesign/css/themes/all-themes.css"

export default class MainComponent extends Component {
   

    render() {
        document.getElementById("root").className="theme-red";
        return (
            <React.Fragment>
                <GoogleFontLoader
      fonts={[
        {
          font: 'Roboto',
          weights: [400, 700],
        },
        
      ]}
      subsets={['latin','cyrillic-ext']}
    />
    <GoogleFontLoader
      fonts={[
        {
          font: 'Material+Icons',
         
        },
        
      ]}
     
    />
                <Overlay/>
                <Navbar/>
                <Sidebar/>
                <PageLoader/>
                <HomeComponent/>
                </React.Fragment>
        )
    }
}
