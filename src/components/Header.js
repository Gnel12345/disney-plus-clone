import React from 'react'
import styled from 'styled-components'
function Header() {
    return (
        <div>
            <Nav>
            <Logo src="/images/logo.svg"/>
            <NavMenu>
                <a>
                    <img src = "/images/home-icon.svg"/>
                    <span>HOME</span>
                </a>
                <a>
                    <img src = "/images/search-icon.svg"/>
                    <span>SEARCH</span>
                </a>
                <a>
                    <img src = "/images/watchlist-icon.svg"/>
                    <span>WATCH LIST</span>
                </a>
                <a>
                    <img src = "/images/original-icon.svg"/>
                    <span>ORIGINALS</span>
                </a>
                <a>
                    <img src = "/images/movie-icon.svg"/>
                    <span>MOVIES</span>
                </a>
                <a>
                    <img src = "/images/series-icon.svg"/>
                    <span>SERIES</span>
                </a>


            </NavMenu>
            <UserImg src="/images/profile1.jpg"/>

            </Nav>
        </div>
    )
}

export default Header

const Nav = styled.nav`
height 70px;
background-color: #090b13;
display:flex;
align-items:center;
padding:0 36px;

`

const Logo = styled.img`
width:80px;


`

const NavMenu = styled.div`
display:flex;
flex:1;
margin-left:25px;
align-items:center;


a{
    display:flex;
    align-items:center;
    padding:0 12px;
    cursor:pointer;

    img{
        height:20px;
    }
    span{
        font-size:13px;
        letter-spacing:1.42px;
        position:relative;

        //sets a white border below each span tag when user hovers over them
        //adds a div after each span tag
        &:after{
            content:"";
            height:2px;
           background-color:white;
           //by positioning child to absolute the parent span tag needs to be set to position relative
           position:absolute;
           
           left:0;
           right:0;
           //by setting bottom to -6 it pushes the div below the span component
           bottom:-6px;
           //sets the hover makes it so that you can't see it by setting it to 0
           opacity:0;
           transform-origin:left center;
           //makes the hover look better
           transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
           transform: scaleX(0);

        }

    }
    //sets the hover
    &:hover{

        span:after{
            transform:scaleX(1);
            opacity:1;
        }
    }
}

`

const UserImg = styled.img`
width:48px;
height:48px;
border-radius:50%;
cursor:pointer;


`
