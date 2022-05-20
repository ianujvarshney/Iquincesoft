
import React, { Component } from 'react';
import './App.css';
import './assets/css/js_composer.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Service from './components/Service';
import ServiceDescription from './components/ServiceDescription';
import CaseStudy from './components/CaseStudy';
import CaseStudyDescription from './components/CaseStudyDescription';
import Blog from './components/Blog';
import ContactUs from './components/ContactUs';
import Career from './components/Career';
import JobOffer from './components/JobOffer';
import JobDetail from './components/JobDetail';
import PostPage from './components/PostPage';

import Web_Development from './components/Services/WebDev';
import Mobile_Developement from './components/Services/MobileDev';
import CloudDevelopment from './components/Services/CloudDev';
import ProductDesign from './components/Services/ProductDesign';
import DevOps_Services from './components/Services/DevOpsDev';
import QualityAssurance from './components/Services/QualityAssurance';
import HirePHPDevelopers from './components/Services/PHPDev';
import HireLaravelDevelopers from './components/Services/LaravelDev';
import HireCodeIgniterDevelopers from './components/Services/CodeIgniter';
import HireSymfonyDevelopers from './components/Services/Symfony';
import HireNodeDevelopers from './components/Services/NodeDev';
import HireReactDevelopers from './components/Services/ReactDev';
import HireBootStrapDevelopers from './components/Services/BootStrap';
import HireVueDevelopers from './components/Services/VueDev';
import HireAngularDevelopers from './components/Services/AngularDev';
import HireReactNativeDevelopers from './components/Services/ReactNative';
import HireIosDevelopers from './components/Services/IosDev';
import HireionicDevelopers from './components/Services/IonicDev';
import HireZENDStackDevelopers from './components/Services/ZENDStack';
import HireMERNStackDevelopers from './components/Services/MernStack';
import HireDrupalDevelopers from './components/Services/Drupal';
import HireMagentoDevelopers from './components/Services/Magento';
import HireMeanstackDevelopers from './components/Services/Meanstack';
import HireopencartDevelopers from './components/Services/opencart';
import HireShopifyDevelopers from './components/Services/Shopify';
import HireWixDevelopers from './components/Services/Wix';
import HireWooCommerceDevelopers from './components/Services/WooCommerce';
import HireAndroidDevelopers from './components/Services/AndroidDev';
import HireWordpressDevelopers from './components/Services/WordPress';
import DevOps from './components/Services/DevOpsDev';
import AwardFormsec from './container/AwardFormsec';
import jobCateDetails from './components/JobCateDetails';
import BlogTabs from './components/BlogTabs';
import DigitalMarket from '../src/components/Services/DigiMarket';
import DedicateTeams from '../src/components/Services/DedicatedTeams';
import Designers from '../src/components/Services/Designers';
import Ecommerce from '../src/components/Services/Ecommerce';
import Jobform from './container/Jobform';


class App extends Component {
	render() {
		return (
			<Router >
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/Jobform' component={Jobform} />
					<Route exact path='/about' component={About} />
					<Route exact path='/service' component={Service} />
					<Route exact path='/serviceDescription' component={ServiceDescription} />
					<Route exact path='/caseStudies' component={CaseStudy} />
					<Route exact path='/caseStudyDescription' component={CaseStudyDescription} />
					<Route exact path='/blog' component={Blog} />
					<Route exact path='/contactUs' component={ContactUs} />
					<Route exact path='/career' component={Career} />
					<Route exact path='/jobOffer' component={JobOffer} />
					<Route exact path='/jobDetail' component={JobDetail} />
					<Route exact path='/PostPage' component={PostPage} />
					<Route exact path='/blog/:post' component={BlogTabs} />
					<Route exact path='/PostPage/:post' component={PostPage} />
					<Route exact path='/jobOffer/:post' component={jobCateDetails} />
					<Route exact path='/jobDetail/:post' component={JobDetail} />
					<Route exact path='/CaseStudyDescription/:post' component={CaseStudyDescription} />


					<Route exact path='/Web_Development' component={Web_Development} />
					<Route exact path='/CloudDevelopment' component={CloudDevelopment} />
					<Route exact path='/DevOps_Services' component={DevOps_Services} />
					<Route exact path='/HirePHPDevelopers' component={HirePHPDevelopers} />
					<Route exact path='/Mobile_Developement' component={Mobile_Developement} />
					<Route exact path='/ProductDesign' component={ProductDesign} />
					<Route exact path='/QualityAssurance' component={QualityAssurance} />
					<Route exact path='/HireLaravelDevelopers' component={HireLaravelDevelopers} />
					<Route exact path='/HireNodeDevelopers' component={HireNodeDevelopers} />
					<Route exact path='/HireReactDevelopers' component={HireReactDevelopers} />
					<Route exact path='/HireVueDevelopers' component={HireVueDevelopers} />
					<Route exact path='/HireAngularDevelopers' component={HireAngularDevelopers} />
					<Route exact path='/HireReactNativeDevelopers' component={HireReactNativeDevelopers} />
					<Route exact path='/HireIosDevelopers' component={HireIosDevelopers} />
					<Route exact path='/HireionicDevelopers' component={HireionicDevelopers} />
					<Route exact path='/HireZENDStackDevelopers' component={HireZENDStackDevelopers} />
					<Route exact path='/HireMERNStackDevelopers' component={HireMERNStackDevelopers} />
					<Route exact path='/HireCodeIgniterDevelopers' component={HireCodeIgniterDevelopers} />
					<Route exact path='/HireDrupalDevelopers' component={HireDrupalDevelopers} />
					<Route exact path='/HireMagentoDevelopers' component={HireMagentoDevelopers} />
					<Route exact path='/HireMeanstackDevelopers' component={HireMeanstackDevelopers} />
					<Route exact path='/HireopencartDevelopers' component={HireopencartDevelopers} />
					<Route exact path='/HireShopifyDevelopers' component={HireShopifyDevelopers} />
					<Route exact path='/HireWixDevelopers' component={HireWixDevelopers} />
					<Route exact path='/HireWooCommerceDevelopers' component={HireWooCommerceDevelopers} />
					<Route exact path='/HireWordpressDevelopers' component={HireWordpressDevelopers} />
					<Route exact path='/HireBootStrapDevelopers' component={HireBootStrapDevelopers} />
					<Route exact path='/HireSymfonyDevelopers' component={HireSymfonyDevelopers} />
					<Route exact path='/HireAndroidDevelopers' component={HireAndroidDevelopers} />
					<Route exact path='/DigitalMarketting' component={DigitalMarket} />
					<Route exact path='/DedicatedDevelopmentTeams' component={DedicateTeams} />
					<Route exact path='/EcommerceDevelopers' component={Ecommerce} />
					<Route exact path='/HireDesigners' component={Designers} />
					<Route exact path='/AwardFormsec' component={AwardFormsec} />
					<Route exact path='/DevOps' component={DevOps} />
				</Switch>
			</Router>


		);
	}
}

export default App;