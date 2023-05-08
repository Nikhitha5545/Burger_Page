import React, {useEffect} from 'react';
import $ from 'jquery';

const BurgerWebPage = () => {
	//Redirects to the top of the page when clicked on about text
	useEffect(() => {
		$("#about_section").click(function() {
		  $(document).scrollTop(10);
		});
	  }, []);
//Redirects to the top of the page when clicked on our menu text
	  useEffect(() => {
		$("#menu_section").click(function() {
		  $(document).scrollTop(10);
		});
	  }, []);
	  //Redirects to the top of the page when clicked on contact text
	  useEffect(() => {
		$("#contact_section").click(function() {
		  $(document).scrollTop(10);
		});
	  }, []);
  return(
<div>
<div id="home_section">
        <nav>
          <a href="#home_section" style={{fontSize:'35px'}}>Gourmet au Catering</a>
        </nav>
        <span className="rightnavbar">
          <nav>
            <a href="#about_section" style={{fontSize:'30px'}}>About</a> 
			<span className="link-space"></span>
            <a href="#menu_section" style={{fontSize:'30px'}}>Menu</a>
			<span className="link-space"></span>
            <a href="#contact_section" style={{fontSize:'30px'}}>Contact</a>
          </nav>
        </span>
      </div>
      <div className="img">
        <img alt="burger_one" src="\burger1.jpg" style={{ backgroundRepeat: 'no-repeat', backgroundSize: 'cover', width: '100%' }} />
        <div className="bottomleft">Le Catering</div>
      </div>
      <br />
      <br />
      <div className="imgcontainer">
        <img alt="burger_two" src="\burger2.jpg" style={{ width: '550px', height: '700px' }} />
      </div>
      <br />
      <br />
      <br />
      <br />
      <div id="about_section" style={{marginLeft : '400px'}}>
	<span className="text">
		<h1 style={{fontSize:'50px'}}>About Catering</h1>
	</span><br/>
	<span>
		<p style={{margin: '1px',letterSpacing: '2px',fontSize:'24px'}}>The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only use <span style={{backgroundColor:'#80808075' }}>seasonal</span> ingredients.
		</p><br />
		<p style={{margin: '1px',letterSpacing: '2px',fontSize:'24px'}}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
		</span>
		<br/>
		<span>
		<h6 style={{marginLeft: '80%',fontFamily: 'serif',fontSize: '30px',letterSpacing: '2px',fontWeight: 'lighter'}}>Tradition since 1889</h6>
	</span>
</div>
<br /><br />
<hr style={{opacity: '0.7',width: '90%'}} />
<br/><br/>
<div id="menu_section">
	<span className="menu1">
		<img alt="burger_three" src="\burger3.jpg" style={{float: 'right',opacity: '1'}} />
		<h1 style={{marginLeft: '100px',fontSize:'50px'}}>Our Menu</h1>
	<br/>
		<h4 style={{fontSize:'25px',marginBottom:'0px'}}>Bread Basket</h4>
		<p style={{opacity: '0.6'}}>Assortment of fresh baked fruit breads and muffins 5.50</p>
	<br/>
		<h4 style={{fontSize:'25px',marginBottom:'0px'}}>Honey Almond Granola with Fruits</h4>
		<p style={{opacity: '0.6'}}>Natural cereal of honey toasted oats, raisins, almonds and dates 7.00</p>
		<br/>
		<h4 style={{fontSize:'25px',marginBottom:'0px'}}>Belgian Waffle</h4>
		<p style={{opacity: '0.6'}}>anilla flavored batter with malted flour 7.50</p>
		<br/>
		<h4 style={{fontSize:'25px',marginBottom:'0px'}}>Scrambled eggs</h4>
		<p style={{opacity: '0.6'}}>Scrambled eggs, roasted red pepper and garlic, with green onions 7.50</p>
		<br/>
		<h4 style={{fontSize:'25px',marginBottom:'0px'}}>Blueberry Pancakes</h4>
		<p style={{opacity: '0.6'}}>With syrup, butter and lots of berries 8.50</p>
	</span>
</div><br/>
<hr style={{width: '90%',backgroundColor: 'grey'}} />
<br/><br/>
<div id="contact_section">
	<h1 style={{alignItems:'center',letterSpacing: '2px'}}>Contact</h1>
	<p style={{fontSize: '15px'}}>We offer full-service catering for any event, large or small. We understand your needs and we will cater the food to satisfy the biggerst criteria of them all, both look and taste. Do not hesitate to contact us.</p>

	<h4 style={{color: 'grey'}}>Catering Service, 42nd Living St, 43043 New York, NY</h4>
	
	<p>You can also contact us by phone 00553123-2323 or email catering@catering.com</p>
</div>
<div style={{backgroundColor: '#80808075',width: '100%',height: '150px'}}>
	<p style={{color: 'black',textAlign: 'center',marginTop: '20px',padding: '70px'}}> Powered by <a href="https://www.w3schools.com/w3css/default.asp" style={{textDecoration: 'none',color: 'black'}} className="end">w3.css</a></p>
	</div>


</div>
  ) ;
};

export default BurgerWebPage;