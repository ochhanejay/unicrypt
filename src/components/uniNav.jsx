import React, { useState } from 'react';
import "../components/uni.css";
const UniNav = () => {
  const[throwIfNamespace,setThrowIfNameSpace]=useState(false);
  const [isNavActive,setIsNavActive]=useState(false);

  const setNavbar = () => {
      
    if(window.scrollY >= "10"){
      setIsNavActive(true)
    }
    else{
      setIsNavActive(false)
    }
  };
  window.addEventListener('scroll',setNavbar);

    return (  <div >
    <body className='bg-black' > 
    <header id="h" className={`${isNavActive ? "NavbarDef" : "" }`}>
        <div className="l ">
        <a className='lo'>
        <img src='https://unicrypt.network/template/img/logo.svg?v=1'></img>
        </a>
        <a href="https://twitter.com/UNCX_token" target="_blank" title=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 85 85"><path d="M26.521 75.642c31.8 0 49.2-26.3 49.2-49.2v-2.2c3.4-2.4 6.3-5.5 8.6-8.9-3.1 1.4-6.4 2.3-9.9 2.7 3.6-2.1 6.3-5.5 7.6-9.6-3.3 2-7 3.4-11 4.2-3.2-3.4-7.6-5.5-12.6-5.5a17.31 17.31 0 0 0-17.3 17.3c0 1.4.2 2.7.4 3.9-14.4-.7-27.1-7.6-35.6-18.1-1.5 2.6-2.3 5.5-2.3 8.7 0 6 3.1 11.3 7.7 14.4a17.2 17.2 0 0 1-7.8-2.2v.2c0 8.4 6 15.4 13.9 16.9a17.59 17.59 0 0 1-4.6.6c-1.1 0-2.2-.1-3.2-.3 2.2 6.9 8.6 11.9 16.1 12-5.9 4.6-13.4 7.4-21.5 7.4-1.4 0-2.8-.1-4.1-.2 7.5 5.1 16.6 7.9 26.4 7.9" fill="#0cf" /></svg></a>
        <a href="https://t.me/uncx_token" target="_blank" title=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 85 85" fill="#008aff"><path d="M42.5 85C19.1 85 0 65.9 0 42.5S19.1 0 42.5 0 85 19.1 85 42.5 65.9 85 42.5 85zm0-79.9C21.9 5.1 5.1 21.9 5.1 42.5s16.8 37.4 37.4 37.4 37.4-16.8 37.4-37.4S63.2 5.1 42.5 5.1zM17.4 44.5c4.7-2.6 9.9-4.7 14.8-6.9l25.3-10.2c1.7-.6 4.6-1.1 4.9 1.4-.2 3.5-.8 6.9-1.3 10.4-1.1 7.6-2.5 15.1-3.8 22.7-.4 2.5-3.6 3.8-5.6 2.2l-14.5-9.9c-1.6-1.6-.1-3.9 1.3-5 4-3.9 8.2-7.3 12-11.4 1-2.5-2-.4-3 .2-5.4 3.7-10.8 7.7-16.5 11-2.9 1.6-6.4.2-9.3-.7-2.7-1.1-6.6-2.2-4.3-3.8h0z" /></svg></a>
        <a href="https://docs.unicrypt.network/" target="_blank" title="" className="mx"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 164.7 118.7"><path d="M149.4 48.8c-4.2 0-7.9 1.7-10.7 4.4-1.4 1.1-2.6 2.6-3.2 4.6-.9 1.9-1.4 4.1-1.4 6.4a13.86 13.86 0 0 0 .9 5v.6L86.6 95.2c-2.7-4.3-7.5-7.2-13-7.2-6.1 0-11.4 3.6-13.9 8.8L18.5 75.1S8.3 69.4 8.3 59s6.4-10.5 6.4-10.5l53.4 27.7s3.3 2.5 8.2-.2c5.9-3.3 79.8-41.5 79.8-41.5s4.7-3.8-3.5-7.5L97.4 1s-4.3-2.3-8.9 0L8.1 41.4S-1 46.9.1 59.3 7 78.8 13.8 82.4L58.1 105s.1.3.3.7c1.1 7.4 7.5 13 15.2 13 8.4 0 15.2-6.7 15.3-15l50.6-27.8c2.7 2.3 6.1 3.6 9.9 3.6a15.41 15.41 0 0 0 15.4-15.4c0-8.5-6.9-15.3-15.4-15.3zm-75.8 60.4a5.34 5.34 0 0 1-5.3-5.3 5.34 5.34 0 0 1 5.3-5.3 5.34 5.34 0 0 1 5.3 5.3 5.34 5.34 0 0 1-5.3 5.3zm75.8-39.7a5.34 5.34 0 0 1-5.3-5.3 5.34 5.34 0 0 1 5.3-5.3 5.34 5.34 0 0 1 5.3 5.3 5.27 5.27 0 0 1-5.3 5.3z" fill="#4b81f4" /></svg></a>
        <a href="https://unicrypt.medium.com/" target="_blank" title="" className="mx"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 85 85" fill="#18fc3d"><path d="M47.9 42.5C47.4 74.2.5 74.2 0 42.5c.5-31.7 47.4-31.7 47.9 0m26.3 0c-.3 29.9-23.7 29.9-24 0 .4-29.9 23.7-29.9 24 0m10.8 0c0 26.7-8.4 26.6-8.4 0s8.4-26.7 8.4 0" /></svg></a>
        </div>
        <div className='r'>
        <nav id="n" >
        <ul>
        <li><a data-go href="#c" title="" className="bt"><span>Services</span></a></li>
        <li><a data-go href="#e" title="" className="bt"><span>Tokens</span></a></li>
        <li><a data-go href="#g" title="" className="bt"><span>About Us</span></a></li>
        <li><a href="https://app.unicrypt.network" title="" className="bt btg"><span>Launch App</span></a></li>
        </ul>
        </nav>
        <button className="bnv" data-nav="">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path className="l-1" d="M0,42h62c13,0,6,26-4,16L35,35"></path>
        <path className="l-2" d="M0,50h70"></path>
        <path className="l-3" d="M0,58h62c13,0,6-26-4-16L35,65"></path>
        </svg>
        </button>
        </div>
        </header>
        <div id="">
<main>
<div id="a">

<div className="ct">
<svg style={{marginTop:"-5%"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 169.3 169.3"><path d="M167.2 84.7c0-45.5-37-82.6-82.5-82.6S2.1 39.1 2.1 84.7s37 82.6 82.6 82.6c36 0 66.7-23.2 77.9-55.5h0v-.1c2.9-8.5 4.6-17.5 4.6-27zm-7.5 9.9c-.9-3.2-2.1-6.5-3.7-9.7l-1.8-3.5c-3.3-5.8-11.5-23-32.8-33.1h0l-7.3 8.2h0l3.5-10.1h0c-.1 0-17.3-7.2-22.4-5.4h0l-1.8 9.9h0L91 40.8h0s-11.9-2-24.1 1.8h0l5 9.8s0 .1 0 0c-.7-.2-6.9-1.7-11.8 9.7h0l-44-9.1 1.7 1 36 17.7h0s-21.5 31.5-22 33.4c0 0-5.8 13 12.8 14.3 0 0 9.8-.7 37-12.1 0 0 3.2-1.1 6.5-3.5-3.4 2.6-6.8 3.6-6.8 3.6s14.3 10.3 4.3 32.5c-5.7 12.5-18.2 15-28.1 14.9-28.5-10.6-48.6-38-48.6-70.1 0-41.8 33.9-75.8 75.8-75.8s75.8 33.9 75.8 75.8c-.1 3.3-.3 6.6-.8 9.9zM76.2 79.7l-11 8.2s-3.4-4.1 1-7.5c0 .1 4.4-3.1 10-.7z" fill="none" strokeLinejoin="round" strokeMiterlimit="10" /></svg>
<div className="sub"><span className="dg">Unicrypt</span></div>
<h1>Multi chain decentralized <strong>protocols & services</strong></h1>
<div className="p">
<p>Started in June 2020, Unicrypt provides an ever-growing suite of decentralized services. The objective is to bring value to the DeFi space as a whole by delivering disruptive, flexible and audited technology. Strengthen your project and reward your communities using our services.</p>
</div>
<div className="btc" style={{marginTop:"1%",marginBottom:"2%"}}>
<a href="https://app.unicrypt.network" title="" className="bt btg"><span>Launch App</span></a>
</div>
<q style={{marginTop:"-1%"}}>
<cite>Our vision is simple. Automation is scalability, and protocols are trust. Welcome to Unicrypt!</cite>
<span><strong className=" dg" >Unicrypt Team</strong></span>
</q>
</div>
</div>
<div id="b">
<div className="ct">
<div className="btop">
<div className="sub" data-r-down><span className="dg">Blockchains</span> <strong>Blockchains</strong></div>
<h2 className="h2" data-r-down>Supported Blockchains</h2>
</div>
<div className="bls">
<div>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 332.5 332.3" strokeMiterlimit="10"><path d="M114.3 144.8l52-52 52 52 30.3-30.3-82.3-82.3L84 114.5l30.3 30.3m-81.9 21.3l30.3-30.3L93 166.1l-30.3 30.3-30.3-30.3zm81.9 21.4l52 52 52-52 30.3 30.2h0L166.3 300 84 217.8h0l30.3-30.3m125.4-21.3l30.3-30.3 30.3 30.3-30.3 30.3-30.3-30.3z" /><path d="M197 166.1h0l-30.7-30.7-22.7 22.7h0l-2.6 2.6-5.4 5.4h0 0l30.7 30.7 30.7-30.7" /></svg>
<p className="dg">Binance Smart Chain</p>
</div>
<div>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 332.5 332.3" strokeMiterlimit="10"><path d="M166.2 217.7l83-49.1-83-137.6" /><path d="M166.2 31L83.3 168.6l82.9 49.1V131zm0 270.2l83-116.8-83 49" /><path d="M166.2 301.2v-67.8l-82.9-49zm83-132.6l-83-37.6m0 0l-82.9 37.6" /></svg>
<p className="dg">Ethereum</p>
</div>
<div>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 332.5 332.3" strokeMiterlimit="10"><path d="M289.7 152.7c-2.3-1.3-5.2-1.3-7.8 0l-18.1 10.7-12.3 6.8-17.8 10.7c-2.3 1.3-5.2 1.3-7.8 0l-13.9-8.4c-2.3-1.3-3.9-3.9-3.9-6.8v-16.2c0-2.6 1.3-5.2 3.9-6.8l13.9-8.1c2.3-1.3 5.2-1.3 7.8 0l13.9 8.4c2.3 1.3 3.9 3.9 3.9 6.8v10.7l12.3-7.1v-11c0-2.6-1.3-5.2-3.9-6.8L234 120.4c-2.3-1.3-5.2-1.3-7.8 0l-26.5 15.5c-2.6 1.3-3.9 3.9-3.9 6.5v30.4c0 2.6 1.3 5.2 3.9 6.8l26.2 15.2c2.3 1.3 5.2 1.3 7.8 0l17.8-10.3 12.3-7.1 17.8-10.3c2.3-1.3 5.2-1.3 7.8 0l13.9 8.1c2.3 1.3 3.9 3.9 3.9 6.8v16c0 2.6-1.3 5.2-3.9 6.8l-13.6 8.1c-2.3 1.3-5.2 1.3-7.8 0l-13.9-8.1c-2.3-1.3-3.9-3.9-3.9-6.8v-10.3l-12.3 7.1v10.7c0 2.6 1.3 5.2 3.9 6.8l26.2 15.2c2.3 1.3 5.2 1.3 7.8 0l26.2-15.2c2.3-1.3 3.9-3.9 3.9-6.8v-30.7c0-2.6-1.3-5.2-3.9-6.8l-26.2-15.3zM93.8 195.6l27-15.5V149" /><path d="M75.7 155.4h0m45.1-37.6v96.7l27 15.5m-.1-96.7v96.6l27-15.5v-96.6" /><path d="M147.7 102.3l-27 15.5 27 15.5 27-15.5-27-15.5zm-81 77.6l27 15.5.1-31m-81-46.6v96.6l27 15.5" /><path d="M39.8 102.3l-27 15.5 80.9 46.7 12.2-7.1 14.7-8.5-80.8-46.6zm0 62.2V230l27-15.5V180l-27-15.5z" /></svg>
<p className="dg">Matic/Polygon</p>
</div>
<div>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 332.5 332.3" strokeMiterlimit="10"><path d="M59.8 102.3H145V59.7H59.8zm127.7 0h85.2V59.7h-85.2zm85.2 85.1h-42.6V230h-42.6v42.6h85.2zM145 272.6V230h-42.6v-42.6H59.8v85.2z" /></svg>
<p className="dg">xDai Chain</p>
</div>
</div>
<div className="btop">
<div className="p">
<p data-r-down>Originally deployed on the Ethereum network, our services are now operational on multiple chains, allowing projects, communities and token developers to utilize the suitable tools for them.</p>
<p data-r-down><strong>We believe the future of the entire cryptocurrency industry is multi chain.</strong></p>
</div>
</div>
</div>
</div>
<div id="c">
<div className="ct">
<div className="btop">
<div className="sub" data-r-down><span className="dg">Our tools</span> <strong>Our tools</strong></div>
<h2 className="h2" data-r-down>Services and capabilities</h2>
</div>
<div className="cbk cbk1">
<div className="l">
<div className="sub dg" data-r-down>Liquidity</div>
<h2 className="h3" data-r-down>Liquidity Lockers</h2>
<div className="p">
<p data-r-down>Project developers are welcomed to use our security feature allowing them to lock their liquidity provider tokens.</p>
<p data-r-down>Locking liquidity is becoming a standard in the DeFi industry, and we are proud to re-affirm this concept was brought to the market by Unicrypt.</p>
</div>
</div>
<div class="r">
<div class="cba c1" style={{opacity: "1", transform: "translate(0px, 0px)"}}>
<div class="c1_c">
<div class="c1_f" style={{transform: "translate(0px, -80%)", height: "30%"}}>
<div class="c1_g"></div>
<div class="c1_h" style={{height: "50%"}}></div>
</div>
<svg viewBox="0 0 100 100" class="c1_d" style={{transform: "translate3d(0px, 0px, 0px) rotate(0.16deg)", strokeDasharray: "0.1837, 9999"}}><circle cx="50" cy="50" r="48"></circle></svg>
<svg class="c1_e" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 169.3 169.3" style={{transform: "scale(0.9, 0.9)", opacity: "0.1"}}><path d="M167.2 84.7c0-45.5-37-82.6-82.5-82.6S2.1 39.1 2.1 84.7s37 82.6 82.6 82.6c36 0 66.7-23.2 77.9-55.5h0v-.1c2.9-8.5 4.6-17.5 4.6-27zm-7.5 9.9c-.9-3.2-2.1-6.5-3.7-9.7l-1.8-3.5c-3.3-5.8-11.5-23-32.8-33.1h0l-7.3 8.2h0l3.5-10.1h0c-.1 0-17.3-7.2-22.4-5.4h0l-1.8 9.9h0L91 40.8h0s-11.9-2-24.1 1.8h0l5 9.8s0 .1 0 0c-.7-.2-6.9-1.7-11.8 9.7h0l-44-9.1 1.7 1 36 17.7h0s-21.5 31.5-22 33.4c0 0-5.8 13 12.8 14.3 0 0 9.8-.7 37-12.1 0 0 3.2-1.1 6.5-3.5-3.4 2.6-6.8 3.6-6.8 3.6s14.3 10.3 4.3 32.5c-5.7 12.5-18.2 15-28.1 14.9-28.5-10.6-48.6-38-48.6-70.1 0-41.8 33.9-75.8 75.8-75.8s75.8 33.9 75.8 75.8c-.1 3.3-.3 6.6-.8 9.9zM76.2 79.7l-11 8.2s-3.4-4.1 1-7.5c0 .1 4.4-3.1 10-.7z" fill="none" strokeLinejoin="round" strokeMiterlimit="10"></path></svg>
</div>
</div>
</div>
</div>
<div className="cbk cbk2">
<div className="l">
<div className="sub dg" data-r-down>Vesting options</div>
<h2 className="h3" data-r-down>Token Vesting</h2>
<div className="p">
<p data-r-down>Vesting options can both be utilized by project owners and/or early adopters of a technology. We offer this option as an independant service, and it fits with the in-house ILO Platform. Wallets vesting tokens are reflected in a dedicated UI, allowing anyone to consult it in an easier way, and more.</p>
</div>
</div>
<div className="r">
<div className="cba c2">
<div className="c2_a">
<div className="c2_d">
<div><div className="c2_br"></div></div>
<div><div className="c2_br"></div></div>
<div><div className="c2_br"></div></div>
</div>
<svg className="c2_c" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 499.2 162.5" style={{strokeDasharray: "720, 9999", opacity: "0"}}><path d="M.3 162.1l56.5-46.5 24 29.6 26.1-21 111.7-89.5v88.8l115.7-68.9 64.4-34.2L428 46.3 498.9.4" fill="none" strokeMiterlimit="10"></path></svg>
<svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className="c2_b"
      viewBox="0 0 257.7 251.7"
    >
      <g fill="none">
        <g strokeMiterlimit="10">
          <path
            fill="#040609"
            d="M243.4 235.7H14.3c-7.6 0-13.8-6.2-13.8-13.8V14.3C.5 6.7 6.7.5 14.3.5h229.1c7.6 0 13.8 6.2 13.8 13.8V222c0 7.6-6.2 13.7-13.8 13.7z"
          ></path>
          <path d="M82.8 235.7v9.6c0 3.3-3.3 5.9-7.3 5.9H39.6c-4 0-7.3-2.7-7.3-5.9v-9.6m193 0v9.6c0 3.3-3.3 5.9-7.3 5.9h-35.8c-4 0-7.3-2.7-7.3-5.9v-9.6M34.4 91.7h-4c-2.4 0-4.4-2-4.4-4.4V72.1c0-2.4 2-4.4 4.4-4.4h4c2.4 0 4.4 2 4.4 4.4v15.2c0 2.5-1.9 4.4-4.4 4.4z"></path>
          <use xlinkHref="#B"></use>
          <use y="38.4" xlinkHref="#B"></use>
          <path d="M32.4 168.5v23.8c0 6.2 5 11.1 11.1 11.1h170.7c6.2 0 11.1-5 11.1-11.1V43.9c0-6.2-5-11.1-11.1-11.1H43.5c-6.2 0-11.1 5-11.1 11.1v23.8M32.4 130.1v14.4m0-52.8v14.4"></path>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M97.5 118.1c0 17.9 14.6 32.5 32.5 32.5 14.2 0 26.3-9.1 30.7-21.9 1.2-3.3 1.8-6.9 1.8-10.6m-2.9 3.9c-.3-1.3-.8-2.6-1.5-3.8-.2-.5-.5-.9-.7-1.4-1.3-2.3-4.5-9.1-12.9-13l-2.9 3.2 1.4-4s-6.8-2.8-8.8-2.1l-.7 3.9-1-4s-4.7-.8-9.5.7l2 3.9c-.3-.1-2.7-.7-4.6 3.8l-17.4-3.6.7.4 14.2 7s-8.5 12.4-8.7 13.2c0 0-2.3 5.1 5 5.6 0 0 3.9-.3 14.6-4.8 0 0 1.3-.4 2.6-1.4-1.3 1-2.7 1.4-2.7 1.4s5.6 4.1 1.7 12.8c-2.2 4.9-7.2 5.9-11.1 5.9-11.2-4.2-19.1-15-19.1-27.7 0-16.5 13.4-29.9 29.9-29.9S160 101.5 160 118c-.1 1.4-.2 2.7-.4 4zm-32.9-5.8l-4.3 3.2s-1.3-1.6.4-3c0 .1 1.7-1.2 3.9-.2z"
          ></path>
        </g>
        <circle cx="129.5" cy="118.5" r="51.9"></circle>
        <path
          strokeMiterlimit="10"
          d="M130.1 66.1v22.2m0 62.4V170m51.9-52h-19.5m-65.1 0H78.1m88.7-36.7L151.1 97M107 141.1l-13.7 13.7m73.5 0L153 141m-44-44L93.3 81.3"
        ></path>
      </g>
      <defs>
        <path
          id="B"
          d="M34.4 130.1h-4c-2.4 0-4.4-2-4.4-4.4v-15.2c0-2.4 2-4.4 4.4-4.4h4c2.4 0 4.4 2 4.4 4.4v15.2c0 2.5-1.9 4.4-4.4 4.4z"
        ></path>
      </defs>
    </svg>
</div>
</div>
</div>
</div>
<div className="cbk cbk6">
<div className="l">
<div className="sub dg" data-r-down>ENMT</div>
<h2 className="h3" data-r-down>Token Minting</h2>
<div className="p">
<p data-r-down>Create your own token! The ENMT (ERC-20 Non Mintable Token) feature allows users to mint an ERC-20 compliant and non-mintable tokens (fixed supply).</p>
<p data-r-down>Coding skills are not required, and newly-minted token contracts do not require additional audits.</p>
</div>
</div>
<div class="r">
<div class="cba c6" style={{opacity: "1",transform: "translate(0px, 0px)"}}>
<div class="c6_a">
<svg class="c6_b" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 428.4 432.2" strokeMiterlimit="10" xmlnsv="https://vecta.io/nano"><path d="M197 9.1c0-2.3.9-4.5 2.5-6.1s3.8-2.5 6.1-2.5h17.1c2.3 0 4.4.9 6 2.5s2.5 3.8 2.5 6v8.5H197V9.1zM.9 128.5c30.2-71.6 131.8-83.1 161.9-84.9l.1 51c-55.7.4-110.7 11.9-162 33.9zm230.7 286.4c-.1 9.3-7.7 16.8-17 16.8s-16.9-7.4-17.1-16.8l-.4-294.9h34.1l.4 294.9zm195.8-287C376.1 106.1 321 94.7 265.3 94.4l-.1-51c30.2 1.8 131.8 12.9 162.2 84.5zM179.9 35h68.3v68.2h-68.3z"></path></svg>
<svg class="c6_c" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 426.7 426.7" strokeMiterlimit="10" xmlnsv="https://vecta.io/nano"><path d="M415.4.4C399 6.5 385.6 18.8 378 34.6c-9.5 1.2-27.8 5.5-35.8 21.3-1.4 2.7-1.2 6 .5 8.5 19.5 34.1 22.3 75.3 7.7 111.8-.9 2.4-.6 5.1.7 7.4 2.1 3.6 26.2 31.8-7.9 52.3-1.9 1.1-5.5-.2-6.1 1.9-3.5 10.6-14.2 24.6-27.4 28.9-13.2 5.1-28.4 3.7-49.2-9.3-1.4-.9-2.9-1.3-4.6-1.3-.7 0-69.4.8-98.8 66.4-24-6.8-49.5 4.7-60.2 27.2-19.9-.3-81.1 4-96.7 66.5-.6 2.5-.1 5.2 1.6 7.3 1.6 2.1 4.1 3.3 6.7 3.3h401.1c9.4 0 17.1-7.6 17.1-17.1V8.5c0-2.7-1.3-5.3-3.5-6.9a9.04 9.04 0 0 0-7.8-1.2h0zm-5.8 409.2H20.2c19.8-48.6 78.6-43 81.2-42.7 3.8.4 7.4-1.8 8.8-5.3 3.3-9.5 10.5-17.1 19.8-21.1 9.2-4 19.7-3.9 28.9.2 2.1.9 4.5.8 6.6-.1s3.7-2.7 4.5-4.8c12.9-35.7 45.7-60.3 83.6-62.7 24.7 14.9 46.3 18.9 64.2 12 14.1-6.1 25.2-17.7 30.5-32.1 27.8-18.2 32.1-47.5 19.3-74.5 14.2-38.9 11.3-81.9-7.8-118.6 6.8-5.6 15.2-8.7 24-8.8 3.7 0 6.9-2.4 8.1-5.8 3.3-9.2 9.4-17.2 17.5-22.6v386.9zM273.1 307.2c-4.7 0-8.5 3.8-8.5 8.5v8.5c0 4.7 3.8 8.5 8.5 8.5s8.5-3.8 8.5-8.5v-8.5c0-4.7-3.8-8.5-8.5-8.5zm-142.6 62.2L122 378c-3.2 3.3-3.2 8.7.1 12s8.6 3.3 12 .1l8.5-8.5c3.2-3.3 3.2-8.7-.1-12-3.3-3.4-8.7-3.4-12-.2zm251-93.8c-3.3-3.2-8.7-3.2-12 .1s-3.3 8.6-.1 12c9 9.1 10.1 11 14.6 11 3.5 0 6.6-2.1 7.9-5.3s.6-6.9-1.8-9.3l-8.6-8.5z"></path><path class="c6_d" d="M373.9 371.3c11.9-20.3 5.1-46.5-15.2-58.4s-46.5-5.1-58.5 15.2-5.1 46.5 15.2 58.5c16.1 9.4 35.8 7.1 49.3-4.4h0c3.6-3.1 6.7-6.7 9.2-10.9zm-5.9 2.4c.4-1.7.8-3.4.9-5.3 0-.7.1-1.3.1-2 0-3.5.9-13.3-6-23.4h0l-5.4 1.7h0l4.2-3.6h0s-5.8-7.7-8.6-8.3h0l-3.4 3.9h0l1.6-5.1h0s-4.8-4-11.2-5.5h0l-.3 5.7c-.3-.3-2.6-2.6-7.8 1.2h0l-17.3-15.6.5.9 11.4 17.3h0l-18.6 9.1s-6 4.3 2 9.7c0 0 4.6 2.3 19.7 4.3 0 0 1.7.3 3.8.1-2.2.3-4-.2-4-.2s3.7 8.3-6.6 15.6c-5.8 4.1-12 1.9-16.4-.7-9.9-12.2-11.7-29.7-3.3-44 10.9-18.7 35-25 53.7-14s25 35 14 53.7c-1 1.8-1.9 3.2-3 4.5zm-33.4-28.4l-7.1.8s-.4-2.7 2.4-3.1c.1 0 2.9-.3 4.7 2.3zm-88.2 2.2c-6-14.4-22.6-21.4-37-15.4S188 354.7 194 369.2s22.6 21.4 37.1 15.4c11.4-4.7 18.1-16.1 17.4-27.8h0c-.2-3.2-.8-6.3-2.1-9.3zm-1.1 4.1c-.7-.9-1.5-1.8-2.4-2.6-.3-.3-.7-.6-1-.9-1.8-1.4-6.7-5.8-14.8-6.2h0l-1.2 3.6h0l-.2-3.7h0s-6.4 0-7.8 1.2h0l.7 3.4h0l-2.1-2.9h0s-4 .9-7.4 3.7h0l2.9 2.5c-.2 0-2.4.4-2.5 4.6h0l-15.2 2.9.7.1 13.8.9h0s-2.7 12.8-2.6 13.5c0 0-.1 4.9 5.9 2.9 0 0 3-1.5 10.2-8.7 0 0 .9-.8 1.6-2-.7 1.3-1.7 2-1.7 2s5.9 1.4 5.6 9.7c-.2 4.7-3.8 7.2-7 8.4-10.4.4-20.4-5.7-24.6-15.9-5.5-13.3.8-28.5 14.1-34s28.5.8 34 14.1c.4 1.2.8 2.3 1 3.4zm-28.4 6.3l-2.4 4s-1.6-.9-.7-2.5c0 0 1-1.6 3.1-1.5zm114.4-109.5c11.9-20.3 5.1-46.5-15.2-58.4s-46.5-5.1-58.5 15.2c-11.9 20.3-5.1 46.5 15.2 58.5 16.1 9.4 35.8 7.1 49.3-4.4h0c3.6-3.1 6.7-6.7 9.2-10.9zm-6 2.4c.4-1.7.8-3.4.9-5.3 0-.7.1-1.3.1-2 0-3.5.9-13.3-6-23.4h0l-5.4 1.7h0l4.2-3.6h0s-5.8-7.7-8.6-8.3h0l-3.4 3.9h0l1.6-5.1h0s-4.8-4-11.2-5.5h0l-.3 5.7c-.3-.3-2.6-2.6-7.8 1.2h0l-17.3-15.6.5.9 11.4 17.3h0l-18.6 9.1s-6 4.3 2 9.7c0 0 4.6 2.3 19.7 4.3 0 0 1.7.3 3.8.1-2.2.3-4-.2-4-.2s3.7 8.3-6.6 15.6c-5.8 4.1-12 1.9-16.4-.7-9.9-12.2-11.7-29.7-3.3-44 10.9-18.7 35-25 53.7-14s25 35 14 53.7c-.9 1.8-1.9 3.2-3 4.5zM292 222.3l-7.1.8s-.4-2.7 2.4-3.1c0 .1 2.8-.2 4.7 2.3z" strokeLinejoin="round"></path></svg>
</div>
</div>
</div>
</div>
<div className="cbk cbk3">
<div className="l">
<div className="sub dg" data-r-down>ILO Platform</div>
<h2 className="h3" data-r-down>Decentralized launchpad for new projects</h2>
<div className="p">
<p data-r-down>As a token developer, our technology can serve you to launch your project. We are collaborating with an ever-increasing number of third-party providers that can review different aspects of your product.</p>
<p data-r-down>As an incubator, you can also use our technology to launch your very own incubated projects.</p>
<p data-r-down>And as an investor, feel free to browse the latest projects, read carefully the reports from external providers, and most importantly never forget your own due diligence prior to any form of participation. We highly recommend reading fully our T&Cs.</p>
</div>
</div>
<div class="r">
<div class="cba c3" style={{opacity: "1", transform: "translate(0px, 0px)"}}>
<div class="c3_a"><div></div></div>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 200.4 443.4" style={{left: "12.96%", top: "8.16px"}} xmlSpace="preserve">
<path d="M100.2,10.4c-1.6,0-3,0.6-4.1,1.8c-0.9,0.9-21.4,23.1-37.8,57.5c-13.2,27.5-19.8,54.7-19.8,80.9 c0,5.9,0.3,11.8,0.8,17.8c-20.6,5.3-28.5,18.1-31.6,28.2c-7,23.2,5.6,54.5,21.3,70.2c1.6,1.6,4,2.1,6.1,1.2 c0.7-0.3,1.3-0.7,1.8-1.2c1-1,1.6-2.4,1.6-4c0-15.9,10.3-25.3,14-28h2.8c3.8,9.2,8,17.9,12.7,25.8c1.7,2.9,4.3,5.1,7.4,6.4 c-2.1,5.6-3.2,11.8-3.2,18.3c0,20.4,22.8,47.4,23.8,48.5c1.1,1.2,2.6,2,4.3,2c1.5,0,2.9-0.6,4-1.6c0.1-0.1,0.2-0.2,0.3-0.3 c1-1.1,23.8-28.1,23.8-48.5c0-6.4-1.1-12.7-3.2-18.3c3.2-1.4,5.8-3.7,7.4-6.4c4.7-7.9,8.9-16.6,12.7-25.8h2.8 c3.6,2.8,14,12.1,13.9,28c0,2.3,1.4,4.3,3.5,5.2c2.1,0.9,4.5,0.4,6.1-1.2c15.7-15.7,28.3-47,21.3-70.2c-3-10.1-11-22.8-31.6-28.2 c0.5-6,0.8-11.9,0.8-17.8c0-26.2-6.7-53.4-19.8-80.9c-16.4-34.3-36.9-56.5-37.8-57.5C103.3,11,101.8,10.4,100.2,10.4z  M29.3,249.3c-9.5-14.4-15.4-34.6-10.9-49.5c3-10,10.4-16.7,22.1-20.1c2,14.9,5.5,29.6,10.5,43.8c-0.1,0-1.7-0.2-3.3,0.9 C47,224.8,34.3,233,29.3,249.3z M117,285.2c0,10.9-9.9,26.6-16.8,35.8c-6.9-9.3-16.8-24.9-16.8-35.8c0-6.1,1.2-12,3.5-16.8h26.7 C115.8,273.2,117,279,117,285.2z M122.8,254.8c-0.9,1.4-2.6,2.3-4.6,2.3c-10.3,0-14.3,0-15.5,0c-2.3,0-8,0-20.5,0 c-2,0-3.7-0.9-4.6-2.3c-3.7-6.2-7.1-13-10.2-20.1H133C129.9,241.8,126.5,248.6,122.8,254.8z M182,199.8 c4.5,14.9-1.4,35.1-10.9,49.5c-3.4-11-11.6-20.9-18.5-25c-1.6-1-3.1-0.8-3.2-0.8c5-14.3,8.5-28.9,10.5-43.8 C171.6,183.1,179,189.8,182,199.8z M150.7,150.6c0,7.1-0.4,14.4-1.2,21.7c-1.9,17.4-5.9,34.6-12,51.2l-74.6,0 c-6.1-16.6-10.1-33.8-12-51.2c-0.8-7.3-1.2-14.6-1.2-21.7c0-23.5,5.8-48,17.2-72.9l66.4,0C144.9,102.6,150.7,127.1,150.7,150.6z M127.9,66.5H72.5c10.4-19.8,21.8-34.7,27.7-41.9C106.1,31.8,117.5,46.7,127.9,66.5z"></path>
<line class="c3_b1" x1="34" y1="280.5" x2="34" y2="371.3"></line>
<line class="c3_b1" x1="166.5" y1="280.5" x2="166.5" y2="371.3"></line>
<line class="c3_b2" x1="67.1" y1="321" x2="67.1" y2="406"></line>
<line class="c3_b2" x1="133.3" y1="321" x2="133.3" y2="406"></line>
<line class="c3_b1" x1="100.2" y1="347.8" x2="100.2" y2="433.5"></line>
<path d="M136.5,136.7c0-20-16.3-36.3-36.2-36.3c-20,0-36.3,16.3-36.3,36.3S80.2,173,100.2,173 c15.8,0,29.3-10.2,34.2-24.4l0,0c0,0,0,0,0,0C135.7,144.9,136.5,140.9,136.5,136.7z M133.2,141.1c-0.4-1.4-0.9-2.9-1.6-4.2 c-0.3-0.5-0.5-1-0.8-1.5c-1.5-2.6-5.1-10.1-14.4-14.5l0,0l-3.2,3.6l0,0l1.5-4.5l0,0c0,0-7.6-3.2-9.8-2.4l0,0c0,0-0.8,4.3-0.8,4.4 l0,0l-1.1-4.5l0,0c0,0-5.2-0.9-10.6,0.8l0,0l2.2,4.3c0,0,0,0,0,0c-0.3-0.1-3-0.7-5.2,4.3l0,0l-19.4-4l0.7,0.4l15.8,7.8l0,0 c0,0-9.5,13.8-9.7,14.7c0,0-2.5,5.7,5.6,6.3c0,0,4.3-0.3,16.3-5.3c0,0,1.4-0.5,2.9-1.5c-1.5,1.2-3,1.6-3,1.6s6.3,4.5,1.9,14.3 c-2.5,5.5-8,6.6-12.3,6.6C75.8,162.9,67,150.8,67,136.7c0-18.4,14.9-33.3,33.3-33.3s33.3,14.9,33.3,33.3 C133.5,138.2,133.4,139.6,133.2,141.1z M96.5,134.6l-4.8,3.6c0,0-1.5-1.8,0.4-3.3C92.1,134.9,94,133.5,96.5,134.6z"></path>
</svg>
</div>
</div>
</div>
<div className="cbk cbk4">
<div className="l">
<div className="sub dg" data-r-down>Farms</div>
<h2 className="h3" data-r-down>Farms as a service</h2>
<div className="p">
<p data-r-down>Stimulating liquidity and creating market depth is essential for any cryptocurrency/token.</p>
<p data-r-down>This service allows project developers to incentivize their communities by creating a farming vault meant to be rewarding the liquidity providers.</p>
<p data-r-down>Users/investors can then browse our platform and provide liquidity on the pairs/projects they may be interested about.</p>
</div>
</div>
<div className="r">
<div className="cba c4">
<div className="c4_a">
<svg className="c4_b" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75.8 75.8" fill="#040609"><g strokeMiterlimit="10"><path d="M39.7 36.3L48 .5H37.9h-.1-10.1L36 36.3m0 3.1l-8.3 35.9h10.2 0 10.2l-8.3-35.9" /><path d="M39.4 39.7L75.3 48V37.9v-.1-10.1L39.4 36m-3.1 0L.5 27.7v10.2h0v10.2l35.8-8.3" /></g><circle cx="37.9" cy="37.9" r="2.5" /></svg>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 191 200.3" fill="none" strokeMiterlimit="10"><path fill="#040609" d="M95.5 112.4S46.3 109.3.6 137.2c0 0 26.6 62.5 94.9 62.5s94.9-62.5 94.9-62.5c-45.7-27.9-94.9-24.8-94.9-24.8zm-3.7-54h8.8v11.1h-8.8z" /><path d="M77.9 112.9v-32h18.3m-18.3 0l15.9 20.3-7.9 11.1m-4.3-22.8l8.9 11.7-5.9 8.1m9.2-12.7L85.9 86m7.9 19.8l-2.6 3.5m23.4 3.7V80.9H96.2m18.4 0l-15.9 20.3 7.9 11.1m4.3-22.8l-8.9 11.7 5.9 8.1m-9.2-12.7l7.9-10.6m-7.9 19.8l2.6 3.5m31.6 6.3V61.4L99.7 40.5c-.7 1.1-2 1.9-3.4 1.9s-2.7-.8-3.4-1.9L59.6 61.4v53.9M112 193c-5.8.6-12.1-.3-16.1-7.4-7-12.5.9-19.3.9-19.3s-2-.4-4.2-1.8c2.1 1.2 4 1.7 4 1.7 16.5 5.3 22.3 5.2 22.3 5.2 10.8-1.7 6.8-9 6.8-9-.4-1-14.7-18.4-14.7-18.4h0l20.2-12.2.9-.7-25.4 7.6h0c-3.5-6.4-7-5.2-7.4-5.1 0 .1 0 0 0 0l2.4-6h0c-7.4-1.6-14.2.2-14.2.2h0l-.9 6h0c0-.1-1.6-5.7-1.6-5.7h0c-3.1-.8-12.8 4.3-12.9 4.3h0l2.6 5.7h0l-4.7-4.4h0c-12 7-15.9 17.5-17.6 21.1l-.9 2.1c-.8 2-1.3 4-1.7 5.9 0 0-2.1 11.3 2.1 20.4-28.2-16.1-40-43.7-40-43.7C52 115 95.3 117.7 95.3 117.7s43.2-2.7 83.4 21.8c.2 0-18.9 44.8-66.7 53.5" /><path d="M104.2 149.7c2.8 1.8 1 4.3 1 4.3l-6.9-4.2c3.2-1.7 5.9 0 5.9-.1z" strokeLinejoin="round" /></svg>
<div className="c4_c">
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
</div>
</div>
</div>
</div>
</div>
<div className="cbk cbk5">
<div className="l">
<div className="sub dg" data-r-down>Staking</div>
<h2 className="h3" data-r-down>Staking as a service</h2>
<div className="p">
<p data-r-down>Sustainable projects are permanently looking to reward their communities. We now offer them this possibility. This service consists in generating staking contracts that can incentivize holders/communities to enjoy the rewards made available for them by their favourite projects!</p>
</div>
</div>
<div className="r">
<div className="cba c5">
<div className="c5_a">

<div className="c5_d"><div></div></div>
<div className="c5_e"><div></div></div>
<svg className="c5_b" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100.5 98.2" fill="none"><path fill="#040609" d="M95 92H5.5c-3 0-5.4-2.4-5.4-5.4V5.5C.1 2.5 2.5.1 5.5.1H95c3 0 5.4 2.4 5.4 5.4v81.2c0 2.9-2.4 5.3-5.4 5.3z" /><path d="M32.3 92v3.8c0 1.3-1.3 2.3-2.9 2.3h-14c-1.6 0-2.9-1.1-2.9-2.3V92M88 92v3.8c0 1.3-1.3 2.3-2.9 2.3h-14c-1.6 0-2.9-1.1-2.9-2.3V92M13.3 35.7h-1.6c-.9 0-1.7-.8-1.7-1.7v-5.9c0-.9.8-1.7 1.7-1.7h1.6c.9 0 1.7.8 1.7 1.7V34c.1 1-.7 1.7-1.7 1.7zm0 15.1h-1.6c-.9 0-1.7-.8-1.7-1.7v-5.9c0-.9.8-1.7 1.7-1.7h1.6c.9 0 1.7.8 1.7 1.7V49c.1 1-.7 1.8-1.7 1.8z" /><path d="M13.3 65.8h-1.6c-.9 0-1.7-.8-1.7-1.7v-5.9c0-.9.8-1.7 1.7-1.7h1.6c.9 0 1.7.8 1.7 1.7V64c.1 1-.7 1.8-1.7 1.8z" /><path d="M12.6 65.8v9.3c0 2.4 2 4.3 4.3 4.3h66.7c2.4 0 4.3-2 4.3-4.3v-58c0-2.4-2-4.3-4.3-4.3H16.9c-2.4 0-4.3 2-4.3 4.3v9.3" /><path d="M12.6 50.8v5.6m0-20.7v5.7" /></svg>
<small>Reward</small>
</div>
</div>
</div>
</div>
</div>
</div>
<div id="d">
<div className="ct">
<div className="btop">
<div className="sub" data-r-down><span className="dg">Started in June</span> <strong>2020</strong></div>
</div>
<div className="dl">
<div>
<div className="sub"><span className="dg dg1">Trusted by</span></div>
<strong className="dg dg1">14,000+</strong>
<small>Projects</small>
</div>
<div>
<div className="sub"><span className="dg dg2">Locked</span></div>
<strong className="dg dg2">$500M+</strong>
<small>Total value locked</small>
</div>
<div>
<div className="sub"><span className="dg dg3">Services</span></div>
<strong className="dg dg3">6</strong>
<small>Unique services</small>
</div>
<div>
<div className="sub"><span className="dg dg4">Users</span></div>
<strong className="dg dg4">1.2M</strong>
<small>Monthly users</small>
</div>
</div>
<div className="bg"></div>
</div>
</div>
<div id="e">
<div className="ct">
<div className="eb">
<div className="e1">
<div className="ebs ebs1">
<div>
<strong>UNCX</strong>
<img class="tok" src="https://unicrypt.network/template/img/uncx.png" alt="" style={{opacity: "1", right: "0px"}}></img>
<img class="so" src="https://unicrypt.network/template/img/s-g.png" alt="" style={{opacity: "1"}}></img>
<div className="ebc">
<span></span>
<span></span>
<span></span>
</div>
</div>
</div>
<h2><span className="dg">UNCX</span></h2>
<ul>
<li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.3 13.1"><path d="M16.7.1l.4.4c.2.2.2.5 0 .7L5.4 13c-.2.2-.5.2-.7 0L.1 8.3c-.1-.2-.1-.5 0-.6l.4-.4c.3-.3.6-.3.7-.1l3.9 3.9L16 .1c.2-.1.5-.1.7 0z" /></svg> Launchpads allocation</li>
<li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.3 13.1"><path d="M16.7.1l.4.4c.2.2.2.5 0 .7L5.4 13c-.2.2-.5.2-.7 0L.1 8.3c-.1-.2-.1-.5 0-.6l.4-.4c.3-.3.6-.3.7-.1l3.9 3.9L16 .1c.2-.1.5-.1.7 0z" /></svg> Staking, profit-sharing ($USDC) & UNCL emission</li>
<li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.3 13.1"><path d="M16.7.1l.4.4c.2.2.2.5 0 .7L5.4 13c-.2.2-.5.2-.7 0L.1 8.3c-.1-.2-.1-.5 0-.6l.4-.4c.3-.3.6-.3.7-.1l3.9 3.9L16 .1c.2-.1.5-.1.7 0z" /></svg> Account management</li>
<li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.3 13.1"><path d="M16.7.1l.4.4c.2.2.2.5 0 .7L5.4 13c-.2.2-.5.2-.7 0L.1 8.3c-.1-.2-.1-.5 0-.6l.4-.4c.3-.3.6-.3.7-.1l3.9 3.9L16 .1c.2-.1.5-.1.7 0z" /></svg> Governance</li>
</ul>
<a href="https://docs.unicrypt.network/tokens/uncx-token" target="_blank" className="bt btg" title=""><span>UNCX Infos</span></a>
 </div>
<div className="e2">
<div className="ebs ebs2">
<div>
<strong>UNCL</strong>
<img class="tok" src="https://unicrypt.network/template/img/uncl.png" alt="" style={{opacity: "1", right: "0px"}}></img>
<img class="so" src="https://unicrypt.network/template/img/s-b.png" alt="" style={{opacity: "1"}}></img>

<div className="ebc">
<span></span>
<span></span>
<span></span>
</div>
</div>
</div>
<h2><span className="dg dg4">UNCL</span></h2>
<ul>
<li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.3 13.1"><path d="M16.7.1l.4.4c.2.2.2.5 0 .7L5.4 13c-.2.2-.5.2-.7 0L.1 8.3c-.1-.2-.1-.5 0-.6l.4-.4c.3-.3.6-.3.7-.1l3.9 3.9L16 .1c.2-.1.5-.1.7 0z" /></svg> Launchpads tickets reservation</li>
<li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.3 13.1"><path d="M16.7.1l.4.4c.2.2.2.5 0 .7L5.4 13c-.2.2-.5.2-.7 0L.1 8.3c-.1-.2-.1-.5 0-.6l.4-.4c.3-.3.6-.3.7-.1l3.9 3.9L16 .1c.2-.1.5-.1.7 0z" /></svg> Booster on farming/staking APYs</li>
<li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.3 13.1"><path d="M16.7.1l.4.4c.2.2.2.5 0 .7L5.4 13c-.2.2-.5.2-.7 0L.1 8.3c-.1-.2-.1-.5 0-.6l.4-.4c.3-.3.6-.3.7-.1l3.9 3.9L16 .1c.2-.1.5-.1.7 0z" /></svg> Account management</li>
<li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.3 13.1"><path d="M16.7.1l.4.4c.2.2.2.5 0 .7L5.4 13c-.2.2-.5.2-.7 0L.1 8.3c-.1-.2-.1-.5 0-.6l.4-.4c.3-.3.6-.3.7-.1l3.9 3.9L16 .1c.2-.1.5-.1.7 0z" /></svg> Reward token for UNCX stakers</li>
<li className="ei"><strong>Upcoming :</strong> StreAMM discounted trading</li>
</ul>
<a href="https://docs.unicrypt.network/tokens/uncl-token" target="_blank" className="bt btg btg2" title=""><span>UNCL Infos</span></a>
</div>
</div>
</div>
</div>
<div id="g">
<div className="ct">
<div class="il" style={{opacity: "1" ,transform: "translate(0px, 0px)"}}>
<img src="https://unicrypt.network/template/img/logo-about.svg" alt=""/>
</div>
<div className="p">
<p className="intro" data-r-down>Thank you for taking the time to read these thoughts from the Unicrypt team. We sincerely hope that whoever you are and/or represent, that you will enjoy the <strong>services</strong> and <strong>utilities</strong> provided by the Unicrypt ecosystem.</p>
<p data-r-down>Unicrypt is driven by <strong>passion</strong>. The very same passion which animates its core members and community. Built from the ground up in June 2020 (no fundraising, ICOs, etc. Genesis here!), the green Unicorn found its inspiration from the geniuses that invented the <strong>Uniswap</strong> protocol - if you ever read this Hayden, you guys are the best.</p>
<p data-r-down>It's worth mentioning that our <strong>community</strong> permanently tries to be <strong>constructive</strong>, and that definitely makes us different. Our community continues to lay the foundations on which the ethos, and the utility, of Unicrypt is built.</p>
<p data-r-down>Criticism is necessary, no matter if it's good or bad, so long as we can learn something from the hundreds of conversations we handle on a daily basis. That being said, focusing on our communities allows the green unicorn (us!) to position itself as a <strong>reference</strong> from a <strong>product-market</strong> fit standpoint.</p>
<p data-r-down>Our roadmap is simple: <strong>Automated, Decentralized, Scalable multi-chain</strong> technology.</p>
<p data-r-down>Everyone is welcome.</p>
<p data-r-down>Together, we are stronger.</p>
<p data-r-down>Keep it up, Unicrypt family!</p>
<p data-r-down><strong className="dg">Unicrypt Team</strong></p>
</div>
</div>
</div>
</main>
<footer id="f">
<div className="ct">
<div className="ft">
<div className="f1" data-link>
<div>
<a href="https://twitter.com/UNCX_token" target="_blank" title="" className="il"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 85 85"><path d="M26.521 75.642c31.8 0 49.2-26.3 49.2-49.2v-2.2c3.4-2.4 6.3-5.5 8.6-8.9-3.1 1.4-6.4 2.3-9.9 2.7 3.6-2.1 6.3-5.5 7.6-9.6-3.3 2-7 3.4-11 4.2-3.2-3.4-7.6-5.5-12.6-5.5a17.31 17.31 0 0 0-17.3 17.3c0 1.4.2 2.7.4 3.9-14.4-.7-27.1-7.6-35.6-18.1-1.5 2.6-2.3 5.5-2.3 8.7 0 6 3.1 11.3 7.7 14.4a17.2 17.2 0 0 1-7.8-2.2v.2c0 8.4 6 15.4 13.9 16.9a17.59 17.59 0 0 1-4.6.6c-1.1 0-2.2-.1-3.2-.3 2.2 6.9 8.6 11.9 16.1 12-5.9 4.6-13.4 7.4-21.5 7.4-1.4 0-2.8-.1-4.1-.2 7.5 5.1 16.6 7.9 26.4 7.9" fill="#0cf" /></svg></a>
<p>Find the latest news and announcements from our main Unicrypt Team account.</p>
</div>
</div>
<div className="f2" data-link>
<div>
<a href="https://t.me/uncx_token" target="_blank" title="" className="il"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 85 85" fill="#008aff"><path d="M42.5 85C19.1 85 0 65.9 0 42.5S19.1 0 42.5 0 85 19.1 85 42.5 65.9 85 42.5 85zm0-79.9C21.9 5.1 5.1 21.9 5.1 42.5s16.8 37.4 37.4 37.4 37.4-16.8 37.4-37.4S63.2 5.1 42.5 5.1zM17.4 44.5c4.7-2.6 9.9-4.7 14.8-6.9l25.3-10.2c1.7-.6 4.6-1.1 4.9 1.4-.2 3.5-.8 6.9-1.3 10.4-1.1 7.6-2.5 15.1-3.8 22.7-.4 2.5-3.6 3.8-5.6 2.2l-14.5-9.9c-1.6-1.6-.1-3.9 1.3-5 4-3.9 8.2-7.3 12-11.4 1-2.5-2-.4-3 .2-5.4 3.7-10.8 7.7-16.5 11-2.9 1.6-6.4.2-9.3-.7-2.7-1.1-6.6-2.2-4.3-3.8h0z" /></svg></a>
<p>Actively engage and participate with the community in our different channels.</p>
</div>
</div>
<div className="f3" data-link>
<div>
<a href="https://docs.unicrypt.network/" target="_blank" title="" className="il il2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 164.7 118.7"><path d="M149.4 48.8c-4.2 0-7.9 1.7-10.7 4.4-1.4 1.1-2.6 2.6-3.2 4.6-.9 1.9-1.4 4.1-1.4 6.4a13.86 13.86 0 0 0 .9 5v.6L86.6 95.2c-2.7-4.3-7.5-7.2-13-7.2-6.1 0-11.4 3.6-13.9 8.8L18.5 75.1S8.3 69.4 8.3 59s6.4-10.5 6.4-10.5l53.4 27.7s3.3 2.5 8.2-.2c5.9-3.3 79.8-41.5 79.8-41.5s4.7-3.8-3.5-7.5L97.4 1s-4.3-2.3-8.9 0L8.1 41.4S-1 46.9.1 59.3 7 78.8 13.8 82.4L58.1 105s.1.3.3.7c1.1 7.4 7.5 13 15.2 13 8.4 0 15.2-6.7 15.3-15l50.6-27.8c2.7 2.3 6.1 3.6 9.9 3.6a15.41 15.41 0 0 0 15.4-15.4c0-8.5-6.9-15.3-15.4-15.3zm-75.8 60.4a5.34 5.34 0 0 1-5.3-5.3 5.34 5.34 0 0 1 5.3-5.3 5.34 5.34 0 0 1 5.3 5.3 5.34 5.34 0 0 1-5.3 5.3zm75.8-39.7a5.34 5.34 0 0 1-5.3-5.3 5.34 5.34 0 0 1 5.3-5.3 5.34 5.34 0 0 1 5.3 5.3 5.27 5.27 0 0 1-5.3 5.3z" fill="#4b81f4" /></svg></a>
<p>Read our documentation and learn how to use our services.</p>
</div>
</div>
<div className="f4" data-link>
<div>
<a href="https://unicrypt.medium.com/" target="_blank" title="" className="il il2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 85 85" fill="#18fc3d"><path d="M47.9 42.5C47.4 74.2.5 74.2 0 42.5c.5-31.7 47.4-31.7 47.9 0m26.3 0c-.3 29.9-23.7 29.9-24 0 .4-29.9 23.7-29.9 24 0m10.8 0c0 26.7-8.4 26.6-8.4 0s8.4-26.7 8.4 0" /></svg></a>
<p>Dedicated articles related to our in-house technology.</p>
</div>
</div>
</div>
<div className="fb">
<div class="l">
<img src="https://unicrypt.network/template/img/logo.svg?v=1" alt=""/>
</div>
<div className="r">
<ul>
<li><a href="/terms" title="">Terms and conditions</a></li>
<li><a href="/privacy-policy" title="">Privacy Policy</a></li>
<li><a href="https://docs.unicrypt.network/" title="">Documentation</a></li>
<li><a href="https://github.com/chainsulting/Smart-Contract-Security-Audits/tree/master/Unicrypt" title="">Audits</a></li>
</ul>
<p>Unicrypt Network © 2021 • <a href="/cdn-cgi/l/email-protection#6c1f191c1c031e182c1902050f1e151c18420209181b031e07"><span className="__cf_email__" data-cfemail="1e6d6b6e6e716c6a5e6b70777d6c676e6a30707b6a69716c75">[email&#160;protected]</span></a> • All rights reserved. Designed by nuixw</p>
</div>
</div>
</div>
</footer>
<div id="x"></div>
<script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script>

</div>
</body>
        </div>);
}

 
export default UniNav;